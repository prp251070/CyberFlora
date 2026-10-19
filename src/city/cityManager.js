import * as THREE from 'three';

/**
 * Procedural Infinite Cyber-Metropolis Manager
 * Features:
 * - 🌆 Colorful Cyberpunk Architecture: Cobalt, Violet, Teal, Bronze, Titanium & Crimson towers
 * - 🏙️ Architectural Variety: Stepped Ziggurats, Twin Towers with Skybridges, Dense Alleys, Rotundas, Comm Spires
 * - 🛡️ Predictive 3D Building Collision Radar: Drone detects buildings and dynamically steers/turns around them
 * - ⚡ Glowing Neon Facade Trims, Equalizer Window Columns, Rooftop Helipads, and Holographic Billboards
 * - 🚗 Street-level light trails and high-altitude skybridges
 */
export class CityManager {
  constructor(scene) {
    this.scene = scene;

    // Grid configuration
    this.chunkSize = 220;
    this.gridRadius = 4; // 9x9 = 81 chunks
    this.gridDiameter = this.gridRadius * 2 + 1;
    this.totalChunks = this.gridDiameter * this.gridDiameter;

    // Containers and collections
    this.chunkPool = new Map(); // key: "x,z", value: chunkData
    this.cityGroup = new THREE.Group();
    this.scene.add(this.cityGroup);

    // Active building colliders for predictive drone obstacle avoidance
    this.buildingColliders = new Map(); // key: "cx,cz", value: Array of building bounding data

    // Audio-reactive elements references
    this.audioReactiveMeshes = {
      windowMaterials: [],
      neonMaterials: [],
      trafficMaterials: [],
      searchlights: [],
      billboardMaterials: []
    };

    this.simTime = 0;
    this.trafficCars = [];
    this.maglevTrains = [];

    // Shared Colorful Cyberpunk Materials
    this.initMaterials();

    // Ground Grid & Traffic
    this.createGround();

    // Active 3D Moving Cyber Cars
    this.initTraffic();

    // High-Speed Elevated Maglev Bullet Train System
    this.initMaglevSystem();

    // Sky Atmosphere & Searchlights
    this.createSkyElements();

    // Last drone chunk coordinates
    this.lastCenterChunkX = null;
    this.lastCenterChunkZ = null;
  }

  // --- 🪟 PROCEDURAL HIGH-DENSITY WINDOW TEXTURE GENERATORS ---
  createWindowTextureSet(style) {
    const width = 512;
    const height = 512;
    // 8x8 grid for large, prominent, clearly visible architectural windows
    const cols = 8;
    const rows = 8;

    const diffCanvas = document.createElement('canvas');
    diffCanvas.width = width;
    diffCanvas.height = height;
    const dctx = diffCanvas.getContext('2d');

    const emissCanvas = document.createElement('canvas');
    emissCanvas.width = width;
    emissCanvas.height = height;
    const ectx = emissCanvas.getContext('2d');

    // Base facade rich cyber architectural wall
    dctx.fillStyle = style.facadeColor;
    dctx.fillRect(0, 0, width, height);

    // Emissive background is pitch black (only lit windows glow)
    ectx.fillStyle = '#000000';
    ectx.fillRect(0, 0, width, height);

    const cellW = width / cols; // 64px
    const cellH = height / rows; // 64px
    const padX = 5.5;
    const padY = 7.0;

    for (let r = 0; r < rows; r++) {
      // Prominent floor spandrel slab
      dctx.fillStyle = style.spandrelColor;
      dctx.fillRect(0, r * cellH, width, 4);

      // Realistic night skyscraper window occupancy (~32% to 54% lit)
      // Balances glowing windows with visible deep colored facade walls (PREVENTS BLINDING WHITE WASHOUT)
      const floorLitChance = 0.42 + Math.sin(r * 1.5) * 0.12;

      for (let c = 0; c < cols; c++) {
        const wx = c * cellW + padX;
        const wy = r * cellH + padY;
        const ww = cellW - padX * 2; // ~53px wide pane
        const wh = cellH - padY * 2; // ~50px tall pane

        const hash = Math.sin(c * 19.3 + r * 37.1) * 43758.5453;
        const rand = hash - Math.floor(hash);

        const isLit = rand < floorLitChance;

        if (isLit) {
          const colorIdx = Math.floor(rand * style.litColors.length);
          const litColor = style.litColors[colorIdx];

          // 1. Dark tinted architectural glass base in diffuse map
          dctx.fillStyle = '#060a12';
          dctx.fillRect(wx, wy, ww, wh);

          // 2. Subtle interior ceiling tint on diffuse map (low opacity, prevents wash-out)
          dctx.save();
          dctx.globalAlpha = 0.18;
          dctx.fillStyle = litColor;
          dctx.fillRect(wx + 2, wy + 2, ww - 4, wh - 4);
          dctx.restore();

          // 3. Architectural transom and center pane divider for large windows
          if (rand > 0.3) {
            dctx.fillStyle = 'rgba(6, 10, 18, 0.75)';
            dctx.fillRect(wx, wy + wh * 0.38, ww, 2.5); // horizontal transom
            dctx.fillRect(wx + ww * 0.5 - 1, wy, 2, wh); // vertical center mullion
          }

          // 4. Pure saturated emissive glow (100% vivid neon illumination, NO WHITE)
          ectx.fillStyle = litColor;
          ectx.fillRect(wx, wy, ww, wh);
        } else {
          // Unlit dark tinted architectural glass
          dctx.fillStyle = style.unlitColor;
          dctx.fillRect(wx, wy, ww, wh);
        }
      }
    }

    // Heavy structural piers every 2 bays
    dctx.fillStyle = style.pierColor;
    for (let c = 0; c <= cols; c += 2) {
      dctx.fillRect(c * cellW - 2.5, 0, 5, height);
    }

    const diffTexture = new THREE.CanvasTexture(diffCanvas);
    diffTexture.wrapS = THREE.RepeatWrapping;
    diffTexture.wrapT = THREE.RepeatWrapping;

    const emissTexture = new THREE.CanvasTexture(emissCanvas);
    emissTexture.wrapS = THREE.RepeatWrapping;
    emissTexture.wrapT = THREE.RepeatWrapping;

    return { diffTexture, emissTexture };
  }

  initWindowTextures() {
    this.windowSets = [];

    // --- 🌆 VIBRANT DEEP COLORFUL CYBERPUNK PALETTES (ZERO WHITE BUILDINGS) ---
    const windowStyles = [
      // 0. Cobalt Cyber Arcology (Deep Midnight Cobalt with Electric Cyan & Blue Windows)
      {
        facadeColor: '#0d1b33',
        spandrelColor: '#081020',
        pierColor: '#050a14',
        unlitColor: '#040810',
        litColors: ['#00f3ff', '#00d2ff', '#0284c7', '#38bdf8', '#0ea5e9']
      },
      // 1. Synthwave Violet Spire (Deep Rich Purple with Magenta & Pink Windows)
      {
        facadeColor: '#1d0e33',
        spandrelColor: '#110820',
        pierColor: '#090412',
        unlitColor: '#06020c',
        litColors: ['#d946ef', '#c026d3', '#a855f7', '#9333ea', '#ff007f']
      },
      // 2. Cyber Emerald / Matrix Spire (Deep Forest Teal with Mint & Green Windows)
      {
        facadeColor: '#08211d',
        spandrelColor: '#051412',
        pierColor: '#030c0b',
        unlitColor: '#020706',
        litColors: ['#00ffaa', '#10b981', '#059669', '#34d399', '#0d9488']
      },
      // 3. Cyber Bronze / Copper Monolith (Deep Warm Bronze with Amber & Orange Windows)
      {
        facadeColor: '#26160c',
        spandrelColor: '#170d07',
        pierColor: '#0e0704',
        unlitColor: '#080402',
        litColors: ['#ffaa00', '#f59e0b', '#fb923c', '#ea580c', '#d97706']
      },
      // 4. Stealth Obsidian Tower (Deep Charcoal Slate with Cyan & Azure Windows)
      {
        facadeColor: '#111624',
        spandrelColor: '#0a0d17',
        pierColor: '#06080e',
        unlitColor: '#030508',
        litColors: ['#00f3ff', '#38bdf8', '#0284c7', '#60a5fa', '#00d2ff']
      },
      // 5. Cyber Crimson Night Tower (Deep Wine Crimson with Neon Red & Coral Windows)
      {
        facadeColor: '#240a15',
        spandrelColor: '#16060d',
        pierColor: '#0c0307',
        unlitColor: '#070204',
        litColors: ['#ff0055', '#f43f5e', '#e11d48', '#fb7185', '#ff1744']
      }
    ];

    windowStyles.forEach(style => {
      this.windowSets.push(this.createWindowTextureSet(style));
    });
  }

  // Geometry factory scaling UVs to ensure uniform large window scale on all towers
  createBuildingBoxGeometry(w, h, d) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const uvs = geo.attributes.uv;

    // Window bay scale: 1 repeat = 24m wide x 28m tall (8 windows = ~3.0m wide each, ~3.5m floor height)
    const uScaleX = w / 24;
    const uScaleZ = d / 24;
    const vScaleY = h / 28;

