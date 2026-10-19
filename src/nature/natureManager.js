import * as THREE from 'three';
import Grass from './grass/Grass.js';

/**
 * Procedural Infinite Nature Biome: Majestic Real-World Alpine Fjord & River Canyon
 * Enhanced with 10 Signature Features:
 * 1. 🌿 Grass & Flowers: Bruno Simon GPU grass + THREE.InstancedMesh alpine wildflowers
 * 2. ❄️ Snow & Fireflies: High-altitude snow drift + glowing meadow fireflies with THREE.Points
 * 3. 🌊 Waterfall: Animated procedural flow texture cascading on cliff planes + mist rings
 * 4. ☁️ Moving Clouds: Transparent cumulus cloud planes drifting across the sky
 * 5. 💎 Glowing Crystals: Faceted quartz clusters with MeshStandardMaterial & glowing emissive
 * 6. 🏡 Cabins & Bridges: Cozy alpine log cabins with glowing windows & stone arch bridges
 * 7. 🦅 Birds: Low-poly soaring eagles dynamically following 3D canyon spline paths
 * 8. ☀️ Day/Night Cycle: Smooth celestial sun arc animating sky colors, lighting & fog
 * 9. 🏞️ Lake Reflections: Mountain lake with MeshStandardMaterial (moderate roughness 0.18)
 * 10. 🏔️ Distant Mountains: Colossal low-poly faceted peaks enclosed in atmospheric fog
 */
export class NatureManager {
  constructor(scene) {
    this.scene = scene;

    this.chunkSize = 220;
    this.gridRadius = 2; // 5x5 = 25 chunks (high fidelity, silky 60fps performance)
    this.chunkPool = new Map();
    this.natureGroup = new THREE.Group();
    this.natureGroup.visible = false;
    this.scene.add(this.natureGroup);

    this.lastCenterChunkX = null;
    this.lastCenterChunkZ = null;

    this.waterfalls = [];
    this.crystals = [];
    this.birds = [];
    this.birdPathTime = 0;

    // Time of Day State ('day' or 'night') - Manual Switching Only (No automatic cycle)
    this.timeOfDay = 'day';
    this.targetTransition = 0.0; // 0.0 = day, 1.0 = night
    this.currentTransition = 0.0;

    // Initialize procedural textures
    this.initProceduralTextures();

    // Initialize materials & core systems
    this.initMaterials();
    this.createSkyDome();
    this.createDistantMountains();
    this.createWater();
    this.createDaylightSun();
    this.createFireflies();
    this.createBirds();

    // 🌿 Bruno Simon Infinite-World Grass System (GPU-swayed billboarding blades)
    this.infiniteGrass = new Grass(this.natureGroup, {
      details: 75, // 5,625 blades (optimized for silky 60fps)
      size: 260
    });
  }

  // =========================================================================
  // 1. PROCEDURAL TEXTURES (WATERFALL FLOW, CLOUDS, FIREFLIES)
  // =========================================================================

  initProceduralTextures() {
    // A. Animated Waterfall Flow Texture
    const wCanvas = document.createElement('canvas');
    wCanvas.width = 256;
    wCanvas.height = 512;
    const wctx = wCanvas.getContext('2d');

    // Deep water cascade background
    wctx.fillStyle = '#0284c7';
    wctx.fillRect(0, 0, 256, 512);

    // Vertical foaming torrent streaks
    wctx.fillStyle = '#ffffff';
    for (let i = 0; i < 90; i++) {
      const x = Math.random() * 256;
      const y = Math.random() * 512;
      const w = 2 + Math.random() * 6;
      const h = 45 + Math.random() * 95;
      wctx.globalAlpha = 0.25 + Math.random() * 0.65;
      wctx.fillRect(x, y, w, h);
    }
    // Foaming churn bubbles
    wctx.globalAlpha = 0.55;
    for (let i = 0; i < 140; i++) {
      const bx = Math.random() * 256;
      const by = Math.random() * 512;
      const br = 1.5 + Math.random() * 3.5;
      wctx.beginPath();
      wctx.arc(bx, by, br, 0, Math.PI * 2);
      wctx.fill();
    }

    this.waterfallTexture = new THREE.CanvasTexture(wCanvas);
    this.waterfallTexture.wrapS = THREE.RepeatWrapping;
    this.waterfallTexture.wrapT = THREE.RepeatWrapping;

    // B. Animated Water Surface Ripples & Caustics Texture
    const rCanvas = document.createElement('canvas');
    rCanvas.width = 256;
    rCanvas.height = 256;
    const rctx = rCanvas.getContext('2d');
    rctx.fillStyle = '#0284c7'; // Rich aquatic azure base
    rctx.fillRect(0, 0, 256, 256);

    // Glowing caustic ripples & highlights
    rctx.fillStyle = '#38bdf8';
    for (let i = 0; i < 70; i++) {
      const rx = Math.random() * 256;
      const ry = Math.random() * 256;
      const rw = 14 + Math.random() * 28;
      const rh = 4 + Math.random() * 8;
      rctx.globalAlpha = 0.35 + Math.random() * 0.45;
      rctx.beginPath();
      rctx.ellipse(rx, ry, rw, rh, Math.random() * Math.PI, 0, Math.PI * 2);
      rctx.fill();
    }
    // Sparkling sunlit water flecks
    rctx.fillStyle = '#ffffff';
    rctx.globalAlpha = 0.65;
    for (let i = 0; i < 45; i++) {
      const sx = Math.random() * 256;
      const sy = Math.random() * 256;
      rctx.fillRect(sx, sy, 2.5, 2.5);
    }
    this.waterTexture = new THREE.CanvasTexture(rCanvas);
    this.waterTexture.wrapS = THREE.RepeatWrapping;
    this.waterTexture.wrapT = THREE.RepeatWrapping;
    this.waterTexture.repeat.set(48, 48);

    // (Clouds removed as per user request)

    // C. Glowing Firefly / Starlight Particle Texture
    const fCanvas = document.createElement('canvas');
    fCanvas.width = 64;
    fCanvas.height = 64;
    const fctx = fCanvas.getContext('2d');
    const fc = 32;

    const fGrad = fctx.createRadialGradient(fc, fc, 0, fc, fc, fc);
    fGrad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    fGrad.addColorStop(0.25, 'rgba(187, 247, 208, 0.85)');
    fGrad.addColorStop(0.60, 'rgba(250, 204, 21, 0.35)');
    fGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    fctx.fillStyle = fGrad;
    fctx.fillRect(0, 0, 64, 64);

    this.fireflyTexture = new THREE.CanvasTexture(fCanvas);
  }

