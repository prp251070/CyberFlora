import * as THREE from 'three';

import vertexShaderRaw from './shaders/grass/vertex.glsl?raw';
import fragmentShaderRaw from './shaders/grass/fragment.glsl?raw';
import getGrassAttenuation from './shaders/partials/getGrassAttenuation.glsl?raw';
import getRotatePivot2d from './shaders/partials/getRotatePivot2d.glsl?raw';
import inverseLerp from './shaders/partials/inverseLerp.glsl?raw';
import remap from './shaders/partials/remap.glsl?raw';
import getSunShade from './shaders/partials/getSunShade.glsl?raw';
import getSunShadeColor from './shaders/partials/getSunShadeColor.glsl?raw';
import getSunReflection from './shaders/partials/getSunReflection.glsl?raw';
import getSunReflectionColor from './shaders/partials/getSunReflectionColor.glsl?raw';

export default function GrassMaterial(options = {})
{
    // Resolve Bruno Simon's modular GLSL partial includes
    let vertexShader = vertexShaderRaw
        .replace(/#include\s+\.\.\/partials\/inverseLerp\.glsl;?/g, inverseLerp)
        .replace(/#include\s+\.\.\/partials\/remap\.glsl;?/g, remap)
        .replace(/#include\s+\.\.\/partials\/getSunShade\.glsl;?/g, getSunShade)
        .replace(/#include\s+\.\.\/partials\/getSunShadeColor\.glsl;?/g, getSunShadeColor)
        .replace(/#include\s+\.\.\/partials\/getSunReflection\.glsl;?/g, getSunReflection)
        .replace(/#include\s+\.\.\/partials\/getSunReflectionColor\.glsl;?/g, getSunReflectionColor)
        .replace(/#include\s+\.\.\/partials\/getGrassAttenuation\.glsl;?/g, getGrassAttenuation)
        .replace(/#include\s+\.\.\/partials\/getRotatePivot2d\.glsl;?/g, getRotatePivot2d);

    const material = new THREE.ShaderMaterial({
        uniforms:
        {
            uTime: { value: 0 },
            uGrassDistance: { value: options.distance || 320.0 },
            uPlayerPosition: { value: new THREE.Vector3() },
            uNoiseTexture: { value: options.noiseTexture || null },
            uFresnelOffset: { value: 0.0 },
            uFresnelScale: { value: 0.5 },
            uFresnelPower: { value: 2.0 },
            uSunPosition: { value: new THREE.Vector3(-0.4, -0.75, -0.5).normalize() },
            uAudioBass: { value: 0.0 }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShaderRaw,
        side: THREE.DoubleSide,
        depthWrite: true,
        depthTest: true
    });

    return material;
}