    // Face 0 (+X) & Face 1 (-X): width along Z is d, height is h
    for (let i = 0; i < 8; i++) {
      uvs.setXY(i, uvs.getX(i) * uScaleZ, uvs.getY(i) * vScaleY);
    }
    // Face 2 (+Y) Roof & Face 3 (-Y) Bottom:
    // Map to dark unlit pixel (0.01, 0.01) so roofs are dark architectural surfaces (PREVENTS SHINING WHITE ROOFS)
    for (let i = 8; i < 16; i++) {
      uvs.setXY(i, 0.01, 0.01);
    }
    // Face 4 (+Z) & Face 5 (-Z): width along X is w, height is h
    for (let i = 16; i < 24; i++) {
      uvs.setXY(i, uvs.getX(i) * uScaleX, uvs.getY(i) * vScaleY);
    }
    uvs.needsUpdate = true;
    return geo;
  }

  createBuildingCylinderGeometry(r, h, segs = 24) {
    const geo = new THREE.CylinderGeometry(r, r, h, segs);
    const uvs = geo.attributes.uv;
    const circ = 2 * Math.PI * r;
    const uScale = circ / 24;
    const vScale = h / 28;
    for (let i = 0; i < uvs.count; i++) {
      uvs.setXY(i, uvs.getX(i) * uScale, uvs.getY(i) * vScale);
    }
    uvs.needsUpdate = true;
    return geo;
  }

  initMaterials() {
    this.initWindowTextures();

    // --- 🏙️ RICH COLORFUL CYBERPUNK ARCHITECTURAL MATERIALS (ZERO WHITE BUILDINGS) ---
    const createFacadeMat = (idx) => new THREE.MeshStandardMaterial({
      map: this.windowSets[idx].diffTexture,
      emissiveMap: this.windowSets[idx].emissTexture,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: 0.65,
      color: new THREE.Color(0xd0d0d0), // Controlled diffuse multiplier (prevents white blowout)
      roughness: 0.78, // Matte architectural cladding (prevents white specular glare)
      metalness: 0.12  // Non-metallic architectural facade
    });

    // 0. Cobalt Arcology (Midnight Blue)
    this.matCobalt = createFacadeMat(0);
    // 1. Synthwave Violet Spire (Deep Purple)
    this.matViolet = createFacadeMat(1);
    // 2. Matrix Emerald Spire (Forest Teal)
    this.matTeal = createFacadeMat(2);
    // 3. Cyber Bronze Monolith (Warm Bronze Copper)
    this.matBronze = createFacadeMat(3);
    // 4. Stealth Obsidian Slate (Dark Charcoal)
    this.matTitanium = createFacadeMat(4);
    // 5. Cyber Crimson Night Tower (Deep Wine Crimson)
    this.matCrimson = createFacadeMat(5);

    // Aliases to seamlessly support named references
    this.matSlateGrey = this.matCobalt;
    this.matTitaniumSilver = this.matViolet;
    this.matCoolSteel = this.matTeal;
    this.matChromePlatinum = this.matTitanium;
    this.matWarmConcrete = this.matBronze;
    this.matGraphiteGrey = this.matCrimson;

    this.facadeMaterials = [
      this.matCobalt,
      this.matViolet,
      this.matTeal,
      this.matBronze,
      this.matTitanium,
      this.matCrimson
    ];

    this.audioReactiveMeshes.windowMaterials.push(...this.facadeMaterials);

    // --- ⚡ VIBRANT ILLUMINATED NEON ACCENTS ---
    this.neonCyanMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    this.neonMagentaMat = new THREE.MeshBasicMaterial({ color: 0xff007f });
    this.neonAmberMat = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
    this.neonPurpleMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });
    this.neonLimeMat = new THREE.MeshBasicMaterial({ color: 0x00ffaa });

    this.audioReactiveMeshes.neonMaterials.push(
      this.neonCyanMat,
      this.neonMagentaMat,
      this.neonAmberMat,
      this.neonPurpleMat,
      this.neonLimeMat
    );

    // --- 🛣️ ASPHALT ROADS, SIDEWALKS & ROAD MARKINGS ---
    this.roadMat = new THREE.MeshStandardMaterial({
      color: 0x0f1520,
      roughness: 0.85,
      metalness: 0.15
    });

    this.sidewalkMat = new THREE.MeshStandardMaterial({
      color: 0x26303d,
      roughness: 0.70,
      metalness: 0.25
    });

    this.curbCyanMat = this.neonCyanMat;
    this.curbMagentaMat = this.neonMagentaMat;
    this.roadMarkingAmberMat = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
    this.roadMarkingCyanMat = new THREE.MeshBasicMaterial({ color: 0x00d4ff });
    this.roadMarkingStopMat = new THREE.MeshBasicMaterial({ color: 0xff0055 });
    this.gantryMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5, metalness: 0.7 });
    this.signGreenMat = new THREE.MeshBasicMaterial({ color: 0x00ff88 });

    // --- 🚗 3D CYBER VEHICLE / CAR MATERIALS ---
    this.carChassisMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.40, metalness: 0.75 }), // stealth gunmetal
      new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.38, metalness: 0.70 }), // crimson red
      new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.38, metalness: 0.70 }), // electric cobalt
      new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.38, metalness: 0.70 }), // cyber amber
      new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.42, metalness: 0.75 }), // dark slate
      new THREE.MeshStandardMaterial({ color: 0x581c87, roughness: 0.38, metalness: 0.75 })  // synthwave purple
    ];

    this.carCanopyMat = new THREE.MeshStandardMaterial({
      color: 0x070c18,
      roughness: 0.15,
      metalness: 0.85
    });

    this.headlightMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    this.headlightBeamMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
      side: THREE.DoubleSide
    });
    this.taillightMat = new THREE.MeshBasicMaterial({ color: 0xff0044 });
    this.underglowCyanMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.85 });
    this.underglowMagentaMat = new THREE.MeshBasicMaterial({ color: 0xff007f, transparent: true, opacity: 0.85 });
    this.trailMat = new THREE.MeshBasicMaterial({ color: 0xff0044, transparent: true, opacity: 0.65 });

    // --- 🚄 ELEVATED MAGLEV BULLET TRAIN & TRACK MATERIALS ---
    this.maglevTrackMat = new THREE.MeshStandardMaterial({
      color: 0x18202d,
      roughness: 0.65,
      metalness: 0.60
    });
    this.maglevRailCyanMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    this.maglevRailAmberMat = new THREE.MeshBasicMaterial({ color: 0xffaa00 });
    this.trainChassisDarkMat = new THREE.MeshStandardMaterial({
      color: 0x0d131f,
      roughness: 0.32,
      metalness: 0.85
    });
    this.trainAccentCyanMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
    this.trainAccentMagentaMat = new THREE.MeshBasicMaterial({ color: 0xff007f });
    this.trainWindowLitMat = new THREE.MeshBasicMaterial({ color: 0x7dd3fc });
    this.trainWindowAmberMat = new THREE.MeshBasicMaterial({ color: 0xfde047 });
    this.trainUnderglowLevMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.90
    });
    this.trainUnderglowMagMat = new THREE.MeshBasicMaterial({
      color: 0xff007f,
      transparent: true,
      opacity: 0.90
    });
    this.trainPlasmaTrailMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.70
    });

    this.audioReactiveMeshes.neonMaterials.push(
      this.maglevRailCyanMat,
      this.maglevRailAmberMat
    );

    this.audioReactiveMeshes.trafficMaterials.push(
      this.underglowCyanMat,
      this.underglowMagentaMat,
      this.trailMat,
      this.trainUnderglowLevMat,
      this.trainUnderglowMagMat,
      this.trainPlasmaTrailMat
    );

    // Holographic billboard canvas textures
    this.createBillboardTextures();
  }

  // --- 🚗 3D CYBER CAR MESH FACTORY ---
  createCarMesh(isFlying = false) {
    const carGroup = new THREE.Group();
    const chassisMat = this.carChassisMaterials[Math.floor(Math.random() * this.carChassisMaterials.length)];

    // 1. Sleek Aerodynamic Hovercar Chassis Body
    const chassisGeo = new THREE.BoxGeometry(2.4, 0.75, 4.8);
    const chassis = new THREE.Mesh(chassisGeo, chassisMat);
    chassis.position.y = 0.55;
    carGroup.add(chassis);

    // Front wedge nose & aerodynamic hood
    const noseGeo = new THREE.BoxGeometry(2.2, 0.45, 1.8);
    const nose = new THREE.Mesh(noseGeo, chassisMat);
    nose.position.set(0, 0.40, -2.6);
    carGroup.add(nose);

    // Front low-profile ground splitter
    const splitter = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.12, 1.4), this.carCanopyMat);
    splitter.position.set(0, 0.18, -2.9);
    carGroup.add(splitter);

    // 2. Cockpit Canopy (Dark Tinted Glass)
    const canopyGeo = new THREE.BoxGeometry(1.8, 0.55, 2.3);
    const canopy = new THREE.Mesh(canopyGeo, this.carCanopyMat);
    canopy.position.set(0, 1.10, 0.3);
    carGroup.add(canopy);

    // 3. Glowing Front Headlights (Twin White/Cyan Beams)
    [-0.85, 0.85].forEach(hx => {
      const hl = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.20, 0.15), this.headlightMat);
      hl.position.set(hx, 0.45, -3.45);
      carGroup.add(hl);
    });

    // 4. Forward Volumetric Headlight Light Beams (casting bright cyan glow forward onto asphalt road)
    if (!this.sharedBeamGeo) {
      this.sharedBeamGeo = new THREE.ConeGeometry(2.6, 14, 8, 1, true);
      this.sharedBeamGeo.rotateX(-Math.PI / 2 + 0.10); // angle slightly downwards onto road
      this.sharedBeamGeo.translate(0, -0.2, -7.0);
    }
    const headlightBeam = new THREE.Mesh(this.sharedBeamGeo, this.headlightBeamMat);
    headlightBeam.position.set(0, 0.55, -2.8);
    carGroup.add(headlightBeam);

    // 5. Glowing Rear Taillights (Full-width Cyberpunk LED Lightbar)
    const tailBar = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.22, 0.15), this.taillightMat);
    tailBar.position.set(0, 0.60, 2.45);
    carGroup.add(tailBar);

    // 6. Rear Diffuser & Cyber Spoiler Wing
    const spoilerPostL = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.45, 0.3), chassisMat);
    spoilerPostL.position.set(-0.9, 1.05, 2.2);
    const spoilerPostR = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.45, 0.3), chassisMat);
    spoilerPostR.position.set(0.9, 1.05, 2.2);
    const spoilerWing = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.12, 0.6), chassisMat);
    spoilerWing.position.set(0, 1.25, 2.2);
    carGroup.add(spoilerPostL, spoilerPostR, spoilerWing);

    // 7. 4 Hover Repulsor Thruster Pods / Cyber Wheels with glowing neon rims
    [-1.25, 1.25].forEach(wx => {
      [-1.5, 1.5].forEach(wz => {
        const pod = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.32, 12), this.carCanopyMat);
        pod.rotateZ(Math.PI / 2);
        pod.position.set(wx, 0.38, wz);
        carGroup.add(pod);

        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.05, 6, 12), this.neonCyanMat);
        ring.rotateY(Math.PI / 2);
        ring.position.set(wx > 0 ? wx + 0.18 : wx - 0.18, 0.38, wz);
        carGroup.add(ring);
      });
    });

    // 8. Underglow Hover Thruster / Neon Skirt
    const isMagenta = Math.random() < 0.5;
    const underglowMat = isMagenta ? this.underglowMagentaMat : this.underglowCyanMat;
    const underglow = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.08, 4.4), underglowMat);
    underglow.position.set(0, 0.10, 0);
    carGroup.add(underglow);

    // 9. Aerodynamic Canard Wings for Flying Cars
    if (isFlying) {
      const wingL = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.12, 0.8), chassisMat);
      wingL.position.set(-2.0, 0.65, 0.2);
      wingL.rotateZ(-0.15);
      const wingR = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.12, 0.8), chassisMat);
      wingR.position.set(2.0, 0.65, 0.2);
      wingR.rotateZ(0.15);
      carGroup.add(wingL, wingR);
    }

    // 10. Glowing Light Trail Ribbon behind car
    const trailLength = isFlying ? 22 : 12;
    const trailGeo = new THREE.BoxGeometry(0.25, 0.12, trailLength);
    const trail = new THREE.Mesh(trailGeo, isMagenta ? this.neonMagentaMat : this.trailMat);
    trail.position.set(0, 0.55, 2.45 + trailLength / 2);
    carGroup.add(trail);

    return carGroup;
  }

  // Initialize dynamic multi-lane city traffic
  initTraffic() {
    this.trafficCars = [];
    this.trafficGroup = new THREE.Group();
    this.cityGroup.add(this.trafficGroup);

    // Multi-lane avenue configuration:
    // Avenues are 28m wide (from -14 to +14 relative to avenue center at 96)
    // Lane 0: +3.8m (Northbound/Eastbound fast lane)
    // Lane 1: +8.2m (Northbound/Eastbound cruising lane)
    // Lane 2: -3.8m (Southbound/Westbound fast lane)
    // Lane 3: -8.2m (Southbound/Westbound cruising lane)
    const laneOffsets = [3.8, 8.2, -3.8, -8.2];

    // 1. Populate 48 Ground Hovercars along avenues
    const groundCarCount = 48;
    for (let i = 0; i < groundCarCount; i++) {
      const isNS = (i % 2 === 0);
      const car = this.createCarMesh(false);

      const aveRel = (Math.floor(i / 2) % 5) - 2; // -2, -1, 0, 1, 2 (avenues relative to drone chunk)
      const laneIdx = i % 4;
      const laneOffset = laneOffsets[laneIdx];
      const isForward = laneIdx < 2; // lanes 0, 1 go forward (+Z or +X), lanes 2, 3 go reverse (-Z or -X)
      const dirSign = isForward ? 1 : -1;

      // Fast lane gets 60-78 m/s (~216-280 km/h), cruising lane gets 42-58 m/s (~150-210 km/h)
      const baseSpeed = (laneIdx % 2 === 0) ? 62 : 46;
      const speed = baseSpeed + (Math.sin(i * 13.7) * 0.5 + 0.5) * 16;

      let vx, vz;
      if (isNS) {
        vx = 0;
        vz = dirSign * speed;
        car.rotation.y = dirSign > 0 ? 0 : Math.PI;
      } else {
        vx = dirSign * speed;
        vz = 0;
        car.rotation.y = dirSign > 0 ? -Math.PI / 2 : Math.PI / 2;
      }

      car.position.set(0, 1.15, 0);
      car.userData = {
        isNS,
        aveRel,
        laneOffset,
        vx,
        vz,
        baseY: 1.15,
        seed: Math.random() * 100,
        isFlying: false
      };

      this.trafficGroup.add(car);
      this.trafficCars.push(car);
    }

    // 2. Populate 16 Aerial Skyway Flying Cars cruising between skyscrapers
    const skyCarCount = 16;
    for (let i = 0; i < skyCarCount; i++) {
      const car = this.createCarMesh(true);
      const isNS = (i % 2 === 0);
      const dirSign = (i % 4 < 2) ? 1 : -1;
      const speed = 70 + Math.random() * 45; // 70 to 115 m/s (~250 to 415 km/h)
      const alt = 55 + (i % 4) * 15; // 55m, 70m, 85m, 100m aerial traffic lanes

      let posX, posZ, vx, vz;
      if (isNS) {
        posX = (Math.floor(i / 4) - 2) * this.chunkSize + 96;
        posZ = (Math.random() - 0.5) * 800;
        vx = 0;
        vz = dirSign * speed;
        car.rotation.y = dirSign > 0 ? 0 : Math.PI;
      } else {
        posX = (Math.random() - 0.5) * 800;
        posZ = (Math.floor(i / 4) - 2) * this.chunkSize + 96;
        vx = dirSign * speed;
        vz = 0;
        car.rotation.y = dirSign > 0 ? -Math.PI / 2 : Math.PI / 2;
      }

      car.position.set(posX, alt, posZ);
      car.userData = {
        isNS,
        vx,
        vz,
        baseY: alt,
        seed: Math.random() * 100,
        isFlying: true
      };

      this.trafficGroup.add(car);
      this.trafficCars.push(car);
    }
  }

  // --- 🚄 3D ELEVATED MAGLEV BULLET TRAIN FACTORY ---
  createMaglevTrain(theme = 'cyan') {
    const trainGroup = new THREE.Group();
    const isCyan = theme === 'cyan';
    const isAmber = theme === 'amber';
    const accentMat = isCyan ? this.trainAccentCyanMat : (isAmber ? this.maglevRailAmberMat : this.trainAccentMagentaMat);
    const windowMat = (isCyan || !isAmber) ? this.trainWindowLitMat : this.trainWindowAmberMat;
    const underglowMat = isCyan ? this.trainUnderglowLevMat : this.trainUnderglowMagMat;

    // A complete 6-carriage 100m high-speed Maglev train:
    // Lead Locomotive (front at +X): length 18m
    // 4 Articulated Passenger Cars: each length 14m
    // Rear Locomotive (tail at -X): length 18m
    const carConfigs = [
      { type: 'lead', ox: 41 },
      { type: 'passenger', ox: 25 },
      { type: 'passenger', ox: 10 },
      { type: 'passenger', ox: -5 },
      { type: 'passenger', ox: -20 },
      { type: 'rear', ox: -39 }
    ];

    carConfigs.forEach(cfg => {
      const car = new THREE.Group();
      car.position.x = cfg.ox;

      if (cfg.type === 'lead') {
        // --- 1. AERODYNAMIC NEEDLE-NOSE LOCOMOTIVE ---
        const cabGeo = new THREE.BoxGeometry(10, 2.8, 3.4);
        const cab = new THREE.Mesh(cabGeo, this.trainChassisDarkMat);
        cab.position.set(0, 1.4, 0);
        car.add(cab);

        // Tapered aerodynamic bullet needle nose extending forward towards +X
        const noseGeo = new THREE.BoxGeometry(8, 1.8, 3.1);
        const nose = new THREE.Mesh(noseGeo, this.trainChassisDarkMat);
        nose.position.set(8.5, 0.9, 0);
        car.add(nose);

        // Ultra-sharp front splitter prow
        const prow = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.6, 2.6), this.trainChassisDarkMat);
        prow.position.set(13.2, 0.35, 0);
        car.add(prow);

        // Cockpit canopy visor
        const visor = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.8, 2.7), this.carCanopyMat);
        visor.position.set(5.5, 2.0, 0);
        car.add(visor);

        // Swept roof fin / aerodynamic fairing
        const roofFin = new THREE.Mesh(new THREE.BoxGeometry(6, 0.45, 0.5), accentMat);
        roofFin.position.set(0, 2.95, 0);
        car.add(roofFin);

        // Dual High-Power Front Maglev Headlights
        [-1.1, 1.1].forEach(hz => {
          const hl = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 0.6), accentMat);
          hl.position.set(13.6, 0.45, hz);
          car.add(hl);
        });

        // Long forward volumetric projector beam cone along track
        if (!this.sharedTrainBeamGeo) {
          this.sharedTrainBeamGeo = new THREE.ConeGeometry(5.5, 55, 8, 1, true);
          this.sharedTrainBeamGeo.rotateZ(-Math.PI / 2);
          this.sharedTrainBeamGeo.translate(27.5, 0, 0);
        }
        const beam = new THREE.Mesh(this.sharedTrainBeamGeo, this.headlightBeamMat);
        beam.position.set(13.5, 0.45, 0);
        car.add(beam);

      } else if (cfg.type === 'rear') {
        // --- 2. REAR LOCOMOTIVE CAB ---
        const cabGeo = new THREE.BoxGeometry(10, 2.8, 3.4);
        const cab = new THREE.Mesh(cabGeo, this.trainChassisDarkMat);
        cab.position.set(0, 1.4, 0);
        car.add(cab);

        // Aerodynamic tapered tail towards -X
        const tailGeo = new THREE.BoxGeometry(8, 2.0, 3.1);
        const tail = new THREE.Mesh(tailGeo, this.trainChassisDarkMat);
        tail.position.set(-8.5, 1.0, 0);
        car.add(tail);

        // Full-width red LED taillight bar
        const tailBar = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.5, 2.8), this.taillightMat);
        tailBar.position.set(-12.6, 0.8, 0);
        car.add(tailBar);

        // Twin plasma thrust stream trails extending behind train
        [-1.0, 1.0].forEach(tz => {
          const trail = new THREE.Mesh(new THREE.BoxGeometry(28, 0.2, 0.35), this.trainPlasmaTrailMat);
          trail.position.set(-26.5, 0.8, tz);
          car.add(trail);
        });

      } else {
        // --- 3. ARTICULATED PASSENGER CARRIAGE ---
        const bodyGeo = new THREE.BoxGeometry(13.5, 2.8, 3.4);
        const body = new THREE.Mesh(bodyGeo, this.trainChassisDarkMat);
        body.position.set(0, 1.4, 0);
        car.add(body);

        // Panoramic glowing passenger cabin window bands on both sides
        [-1.72, 1.72].forEach(wz => {
          const winBand = new THREE.Mesh(new THREE.PlaneGeometry(12.2, 0.85), windowMat);
          if (wz < 0) winBand.rotateY(Math.PI);
          winBand.position.set(0, 1.6, wz);
          car.add(winBand);
        });

        // Illuminated emergency door strip lights
        [-1.73, 1.73].forEach(dz => {
          [-4.5, 4.5].forEach(dx => {
            const doorLight = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.1, 0.05), accentMat);
            doorLight.position.set(dx, 1.35, dz);
            car.add(doorLight);
          });
        });

        // Articulated bellow coupling between carriages
        const bellow = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.5, 3.1), this.maglevTrackMat);
        bellow.position.set(-7.2, 1.35, 0);
        car.add(bellow);
      }

      // Continuous Neon Speed Stripe along car flank
      [-1.72, 1.72].forEach(sz => {
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(cfg.type === 'passenger' ? 13.4 : 10, 0.12, 0.05), accentMat);
        stripe.position.set(0, 0.6, sz);
        car.add(stripe);
      });

      // Maglev levitation undercarriage bogie
      const bogie = new THREE.Mesh(new THREE.BoxGeometry(cfg.type === 'passenger' ? 12 : 9, 0.35, 2.8), this.maglevTrackMat);
      bogie.position.set(0, -0.05, 0);
      car.add(bogie);

      // Glowing magnetic levitation induction field underneath
      const levField = new THREE.Mesh(new THREE.BoxGeometry(cfg.type === 'passenger' ? 12.8 : 10, 0.12, 3.2), underglowMat);
      levField.position.set(0, -0.22, 0);
      car.add(levField);

      trainGroup.add(car);
    });

    return trainGroup;
  }

  // Initialize elevated high-speed Maglev train network
  initMaglevSystem() {
    this.maglevTrains = [];
    this.maglevGroup = new THREE.Group();
    this.cityGroup.add(this.maglevGroup);

    // Track A (z = 48) runs Eastbound (+X)
    // Track B (z = 54) runs Westbound (-X)

    // Train 1: Neo-Tokyo High-Speed Commuter Express (Electric Cyan) on Track A
    const train1 = this.createMaglevTrain('cyan');
    train1.userData = {
      trackZ: 48,
      vx: 92, // +92 m/s (~331 km/h)
      baseY: 44.8,
      seed: 0,
      isForward: true
    };
    train1.position.set(0, 44.8, 48);
    this.maglevGroup.add(train1);
    this.maglevTrains.push(train1);

    // Train 2: Night-City Heavy Cyber Express (Synthwave Magenta) on Track B
    const train2 = this.createMaglevTrain('magenta');
    train2.rotation.y = Math.PI; // Heading towards -X
    train2.userData = {
      trackZ: 54,
      vx: -96, // -96 m/s (~345 km/h)
      baseY: 44.8,
      seed: 25,
      isForward: false
    };
    train2.position.set(120, 44.8, 54);
    this.maglevGroup.add(train2);
    this.maglevTrains.push(train2);

    // Train 3: Orbital Priority Interceptor (Golden Amber) on Track A
    const train3 = this.createMaglevTrain('amber');
    train3.userData = {
      trackZ: 48,
      vx: 88, // +88 m/s (~316 km/h)
      baseY: 44.8,
      seed: 50,
      isForward: true
    };
    train3.position.set(-450, 44.8, 48);
    this.maglevGroup.add(train3);
    this.maglevTrains.push(train3);
  }

  createBillboardTextures() {
    this.billboardCanvases = [];
    this.billboardTextures = [];

    const themes = [
      { text: 'CYBER//CORP', sub: 'NEURAL LINK v9.4', color: '#00f3ff' },
      { text: 'NIGHT//CITY', sub: 'BIO-ENHANCEMENT', color: '#ff0077' },
      { text: 'AERO-DRONE', sub: 'HYPER-FPV DRIVER', color: '#ffaa00' },
      { text: 'SYNTH//WAVE', sub: 'FREQUENCY OVERDRIVE', color: '#a855f7' },
      { text: 'QUANTUM//AI', sub: 'SUB-ATOMIC CORE', color: '#00ffaa' }
    ];

    themes.forEach(th => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(0, 0, 512, 256);

      ctx.strokeStyle = th.color;
      ctx.lineWidth = 6;
      ctx.strokeRect(10, 10, 492, 236);

      ctx.fillStyle = th.color;
      ctx.font = 'bold 44px "Orbitron", monospace';
      ctx.textAlign = 'center';
      ctx.shadowColor = th.color;
      ctx.shadowBlur = 18;
      ctx.fillText(th.text, 256, 95);

      ctx.fillStyle = '#ffffff';
      ctx.font = '22px "Share Tech Mono", monospace';
      ctx.shadowBlur = 8;
      ctx.fillText(th.sub, 256, 155);

      // Equalizer bars
      ctx.fillStyle = th.color;
      for (let i = 0; i < 22; i++) {
        const h = 15 + Math.random() * 45;
        ctx.fillRect(65 + i * 18, 220 - h, 12, h);
      }

      const texture = new THREE.CanvasTexture(canvas);
      this.billboardTextures.push(texture);

      const mat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide
      });
      this.audioReactiveMeshes.billboardMaterials.push(mat);
    });
  }

  createGround() {
    const groundGeo = new THREE.PlaneGeometry(3500, 3500, 32, 32);
    groundGeo.rotateX(-Math.PI / 2);

    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x222a36,
      roughness: 0.65,
      metalness: 0.35
    });

    this.groundMesh = new THREE.Mesh(groundGeo, groundMat);
    this.groundMesh.position.y = 0;
    this.scene.add(this.groundMesh);

    // Cyan/Blue street gridlines
    const gridHelper = new THREE.GridHelper(3500, 70, 0x00d4ff, 0x1e2d45);
    gridHelper.position.y = 0.5;
    this.scene.add(gridHelper);
    this.groundGrid = gridHelper;
  }

  createSkyElements() {
    this.searchlightGroup = new THREE.Group();
    const beamGeo = new THREE.CylinderGeometry(0.4, 1.6, 550, 8, 1, true);
    beamGeo.translate(0, 275, 0);

    const beamColors = [0x00f3ff, 0xff0077, 0x00ffaa, 0xa855f7];

    for (let i = 0; i < 4; i++) {
      const beamMat = new THREE.MeshBasicMaterial({
        color: beamColors[i % beamColors.length],
        transparent: true,
        opacity: 0.16,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      const beam = new THREE.Mesh(beamGeo, beamMat);
      const angle = (i / 4) * Math.PI * 2;
      beam.position.set(Math.cos(angle) * 500, 80, Math.sin(angle) * 500);
      beam.rotation.z = 0.22;
      beam.userData = {
        baseRotZ: beam.rotation.z,
        rotSpeed: (i % 2 === 0 ? 0.35 : -0.35),
        mat: beamMat
      };

      this.searchlightGroup.add(beam);
      this.audioReactiveMeshes.searchlights.push(beam);
    }

    this.scene.add(this.searchlightGroup);
  }

  // Deterministic Hash
  hash2D(x, z) {
    let n = Math.sin(x * 12.9898 + z * 78.233) * 43758.5453;
    return n - Math.floor(n);
  }

  // --- 🏙️ PROCEDURAL CYBERPUNK CHUNK WITH ARCHITECTURAL RANDOMNESS ---
  createChunkGroup(cx, cz) {
    const chunkGroup = new THREE.Group();
    const worldX = cx * this.chunkSize;
    const worldZ = cz * this.chunkSize;
    chunkGroup.position.set(worldX, 0, worldZ);

    const seed = this.hash2D(cx, cz);
    const chunkColliders = [];

    // Select architectural archetype based on chunk seed (Breaks the rigid 2x2 grid!)
    const archetype = Math.floor(seed * 5);

    if (archetype === 0) {
      // --- ARCHETYPE 0: STEPPED ZIGGURAT MEGA-ARCOLOGY (Central pyramid tower + 2 satellites) ---
      const facadeMat = this.facadeMaterials[Math.floor(this.hash2D(cx + 1, cz) * this.facadeMaterials.length)];
      const neonMat = this.audioReactiveMeshes.neonMaterials[Math.floor(this.hash2D(cx, cz + 1) * this.audioReactiveMeshes.neonMaterials.length)];

      // 3 Cascading Tiers with thousands of glowing windows
      const tier1H = 80;
      const tier1W = 85;
      const b1 = new THREE.Mesh(this.createBuildingBoxGeometry(tier1W, tier1H, tier1W), facadeMat);
      b1.position.set(0, tier1H / 2, 0);
      chunkGroup.add(b1);

      // Glowing neon edge trim around tier 1 ledge
      const trim1 = new THREE.Mesh(new THREE.BoxGeometry(tier1W + 1.5, 2, tier1W + 1.5), neonMat);
      trim1.position.set(0, tier1H, 0);
      chunkGroup.add(trim1);

      const tier2H = 120;
      const tier2W = 60;
      const b2 = new THREE.Mesh(this.createBuildingBoxGeometry(tier2W, tier2H, tier2W), facadeMat);
      b2.position.set(0, tier1H + tier2H / 2, 0);
      chunkGroup.add(b2);

      const trim2 = new THREE.Mesh(new THREE.BoxGeometry(tier2W + 1.5, 2, tier2W + 1.5), neonMat);
      trim2.position.set(0, tier1H + tier2H, 0);
      chunkGroup.add(trim2);

      const tier3H = 150;
      const tier3W = 38;
      const b3 = new THREE.Mesh(this.createBuildingBoxGeometry(tier3W, tier3H, tier3W), facadeMat);
      b3.position.set(0, tier1H + tier2H + tier3H / 2, 0);
      chunkGroup.add(b3);

      const totalH = tier1H + tier2H + tier3H; // 350m

      // Helipad ring on top
      const pad = new THREE.Mesh(new THREE.RingGeometry(8, 14, 16), neonMat);
      pad.rotateX(-Math.PI / 2);
      pad.position.set(0, totalH + 0.5, 0);
      chunkGroup.add(pad);

      // Apex Spire
      const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 2.5, 55, 8), facadeMat);
      spire.position.set(0, totalH + 27.5, 0);
      chunkGroup.add(spire);

      // Register collider for drone collision avoidance
      chunkColliders.push({
        x: worldX,
        z: worldZ,
        width: tier1W,
        depth: tier1W,
        height: totalH,
        radius: (tier1W * 0.7)
      });

      // 2 Satellite Towers (placed safely within building lot, away from roads & maglev skyway)
      const satOffsets = [
        { ox: -72, oz: 72, w: 28, d: 24, h: 180 },
        { ox: 48, oz: -65, w: 32, d: 28, h: 220 }
      ];
      satOffsets.forEach((sat, i) => {
        const satMat = this.facadeMaterials[(i + 2) % this.facadeMaterials.length];
        const satMesh = new THREE.Mesh(this.createBuildingBoxGeometry(sat.w, sat.h, sat.d), satMat);
        satMesh.position.set(sat.ox, sat.h / 2, sat.oz);
        chunkGroup.add(satMesh);

        // Neon vertical column
        const nCol = new THREE.Mesh(new THREE.BoxGeometry(2, sat.h * 0.8, sat.d + 0.8), this.neonCyanMat);
        nCol.position.set(sat.ox, sat.h * 0.45, sat.oz);
        chunkGroup.add(nCol);

        chunkColliders.push({
          x: worldX + sat.ox,
          z: worldZ + sat.oz,
          width: sat.w,
          depth: sat.d,
          height: sat.h,
          radius: Math.sqrt(sat.w * sat.w + sat.d * sat.d) / 2
        });
      });

    } else if (archetype === 1) {
      // --- ARCHETYPE 1: TWIN TOWERS CONNECTED BY HIGH-ALTITUDE SKYBRIDGES ---
      const t1Mat = this.matCobalt;
      const t2Mat = this.matViolet;

      const t1H = 340 + seed * 80;
      const t2H = 360 + seed * 60;
      const tw = 42;
      const td = 42;

      const t1 = new THREE.Mesh(this.createBuildingBoxGeometry(tw, t1H, td), t1Mat);
      t1.position.set(-48, t1H / 2, 0);
      chunkGroup.add(t1);

      const t2 = new THREE.Mesh(this.createBuildingBoxGeometry(tw, t2H, td), t2Mat);
      t2.position.set(48, t2H / 2, 0);
      chunkGroup.add(t2);

      // 2 Glowing Skybridges at different altitudes
      [t1H * 0.45, t1H * 0.78].forEach((bAlt, bi) => {
        const bridge = new THREE.Mesh(new THREE.BoxGeometry(56, 7, 14), this.matTitanium);
        bridge.position.set(0, bAlt, 0);
        chunkGroup.add(bridge);

        const neonStrip = new THREE.Mesh(new THREE.BoxGeometry(56, 1, 14.8), bi === 0 ? this.neonMagentaMat : this.neonCyanMat);
        neonStrip.position.set(0, bAlt - 3.8, 0);
        chunkGroup.add(neonStrip);
      });

      // Neon window matrices
      [-48, 48].forEach((tx, ti) => {
        const win = new THREE.Mesh(new THREE.BoxGeometry(tw + 0.8, 120, 2), ti === 0 ? this.neonCyanMat : this.neonMagentaMat);
        win.position.set(tx, 140, td / 2);
        chunkGroup.add(win);
      });

      chunkColliders.push(
        { x: worldX - 48, z: worldZ, width: tw, depth: td, height: t1H, radius: 30 },
        { x: worldX + 48, z: worldZ, width: tw, depth: td, height: t2H, radius: 30 }
      );

    } else if (archetype === 2) {
      // --- ARCHETYPE 2: DENSE NEO-TOKYO URBAN ALLEYWAYS (5 to 7 staggered towers inside block) ---
      const towerCount = 5 + Math.floor(seed * 3);
      for (let t = 0; t < towerCount; t++) {
        const tSeed = this.hash2D(cx * 7 + t, cz * 11 + t);
        const col = t % 3;
        const row = Math.floor(t / 3);
        const tox = -60 + col * 50 + (tSeed - 0.5) * 10;
        const toz = -60 + row * 50 + (this.hash2D(cx, t) - 0.5) * 10;

        const tw = 24 + tSeed * 16;
        const td = 24 + this.hash2D(t, cz) * 16;
        const th = 90 + tSeed * 290; // Varied heights from low 90m to 380m!

        const mat = this.facadeMaterials[(t + cx) % this.facadeMaterials.length];
        const tower = new THREE.Mesh(this.createBuildingBoxGeometry(tw, th, td), mat);
        tower.position.set(tox, th / 2, toz);
        tower.rotation.y = (t % 2 === 0 ? 0 : 0.25);
        chunkGroup.add(tower);

        // Neon facade accents
        const nMat = this.audioReactiveMeshes.neonMaterials[t % this.audioReactiveMeshes.neonMaterials.length];
        const nBand = new THREE.Mesh(new THREE.BoxGeometry(tw + 0.8, 2, td + 0.8), nMat);
        nBand.position.set(tox, th * 0.7, toz);
        chunkGroup.add(nBand);

        // Holographic ad
        if (tSeed > 0.45) {
          const bMat = this.audioReactiveMeshes.billboardMaterials[t % this.audioReactiveMeshes.billboardMaterials.length];
          const bWidth = tw * 0.85;
          const billboard = new THREE.Mesh(new THREE.PlaneGeometry(bWidth, bWidth * 0.5), bMat);
          billboard.position.set(tox, th * 0.55, toz + td / 2 + 0.6);
          chunkGroup.add(billboard);
        }

        chunkColliders.push({
          x: worldX + tox,
          z: worldZ + toz,
          width: tw,
          depth: td,
          height: th,
          radius: Math.sqrt(tw * tw + td * td) / 2
        });
      }

    } else if (archetype === 3) {
      // --- ARCHETYPE 3: CYLINDRICAL ROTUNDA & ANGLED GLASS MONOLITH ---
      const rotundaH = 260 + seed * 90;
      const rotundaR = 32;
      const rotundaGeo = this.createBuildingCylinderGeometry(rotundaR, rotundaH, 24);
      const rotunda = new THREE.Mesh(rotundaGeo, this.matTeal);
      rotunda.position.set(-45, rotundaH / 2, 10);
      chunkGroup.add(rotunda);

      // Glowing rings around cylinder
      for (let r = 1; r <= 3; r++) {
        const ringGeo = new THREE.TorusGeometry(rotundaR + 0.8, 1.2, 8, 24);
        ringGeo.rotateX(Math.PI / 2);
        const ring = new THREE.Mesh(ringGeo, this.neonLimeMat);
        ring.position.set(-45, rotundaH * (r * 0.25), 10);
        chunkGroup.add(ring);
      }

      // Angled Sharp Monolith with thousands of glowing windows
      const monoH = 340 + seed * 120;
      const monoW = 46;
      const monoD = 46;
      const mono = new THREE.Mesh(this.createBuildingBoxGeometry(monoW, monoH, monoD), this.matCrimson);
      mono.position.set(45, monoH / 2, -20);
      mono.rotation.y = Math.PI / 4; // 45-degree angled diamond silhouette
      chunkGroup.add(mono);

      // Luminous corner beacon
      const monoApex = new THREE.Mesh(new THREE.ConeGeometry(8, 24, 4), this.neonAmberMat);
      monoApex.position.set(45, monoH + 12, -20);
      monoApex.rotation.y = Math.PI / 4;
      chunkGroup.add(monoApex);

      chunkColliders.push(
        { x: worldX - 45, z: worldZ + 10, width: rotundaR * 2, depth: rotundaR * 2, height: rotundaH, radius: rotundaR },
        { x: worldX + 45, z: worldZ - 20, width: monoW, depth: monoD, height: monoH, radius: 34 }
      );

    } else {
      // --- ARCHETYPE 4: CYBER PLAZA & COLOSSAL 520M ORBITAL TRANSMISSION SPIRE ---
      const spireMat = this.matTitanium;
      const spireH = 500;
      const baseW = 34;

      // Base tower
      const spireBase = new THREE.Mesh(this.createBuildingBoxGeometry(baseW, 140, baseW), spireMat);
      spireBase.position.set(0, 70, 0);
      chunkGroup.add(spireBase);

      // Needle mast
      const mastGeo = new THREE.CylinderGeometry(1.5, 7.0, 360, 10);
      const mast = new THREE.Mesh(mastGeo, this.matTitanium);
      mast.position.set(0, 140 + 180, 0);
      chunkGroup.add(mast);

      // High-altitude transmission disc rings
      [280, 380, 460].forEach((ringY, ri) => {
        const dGeo = new THREE.CylinderGeometry(18 - ri * 4, 18 - ri * 4, 3, 16);
        const disc = new THREE.Mesh(dGeo, this.neonCyanMat);
        disc.position.set(0, ringY, 0);
        chunkGroup.add(disc);
      });

      chunkColliders.push({
        x: worldX,
        z: worldZ,
        width: baseW,
        depth: baseW,
        height: spireH,
        radius: 26
      });

      // Low 45m commercial blocks around the open plaza
      const plazaBlocks = [
        { ox: -65, oz: -65, w: 40, d: 40, h: 48 },
        { ox: 48, oz: 24, w: 32, d: 32, h: 52 }
      ];
      plazaBlocks.forEach((pb, pidx) => {
        const pMat = this.facadeMaterials[(pidx + 3) % this.facadeMaterials.length];
        const pMesh = new THREE.Mesh(this.createBuildingBoxGeometry(pb.w, pb.h, pb.d), pMat);
        pMesh.position.set(pb.ox, pb.h / 2, pb.oz);
        chunkGroup.add(pMesh);

        chunkColliders.push({
          x: worldX + pb.ox,
          z: worldZ + pb.oz,
          width: pb.w,
          depth: pb.d,
          height: pb.h,
          radius: 26
        });
      });
    }

    // --- 🛣️ REAL MULTI-LANE ASPHALT ROADS & SIDEWALKS SYSTEM ---
    const roadW = 28;
    const roadLen = this.chunkSize;

    // 1. Asphalt Road Surfaces
    // East-West Avenue (+Z side at z = 96)
    const roadEW = new THREE.Mesh(new THREE.PlaneGeometry(roadLen, roadW), this.roadMat);
    roadEW.rotateX(-Math.PI / 2);
    roadEW.position.set(0, 0.08, 96);
    chunkGroup.add(roadEW);

    // North-South Avenue (+X side at x = 96)
    const roadNS = new THREE.Mesh(new THREE.PlaneGeometry(roadW, roadLen), this.roadMat);
    roadNS.rotateX(-Math.PI / 2);
    roadNS.position.set(96, 0.08, 0);
    chunkGroup.add(roadNS);

    // 2. Raised Concrete Sidewalks (height 0.22m, slate grey concrete)
    // NS West Sidewalk (x = 80, width 4)
    const swNSW = new THREE.Mesh(new THREE.BoxGeometry(4, 0.22, roadLen), this.sidewalkMat);
    swNSW.position.set(80, 0.11, 0);
    chunkGroup.add(swNSW);

    // NS East Sidewalk (x = 112, width 4)
    const swNSE = new THREE.Mesh(new THREE.BoxGeometry(4, 0.22, roadLen), this.sidewalkMat);
    swNSE.position.set(112, 0.11, 0);
    chunkGroup.add(swNSE);

    // EW South Sidewalk (z = 80, width 4)
    const swEWS = new THREE.Mesh(new THREE.BoxGeometry(roadLen, 0.22, 4), this.sidewalkMat);
    swEWS.position.set(0, 0.11, 80);
    chunkGroup.add(swEWS);

    // EW North Sidewalk (z = 112, width 4)
    const swEWN = new THREE.Mesh(new THREE.BoxGeometry(roadLen, 0.22, 4), this.sidewalkMat);
    swEWN.position.set(0, 0.11, 112);
    chunkGroup.add(swEWN);

    // 3. Glowing Neon Curbs (trims both edges of each avenue)
    const curbNSW = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.28, roadLen), this.curbCyanMat);
    curbNSW.position.set(82, 0.14, 0);
    chunkGroup.add(curbNSW);

    const curbNSE = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.28, roadLen), this.curbMagentaMat);
    curbNSE.position.set(110, 0.14, 0);
    chunkGroup.add(curbNSE);

    const curbEWS = new THREE.Mesh(new THREE.BoxGeometry(roadLen, 0.28, 0.5), this.curbCyanMat);
    curbEWS.position.set(0, 0.14, 82);
    chunkGroup.add(curbEWS);

    const curbEWN = new THREE.Mesh(new THREE.BoxGeometry(roadLen, 0.28, 0.5), this.curbMagentaMat);
    curbEWN.position.set(0, 0.14, 110);
    chunkGroup.add(curbEWN);

    // 4. Centerline Dividers (Double Dashed Amber Neon)
    const dashCount = 10;
    for (let d = 0; d < dashCount; d++) {
      const dPos = (d / dashCount - 0.5) * roadLen + 11;
      // Skip intersection box (82 to 110)
      if (Math.abs(dPos - 96) < 18) continue;

      // North-South Centerline
      const dashNS = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 9), this.roadMarkingAmberMat);
      dashNS.rotateX(-Math.PI / 2);
      dashNS.position.set(96, 0.12, dPos);
      chunkGroup.add(dashNS);

      // East-West Centerline
      const dashEW = new THREE.Mesh(new THREE.PlaneGeometry(9, 0.8), this.roadMarkingAmberMat);
      dashEW.rotateX(-Math.PI / 2);
      dashEW.position.set(dPos, 0.12, 96);
      chunkGroup.add(dashEW);

      // Lane Divider Dashes (Cyan/White) at offsets ±5.8m
      [-5.8, 5.8].forEach(off => {
        const laneNS = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 7), this.roadMarkingCyanMat);
        laneNS.rotateX(-Math.PI / 2);
        laneNS.position.set(96 + off, 0.12, dPos);
        chunkGroup.add(laneNS);

        const laneEW = new THREE.Mesh(new THREE.PlaneGeometry(7, 0.5), this.roadMarkingCyanMat);
        laneEW.rotateX(-Math.PI / 2);
        laneEW.position.set(dPos, 0.12, 96 + off);
        chunkGroup.add(laneEW);
      });
    }

    // 5. Glowing Pedestrian Crosswalks & Stop Lines at 4-Way Intersection
    const crosswalkConfigs = [
      { x: 96, z: 80, isH: false },  // South entrance
      { x: 96, z: 112, isH: false }, // North entrance
      { x: 80, z: 96, isH: true },   // West entrance
      { x: 112, z: 96, isH: true }   // East entrance
    ];

    crosswalkConfigs.forEach(cw => {
      // Stop line
      if (cw.isH) {
        const stopLine = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 24), this.roadMarkingStopMat);
        stopLine.rotateX(-Math.PI / 2);
        stopLine.position.set(cw.x > 96 ? cw.x + 3 : cw.x - 3, 0.13, cw.z);
        chunkGroup.add(stopLine);

        // Zebra stripes
        for (let st = -4; st <= 4; st++) {
          const stripe = new THREE.Mesh(new THREE.PlaneGeometry(5, 1.4), this.roadMarkingCyanMat);
          stripe.rotateX(-Math.PI / 2);
          stripe.position.set(cw.x, 0.13, cw.z + st * 2.6);
          chunkGroup.add(stripe);
        }
      } else {
        const stopLine = new THREE.Mesh(new THREE.PlaneGeometry(24, 1.2), this.roadMarkingStopMat);
        stopLine.rotateX(-Math.PI / 2);
        stopLine.position.set(cw.x, 0.13, cw.z > 96 ? cw.z + 3 : cw.z - 3);
        chunkGroup.add(stopLine);

        // Zebra stripes
        for (let st = -4; st <= 4; st++) {
          const stripe = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 5), this.roadMarkingCyanMat);
          stripe.rotateX(-Math.PI / 2);
          stripe.position.set(cw.x + st * 2.6, 0.13, cw.z);
          chunkGroup.add(stripe);
        }
      }
    });

    // 6. Overhead Cyber Highway Gantry Arch at Intersection Approach (z = 70)
    const gantryGroup = new THREE.Group();
    // Two steel support columns
    const colGeo = new THREE.BoxGeometry(0.8, 11, 0.8);
    const colL = new THREE.Mesh(colGeo, this.gantryMat);
    colL.position.set(81.5, 5.5, 70);
    const colR = new THREE.Mesh(colGeo, this.gantryMat);
    colR.position.set(110.5, 5.5, 70);
    // Overhead crossbar
    const crossGeo = new THREE.BoxGeometry(29.8, 1.2, 1.2);
    const crossBar = new THREE.Mesh(crossGeo, this.gantryMat);
    crossBar.position.set(96, 10.5, 70);
    gantryGroup.add(colL, colR, crossBar);

    // 4 Glowing holographic lane signs on the gantry
    [-8.2, -3.8, 3.8, 8.2].forEach((lx, li) => {
      const signMat = (li === 0 || li === 3) ? this.roadMarkingAmberMat : this.signGreenMat;
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.4), signMat);
      sign.position.set(96 + lx, 9.2, 70.65);
      gantryGroup.add(sign);
    });
    chunkGroup.add(gantryGroup);

    // 7. Streetlight Lampposts along sidewalks (every 55m)
    [-55, 0].forEach(lpOffset => {
      const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.4, 8, 0.4), this.gantryMat);
      lamp.position.set(80.5, 4, lpOffset);
      const arm = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.3, 0.4), this.gantryMat);
      arm.position.set(82.2, 8, lpOffset);
      const head = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.25, 0.6), this.neonCyanMat);
      head.position.set(83.6, 7.8, lpOffset);
      chunkGroup.add(lamp, arm, head);
    });

    // --- 🚄 ELEVATED MAGLEV HIGH-SPEED SKYWAY TRACKS (Altitude y = 44m) ---
    const trackH = 43.6;

    // Track A Guideway Beam (z = 48, Eastbound)
    const trackA = new THREE.Mesh(new THREE.BoxGeometry(roadLen, 1.6, 2.8), this.maglevTrackMat);
    trackA.position.set(0, trackH, 48);
    chunkGroup.add(trackA);

    // Track B Guideway Beam (z = 54, Westbound)
    const trackB = new THREE.Mesh(new THREE.BoxGeometry(roadLen, 1.6, 2.8), this.maglevTrackMat);
    trackB.position.set(0, trackH, 54);
    chunkGroup.add(trackB);

    // Central Steel Maintenance Catwalk (z = 51)
    const catwalk = new THREE.Mesh(new THREE.BoxGeometry(roadLen, 0.25, 3.2), this.maglevTrackMat);
    catwalk.position.set(0, trackH - 0.5, 51);
    chunkGroup.add(catwalk);

    // Continuous Glowing Magnetic Induction Power Rails
    // Track A rails (cyan)
    const railA1 = new THREE.Mesh(new THREE.BoxGeometry(roadLen, 0.16, 0.22), this.maglevRailCyanMat);
    railA1.position.set(0, trackH + 0.85, 48 - 1.35);
    const railA2 = new THREE.Mesh(new THREE.BoxGeometry(roadLen, 0.16, 0.22), this.maglevRailCyanMat);
    railA2.position.set(0, trackH + 0.85, 48 + 1.35);
    chunkGroup.add(railA1, railA2);

    // Track B rails (amber)
    const railB1 = new THREE.Mesh(new THREE.BoxGeometry(roadLen, 0.16, 0.22), this.maglevRailAmberMat);
    railB1.position.set(0, trackH + 0.85, 54 - 1.35);
    const railB2 = new THREE.Mesh(new THREE.BoxGeometry(roadLen, 0.16, 0.22), this.maglevRailAmberMat);
    railB2.position.set(0, trackH + 0.85, 54 + 1.35);
    chunkGroup.add(railB1, railB2);

    // Heavy Structural Support Pylons (at x = -55 and x = +55)
    [-55, 55].forEach(px => {
      // Ground foundation pier
      const pier = new THREE.Mesh(new THREE.BoxGeometry(4.5, 2.0, 14), this.maglevTrackMat);
      pier.position.set(px, 1.0, 51);
      chunkGroup.add(pier);

      // Dual upright support columns
      const colS = new THREE.Mesh(new THREE.BoxGeometry(2.0, 42, 2.4), this.maglevTrackMat);
      colS.position.set(px, 21, 46.5);
      const colN = new THREE.Mesh(new THREE.BoxGeometry(2.0, 42, 2.4), this.maglevTrackMat);
      colN.position.set(px, 21, 55.5);
      chunkGroup.add(colS, colN);

      // Heavy crossbeam head cradling the tracks
      const head = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.2, 13.5), this.maglevTrackMat);
      head.position.set(px, 42.0, 51);
      chunkGroup.add(head);

      // Diagonal structural brace struts
      const strutS = new THREE.Mesh(new THREE.BoxGeometry(1.4, 8, 1.4), this.maglevTrackMat);
      strutS.position.set(px, 38, 44.5);
      strutS.rotateX(0.4);
      const strutN = new THREE.Mesh(new THREE.BoxGeometry(1.4, 8, 1.4), this.maglevTrackMat);
      strutN.position.set(px, 38, 57.5);
      strutN.rotateX(-0.4);
      chunkGroup.add(strutS, strutN);

      // Blinking red aviation warning beacons on pylon tips
      [-6.8, 6.8].forEach(bz => {
        const beacon = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.5, 0.35), this.taillightMat);
        beacon.position.set(px, 43.5, 51 + bz);
        chunkGroup.add(beacon);
      });

      // Register pylon collider for drone obstacle radar
      chunkColliders.push({
        x: worldX + px,
        z: worldZ + 51,
        width: 4.5,
        depth: 14,
        height: 44,
        radius: 8
      });
    });

    // Register chunk colliders for obstacle radar
    const chunkKey = `${cx},${cz}`;
    this.buildingColliders.set(chunkKey, chunkColliders);

    return chunkGroup;
  }

  // --- 🛡️ PREDICTIVE 3D BUILDING COLLISION RADAR ---
  // Returns evasive steering turn direction, whisker clearance, and soft repulsion vector
  checkObstacleRadar(dronePos, droneDir, lookaheadDist = 100) {
    let closestDist = Infinity;
    let closestObstacle = null;
    let pushX = 0;
    let pushZ = 0;

    const dirX = droneDir.x;
    const dirZ = droneDir.z;

    // Whisker directions for spatial clearance evaluation (Left: +25 deg, Right: -25 deg)
    const cosW = 0.906; // cos(25 deg)
    const sinW = 0.423; // sin(25 deg)
    // Left whisker: rotated by +25 deg (turns towards -X when facing -Z)
    const leftDirX = dirX * cosW - dirZ * sinW;
    const leftDirZ = dirX * sinW + dirZ * cosW;
    // Right whisker: rotated by -25 deg
    const rightDirX = dirX * cosW + dirZ * sinW;
    const rightDirZ = -dirX * sinW + dirZ * cosW;

    let minLeftDist = lookaheadDist;
    let minRightDist = lookaheadDist;

    for (const [key, colliders] of this.buildingColliders.entries()) {
      for (let i = 0; i < colliders.length; i++) {
        const b = colliders[i];

        // 1. Altitude check: If drone is cruising higher than building top, no collision!
        if (dronePos.y > b.height + 14) continue;

        const dx = b.x - dronePos.x;
        const dz = b.z - dronePos.z;
        const distSq = dx * dx + dz * dz;

        // Bounding circle clearance
        const safeRadius = b.radius + 16;

        // Hard cushion push if drone is dangerously close to the building perimeter
        const centerDist = Math.sqrt(distSq);
        if (centerDist < safeRadius) {
          const overlap = safeRadius - centerDist;
          pushX -= (dx / (centerDist || 1)) * overlap;
          pushZ -= (dz / (centerDist || 1)) * overlap;
        }

        // 2. Forward projection check along drone flight trajectory
        const forwardProj = dx * dirX + dz * dirZ;
        if (forwardProj > 0 && forwardProj < lookaheadDist) {
          // Perpendicular distance to flight line (lateral offset)
          // R = (-dirZ, dirX). lateralDist = -dx * dirZ + dz * dirX
          const lateralDist = -dx * dirZ + dz * dirX;
          if (Math.abs(lateralDist) < safeRadius) {
            if (forwardProj < closestDist) {
              closestDist = forwardProj;
              // If building is to the right (lateralDist >= 0), steer LEFT (+1).
              // If building is to the left (lateralDist < 0), steer RIGHT (-1).
              const avoidDir = lateralDist >= 0 ? 1 : -1;
              const urgency = Math.max(0.2, 1.0 - (forwardProj / lookaheadDist));

              closestObstacle = {
                collisionAhead: true,
                avoidDir,
                urgency,
                forwardDist: forwardProj,
                buildingHeight: b.height,
                lateralDist
              };
            }
          }
        }

        // 3. Whisker projections to assess open space on left vs right
        const leftProj = dx * leftDirX + dz * leftDirZ;
        if (leftProj > 0 && leftProj < lookaheadDist) {
          const leftLat = -dx * leftDirZ + dz * leftDirX;
          if (Math.abs(leftLat) < safeRadius) {
            minLeftDist = Math.min(minLeftDist, leftProj);
          }
        }

        const rightProj = dx * rightDirX + dz * rightDirZ;
        if (rightProj > 0 && rightProj < lookaheadDist) {
          const rightLat = -dx * rightDirZ + dz * rightDirX;
          if (Math.abs(rightLat) < safeRadius) {
            minRightDist = Math.min(minRightDist, rightProj);
          }
        }
      }
    }

    if (closestObstacle) {
      closestObstacle.pushX = pushX;
      closestObstacle.pushZ = pushZ;
      closestObstacle.minLeftDist = minLeftDist;
      closestObstacle.minRightDist = minRightDist;
      // If building is nearly dead-center, steer towards the side with more open space
      if (Math.abs(closestObstacle.lateralDist) < 12) {
        closestObstacle.avoidDir = minLeftDist >= minRightDist ? 1 : -1;
      }
      return closestObstacle;
    }

    if (pushX !== 0 || pushZ !== 0) {
      return { collisionAhead: false, pushX, pushZ, minLeftDist, minRightDist };
    }

    return null;
  }

  // Update infinite chunks based on drone world position
  update(dronePos, audioLevels, delta) {
    const centerChunkX = Math.floor(dronePos.x / this.chunkSize);
    const centerChunkZ = Math.floor(dronePos.z / this.chunkSize);

    // Keep ground grid centered beneath drone
    if (this.groundMesh) {
      this.groundMesh.position.x = dronePos.x;
      this.groundMesh.position.z = dronePos.z;
      this.groundGrid.position.x = dronePos.x;
      this.groundGrid.position.z = dronePos.z;
    }

    // Chunk Pooling
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
            this.cityGroup.add(newChunk);
            this.chunkPool.set(key, { mesh: newChunk, cx, cz });
          }
        }
      }

      // Dispose distant chunks & delete their colliders
      for (const [key, data] of this.chunkPool.entries()) {
        if (!neededKeys.has(key)) {
          this.cityGroup.remove(data.mesh);
          data.mesh.traverse(child => {
            if (child.isMesh && child.geometry) {
              child.geometry.dispose();
            }
          });
          this.chunkPool.delete(key);
          this.buildingColliders.delete(key);
        }
      }
    }

    // Audio-Reactivity
    const bass = audioLevels.bass || 0;
    const mid = audioLevels.mid || 0;
    const treble = audioLevels.treble || 0;
    const beat = audioLevels.beat || 0;

    // Neon glow pulse on music beats
    const cyanColor = new THREE.Color(0x00f3ff).multiplyScalar(1.0 + mid * 0.45 + beat * 0.35);
    this.neonCyanMat.color.copy(cyanColor);

    const magentaColor = new THREE.Color(0xff007f).multiplyScalar(1.0 + bass * 0.5 + beat * 0.35);
    this.neonMagentaMat.color.copy(magentaColor);

    const amberColor = new THREE.Color(0xffaa00).multiplyScalar(1.0 + treble * 0.35);
    this.neonAmberMat.color.copy(amberColor);

    const limeColor = new THREE.Color(0x00ffaa).multiplyScalar(1.0 + mid * 0.4);
    this.neonLimeMat.color.copy(limeColor);

    // Searchlights
    this.searchlightGroup.position.x = dronePos.x;
    this.searchlightGroup.position.z = dronePos.z;

    this.audioReactiveMeshes.searchlights.forEach((beam) => {
      beam.rotation.y += beam.userData.rotSpeed * delta;
      beam.userData.mat.opacity = 0.14 + mid * 0.16;
    });

    // Billboards
    this.audioReactiveMeshes.billboardMaterials.forEach(bMat => {
      bMat.opacity = 0.85 + mid * 0.15;
    });

    // Ground Grid
    if (this.groundGrid) {
      const gridIntensity = 0.35 + bass * 0.45;
      this.groundGrid.material.color.setRGB(0, 0.55 * gridIntensity, 0.75 * gridIntensity);
    }

    // Audio-reactive skyscraper window pulse (controlled to keep neon colors pure & prevent white burnout)
    const winGlow = 0.58 + mid * 0.16 + beat * 0.14;
    this.audioReactiveMeshes.windowMaterials.forEach(m => {
      m.emissiveIntensity = winGlow;
    });

    // --- 🚗 ANIMATE DYNAMIC MULTI-LANE CITY TRAFFIC ---
    this.simTime += delta;
    const droneChunkX = Math.floor(dronePos.x / this.chunkSize);
    const droneChunkZ = Math.floor(dronePos.z / this.chunkSize);
    const maxWrapDist = 440;

    this.trafficCars.forEach(car => {
      const u = car.userData;
      if (u.isFlying) {
        // High-altitude skyway cruisers
        car.position.x += u.vx * delta;
        car.position.z += u.vz * delta;

        const dx = car.position.x - dronePos.x;
        const dz = car.position.z - dronePos.z;
        if (dx > maxWrapDist) car.position.x -= maxWrapDist * 2;
        else if (dx < -maxWrapDist) car.position.x += maxWrapDist * 2;
        if (dz > maxWrapDist) car.position.z -= maxWrapDist * 2;
        else if (dz < -maxWrapDist) car.position.z += maxWrapDist * 2;

        car.position.y = u.baseY + Math.sin(this.simTime * 2.8 + u.seed) * 0.85;
      } else if (u.isNS) {
        // Ground hovercar cruising along North-South Avenue
        car.position.z += u.vz * delta;

        const dz = car.position.z - dronePos.z;
        if (dz > maxWrapDist) car.position.z -= maxWrapDist * 2;
        else if (dz < -maxWrapDist) car.position.z += maxWrapDist * 2;

        // Lock X strictly to avenue lane relative to drone position
        const targetAvenueX = (droneChunkX + u.aveRel) * this.chunkSize + 96 + u.laneOffset;
        car.position.x = targetAvenueX;
        car.position.y = u.baseY + Math.sin(this.simTime * 4.0 + u.seed) * 0.14;
      } else {
        // Ground hovercar cruising along East-West Avenue
        car.position.x += u.vx * delta;

        const dx = car.position.x - dronePos.x;
        if (dx > maxWrapDist) car.position.x -= maxWrapDist * 2;
        else if (dx < -maxWrapDist) car.position.x += maxWrapDist * 2;

        // Lock Z strictly to avenue lane relative to drone position
        const targetAvenueZ = (droneChunkZ + u.aveRel) * this.chunkSize + 96 + u.laneOffset;
        car.position.z = targetAvenueZ;
        car.position.y = u.baseY + Math.sin(this.simTime * 4.0 + u.seed) * 0.14;
      }
    });

    // Audio-reactive car underglow and taillight pulse on music beats
    const underglowIntensity = 0.85 + bass * 0.45 + beat * 0.40;
    this.underglowCyanMat.opacity = Math.min(1.0, underglowIntensity);
    this.underglowMagentaMat.opacity = Math.min(1.0, underglowIntensity);
    this.trailMat.opacity = Math.min(0.95, 0.60 + beat * 0.35);

    // --- 🚄 ANIMATE HIGH-SPEED ELEVATED MAGLEV BULLET TRAINS ---
    const maxTrainWrap = 650;
    this.maglevTrains.forEach(train => {
      const u = train.userData;
      train.position.x += u.vx * delta;

      // Infinite smooth wrapping along X around drone position
      const dx = train.position.x - dronePos.x;
      if (dx > maxTrainWrap) train.position.x -= maxTrainWrap * 2;
      else if (dx < -maxTrainWrap) train.position.x += maxTrainWrap * 2;

      // Keep train locked to the elevated track row nearest to the drone
      const targetTrackZ = droneChunkZ * this.chunkSize + u.trackZ;
      train.position.z = targetTrackZ;

      // Magnetic levitation hover float
      train.position.y = u.baseY + Math.sin(this.simTime * 5.5 + u.seed) * 0.12;
    });

    // Audio-reactive maglev power rail and levitation field pulse
    const levIntensity = 0.85 + bass * 0.50 + beat * 0.40;
    this.trainUnderglowLevMat.opacity = Math.min(1.0, levIntensity);
    this.trainUnderglowMagMat.opacity = Math.min(1.0, levIntensity);
    this.maglevRailCyanMat.color.setRGB(0, 0.95 * (1.0 + treble * 0.35), 1.0);
  }
}