  // Smooth continuous procedural height function with deep carved river channel & majestic alpine ridges
  getTerrainHeight(x, z) {
    const riverCurve = Math.sin(z * 0.0028) * 110 + Math.cos(z * 0.0014) * 55 + Math.sin(z * 0.006) * 18;
    const distToRiver = Math.abs(x - riverCurve);

    // Channel geometry: river channel width ~38m, canyon valley width ~85m
    const channelWidth = 36 + Math.sin(z * 0.003) * 8;
    const valleyWidth = 85 + Math.sin(z * 0.002) * 20;

    const macro = Math.sin(x * 0.004 + 0.5) * 65 + Math.cos(z * 0.0035 - 0.3) * 75;
    const ridges = Math.abs(Math.sin(x * 0.0085 + z * 0.0065)) * 48;
    const hills = Math.cos(x * 0.016 - z * 0.012) * 22 + Math.sin(x * 0.025 + z * 0.02) * 10;
    const mountainH = Math.max(0, macro + ridges + hills);

    let height;
    if (distToRiver < channelWidth) {
      // Inside river channel: bed depth down to y = 1.5m (water surface is safely at y = 12.0m)
      const u = distToRiver / channelWidth;
      const bedDepth = Math.cos(u * Math.PI * 0.5); // 1.0 at center, 0.0 at channel edges
      height = 9.5 - bedDepth * 8.0; // y = 1.5 at center, rises to 9.5 at channel edges
    } else {
      // Banks, meadows, and mountain slopes rising up from water
      const t = Math.min(1.0, (distToRiver - channelWidth) / (valleyWidth - channelWidth));
      const valleyBank = 9.5 + Math.pow(t, 1.5) * 35.0; // smoothly rises from 9.5 to 44.5
      const mountainBlend = Math.pow(t, 2.2);
      height = valleyBank + mountainH * mountainBlend * 1.35;
    }

    return height;
  }

