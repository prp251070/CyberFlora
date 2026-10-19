import * as THREE from 'three';
import GrassMaterial from './GrassMaterial.js';

/**
 * Bruno Simon Infinite-World Grass System
 * Generates an infinite field of dynamic, GPU-swayed, billboarding grass blades
 * featuring tip wind displacement, terrain altitude tracking, slope attenuation,
 * sun lighting, and audio-reactive surges.
 */
export default class Grass
{
    constructor(scene, options = {})
    {
        this.scene = scene;

        this.details = options.details || 190; // 190x190 = 36,100 grass blades
        this.size = options.size || 320;       // 320m field around player
        this.count = this.details * this.details;
        this.fragmentSize = this.size / this.details;
        this.bladeWidthRatio = 1.45;
        this.bladeHeightRatio = 4.0;
        this.bladeHeightRandomness = 0.55;
        this.positionRandomness = 0.75;

        this.noiseTexture = this.createNoiseTexture(128, 128);

        this.setGeometry();
        this.setMaterial();
        this.setMesh();
    }

    createNoiseTexture(width = 128, height = 128)
    {
        const size = width * height;
        const data = new Uint8Array(4 * size);
        for (let y = 0; y < height; y++)
        {
            for (let x = 0; x < width; x++)
            {
                const idx = (y * width + x) * 4;
                const nx = (x / width) * Math.PI * 2;
                const ny = (y / height) * Math.PI * 2;
                // Periodic continuous noise projection for seamless UV wrap
                const v1 = Math.sin(nx) * Math.cos(ny) + Math.sin(nx * 2 + ny * 2) * 0.45;
                const v2 = Math.cos(nx) * Math.sin(ny) + Math.cos(nx * 3 - ny * 2) * 0.45;
                const v3 = Math.sin(nx * 3 + 1.2) * Math.sin(ny * 3 + 0.8);

                data[idx]     = Math.floor(((v1 * 0.5 + 0.5)) * 255);
                data[idx + 1] = Math.floor(((v2 * 0.5 + 0.5)) * 255);
                data[idx + 2] = Math.floor(((v3 * 0.5 + 0.5)) * 255);
                data[idx + 3] = 255;
            }
        }
        const texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.needsUpdate = true;
        return texture;
    }

    setGeometry()
    {
        const centers = new Float32Array(this.count * 3 * 2);
        const positions = new Float32Array(this.count * 3 * 3);
        const tipness = new Float32Array(this.count * 3);

        for (let iX = 0; iX < this.details; iX++)
        {
            const fragmentX = (iX / this.details - 0.5) * this.size + this.fragmentSize * 0.5;
            
            for (let iZ = 0; iZ < this.details; iZ++)
            {
                const fragmentZ = (iZ / this.details - 0.5) * this.size + this.fragmentSize * 0.5;

                const iStride9 = (iX * this.details + iZ) * 9;
                const iStride6 = (iX * this.details + iZ) * 6;
                const iStride3 = (iX * this.details + iZ) * 3;

                // Center (root anchor for blade billboard rotation)
                const centerX = fragmentX + (Math.random() - 0.5) * this.fragmentSize * this.positionRandomness;
                const centerZ = fragmentZ + (Math.random() - 0.5) * this.fragmentSize * this.positionRandomness;

                centers[iStride6    ] = centerX;
                centers[iStride6 + 1] = centerZ;

                centers[iStride6 + 2] = centerX;
                centers[iStride6 + 3] = centerZ;

                centers[iStride6 + 4] = centerX;
                centers[iStride6 + 5] = centerZ;

                // Blade dimensions
                const bladeWidth = this.fragmentSize * this.bladeWidthRatio;
                const bladeHalfWidth = bladeWidth * 0.5;
                const bladeHeight = this.fragmentSize * this.bladeHeightRatio * (1 - this.bladeHeightRandomness + Math.random() * this.bladeHeightRandomness);

                // Vertex 0: base-left
                positions[iStride9    ] = - bladeHalfWidth;
                positions[iStride9 + 1] = 0;
                positions[iStride9 + 2] = 0;
                tipness[iStride3     ] = 0.0;

                // Vertex 1: tip
                positions[iStride9 + 3] = 0;
                positions[iStride9 + 4] = bladeHeight;
                positions[iStride9 + 5] = 0;
                tipness[iStride3 + 1 ] = 1.0;

                // Vertex 2: base-right
                positions[iStride9 + 6] = bladeHalfWidth;
                positions[iStride9 + 7] = 0;
                positions[iStride9 + 8] = 0;
                tipness[iStride3 + 2 ] = 0.0;
            }
        }
        
        this.geometry = new THREE.BufferGeometry();
        this.geometry.setAttribute('center', new THREE.Float32BufferAttribute(centers, 2));
        this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        this.geometry.setAttribute('tipness', new THREE.Float32BufferAttribute(tipness, 1));
    }

    setMaterial()
    {
        this.material = new GrassMaterial({
            distance: this.size,
            noiseTexture: this.noiseTexture
        });
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.frustumCulled = false;
        this.scene.add(this.mesh);
    }

    setVisible(visible)
    {
        if (this.mesh) {
            this.mesh.visible = visible;
        }
    }

    update(dronePos, audioLevels, delta, sunPos)
    {
        if (!this.mesh || !this.mesh.visible) return;

        // Advance simulation time
        this.material.uniforms.uTime.value += delta;

        // Reposition mesh centered around the drone
        this.mesh.position.set(dronePos.x, 0, dronePos.z);
        this.material.uniforms.uPlayerPosition.value.set(dronePos.x, dronePos.y, dronePos.z);

        // Audio reactivity
        if (audioLevels) {
            this.material.uniforms.uAudioBass.value = audioLevels.bass || 0.0;
        }

        // Sun position
        if (sunPos) {
            this.material.uniforms.uSunPosition.value.copy(sunPos).normalize();
        }
    }

    dispose()
    {
        if (this.mesh) {
            this.scene.remove(this.mesh);
            this.geometry.dispose();
            this.material.dispose();
            if (this.noiseTexture) this.noiseTexture.dispose();
        }
    }
}