  initMaterials() {
    // 1. Terrain Material
    this.terrainMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.88,
      metalness: 0.04,
      flatShading: false
    });

    // 2. Conifer Pine Materials
    this.pineFoliageMat = new THREE.MeshStandardMaterial({
      color: 0x1b432a,
      roughness: 0.8,
      metalness: 0.02
    });
    this.pineBarkMat = new THREE.MeshStandardMaterial({
      color: 0x3d271d,
      roughness: 0.9,
      metalness: 0.0
    });

    // 3. Deciduous & Seasonal Foliage
    this.birchBarkMat = new THREE.MeshStandardMaterial({
      color: 0xd8dde3,
      roughness: 0.85,
      metalness: 0.05
    });
    this.birchFoliageMat = new THREE.MeshStandardMaterial({
      color: 0x48bb78,
      roughness: 0.72,
      metalness: 0.02
    });
    this.autumnGoldMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.68,
      metalness: 0.02
    });
    this.autumnAmberMat = new THREE.MeshStandardMaterial({
      color: 0xea580c,
      roughness: 0.7,
      metalness: 0.02
    });
    this.sakuraPinkMat = new THREE.MeshStandardMaterial({
      color: 0xf472b6,
      roughness: 0.75,
      metalness: 0.02
    });

    // 4. Shrubs & Flora
    this.shrubMat = new THREE.MeshStandardMaterial({
      color: 0x276749,
      roughness: 0.85,
      metalness: 0.0
    });

    // 5. Instanced Wildflower Material & Geometry (Feature 1)
    this.flowerGeo = this.createFlowerGeometry();
    this.flowerMat = new THREE.MeshStandardMaterial({
      roughness: 0.65,
      metalness: 0.04
    });

    // 6. Granite Boulders
    this.boulderMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      roughness: 0.92,
      metalness: 0.08,
      flatShading: true
    });
    this.wetRockMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.35,
      metalness: 0.2,
      flatShading: true
    });

    // 7. Stone & Timber Bridges (Feature 6)
    this.bridgeStoneMat = new THREE.MeshStandardMaterial({
      color: 0x5a6572,
      roughness: 0.9,
      metalness: 0.08,
      flatShading: true
    });
    this.bridgeMossMat = new THREE.MeshStandardMaterial({
      color: 0x2d4a36,
      roughness: 0.95,
      metalness: 0.02
    });
    this.woodTimberMat = new THREE.MeshStandardMaterial({
      color: 0x422006,
      roughness: 0.82,
      metalness: 0.05
    });
    this.cabinRoofMat = new THREE.MeshStandardMaterial({
      color: 0x262626,
      roughness: 0.88,
      metalness: 0.08
    });
    this.cabinWindowGlowMat = new THREE.MeshStandardMaterial({
      color: 0xffedd5,
      emissive: new THREE.Color(0xffaa00),
      emissiveIntensity: 1.6,
      roughness: 0.25,
      metalness: 0.5
    });

    // 8. Animated Waterfall Material (Feature 3) - Rich Vibrant Blue Water
    this.waterfallMat = new THREE.MeshStandardMaterial({
      map: this.waterfallTexture,
      color: 0x38bdf8,
      emissive: new THREE.Color(0x0284c7),
      emissiveIntensity: 0.35,
      roughness: 0.12,
      metalness: 0.45,
      transparent: true,
      opacity: 0.90,
      side: THREE.DoubleSide
    });

    this.mistSplashMat = new THREE.MeshBasicMaterial({
      color: 0x7dd3fc,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
      depthWrite: false
    });

    this.rapidFoamMat = new THREE.MeshBasicMaterial({
      color: 0xe0f2fe,
      transparent: true,
      opacity: 0.75,
      side: THREE.DoubleSide
    });

    // 9. Glowing Crystals Materials (Feature 5)
    this.crystalCyanMat = new THREE.MeshStandardMaterial({
      color: 0x0891b2,
      emissive: new THREE.Color(0x00f3ff),
      emissiveIntensity: 1.6,
      roughness: 0.12,
      metalness: 0.88
    });
    this.crystalAmethystMat = new THREE.MeshStandardMaterial({
      color: 0x6b21a8,
      emissive: new THREE.Color(0xa855f7),
      emissiveIntensity: 1.6,
      roughness: 0.12,
      metalness: 0.88
    });
    this.crystalEmeraldMat = new THREE.MeshStandardMaterial({
      color: 0x047857,
      emissive: new THREE.Color(0x00ffaa),
      emissiveIntensity: 1.6,
      roughness: 0.12,
      metalness: 0.88
    });

    // 10. Low-Poly Distant Mountains Material (Feature 10)
    this.distantMountainMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.95,
      metalness: 0.05,
      flatShading: true
    });

    // Initialize Shared High-Performance Geometries for Instanced Rendering (Zero GC stutter!)
    this.initSharedGeometries();
  }

  // Merge multiple geometries into one single BufferGeometry with vertex colors
  mergeGeometriesWithColors(items) {
    let totalPositions = 0;
    let totalIndices = 0;

    items.forEach(({ geo }) => {
      totalPositions += geo.attributes.position.count;
      if (geo.index) {
        totalIndices += geo.index.count;
      } else {
        totalIndices += geo.attributes.position.count;
      }
    });

    const posArray = new Float32Array(totalPositions * 3);
    const normArray = new Float32Array(totalPositions * 3);
    const colArray = new Float32Array(totalPositions * 3);
    const indices = [];

    let vertexOffset = 0;
    let posWrite = 0;
    let normWrite = 0;
    let colWrite = 0;

    items.forEach(({ geo, color }) => {
      const pos = geo.attributes.position;
      const norm = geo.attributes.normal;
      const count = pos.count;

      for (let i = 0; i < count; i++) {
        posArray[posWrite++] = pos.getX(i);
        posArray[posWrite++] = pos.getY(i);
        posArray[posWrite++] = pos.getZ(i);

        if (norm) {
          normArray[normWrite++] = norm.getX(i);
          normArray[normWrite++] = norm.getY(i);
          normArray[normWrite++] = norm.getZ(i);
        } else {
          normArray[normWrite++] = 0;
          normArray[normWrite++] = 1;
          normArray[normWrite++] = 0;
        }

        colArray[colWrite++] = color.r;
        colArray[colWrite++] = color.g;
        colArray[colWrite++] = color.b;
      }

      if (geo.index) {
        const idx = geo.index;
        for (let j = 0; j < idx.count; j++) {
          indices.push(idx.getX(j) + vertexOffset);
        }
      } else {
        for (let j = 0; j < count; j++) {
          indices.push(j + vertexOffset);
        }
      }

      vertexOffset += count;
      geo.dispose();
    });

    const mergedGeo = new THREE.BufferGeometry();
    mergedGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    mergedGeo.setAttribute('normal', new THREE.BufferAttribute(normArray, 3));
    mergedGeo.setAttribute('color', new THREE.BufferAttribute(colArray, 3));
    mergedGeo.setIndex(indices);
    return mergedGeo;
  }

  // Pre-bake compound pine tree geometry: 1 trunk + 4 foliage cones merged into 1 geometry
  createCompoundPineGeometry() {
    const trunkGeo = new THREE.CylinderGeometry(0.35, 0.65, 8, 5);
    trunkGeo.translate(0, 4, 0);

    const cone1 = new THREE.ConeGeometry(4.2, 5.5, 6);
    cone1.translate(0, 6.5, 0);

    const cone2 = new THREE.ConeGeometry(3.4, 4.8, 6);
    cone2.translate(0, 9.5, 0);

    const cone3 = new THREE.ConeGeometry(2.5, 4.0, 6);
    cone3.translate(0, 12.0, 0);

    const cone4 = new THREE.ConeGeometry(1.6, 3.2, 6);
    cone4.translate(0, 14.0, 0);

    return this.mergeGeometriesWithColors([
      { geo: trunkGeo, color: new THREE.Color(0x3a2818) },
      { geo: cone1, color: new THREE.Color(0x1b4332) },
      { geo: cone2, color: new THREE.Color(0x2d6a4f) },
      { geo: cone3, color: new THREE.Color(0x2d6a4f) },
      { geo: cone4, color: new THREE.Color(0x40916c) }
    ]);
  }

  // Pre-bake compound deciduous tree geometry: 1 birch trunk + 2 foliage dodecahedrons
  createCompoundDeciduousGeometry() {
    const trunkGeo = new THREE.CylinderGeometry(0.35, 0.6, 7, 5);
    trunkGeo.translate(0, 3.5, 0);

    const crown1 = new THREE.DodecahedronGeometry(3.2, 0);
    crown1.translate(0, 8.5, 0);

    const crown2 = new THREE.DodecahedronGeometry(2.2, 0);
    crown2.translate(0.9, 10.2, -0.6);

    return this.mergeGeometriesWithColors([
      { geo: trunkGeo, color: new THREE.Color(0xd8dde3) },
      { geo: crown1, color: new THREE.Color(0x48bb78) },
      { geo: crown2, color: new THREE.Color(0x68d391) }
    ]);
  }

  initSharedGeometries() {
    // 1. Instanced Tree Geometries & Materials
    this.sharedPineTreeGeo = this.createCompoundPineGeometry();
    this.pineTreeMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.85,
      metalness: 0.05
    });

    this.sharedDeciduousTreeGeo = this.createCompoundDeciduousGeometry();
    this.deciduousTreeMat = new THREE.MeshStandardMaterial({
      roughness: 0.72,
      metalness: 0.02
    });

    // 2. Shared Boulder Geometry
    this.sharedBoulderGeo = new THREE.DodecahedronGeometry(1.0, 1);

    // 3. Shared Crystal Spire Geometry
    this.sharedCrystalGeo = new THREE.CylinderGeometry(0.1, 0.4, 3.2, 5);
    this.sharedCrystalGeo.translate(0, 1.6, 0);

    // 4. Shared Cabin Geometries
    this.sharedCabinBodyGeo = new THREE.BoxGeometry(14, 6.5, 10);
    this.sharedCabinRoofGeo = new THREE.ConeGeometry(8.5, 4.5, 4);
    this.sharedCabinRoofGeo.rotateY(Math.PI / 4);
    this.sharedCabinRoofGeo.scale(1.2, 1.0, 1.35);
    this.sharedCabinChimneyGeo = new THREE.BoxGeometry(1.8, 8.5, 1.8);
    this.sharedCabinWindowGeo = new THREE.PlaneGeometry(2.2, 2.2);
    this.sharedCabinPorchGeo = new THREE.BoxGeometry(14, 0.6, 4.0);

    // 5. Shared Stone Bridge Geometries
    this.sharedBridgeDeckGeo = new THREE.BoxGeometry(85, 3.8, 8.5);
    this.sharedBridgeParapetGeo = new THREE.BoxGeometry(85, 1.8, 0.8);
    this.sharedBridgeArchGeo = new THREE.CylinderGeometry(26, 26, 8.5, 14, 1, true, 0, Math.PI);
    this.sharedBridgeArchGeo.rotateZ(Math.PI / 2);
    this.sharedBridgeArchGeo.rotateY(Math.PI / 2);
    this.sharedBridgePierGeo = new THREE.BoxGeometry(7, 35, 9);

    // Keep set of permanent shared geometries so chunk unloader never disposes them
    this.sharedGeometries = new Set([
      this.flowerGeo,
      this.sharedPineTreeGeo,
      this.sharedDeciduousTreeGeo,
      this.sharedBoulderGeo,
      this.sharedCrystalGeo,
      this.sharedCabinBodyGeo,
      this.sharedCabinRoofGeo,
      this.sharedCabinChimneyGeo,
      this.sharedCabinWindowGeo,
      this.sharedCabinPorchGeo,
      this.sharedBridgeDeckGeo,
      this.sharedBridgeParapetGeo,
      this.sharedBridgeArchGeo,
      this.sharedBridgePierGeo
    ]);
  }

  // Helper: Create single flower geometry for THREE.InstancedMesh
  createFlowerGeometry() {
    const flowerGroup = new THREE.Group();

    // Stem
    const stemGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.75, 4);
    stemGeo.translate(0, 0.375, 0);

    // Blossom Petal Crown
    const petalGeo = new THREE.DodecahedronGeometry(0.35, 0);
    petalGeo.translate(0, 0.75, 0);

    return petalGeo;
  }

  // =========================================================================
  // 2. SKY DOME (DAY/NIGHT CELESTIAL ATMOSPHERE - Feature 8)
  // =========================================================================

  createSkyDome() {
    const skyGeo = new THREE.SphereGeometry(4800, 32, 24);
    // Brilliant Sunlit Sky Dome (Bright Day vs Midnight Starlight)
    this.skyMat = new THREE.ShaderMaterial({
      uniforms: {
        uSunPosition: { value: new THREE.Vector3(650, 850, -800).normalize() },
        uTopColor: { value: new THREE.Color(0x0284c7) },     // Radiant deep sky blue
        uMidColor: { value: new THREE.Color(0x38bdf8) },     // Brilliant azure daylight blue
        uHorizonColor: { value: new THREE.Color(0xbae6fd) }, // Sunlit bright alpine horizon
        uSunColor: { value: new THREE.Color(0xfffae5) },     // Radiant golden sunlight
        uOpacity: { value: 1.0 }
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uSunPosition;
        uniform vec3 uTopColor;
        uniform vec3 uMidColor;
        uniform vec3 uHorizonColor;
        uniform vec3 uSunColor;
        uniform float uOpacity;
        varying vec3 vWorldPosition;

        void main() {
          vec3 dir = normalize(vWorldPosition);
          float elevation = dir.y;

          vec3 sky;
          if (elevation >= 0.0) {
            if (elevation > 0.25) {
              float t = (elevation - 0.25) / 0.75;
              sky = mix(uMidColor, uTopColor, smoothstep(0.0, 1.0, t));
            } else {
              float t = elevation / 0.25;
              sky = mix(uHorizonColor, uMidColor, smoothstep(0.0, 1.0, t));
            }
          } else {
            sky = mix(uHorizonColor, vec3(0.12, 0.35, 0.65), clamp(-elevation * 3.0, 0.0, 1.0));
          }

          // Radiant Sun Glare & Atmospheric Flare
          float sunDot = max(0.0, dot(dir, normalize(uSunPosition)));
          float sunGlare = pow(sunDot, 4.0) * 0.35 + pow(sunDot, 128.0) * 1.8;
          sky += uSunColor * sunGlare;

          gl_FragColor = vec4(sky, uOpacity);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false,
      transparent: true
    });

    this.skyDome = new THREE.Mesh(skyGeo, this.skyMat);
    this.skyDome.renderOrder = -9999;
    this.natureGroup.add(this.skyDome);
  }

  // =========================================================================
  // 3. DISTANT MOUNTAINS (LOW-POLY MESHES WITH FOG - Feature 10)
  // =========================================================================

  createDistantMountains() {
    this.distantMountainGroup = new THREE.Group();
    const count = 22;
    const baseRadius = 2600;

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const dist = baseRadius + (Math.sin(i * 19.3) * 0.5 + 0.5) * 600;
      const x = Math.cos(angle) * dist;
      const z = Math.sin(angle) * dist;

      const peakH = 850 + Math.abs(Math.sin(i * 13.7)) * 550;
      const peakW = 340 + Math.abs(Math.cos(i * 11.2)) * 220;

      // 5-sided faceted pyramid for authentic low-poly jagged alpine peak
      const mGeo = new THREE.ConeGeometry(peakW, peakH, 5);
      mGeo.translate(0, peakH / 2, 0);

      // Vertex colors: warm granite base to white-brown snow summit
      const pos = mGeo.attributes.position;
      const colors = new Float32Array(pos.count * 3);
      const whiteBrownSnow = new THREE.Color(0xe8ddcb); // Rich white-brown alpine snow
      const alpineRock = new THREE.Color(0x6e6255);    // Weathered warm rock
      const baseRock = new THREE.Color(0x3a322c);      // Deep granite base
      const tempC = new THREE.Color();

      for (let j = 0; j < pos.count; j++) {
        const y = pos.getY(j);
        const ratio = y / peakH;
        if (ratio > 0.62) {
          tempC.copy(whiteBrownSnow);
        } else if (ratio > 0.38) {
          tempC.copy(alpineRock).lerp(whiteBrownSnow, (ratio - 0.38) / 0.24);
        } else {
          tempC.copy(baseRock).lerp(alpineRock, ratio / 0.38);
        }
        colors[j * 3] = tempC.r;
        colors[j * 3 + 1] = tempC.g;
        colors[j * 3 + 2] = tempC.b;
      }
      mGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      mGeo.computeVertexNormals();

      const mountain = new THREE.Mesh(mGeo, this.distantMountainMat);
      mountain.position.set(x, -50, z);
      mountain.rotation.y = angle + Math.sin(i * 5.5);
      this.distantMountainGroup.add(mountain);
    }

    this.natureGroup.add(this.distantMountainGroup);
  }

  // =========================================================================
  // 5. LAKE & RIVER WATER (MeshStandardMaterial with vibrant blue & reflections)
  // =========================================================================

  createWater() {
    // Infinite-following sparkling water surface
    const waterGeo = new THREE.PlaneGeometry(6000, 6000, 32, 32);
    waterGeo.rotateX(-Math.PI / 2);

    this.lakeMaterial = new THREE.MeshStandardMaterial({
      map: this.waterTexture,
      color: 0x0088ff,       // Rich, vivid, crystal electric azure sapphire blue
      emissive: new THREE.Color(0x0055cc), // Radiant aquatic blue glow
      emissiveIntensity: 0.55,
      roughness: 0.16,       // Silky water surface reflections
      metalness: 0.08,       // Low metalness so the rich blue color remains 100% visible and punchy!
      transparent: true,
      opacity: 0.95,
      flatShading: false
    });

    this.waterMesh = new THREE.Mesh(waterGeo, this.lakeMaterial);
    this.waterMesh.position.y = 12.0;
    this.natureGroup.add(this.waterMesh);
  }

  createDaylightSun() {
    this.sunGroup = new THREE.Group();

    const sunGeo = new THREE.SphereGeometry(38, 16, 16);
    this.sunMeshMat = new THREE.MeshBasicMaterial({ color: 0xfffae5 });
    this.sunMesh = new THREE.Mesh(sunGeo, this.sunMeshMat);
    this.sunGroup.add(this.sunMesh);

    const coronaGeo = new THREE.SphereGeometry(105, 16, 16);
    this.coronaMat = new THREE.MeshBasicMaterial({
      color: 0xffea88,
      transparent: true,
      opacity: 0.42,
      depthWrite: false
    });
    this.coronaMesh = new THREE.Mesh(coronaGeo, this.coronaMat);
    this.sunGroup.add(this.coronaMesh);

    this.natureGroup.add(this.sunGroup);
  }

  // =========================================================================
  // 6. GLOWING FIREFLIES (THREE.Points - Snow removed as requested)
  // =========================================================================

  createFireflies() {
    // Glowing Meadow & River Glades Fireflies (THREE.Points)
    const ffCount = 450;
    const ffGeo = new THREE.BufferGeometry();
    const ffPositions = new Float32Array(ffCount * 3);
    const ffColors = new Float32Array(ffCount * 3);
    const ffPhases = new Float32Array(ffCount);

    const ffColor1 = new THREE.Color(0x38bdf8); // Azure firefly
    const ffColor2 = new THREE.Color(0xfacc15); // Golden firefly

    for (let i = 0; i < ffCount; i++) {
      ffPositions[i * 3] = (Math.random() - 0.5) * 360;
      ffPositions[i * 3 + 1] = 6 + Math.random() * 32;
      ffPositions[i * 3 + 2] = (Math.random() - 0.5) * 360;

      const c = Math.random() < 0.5 ? ffColor1 : ffColor2;
      ffColors[i * 3] = c.r;
      ffColors[i * 3 + 1] = c.g;
      ffColors[i * 3 + 2] = c.b;

      ffPhases[i] = Math.random() * Math.PI * 2;
    }

    ffGeo.setAttribute('position', new THREE.BufferAttribute(ffPositions, 3));
    ffGeo.setAttribute('color', new THREE.BufferAttribute(ffColors, 3));

    this.fireflyMat = new THREE.PointsMaterial({
      size: 5.5,
      map: this.fireflyTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.fireflies = new THREE.Points(ffGeo, this.fireflyMat);
    this.fireflyPhases = ffPhases;
    this.fireflyCount = ffCount;
    this.natureGroup.add(this.fireflies);
  }

  // =========================================================================
  // 7. BIRDS (LOW-POLY MESHES FOLLOWING PATHS - Feature 7)
  // =========================================================================

  createBirds() {
    this.birdGroup = new THREE.Group();
    this.birds = [];
    const birdCount = 9;

    const bodyGeo = new THREE.ConeGeometry(0.55, 3.0, 4);
    bodyGeo.rotateX(Math.PI / 2);

    const wingGeo = new THREE.BufferGeometry();
    const wingVertices = new Float32Array([
      0, 0, 0.7,
      -3.4, 0, -0.3,
      0, 0, -0.7
    ]);
    wingGeo.setAttribute('position', new THREE.BufferAttribute(wingVertices, 3));
    wingGeo.computeVertexNormals();

    const birdMat = new THREE.MeshStandardMaterial({
      color: 0x221c16,
      roughness: 0.8,
      metalness: 0.1,
      side: THREE.DoubleSide
    });

    for (let i = 0; i < birdCount; i++) {
      const bird = new THREE.Group();
      const body = new THREE.Mesh(bodyGeo, birdMat);
      bird.add(body);

      const leftWing = new THREE.Mesh(wingGeo, birdMat);
      bird.add(leftWing);

      const rightWing = new THREE.Mesh(wingGeo, birdMat);
      rightWing.scale.x = -1;
      bird.add(rightWing);

      bird.userData = {
        leftWing,
        rightWing,
        flapSpeed: 3.8 + Math.random() * 0.7,
        flapPhase: i * 0.65,
        pathOffsetS: i * 0.28,
        pathRadius: 45 + (i % 3) * 20
      };

      this.birdGroup.add(bird);
      this.birds.push(bird);
    }

    this.natureGroup.add(this.birdGroup);
  }

  // =========================================================================
  // 8. CHUNK GENERATION WITH CABINS, FLOWERS & CRYSTALS
  // =========================================================================

  createChunkGroup(cx, cz) {
    const chunkGroup = new THREE.Group();
    const worldX = cx * this.chunkSize;
    const worldZ = cz * this.chunkSize;
    chunkGroup.position.set(worldX, 0, worldZ);

    const segments = 24; // Optimized terrain density: 625 vertices instead of 2025 (silky 60fps)
    const terrainGeo = new THREE.PlaneGeometry(this.chunkSize, this.chunkSize, segments, segments);
    terrainGeo.rotateX(-Math.PI / 2);

    const posAttr = terrainGeo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const vx = posAttr.getX(i);
      const vz = posAttr.getZ(i);
      posAttr.setY(i, this.getTerrainHeight(worldX + vx, worldZ + vz));
    }
    terrainGeo.computeVertexNormals();
    const normalAttr = terrainGeo.attributes.normal;

    const colorRiverBed = new THREE.Color(0x0284c7); // Aquatic deep azure blue
    const colorRiverShore = new THREE.Color(0x0369a1); // Shoreline teal-blue rock
    const colorMeadowGrass = new THREE.Color(0x2d6a4f);
    const colorHighlandTurf = new THREE.Color(0x1b4332);
    const colorCliffRock = new THREE.Color(0x4a433d); // Warm alpine granite
    const colorWhiteBrownSnow = new THREE.Color(0xe8ddcb); // Rich white-brown mountain snow

    const colors = new Float32Array(posAttr.count * 3);
    const tempColor = new THREE.Color();

    for (let i = 0; i < posAttr.count; i++) {
      const gx = worldX + posAttr.getX(i);
      const gz = worldZ + posAttr.getZ(i);
      const vy = posAttr.getY(i);
      const slopeY = normalAttr.getY(i);

      if (vy < 10.5) {
        tempColor.copy(colorRiverBed); // Aquatic azure riverbed under blue water!
      } else if (vy < 13.5) {
        tempColor.copy(colorRiverShore); // Shoreline wet stone
      } else if (slopeY < 0.62) {
        tempColor.copy(colorCliffRock);
      } else if (vy < 48) {
        const t = Math.min(1.0, Math.max(0.0, (vy - 13.5) / 34.5));
        tempColor.copy(colorMeadowGrass).lerp(colorHighlandTurf, t * 0.4);
      } else if (vy < 92) {
        const t = Math.min(1.0, Math.max(0.0, (vy - 48) / 44));
        tempColor.copy(colorHighlandTurf).lerp(colorCliffRock, t);
      } else if (vy < 118) {
        const t = Math.min(1.0, Math.max(0.0, (vy - 92) / 26));
        tempColor.copy(colorCliffRock).lerp(colorWhiteBrownSnow, t * 0.7);
      } else {
        const t = Math.min(1.0, Math.max(0.0, (vy - 118) / 28));
        tempColor.copy(colorCliffRock).lerp(colorWhiteBrownSnow, 0.7 + t * 0.3);
      }

      const noise = (Math.sin(gx * 0.06) * Math.cos(gz * 0.06)) * 0.045;
      tempColor.r += noise;
      tempColor.g += noise;
      tempColor.b += noise;

      colors[i * 3] = tempColor.r;
      colors[i * 3 + 1] = tempColor.g;
      colors[i * 3 + 2] = tempColor.b;
    }

    terrainGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const terrainMesh = new THREE.Mesh(terrainGeo, this.terrainMaterial);
    chunkGroup.add(terrainMesh);

    const seed = Math.abs(Math.sin(cx * 17.43 + cz * 37.19));
    const half = this.chunkSize / 2;
    const riverCenter = Math.sin(worldZ * 0.0028) * 110 + Math.cos(worldZ * 0.0014) * 55 + Math.sin(worldZ * 0.006) * 18;

    // --- FEATURE 1: 🌸 ALPINE WILDFLOWERS (THREE.InstancedMesh - 1 draw call!) ---
    const flowerCount = 65;
    const flowerInstMesh = new THREE.InstancedMesh(this.flowerGeo, this.flowerMat, flowerCount);
    const fMatrix = new THREE.Matrix4();
    const flowerPalette = [
      new THREE.Color(0xfacc15), // Golden Buttercup
      new THREE.Color(0xef4444), // Crimson Alpine Poppy
      new THREE.Color(0x38bdf8), // Forget-me-not Blue
      new THREE.Color(0xa855f7), // Mountain Lavender
      new THREE.Color(0xf8fafc)  // White Edelweiss
    ];

    let validFlowerCount = 0;
    for (let f = 0; f < flowerCount; f++) {
      const fx = (Math.sin(seed * 33 + f * 7.1) * 0.85) * half;
      const fz = (Math.cos(seed * 44 + f * 5.3) * 0.85) * half;
      const fy = this.getTerrainHeight(worldX + fx, worldZ + fz);

      if (fy > 13.0 && fy < 48) {
        const s = 0.75 + Math.random() * 0.55;
        fMatrix.makeRotationY(Math.random() * Math.PI * 2);
        fMatrix.scale(new THREE.Vector3(s, s, s));
        fMatrix.setPosition(fx, fy, fz);
        flowerInstMesh.setMatrixAt(validFlowerCount, fMatrix);

        const chosenCol = flowerPalette[f % flowerPalette.length];
        flowerInstMesh.setColorAt(validFlowerCount, chosenCol);
        validFlowerCount++;
      }
    }
    flowerInstMesh.count = validFlowerCount;
    flowerInstMesh.instanceMatrix.needsUpdate = true;
    if (flowerInstMesh.instanceColor) flowerInstMesh.instanceColor.needsUpdate = true;
    chunkGroup.add(flowerInstMesh);

    // --- FEATURE 3: 🌊 WATERFALL WITH ANIMATED FLOW TEXTURE ---
    if (seed > 0.42) {
      const side = (cx % 2 === 0) ? -1 : 1;
      const cliffX = (riverCenter - worldX) + side * (46 + (seed * 14));
      const cliffZ = (Math.sin(seed * 27) * 0.35) * half;
      const topY = this.getTerrainHeight(worldX + cliffX, worldZ + cliffZ);

      if (topY > 28) {
        const fallHeight = topY - 12.0;
        const fallWidth = 10 + seed * 6;
        const fallGeo = new THREE.PlaneGeometry(fallWidth, fallHeight, 1, 2);
        const fall = new THREE.Mesh(fallGeo, this.waterfallMat);

        fall.position.set(cliffX, 12.0 + fallHeight / 2, cliffZ);
        fall.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
        chunkGroup.add(fall);
        this.waterfalls.push(fall);

        // Churning mist splash
        const mistGeo = new THREE.RingGeometry(1.5, fallWidth * 0.95, 8);
        mistGeo.rotateX(-Math.PI / 2);
        const mist = new THREE.Mesh(mistGeo, this.mistSplashMat);
        mist.position.set(cliffX, 12.1, cliffZ);
        chunkGroup.add(mist);
      }
    }

    // --- FEATURE 5: 💎 GLOWING CRYSTAL CLUSTERS (Reusing shared crystal spires) ---
    if (seed > 0.35) {
      const crystalGroup = new THREE.Group();
      const crX = (riverCenter - worldX) + (seed > 0.65 ? 28 : -28);
      const crZ = (seed - 0.5) * half;
      const crY = this.getTerrainHeight(worldX + crX, worldZ + crZ);

      if (crY > 13.0 && crY < 48) {
        crystalGroup.position.set(crX, crY, crZ);

        const crystalTypes = [this.crystalCyanMat, this.crystalAmethystMat, this.crystalEmeraldMat];
        const chosenMat = crystalTypes[Math.floor(seed * 10) % crystalTypes.length];

        const spireCount = 4 + Math.floor(seed * 3);
        for (let sp = 0; sp < spireCount; sp++) {
          const sH = 2.4 + Math.random() * 2.8;
          const sR = 0.35 + Math.random() * 0.45;
          const spire = new THREE.Mesh(this.sharedCrystalGeo, chosenMat);
          spire.scale.set(sR / 0.4, sH / 3.2, sR / 0.4);

          const tiltX = (Math.random() - 0.5) * 0.65;
          const tiltZ = (Math.random() - 0.5) * 0.65;
          spire.rotation.set(tiltX, Math.random() * Math.PI, tiltZ);
          spire.position.set((Math.random() - 0.5) * 2.0, 0, (Math.random() - 0.5) * 2.0);
          crystalGroup.add(spire);
        }

        chunkGroup.add(crystalGroup);
        this.crystals.push(crystalGroup);
      }
    }

    // --- FEATURE 6: 🏡 ALPINE LOG CABINS (Shared Geometries) ---
    if (seed > 0.70) {
      const cabX = (riverCenter - worldX) + (seed > 0.85 ? 65 : -65);
      const cabZ = (seed - 0.5) * half * 0.7;
      const cabY = this.getTerrainHeight(worldX + cabX, worldZ + cabZ);

      if (cabY > 15 && cabY < 45) {
        const cabinGroup = new THREE.Group();
        cabinGroup.position.set(cabX, cabY, cabZ);

        const body = new THREE.Mesh(this.sharedCabinBodyGeo, this.woodTimberMat);
        body.position.y = 3.25;
        cabinGroup.add(body);

        const roof = new THREE.Mesh(this.sharedCabinRoofGeo, this.cabinRoofMat);
        roof.position.y = 8.5;
        cabinGroup.add(roof);

        const chimney = new THREE.Mesh(this.sharedCabinChimneyGeo, this.bridgeStoneMat);
        chimney.position.set(4.8, 7.0, -2.8);
        cabinGroup.add(chimney);

        [-3.2, 3.2].forEach(wx => {
          const win = new THREE.Mesh(this.sharedCabinWindowGeo, this.cabinWindowGlowMat);
          win.position.set(wx, 3.8, 5.05);
          cabinGroup.add(win);
        });

        const porch = new THREE.Mesh(this.sharedCabinPorchGeo, this.woodTimberMat);
        porch.position.set(0, 0.3, 7.0);
        cabinGroup.add(porch);

        chunkGroup.add(cabinGroup);
      }
    }

    // --- FEATURE 6: 🌉 ANCIENT STONE ARCHES & BRIDGES (Shared Geometries) ---
    const isBridgeChunk = (Math.abs(cz) % 4 === 1) && Math.abs(worldX - riverCenter) < 130;
    if (isBridgeChunk && seed > 0.40) {
      const bridgeGroup = new THREE.Group();
      const bridgeRelX = (riverCenter - worldX);
      const span = 85;
      const archClearanceY = 35;
      bridgeGroup.position.set(bridgeRelX, archClearanceY, 0);

      const deck = new THREE.Mesh(this.sharedBridgeDeckGeo, this.bridgeStoneMat);
      bridgeGroup.add(deck);

      const leftParapet = new THREE.Mesh(this.sharedBridgeParapetGeo, this.bridgeStoneMat);
      leftParapet.position.set(0, 2.6, 3.8);
      bridgeGroup.add(leftParapet);

      const rightParapet = new THREE.Mesh(this.sharedBridgeParapetGeo, this.bridgeStoneMat);
      rightParapet.position.set(0, 2.6, -3.8);
      bridgeGroup.add(rightParapet);

      const arch = new THREE.Mesh(this.sharedBridgeArchGeo, this.bridgeStoneMat);
      arch.position.set(0, -6, 0);
      bridgeGroup.add(arch);

      const leftPier = new THREE.Mesh(this.sharedBridgePierGeo, this.bridgeMossMat);
      leftPier.position.set(-span * 0.44, -16, 0);
      bridgeGroup.add(leftPier);

      const rightPier = new THREE.Mesh(this.sharedBridgePierGeo, this.bridgeMossMat);
      rightPier.position.set(span * 0.44, -16, 0);
      bridgeGroup.add(rightPier);

      chunkGroup.add(bridgeGroup);
    }

    // --- 🪨 GRANITE BOULDERS (THREE.InstancedMesh - 1 draw call!) ---
    const boulderCount = Math.floor(5 + seed * 6);
    const boulderInstMesh = new THREE.InstancedMesh(this.sharedBoulderGeo, this.boulderMat, boulderCount);
    let validBoulders = 0;
    const bMatrix = new THREE.Matrix4();
    const bEuler = new THREE.Euler();

    for (let b = 0; b < boulderCount; b++) {
      const bx = (Math.sin(seed * 44 + b * 13) * 0.75) * half;
      const bz = (Math.cos(seed * 55 + b * 17) * 0.75) * half;
      const by = this.getTerrainHeight(worldX + bx, worldZ + bz);

      if (by < 85) {
        const bRadius = 2.0 + Math.random() * 3.5;
        bEuler.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        bMatrix.makeRotationFromEuler(bEuler);
        bMatrix.scale(new THREE.Vector3(bRadius * 1.2, bRadius * 0.65, bRadius));
        bMatrix.setPosition(bx, by + bRadius * 0.4, bz);
        boulderInstMesh.setMatrixAt(validBoulders++, bMatrix);
      }
    }
    boulderInstMesh.count = validBoulders;
    boulderInstMesh.instanceMatrix.needsUpdate = true;
    chunkGroup.add(boulderInstMesh);

    // --- 🌲 CONIFERS (THREE.InstancedMesh - 1 draw call for all pine trees!) ---
    const pineCount = Math.floor(24 + seed * 14);
    const pineInstMesh = new THREE.InstancedMesh(this.sharedPineTreeGeo, this.pineTreeMat, pineCount);
    let validPines = 0;
    const treeMatrix = new THREE.Matrix4();

    for (let t = 0; t < pineCount; t++) {
      const tx = (Math.sin(seed * 88 + t * 9.3) * 0.88) * half;
      const tz = (Math.cos(seed * 66 + t * 7.7) * 0.88) * half;
      const ty = this.getTerrainHeight(worldX + tx, worldZ + tz);

      if (ty > 13.5 && ty < 112) {
        const s = 0.8 + Math.abs(Math.sin(t * 13)) * 0.55;
        treeMatrix.makeRotationY(Math.random() * Math.PI * 2);
        treeMatrix.scale(new THREE.Vector3(s, s, s));
        treeMatrix.setPosition(tx, ty, tz);
        pineInstMesh.setMatrixAt(validPines++, treeMatrix);
      }
    }
    pineInstMesh.count = validPines;
    pineInstMesh.instanceMatrix.needsUpdate = true;
    chunkGroup.add(pineInstMesh);

    // --- 🌳 DECIDUOUS GROVES (THREE.InstancedMesh - 1 draw call for all broadleaf trees!) ---
    const decCount = Math.floor(10 + seed * 8);
    const decInstMesh = new THREE.InstancedMesh(this.sharedDeciduousTreeGeo, this.deciduousTreeMat, decCount);
    let validDec = 0;
    const decColor = new THREE.Color();
    const decPalette = [
      new THREE.Color(0x52b788), // Fresh spring birch green
      new THREE.Color(0xf59e0b), // Autumn golden orange
      new THREE.Color(0xd97706), // Warm amber rust
      new THREE.Color(0xf472b6)  // Sakura alpine pink
    ];

    for (let t = 0; t < decCount; t++) {
      const tx = (Math.cos(seed * 37 + t * 8.1) * 0.82) * half;
      const tz = (Math.sin(seed * 51 + t * 6.5) * 0.82) * half;
      const ty = this.getTerrainHeight(worldX + tx, worldZ + tz);

      if (ty > 13.5 && ty < 55) {
        const s = 0.85 + Math.abs(Math.sin(t * 11)) * 0.45;
        treeMatrix.makeRotationY(Math.random() * Math.PI * 2);
        treeMatrix.scale(new THREE.Vector3(s, s, s));
        treeMatrix.setPosition(tx, ty, tz);
        decInstMesh.setMatrixAt(validDec, treeMatrix);

        decColor.copy(decPalette[t % decPalette.length]);
        decInstMesh.setColorAt(validDec, decColor);
        validDec++;
      }
    }
    decInstMesh.count = validDec;
    decInstMesh.instanceMatrix.needsUpdate = true;
    if (decInstMesh.instanceColor) decInstMesh.instanceColor.needsUpdate = true;
    chunkGroup.add(decInstMesh);

    return chunkGroup;
  }

  // =========================================================================
  // 9. ANIMATION & SYSTEM UPDATE
  // =========================================================================

  update(dronePos, audioLevels, delta, lights = {}) {
    const centerChunkX = Math.floor(dronePos.x / this.chunkSize);
    const centerChunkZ = Math.floor(dronePos.z / this.chunkSize);

    // Infinite Grass follow player (silky 60fps GPU grass)
    if (this.infiniteGrass) {
      const sunDir = lights.cyanDirLight ? lights.cyanDirLight.position : null;
      this.infiniteGrass.update(dronePos, audioLevels, delta, sunDir);
    }

    // Chunk Streaming
    if (centerChunkX !== this.lastCenterChunkX || centerChunkZ !== this.lastCenterChunkZ) {
      this.lastCenterChunkX = centerChunkX;
      this.lastCenterChunkZ = centerChunkZ;

      const neededKeys = new Set();
      for (let dx = -this.gridRadius; dx <= this.gridRadius; dx++) {
        for (let dz = -this.gridRadius; dz <= this.gridRadius; dz++) {
          const cx = centerChunkX + dx;
          const cz = centerChunkZ + dz;
          const key = `${cx},${cz}`;
          neededKeys.add(key);

          if (!this.chunkPool.has(key)) {
            const newChunk = this.createChunkGroup(cx, cz);
            this.natureGroup.add(newChunk);
            this.chunkPool.set(key, { mesh: newChunk, cx, cz });
          }
        }
      }

      for (const [key, data] of this.chunkPool.entries()) {
        if (!neededKeys.has(key)) {
          this.natureGroup.remove(data.mesh);
          data.mesh.traverse(child => {
            // Only dispose unique per-chunk geometries (like terrain plane), NEVER shared geometries!
            if (child.isMesh && child.geometry && !this.sharedGeometries.has(child.geometry)) {
              child.geometry.dispose();
            }
          });
          this.chunkPool.delete(key);
        }
      }
    }

    const bass = audioLevels.bass || 0;
    const mid = audioLevels.mid || 0;
    const beat = audioLevels.beat || 0;

    // --- FEATURE 3: ANIMATE WATERFALL & WATER SURFACE FLOW ---
    if (this.waterfallTexture) {
      this.waterfallTexture.offset.y -= delta * 1.6;
    }
    if (this.waterTexture) {
      this.waterTexture.offset.x += delta * 0.05;
      this.waterTexture.offset.y += delta * 0.08;
    }

    // --- FEATURE 2: ANIMATE GLOWING FIREFLIES (Zero GPU buffer upload overhead!) ---
    if (this.fireflies) {
      this.fireflies.position.x = dronePos.x;
      this.fireflies.position.z = dronePos.z;
      this.fireflies.position.y = 8 + Math.sin(Date.now() * 0.0015) * 1.5;
      this.fireflies.rotation.y += delta * 0.08;
      this.fireflyMat.opacity = 0.70 + Math.sin(Date.now() * 0.0025) * 0.25;
    }

    // --- FEATURE 7: BIRDS FOLLOWING 3D FLIGHT PATHS ---
    if (this.birds) {
      this.birdPathTime += delta * 0.45;
      const s = this.birdPathTime;

      this.birds.forEach(b => {
        const u = b.userData;
        const paramS = s + u.pathOffsetS;

        // Dynamic 3D Path winding along river canyon & circling mountain crags
        const canyonAheadZ = dronePos.z - 140 + Math.sin(paramS * 1.2) * 80;
        const canyonCenter = Math.sin(canyonAheadZ * 0.0028) * 110 + Math.cos(canyonAheadZ * 0.0014) * 55;

        const pathX = canyonCenter + Math.cos(paramS * 2.2) * u.pathRadius;
        const pathY = 46 + Math.sin(paramS * 2.8) * 16;
        const pathZ = canyonAheadZ + Math.sin(paramS * 1.8) * 35;

        // Path tangent for banking
        const nextX = canyonCenter + Math.cos((paramS + 0.05) * 2.2) * u.pathRadius;
        const nextZ = canyonAheadZ + Math.sin((paramS + 0.05) * 1.8) * 35;
        const heading = Math.atan2(nextX - pathX, nextZ - pathZ);

        b.position.set(pathX, pathY, pathZ);
        b.rotation.y = heading + Math.PI;
        b.rotation.z = Math.sin(paramS * 2.2) * 0.35; // Bank into curves!

        // Wing flapping
        const flap = Math.sin(Date.now() * 0.003 * u.flapSpeed + u.flapPhase);
        u.leftWing.rotation.z = flap * 0.45;
        u.rightWing.rotation.z = -flap * 0.45;
      });
    }

    // --- MANUAL DAY / NIGHT CELESTIAL ILLUMINATION (NO AUTOMATIC ADVANCEMENT) ---
    // Smooth transition only when user clicks Day/Night button or presses 'N'
    const tSpeed = 2.8;
    if (this.currentTransition < this.targetTransition) {
      this.currentTransition = Math.min(this.targetTransition, this.currentTransition + delta * tSpeed);
    } else if (this.currentTransition > this.targetTransition) {
      this.currentTransition = Math.max(this.targetTransition, this.currentTransition - delta * tSpeed);
    }
    const tNight = this.currentTransition; // 0.0 = Day, 1.0 = Night

    // Sun / Celestial Orb Position (visible in Day, lowered below horizon in Night)
    if (this.sunGroup) {
      const sunX = dronePos.x + 400 - tNight * 200;
      const sunY = THREE.MathUtils.lerp(780, -260, tNight);
      const sunZ = dronePos.z - 750;
      this.sunGroup.position.set(sunX, sunY, sunZ);
      this.sunGroup.visible = (tNight < 0.85);
    }

    // Update Celestial Sky Dome Shader (Brilliant Sunlit Day vs Midnight Abyss Night)
    if (this.skyMat) {
      // Day Sun direction vs Night Moon direction
      const sunDirDay = new THREE.Vector3(0.45, 0.85, -0.6).normalize();
      const sunDirNight = new THREE.Vector3(-0.35, 0.75, -0.5).normalize();
      this.skyMat.uniforms.uSunPosition.value.copy(sunDirDay).lerp(sunDirNight, tNight);

      // Sky gradient colors:
      // DAY: Radiant deep sky blue -> Brilliant azure daylight blue -> Sunlit bright alpine horizon
      // NIGHT: Deep midnight blue abyss -> Starry midnight navy -> Dark horizon indigo
      const dayTop = new THREE.Color(0x0284c7);      // Radiant deep sky blue
      const nightTop = new THREE.Color(0x010512);    // Midnight abyss
      this.skyMat.uniforms.uTopColor.value.copy(dayTop).lerp(nightTop, tNight);

      const dayMid = new THREE.Color(0x38bdf8);      // Brilliant azure daylight blue
      const nightMid = new THREE.Color(0x030a1c);    // Starry midnight navy
      this.skyMat.uniforms.uMidColor.value.copy(dayMid).lerp(nightMid, tNight);

      const dayHoriz = new THREE.Color(0xbae6fd);    // Sunlit bright alpine horizon
      const nightHoriz = new THREE.Color(0x06142e);  // Dark horizon indigo
      this.skyMat.uniforms.uHorizonColor.value.copy(dayHoriz).lerp(nightHoriz, tNight);

      const daySunC = new THREE.Color(0xfffae5);     // Radiant golden sunlight
      const nightMoonC = new THREE.Color(0x60a5fa);   // Silver moonlight
      this.skyMat.uniforms.uSunColor.value.copy(daySunC).lerp(nightMoonC, tNight);
    }

    // Main Lights and Fog
    if (lights.ambientLight && lights.cyanDirLight && lights.scene) {
      // Ambient Light: Bright sky-blue fill in Day -> Starlight fill in Night
      const dayAmb = new THREE.Color(0xbae6fd);
      const nightAmb = new THREE.Color(0x0c1526);
      lights.ambientLight.color.copy(dayAmb).lerp(nightAmb, tNight);
      lights.ambientLight.intensity = THREE.MathUtils.lerp(1.45, 0.28, tNight);

      // Main Directional Light: Warm brilliant sunlight in Day -> Cool silver moonlight in Night
      const dayDir = new THREE.Color(0xfffbe8);
      const nightDir = new THREE.Color(0x60a5fa);
      lights.cyanDirLight.color.copy(dayDir).lerp(nightDir, tNight);
      lights.cyanDirLight.intensity = THREE.MathUtils.lerp(2.2, 0.45, tNight);

      // Secondary bounce: Lush emerald meadow bounce in Day -> Deep indigo in Night
      const dayBounce = new THREE.Color(0x34d399);
      const nightBounce = new THREE.Color(0x1e1b4b);
      lights.pinkDirLight.color.copy(dayBounce).lerp(nightBounce, tNight);
      lights.pinkDirLight.intensity = THREE.MathUtils.lerp(0.55, 0.15, tNight);

      // Background Clear Color: Brilliant azure day -> Midnight night
      const dayBg = new THREE.Color(0x38bdf8);
      const nightBg = new THREE.Color(0x030a1c);
      lights.scene.background.copy(dayBg).lerp(nightBg, tNight);

      // Atmospheric Distance Fog: Bright sunlit mountain haze -> Dark midnight fog
      if (lights.scene.fog) {
        const dayFog = new THREE.Color(0x7dd3fc);
        const nightFog = new THREE.Color(0x06142e);
        lights.scene.fog.color.copy(dayFog).lerp(nightFog, tNight);
      }
    }

    // Enhance Fireflies, Cabin Glow & Crystal Radiances at night
    if (this.fireflyMat) {
      this.fireflyMat.size = THREE.MathUtils.lerp(5.5, 8.0, tNight);
    }
    const crystalGlow = THREE.MathUtils.lerp(1.6, 3.0, tNight);
    if (this.crystalCyanMat) this.crystalCyanMat.emissiveIntensity = crystalGlow;
    if (this.crystalAmethystMat) this.crystalAmethystMat.emissiveIntensity = crystalGlow;
    if (this.crystalEmeraldMat) this.crystalEmeraldMat.emissiveIntensity = crystalGlow;
    if (this.cabinWindowGlowMat) this.cabinWindowGlowMat.emissiveIntensity = THREE.MathUtils.lerp(1.6, 2.8, tNight);

    // Keep sky dome, water plane, and distant mountains locked to drone position at infinity
    // Celestial Sky Dome Opacity: fully opaque in Day (1.0), fades out during dusk, invisible in Night (0.0)
    // so the Cosmic Galaxy (Moon, Milky Way, Constellations, Nebulae, Galaxies, Star Clusters) is completely revealed!
    const skyOpacity = Math.max(0.0, Math.min(1.0, 1.0 - (tNight - 0.15) / 0.7));
    if (this.skyMat && this.skyMat.uniforms.uOpacity) {
      this.skyMat.uniforms.uOpacity.value = skyOpacity;
    }
    if (this.skyDome) {
      this.skyDome.position.copy(dronePos);
      this.skyDome.visible = (skyOpacity > 0.01);
    }
    if (this.waterMesh) {
      this.waterMesh.position.x = dronePos.x;
      this.waterMesh.position.z = dronePos.z;
    }
    if (this.distantMountainGroup) {
      this.distantMountainGroup.position.x = dronePos.x;
      this.distantMountainGroup.position.z = dronePos.z;
    }
  }

  setVisible(visible) {
    this.natureGroup.visible = visible;
  }

  setTimeOfDay(time) {
    if (time !== 'day' && time !== 'night') return;
    this.timeOfDay = time;
    this.targetTransition = (time === 'night') ? 1.0 : 0.0;
    if (time === 'day' && this.skyDome) {
      this.skyDome.visible = true;
    }
  }

  toggleTimeOfDay() {
    this.setTimeOfDay(this.timeOfDay === 'day' ? 'night' : 'day');
    return this.timeOfDay;
  }
}
