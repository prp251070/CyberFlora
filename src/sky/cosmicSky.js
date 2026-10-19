import * as THREE from 'three';

/**
 * CosmicSky - High-Fidelity Celestial Galaxy Sky System
 * Features:
 * - Deep dark blue gradient celestial dome with starlight depth
 * - Detailed 3D Moon with procedural craters, lunar maria, and atmospheric corona halo
 * - Sweeping Milky Way galactic dust band with 8,000+ stars and glowing dust lane billows
 * - Real iconic Constellations with glowing asterism lines (Orion, Big Dipper, Cassiopeia, Cygnus, Taurus, Polaris, Sirius)
 * - Detailed Spiral Galaxies (Andromeda M31 with logarithmic arms & core, face-on galaxy)
 * - Volumetric Cosmic Nebulae (Orion M42, Carina/Rosette, Veil supernova remnant)
 * - Star Clusters (The Pleiades M45 with blue reflection nebulosity, Hercules M13 Globular Cluster)
 * - 4,500+ realistic multi-magnitude twinkling stars with true spectral color temperatures
 */
export class CosmicSky {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.group.name = 'CosmicSkySystem';
    this.scene.add(this.group);

    this.elapsedTime = 0;
    this.twinkleStars = null;

    // Create procedural textures on the fly (Zero HTTP latency, zero 404s)
    this.textures = {
      star: this.generateStarTexture(),
      prominentStar: this.generateProminentStarTexture(),
      moon: this.generateMoonTexture(),
      moonGlow: this.generateGlowTexture(128, 'rgba(165, 180, 252, 0.9)', 'rgba(79, 70, 229, 0.0)'),
      nebula: this.generateNebulaPuffTexture(),
      galaxyCore: this.generateGalaxyCoreTexture()
    };

    // Build the cosmos
    this.createSkyDome();
    this.createMoon();
    this.createMilkyWay();
    this.createConstellations();
    this.createGalaxies();
    this.createNebulae();
    this.createStarClusters();
    this.createBackgroundStarfield();

    // Ensure all celestial objects ignore scene fog so they remain razor-sharp and crystal-clear
    this.group.traverse((obj) => {
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => { m.fog = false; });
        } else {
          obj.material.fog = false;
        }
      }
    });
  }

  // =========================================================================
  // 1. PROCEDURAL TEXTURE GENERATORS
  // =========================================================================

  /**
   * Soft circular star texture with bright core
   */
  generateStarTexture() {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    grad.addColorStop(0.15, 'rgba(235, 245, 255, 0.9)');
    grad.addColorStop(0.4, 'rgba(147, 197, 253, 0.45)');
    grad.addColorStop(0.8, 'rgba(99, 102, 241, 0.1)');
    grad.addColorStop(1.0, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    return texture;
  }

  /**
   * Prominent star beacon texture with subtle 4-point diffraction spike flare
   */
  generateProminentStarTexture() {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const c = size / 2;

    // Outer soft halo
    const halo = ctx.createRadialGradient(c, c, 0, c, c, c);
    halo.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    halo.addColorStop(0.12, 'rgba(224, 242, 254, 0.85)');
    halo.addColorStop(0.35, 'rgba(125, 211, 252, 0.35)');
    halo.addColorStop(0.7, 'rgba(99, 102, 241, 0.08)');
    halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = halo;
    ctx.fillRect(0, 0, size, size);

    // 4-point cross diffraction spikes (astronomical telescope spikes)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(c, 4);
    ctx.lineTo(c, size - 4);
    ctx.moveTo(4, c);
    ctx.lineTo(size - 4, c);
    ctx.stroke();

    // Soft diamond core
    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    return texture;
  }

  /**
   * High-Fidelity 1024x1024 Procedural Moon Texture:
   * Features lunar maria (basalt plains), crater rings with rim highlights, and Tycho ray streaks!
   */
  generateMoonTexture() {
    const size = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    // Base lunar highland tone: silvery pearl-grey with subtle micro-grain
    ctx.fillStyle = '#c5ccd6';
    ctx.fillRect(0, 0, size, size);

    // Procedural noise / highland variegation
    const imgData = ctx.getImageData(0, 0, size, size);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const n = (Math.random() - 0.5) * 18;
      data[i] = Math.min(255, Math.max(0, data[i] + n));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + n));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + n));
    }
    ctx.putImageData(imgData, 0, 0);

    // Helper: draw dark basalt lunar maria with organic soft borders
    const drawMare = (cx, cy, rx, ry, rotation, opacity, color = '#555b68') => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      ctx.scale(rx, ry);

      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
      grad.addColorStop(0, color);
      grad.addColorStop(0.7, color);
      grad.addColorStop(1, 'rgba(197, 204, 214, 0)');

      ctx.fillStyle = grad;
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.arc(0, 0, 1, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    // Major Lunar Maria (Sea of Tranquility, Oceanus Procellarum, Mare Serenitatis, Mare Imbrium, Mare Crisium)
    drawMare(size * 0.38, size * 0.42, 170, 130, 0.2, 0.72, '#484e5b'); // Oceanus Procellarum
    drawMare(size * 0.32, size * 0.52, 110, 95, -0.1, 0.68, '#464c58');
    drawMare(size * 0.48, size * 0.32, 120, 100, 0.15, 0.75, '#424855'); // Mare Imbrium
    drawMare(size * 0.62, size * 0.38, 105, 90, -0.2, 0.76, '#404652'); // Mare Serenitatis
    drawMare(size * 0.66, size * 0.50, 115, 95, 0.3, 0.78, '#3d434f'); // Mare Tranquillitatis
    drawMare(size * 0.62, size * 0.62, 95, 80, 0.1, 0.70, '#4a505c'); // Mare Fecunditatis
    drawMare(size * 0.80, size * 0.42, 65, 55, -0.1, 0.82, '#383e4a'); // Mare Crisium
    drawMare(size * 0.54, size * 0.66, 85, 70, 0.0, 0.65, '#525866'); // Mare Nectaris

    // Tycho-like crater ray system in the southern highlands
    const tychoX = size * 0.52;
    const tychoY = size * 0.82;

    ctx.save();
    ctx.globalAlpha = 0.45;
    ctx.strokeStyle = '#eef2f6';
    ctx.lineWidth = 1.6;
    for (let a = 0; a < Math.PI * 2; a += 0.08) {
      const len = 180 + Math.random() * 320;
      ctx.beginPath();
      ctx.moveTo(tychoX, tychoY);
      ctx.lineTo(tychoX + Math.cos(a) * len, tychoY + Math.sin(a) * len);
      ctx.stroke();
    }
    ctx.restore();

    // Copernicus and Kepler ray streaks
    const copernicusX = size * 0.44;
    const copernicusY = size * 0.44;
    ctx.save();
    ctx.globalAlpha = 0.35;
    ctx.strokeStyle = '#f1f5f9';
    ctx.lineWidth = 1.2;
    for (let a = 0; a < Math.PI * 2; a += 0.12) {
      const len = 90 + Math.random() * 150;
      ctx.beginPath();
      ctx.moveTo(copernicusX, copernicusY);
      ctx.lineTo(copernicusX + Math.cos(a) * len, copernicusY + Math.sin(a) * len);
      ctx.stroke();
    }
    ctx.restore();

    // Prominent impact crater rims (white rim highlight + dark shadow core)
    const drawCrater = (x, y, r, depth = 0.7) => {
      ctx.save();
      // Outer bright ejecta ring
      ctx.globalAlpha = 0.5;
      ctx.strokeStyle = '#f8fafc';
      ctx.lineWidth = Math.max(1, r * 0.15);
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.stroke();

      // Shadowed interior floor
      ctx.globalAlpha = depth;
      ctx.fillStyle = '#2f3540';
      ctx.beginPath();
      ctx.arc(x + r * 0.12, y + r * 0.12, r * 0.78, 0, Math.PI * 2);
      ctx.fill();

      // Central peak
      ctx.globalAlpha = 0.75;
      ctx.fillStyle = '#e2e8f0';
      ctx.beginPath();
      ctx.arc(x, y, Math.max(1, r * 0.2), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    // Draw prominent named craters
    drawCrater(tychoX, tychoY, 22, 0.85); // Tycho
    drawCrater(copernicusX, copernicusY, 20, 0.8); // Copernicus
    drawCrater(size * 0.34, size * 0.45, 14, 0.75); // Kepler
    drawCrater(size * 0.58, size * 0.76, 16, 0.75); // Clavius
    drawCrater(size * 0.42, size * 0.26, 18, 0.8); // Plato

    // Hundreds of smaller random craters across highlands
    for (let i = 0; i < 180; i++) {
      const cx = Math.random() * size;
      const cy = Math.random() * size;
      const cr = 2 + Math.random() * 8;
      drawCrater(cx, cy, cr, 0.4 + Math.random() * 0.35);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    return texture;
  }

  /**
   * Radial luminous glow texture with smooth exponential falloff
   */
  generateGlowTexture(size = 128, innerColor, outerColor) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const c = size / 2;

    const grad = ctx.createRadialGradient(c, c, 0, c, c, c);
    grad.addColorStop(0, innerColor);
    grad.addColorStop(0.2, innerColor);
    grad.addColorStop(0.55, 'rgba(99, 102, 241, 0.25)');
    grad.addColorStop(1, outerColor);

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    return texture;
  }

  /**
   * Organic wispy cloud puff for volumetric nebulae & Milky Way dust
   */
  generateNebulaPuffTexture() {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const c = size / 2;

    // Multi-center radial puffs to simulate complex turbulent interstellar gas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, size, size);

    const drawPuff = (px, py, pr, alpha) => {
      const grad = ctx.createRadialGradient(px, py, 0, px, py, pr);
      grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      grad.addColorStop(0.35, `rgba(255, 255, 255, ${alpha * 0.6})`);
      grad.addColorStop(0.7, `rgba(255, 255, 255, ${alpha * 0.2})`);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(px, py, pr, 0, Math.PI * 2);
      ctx.fill();
    };

    drawPuff(c, c, c * 0.9, 0.7);
    drawPuff(c - 25, c + 15, c * 0.65, 0.5);
    drawPuff(c + 28, c - 20, c * 0.6, 0.45);
    drawPuff(c + 10, c + 35, c * 0.55, 0.4);
    drawPuff(c - 30, c - 25, c * 0.5, 0.35);

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    return texture;
  }

  /**
   * Intense galactic core texture with warm nucleus and diamond flare
   */
  generateGalaxyCoreTexture() {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const c = size / 2;

    // Warm golden starlight core
    const grad = ctx.createRadialGradient(c, c, 0, c, c, c);
    grad.addColorStop(0, 'rgba(255, 255, 245, 1.0)');
    grad.addColorStop(0.12, 'rgba(254, 240, 138, 0.95)');
    grad.addColorStop(0.35, 'rgba(251, 146, 60, 0.45)');
    grad.addColorStop(0.65, 'rgba(168, 85, 247, 0.15)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    return texture;
  }

  // =========================================================================
  // 2. CELESTIAL SKY DOME (DEEP DARK BLUE SPACE GRADIENT)
  // =========================================================================

  createSkyDome() {
    // Inverted celestial hemisphere sphere at infinity (radius 4800, well beyond 1200m city)
    const domeGeo = new THREE.SphereGeometry(4800, 36, 24);

    // Custom shader for smooth, deep dark blue cosmic zenith-to-horizon gradient
    const domeMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      renderOrder: -9999,
      uniforms: {
        topColor: { value: new THREE.Color(0x020512) },    // Deepest cosmic midnight navy
        midColor: { value: new THREE.Color(0x050f28) },    // Dark celestial sapphire
        horizonColor: { value: new THREE.Color(0x091838) },// Dark blue starlight atmospheric haze
        bottomColor: { value: new THREE.Color(0x010206) }  // Below horizon void
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vWorldPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 horizonColor;
        uniform vec3 bottomColor;
        varying vec3 vWorldPosition;

        void main() {
          vec3 nPos = normalize(vWorldPosition);
          float y = nPos.y;

          vec3 finalColor;
          if (y >= 0.0) {
            if (y > 0.4) {
              float factor = (y - 0.4) / 0.6;
              finalColor = mix(midColor, topColor, factor);
            } else {
              float factor = y / 0.4;
              finalColor = mix(horizonColor, midColor, factor);
            }
          } else {
            float factor = clamp(-y * 2.5, 0.0, 1.0);
            finalColor = mix(horizonColor, bottomColor, factor);
          }

          // Subtle cosmic starlight micro-dither
          float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
          finalColor += (dither - 0.5) * 0.004;

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });

    this.skyDome = new THREE.Mesh(domeGeo, domeMat);
    this.skyDome.name = 'SkyDomeGradient';
    this.group.add(this.skyDome);
  }

  // =========================================================================
  // 3. THE MOON (DETAILED 3D LUNAR BODY & ATMOSPHERIC HALO)
  // =========================================================================

  createMoon() {
    this.moonGroup = new THREE.Group();
    this.moonGroup.name = 'MoonSystem';

    // Position high in the sky dome (majestic vantage angle)
    const moonDist = 4100;
    const moonDir = new THREE.Vector3(0.55, 0.62, -0.56).normalize();
    const moonPos = moonDir.clone().multiplyScalar(moonDist);
    this.moonGroup.position.copy(moonPos);

    // 1. Lunar 3D Sphere (radius 95)
    const moonGeo = new THREE.SphereGeometry(95, 36, 28);
    const moonMat = new THREE.MeshBasicMaterial({
      map: this.textures.moon,
      color: 0xf1f5f9,
      depthWrite: false
    });
    this.moonMesh = new THREE.Mesh(moonGeo, moonMat);
    this.moonMesh.rotation.y = 1.25;
    this.moonMesh.rotation.x = 0.35;
    this.moonMesh.renderOrder = -500;
    this.moonGroup.add(this.moonMesh);

    // 2. Atmospheric Lunar Corona / Halo Sprite (Soft ethereal glow)
    const haloMat = new THREE.SpriteMaterial({
      map: this.textures.moonGlow,
      color: 0xbfdbfe,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const moonHalo = new THREE.Sprite(haloMat);
    moonHalo.scale.set(650, 650, 1);
    moonHalo.renderOrder = -501;
    this.moonGroup.add(moonHalo);

    // 3. Outer Wide Celestial Glow
    const wideHaloMat = new THREE.SpriteMaterial({
      map: this.textures.moonGlow,
      color: 0x818cf8,
      transparent: true,
      opacity: 0.40,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const wideMoonHalo = new THREE.Sprite(wideHaloMat);
    wideMoonHalo.scale.set(1300, 1300, 1);
    wideMoonHalo.renderOrder = -502;
    this.moonGroup.add(wideMoonHalo);

    this.group.add(this.moonGroup);
  }

  // =========================================================================
  // 4. THE MILKY WAY (GALACTIC BAND & DUST LANES)
  // =========================================================================

  createMilkyWay() {
    this.milkyWayGroup = new THREE.Group();
    this.milkyWayGroup.name = 'MilkyWayGalacticBand';

    // Galactic Plane Orientation (tilted 58 degrees across the sky)
    const planeNormal = new THREE.Vector3(0.55, 0.72, 0.42).normalize();
    const planeU = new THREE.Vector3().crossVectors(planeNormal, new THREE.Vector3(0, 1, 0)).normalize();
    const planeV = new THREE.Vector3().crossVectors(planeNormal, planeU).normalize();

    // 1. Dense Particle Stream along Galactic Arc (8,000 stars)
    const count = 8000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const radius = 4300;
    const tempColor = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Angle along the celestial great circle arc
      const angle = Math.random() * Math.PI * 2;
      // Galactic bulge concentration (around angle = 1.0)
      const distFromBulge = Math.abs(Math.sin((angle - 1.0) * 0.5));
      const bulgeFactor = 1.0 - distFromBulge * 0.7;

      // Dispersion perpendicular to galactic equator
      const spreadW = (Math.random() + Math.random() - 1.0) * (260 * (1.3 - distFromBulge * 0.6));
      const spreadR = (Math.random() - 0.5) * 180;

      // Point on the tilted plane
      const r = radius + spreadR;
      const x = r * (Math.cos(angle) * planeU.x + Math.sin(angle) * planeV.x) + spreadW * planeNormal.x;
      const y = r * (Math.cos(angle) * planeU.y + Math.sin(angle) * planeV.y) + spreadW * planeNormal.y;
      const z = r * (Math.cos(angle) * planeU.z + Math.sin(angle) * planeV.z) + spreadW * planeNormal.z;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Realistic Galactic Stellar Colors:
      // Galactic Core = warm amber/golden starlight, Spiral Ridge = diamond-white & baby blue
      const p = Math.random();
      if (bulgeFactor > 0.7 && p < 0.45) {
        tempColor.setHSL(0.11 + Math.random() * 0.05, 0.85, 0.75); // Amber Gold Core
      } else if (p < 0.35) {
        tempColor.setHSL(0.58 + Math.random() * 0.08, 0.8, 0.85); // Starlight Cyan/Blue
      } else if (p < 0.7) {
        tempColor.setHSL(0.0, 0.0, 0.95); // Pure Diamond White
      } else {
        tempColor.setHSL(0.72 + Math.random() * 0.08, 0.6, 0.8); // Electric Violet Starlight
      }

      colors[i * 3] = tempColor.r;
      colors[i * 3 + 1] = tempColor.g;
      colors[i * 3 + 2] = tempColor.b;

      // Star Sizes: bulge has denser, brighter stars
      sizes[i] = (1.5 + Math.random() * 3.5) * (0.8 + bulgeFactor * 0.8);
    }

    const mwGeo = new THREE.BufferGeometry();
    mwGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    mwGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mwMat = new THREE.PointsMaterial({
      size: 4.0,
      vertexColors: true,
      map: this.textures.star,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const mwPoints = new THREE.Points(mwGeo, mwMat);
    mwPoints.renderOrder = -700;
    this.milkyWayGroup.add(mwPoints);

    // 2. Volumetric Glowing Galactic Dust Clouds (48 large soft billows along the arc)
    const dustBillows = 52;
    for (let j = 0; j < dustBillows; j++) {
      const angle = (j / dustBillows) * Math.PI * 2;
      const distFromBulge = Math.abs(Math.sin((angle - 1.0) * 0.5));
      const bulgeWeight = Math.max(0, 1.0 - distFromBulge * 1.2);

      const offsetU = (Math.random() - 0.5) * 160;
      const offsetV = (Math.random() - 0.5) * 160;
      const offsetW = (Math.random() - 0.5) * 120;

      const r = radius - 80;
      const bx = r * (Math.cos(angle) * planeU.x + Math.sin(angle) * planeV.x) + offsetW * planeNormal.x + offsetU * planeU.x;
      const by = r * (Math.cos(angle) * planeU.y + Math.sin(angle) * planeV.y) + offsetW * planeNormal.y + offsetV * planeV.y;
      const bz = r * (Math.cos(angle) * planeU.z + Math.sin(angle) * planeV.z) + offsetW * planeNormal.z;

      // Dust cloud color alternates between deep cosmic indigo, violet, and electric cyan
      let billowColor = 0x6366f1; // Electric indigo
      if (bulgeWeight > 0.4) {
        billowColor = 0xa855f7; // Purple/magenta near core
      } else if (j % 3 === 0) {
        billowColor = 0x38bdf8; // Starlight cyan
      } else if (j % 2 === 0) {
        billowColor = 0x818cf8; // Violet starlight
      }

      const dustSpriteMat = new THREE.SpriteMaterial({
        map: this.textures.nebula,
        color: billowColor,
        transparent: true,
        opacity: 0.14 + bulgeWeight * 0.16,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      const dustSprite = new THREE.Sprite(dustSpriteMat);
      dustSprite.position.set(bx, by, bz);
      const spriteScale = 550 + Math.random() * 450 + bulgeWeight * 300;
      dustSprite.scale.set(spriteScale, spriteScale, 1);
      dustSprite.renderOrder = -750;
      this.milkyWayGroup.add(dustSprite);
    }

    this.group.add(this.milkyWayGroup);
  }

  // =========================================================================
  // 5. ICONIC CONSTELLATIONS (ASTERISMS WITH GLOWING LINES & PROMINENT STARS)
  // =========================================================================

  createConstellations() {
    this.constellationGroup = new THREE.Group();
    this.constellationGroup.name = 'ConstellationsSystem';

    const r = 4250;

    // Helper: convert spherical coords (azimuth theta, elevation phi from horizon) to Vector3
    const sph = (azimuthDeg, elevationDeg) => {
      const az = (azimuthDeg * Math.PI) / 180;
      const el = (elevationDeg * Math.PI) / 180;
      return new THREE.Vector3(
        r * Math.cos(el) * Math.sin(az),
        r * Math.sin(el),
        r * Math.cos(el) * Math.cos(az)
      );
    };

    // Array of star beacons and line pairs
    const lineVertices = [];
    const prominentStars = [];

    // Helper to add star beacon
    const addStar = (pos, name, colorHex, size, isAlpha = false) => {
      prominentStars.push({ pos, name, colorHex, size, isAlpha });
    };

    // Helper to add connecting asterism line segment
    const addLine = (p1, p2) => {
      lineVertices.push(p1.x, p1.y, p1.z);
      lineVertices.push(p2.x, p2.y, p2.z);
    };

    // -----------------------------------------------------------------------
    // A. ORION (The Hunter) - High in South-West Sky
    // -----------------------------------------------------------------------
    const orionAz = 210;
    const orionEl = 44;

    const betelgeuse = sph(orionAz - 4.5, orionEl + 6.2); // Orange Supergiant
    const rigel = sph(orionAz + 4.8, orionEl - 6.5);       // Brilliant Blue Supergiant
    const bellatrix = sph(orionAz + 4.2, orionEl + 5.5);   // Blue-White
    const saiph = sph(orionAz - 4.2, orionEl - 6.8);       // Blue

    // Orion's Belt (Alnitak, Alnilam, Mintaka)
    const alnitak = sph(orionAz - 2.2, orionEl);
    const alnilam = sph(orionAz, orionEl + 0.2);
    const mintaka = sph(orionAz + 2.2, orionEl + 0.4);

    // Orion's Sword with M42 Great Nebula
    const swordTop = sph(orionAz - 0.2, orionEl - 1.6);
    const swordM42 = sph(orionAz - 0.1, orionEl - 2.8);
    const swordBot = sph(orionAz, orionEl - 3.8);

    // Register Orion Stars
    addStar(betelgeuse, 'Betelgeuse', 0xfb923c, 24, true); // Distinct orange-red glow
    addStar(rigel, 'Rigel', 0x93c5fd, 25, true);             // Diamond blue-white
    addStar(bellatrix, 'Bellatrix', 0xc7d2fe, 17);
    addStar(saiph, 'Saiph', 0x93c5fd, 16);
    addStar(alnitak, 'Alnitak', 0xe0e7ff, 18);
    addStar(alnilam, 'Alnilam', 0xf1f5f9, 20);
    addStar(mintaka, 'Mintaka', 0xe0e7ff, 18);
    addStar(swordTop, '42 Orionis', 0x93c5fd, 12);
    addStar(swordM42, 'Trapezium (M42)', 0xf43f5e, 18, true);
    addStar(swordBot, 'Iota Orionis', 0x93c5fd, 13);

    // Connect Orion Asterism Lines
    addLine(betelgeuse, bellatrix);
    addLine(betelgeuse, alnitak);
    addLine(bellatrix, mintaka);
    addLine(alnitak, alnilam);
    addLine(alnilam, mintaka);
    addLine(alnitak, saiph);
    addLine(mintaka, rigel);
    addLine(saiph, rigel);
    addLine(alnilam, swordTop);
    addLine(swordTop, swordM42);
    addLine(swordM42, swordBot);

    // -----------------------------------------------------------------------
    // B. URSA MAJOR (The Big Dipper / Great Bear) - North-West Sky
    // -----------------------------------------------------------------------
    const umAz = 330;
    const umEl = 58;

    const dubhe = sph(umAz - 5.5, umEl + 4.8);   // Pointer star to Polaris
    const merak = sph(umAz - 6.2, umEl - 1.2);   // Pointer star to Polaris
    const phecda = sph(umAz, umEl - 2.0);
    const megrez = sph(umAz + 0.8, umEl + 3.8);
    const alioth = sph(umAz + 6.8, umEl + 4.5);
    const mizar = sph(umAz + 12.5, umEl + 5.8);
    const alkaid = sph(umAz + 18.2, umEl + 4.2);

    addStar(dubhe, 'Dubhe', 0xfde047, 21, true);
    addStar(merak, 'Merak', 0xf8fafc, 19);
    addStar(phecda, 'Phecda', 0xf8fafc, 17);
    addStar(megrez, 'Megrez', 0xe2e8f0, 16);
    addStar(alioth, 'Alioth', 0x67e8f9, 22, true);
    addStar(mizar, 'Mizar', 0x93c5fd, 19);
    addStar(alkaid, 'Alkaid', 0x60a5fa, 20);

    // Dipper Bowl
    addLine(dubhe, merak);
    addLine(merak, phecda);
    addLine(phecda, megrez);
    addLine(megrez, dubhe);
    // Dipper Handle
    addLine(megrez, alioth);
    addLine(alioth, mizar);
    addLine(mizar, alkaid);

    // -----------------------------------------------------------------------
    // C. POLARIS (The North Star) & Pointer Line from Big Dipper
    // -----------------------------------------------------------------------
    const polaris = sph(0, 72); // Near Celestial True North
    addStar(polaris, 'Polaris', 0xfef08a, 26, true);

    // Faint navigation pointer line from Merak through Dubhe to Polaris!
    addLine(merak, dubhe);
    addLine(dubhe, polaris);

    // -----------------------------------------------------------------------
    // D. CASSIOPEIA (The Celestial 'W') - North-East Sky
    // -----------------------------------------------------------------------
    const casAz = 48;
    const casEl = 64;

    const schedar = sph(casAz - 8.2, casEl - 2.5);  // Orange Giant
    const caph = sph(casAz - 14.5, casEl + 2.2);
    const gammaCas = sph(casAz - 2.0, casEl + 4.8); // Center of W
    const ruchbah = sph(casAz + 4.5, casEl - 1.5);
    const segin = sph(casAz + 10.8, casEl + 3.2);

    addStar(schedar, 'Schedar', 0xfb923c, 21, true);
    addStar(caph, 'Caph', 0xf8fafc, 18);
    addStar(gammaCas, 'Gamma Cassiopeiae', 0x67e8f9, 21, true);
    addStar(ruchbah, 'Ruchbah', 0xe0e7ff, 17);
    addStar(segin, 'Segin', 0x93c5fd, 16);

    addLine(caph, schedar);
    addLine(schedar, gammaCas);
    addLine(gammaCas, ruchbah);
    addLine(ruchbah, segin);

    // -----------------------------------------------------------------------
    // E. CYGNUS (The Northern Cross / Swan) - Overhead Zenith Sky
    // -----------------------------------------------------------------------
    const cygAz = 115;
    const cygEl = 75;

    const deneb = sph(cygAz, cygEl + 7.5);          // Brilliant Blue-White Supergiant
    const sadr = sph(cygAz, cygEl);                 // Cross Center
    const albireo = sph(cygAz, cygEl - 9.8);        // Golden/Sapphire double star
    const gienah = sph(cygAz - 7.5, cygEl - 1.2);
    const fawaris = sph(cygAz + 7.5, cygEl + 1.2);

    addStar(deneb, 'Deneb', 0xe0f2fe, 25, true);
    addStar(sadr, 'Sadr', 0xfef08a, 19);
    addStar(albireo, 'Albireo', 0xfcd34d, 18, true);
    addStar(gienah, 'Gienah', 0x93c5fd, 17);
    addStar(fawaris, 'Fawaris', 0x93c5fd, 16);

    addLine(deneb, sadr);
    addLine(sadr, albireo);
    addLine(gienah, sadr);
    addLine(sadr, fawaris);

    // -----------------------------------------------------------------------
    // F. SIRIUS (Alpha Canis Majoris) - Brightest Star in the Entire Sky!
    // -----------------------------------------------------------------------
    const sirius = sph(182, 28);
    addStar(sirius, 'Sirius', 0xf8fafc, 34, true);

    // Canis Major body stars
    const mirzam = sph(177, 26);
    const wezen = sph(184, 18);
    const adhara = sph(181, 15);
    addStar(mirzam, 'Mirzam', 0x93c5fd, 18);
    addStar(wezen, 'Wezen', 0xfde047, 19);
    addStar(adhara, 'Adhara', 0x93c5fd, 18);
    addLine(sirius, mirzam);
    addLine(sirius, wezen);
    addLine(wezen, adhara);

    // -----------------------------------------------------------------------
    // G. TAURUS & ALDEBARAN (The Eye of the Bull)
    // -----------------------------------------------------------------------
    const aldebaran = sph(242, 38);
    const elnath = sph(248, 52);
    const tianguan = sph(252, 42);
    addStar(aldebaran, 'Aldebaran', 0xf97316, 26, true); // Fire Orange Giant
    addStar(elnath, 'Elnath', 0x93c5fd, 19);
    addStar(tianguan, 'Tianguan', 0xe0e7ff, 17);
    addLine(aldebaran, elnath);
    addLine(aldebaran, tianguan);

    // BUILD THREE.JS OBJECTS FOR CONSTELLATIONS
    // 1. Glowing Asterism Line Segments
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(lineVertices, 3));

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x7dd3fc, // Ethereal starlight cyan
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const linesMesh = new THREE.LineSegments(lineGeo, lineMat);
    linesMesh.renderOrder = -600;
    this.constellationGroup.add(linesMesh);

    // 2. Individual Prominent Star Flare Sprites
    prominentStars.forEach(s => {
      const spriteMat = new THREE.SpriteMaterial({
        map: s.isAlpha ? this.textures.prominentStar : this.textures.star,
        color: s.colorHex,
        transparent: true,
        opacity: s.isAlpha ? 0.96 : 0.82,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.copy(s.pos);
      const renderSize = s.size * (s.isAlpha ? 4.2 : 3.0);
      sprite.scale.set(renderSize, renderSize, 1);
      sprite.renderOrder = -550;
      this.constellationGroup.add(sprite);
    });

    this.group.add(this.constellationGroup);
  }

  // =========================================================================
  // 6. SPIRAL GALAXIES (ANDROMEDA M31 & FACE-ON SPIRAL)
  // =========================================================================

  createGalaxies() {
    this.galaxiesGroup = new THREE.Group();
    this.galaxiesGroup.name = 'GalaxiesSystem';

    // -----------------------------------------------------------------------
    // A. ANDROMEDA GALAXY (M31) - Majestic Inclined Grand Spiral
    // -----------------------------------------------------------------------
    const andromedaPos = new THREE.Vector3(-1800, 2900, 2200).normalize().multiplyScalar(4100);
    const m31Group = new THREE.Group();
    m31Group.position.copy(andromedaPos);
    m31Group.lookAt(0, 0, 0);
    // Tilt to 42 degrees astronomical inclination
    m31Group.rotateZ(0.72);
    m31Group.rotateX(0.48);

    // 1. Golden Core Nucleus Sprite
    const coreMat = new THREE.SpriteMaterial({
      map: this.textures.galaxyCore,
      color: 0xfef08a,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const coreSprite = new THREE.Sprite(coreMat);
    coreSprite.scale.set(380, 240, 1);
    coreSprite.renderOrder = -650;
    m31Group.add(coreSprite);

    // 2. Logarithmic Spiral Arms (2,800 stars)
    const armStars = 2800;
    const armPositions = new Float32Array(armStars * 3);
    const armColors = new Float32Array(armStars * 3);
    const colorHelper = new THREE.Color();

    for (let i = 0; i < armStars; i++) {
      // 2 main spiral arms offset by PI
      const armOffset = (i % 2 === 0) ? 0 : Math.PI;
      const t = Math.pow(Math.random(), 1.4); // denser towards core
      const angle = t * 5.2 + armOffset;
      const dist = 60 + t * 420;

      // Add radial & tangential scatter
      const scatter = (Math.random() - 0.5) * (35 + t * 55);
      const x = Math.cos(angle) * dist + scatter;
      const y = (Math.sin(angle) * dist + scatter) * 0.45; // elliptical disc projection
      const z = (Math.random() - 0.5) * 25;

      armPositions[i * 3] = x;
      armPositions[i * 3 + 1] = y;
      armPositions[i * 3 + 2] = z;

      // Color: Warm golden core to brilliant baby blue and magenta star-forming H-II regions
      if (t < 0.25) {
        colorHelper.setHSL(0.12, 0.8, 0.85); // Gold/amber
      } else if (Math.random() < 0.2) {
        colorHelper.setHSL(0.92, 0.9, 0.8);  // Magenta H-II region
      } else {
        colorHelper.setHSL(0.58 + Math.random() * 0.08, 0.85, 0.85); // Starlight blue
      }

      armColors[i * 3] = colorHelper.r;
      armColors[i * 3 + 1] = colorHelper.g;
      armColors[i * 3 + 2] = colorHelper.b;
    }

    const armGeo = new THREE.BufferGeometry();
    armGeo.setAttribute('position', new THREE.BufferAttribute(armPositions, 3));
    armGeo.setAttribute('color', new THREE.BufferAttribute(armColors, 3));

    const armMat = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      map: this.textures.star,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const armMesh = new THREE.Points(armGeo, armMat);
    armMesh.renderOrder = -640;
    m31Group.add(armMesh);

    // 3. Faint Outer Galactic Halo
    const haloMat = new THREE.SpriteMaterial({
      map: this.textures.nebula,
      color: 0x818cf8,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const m31Halo = new THREE.Sprite(haloMat);
    m31Halo.scale.set(780, 480, 1);
    m31Halo.renderOrder = -660;
    m31Group.add(m31Halo);

    this.galaxiesGroup.add(m31Group);
    this.andromedaGroup = m31Group; // for subtle rotation animation

    // -----------------------------------------------------------------------
    // B. DISTANT FACE-ON SPIRAL GALAXY (M33 / Pinwheel Style)
    // -----------------------------------------------------------------------
    const faceOnPos = new THREE.Vector3(2600, 2200, -2200).normalize().multiplyScalar(4150);
    const faceOnGroup = new THREE.Group();
    faceOnGroup.position.copy(faceOnPos);
    faceOnGroup.lookAt(0, 0, 0);

    const faceCoreMat = new THREE.SpriteMaterial({
      map: this.textures.galaxyCore,
      color: 0x67e8f9,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const faceCore = new THREE.Sprite(faceCoreMat);
    faceCore.scale.set(220, 220, 1);
    faceCore.renderOrder = -650;
    faceOnGroup.add(faceCore);

    const faceHaloMat = new THREE.SpriteMaterial({
      map: this.textures.nebula,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const faceHalo = new THREE.Sprite(faceHaloMat);
    faceHalo.scale.set(420, 420, 1);
    faceHalo.renderOrder = -660;
    faceOnGroup.add(faceHalo);

    this.galaxiesGroup.add(faceOnGroup);

    this.group.add(this.galaxiesGroup);
  }

  // =========================================================================
  // 7. COSMIC NEBULAE (ORION M42, CARINA/ROSETTE, VEIL REMNANT)
  // =========================================================================

  createNebulae() {
    this.nebulaeGroup = new THREE.Group();
    this.nebulaeGroup.name = 'CosmicNebulaeSystem';

    this.nebulaSprites = [];

    // Helper: spawn a vibrant multi-billow glowing emission nebula
    const spawnNebula = (directionVec, colors, sizeScale = 1.0) => {
      const center = directionVec.clone().normalize().multiplyScalar(4180);
      const nebCenterGroup = new THREE.Group();
      nebCenterGroup.position.copy(center);
      nebCenterGroup.lookAt(0, 0, 0);

      colors.forEach((col, idx) => {
        const mat = new THREE.SpriteMaterial({
          map: this.textures.nebula,
          color: col.hex,
          transparent: true,
          opacity: col.opacity,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        });

        const sprite = new THREE.Sprite(mat);
        const offsetX = (Math.random() - 0.5) * 180 * sizeScale;
        const offsetY = (Math.random() - 0.5) * 180 * sizeScale;
        sprite.position.set(offsetX, offsetY, -idx * 5);
        const s = (360 + Math.random() * 280) * sizeScale;
        sprite.scale.set(s, s, 1);
        sprite.renderOrder = -720;

        nebCenterGroup.add(sprite);
        this.nebulaSprites.push({ sprite, baseOpacity: col.opacity });
      });

      this.nebulaeGroup.add(nebCenterGroup);
    };

    // 1. Great Orion Nebula (M42) - Located under Orion's Belt
    // Vibrant Magenta, Cosmic Violet, and Electric Cyan
    const orionNebDir = new THREE.Vector3(-0.48, 0.65, -0.58);
    spawnNebula(orionNebDir, [
      { hex: 0xec4899, opacity: 0.55 }, // Hot Magenta Hydrogen-alpha
      { hex: 0x8b5cf6, opacity: 0.48 }, // Cosmic Violet
      { hex: 0x06b6d4, opacity: 0.42 }, // Electric Cyan Ionized Gas
      { hex: 0xf43f5e, opacity: 0.35 }  // Crimson Cloud Fringe
    ], 1.25);

    // 2. Rosette / Carina Emission Nebula - Ruby, Coral & Amber Cloud
    const carinaNebDir = new THREE.Vector3(0.72, 0.42, 0.55);
    spawnNebula(carinaNebDir, [
      { hex: 0xf43f5e, opacity: 0.52 }, // Deep Rose Crimson
      { hex: 0xa855f7, opacity: 0.45 }, // Violet Veil
      { hex: 0xfb923c, opacity: 0.32 }, // Warm Amber Dust
      { hex: 0x38bdf8, opacity: 0.28 }  // Central O-Type Star Cluster Ionization
    ], 1.4);

    // 3. Veil Supernova Remnant / Cygnus Loop - Wispy Turquoise & Lilac
    const veilNebDir = new THREE.Vector3(0.28, 0.88, 0.38);
    spawnNebula(veilNebDir, [
      { hex: 0x22d3ee, opacity: 0.48 }, // Electric Turquoise
      { hex: 0xc084fc, opacity: 0.38 }, // Soft Lilac
      { hex: 0x818cf8, opacity: 0.30 }  // Interstellar Blue
    ], 1.1);

    this.group.add(this.nebulaeGroup);
  }

  // =========================================================================
  // 8. STAR CLUSTERS (THE PLEIADES M45 & HERCULES GLOBULAR CLUSTER M13)
  // =========================================================================

  createStarClusters() {
    this.clustersGroup = new THREE.Group();
    this.clustersGroup.name = 'StarClustersSystem';

    // -----------------------------------------------------------------------
    // A. THE PLEIADES (M45 - The Seven Sisters)
    // -----------------------------------------------------------------------
    // Positioned near Taurus in North-West Sky
    const pleiadesDir = new THREE.Vector3(-0.68, 0.58, -0.45).normalize();
    const pleiadesCenter = pleiadesDir.clone().multiplyScalar(4220);

    const pleiadesGroup = new THREE.Group();
    pleiadesGroup.position.copy(pleiadesCenter);
    pleiadesGroup.lookAt(0, 0, 0);

    // 1. Blue Reflection Nebulosity Cloud
    const pleiadesCloudMat = new THREE.SpriteMaterial({
      map: this.textures.nebula,
      color: 0x38bdf8, // Sapphire reflection blue
      transparent: true,
      opacity: 0.48,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const pleiadesCloud = new THREE.Sprite(pleiadesCloudMat);
    pleiadesCloud.scale.set(340, 260, 1);
    pleiadesCloud.renderOrder = -680;
    pleiadesGroup.add(pleiadesCloud);

    // 2. The 7 Brilliant Sister Stars (Alcyone, Maia, Electra, Merope, Taygeta, Celaeno, Atlas)
    const sisterCoords = [
      { x: 0, y: 0, name: 'Alcyone', size: 26 },
      { x: -28, y: 18, name: 'Maia', size: 22 },
      { x: -44, y: 8, name: 'Electra', size: 21 },
      { x: -16, y: -24, name: 'Merope', size: 20 },
      { x: -36, y: 34, name: 'Taygeta', size: 18 },
      { x: -46, y: 28, name: 'Celaeno', size: 16 },
      { x: 34, y: -8, name: 'Atlas', size: 23 },
      { x: 36, y: 4, name: 'Pleione', size: 17 }
    ];

    sisterCoords.forEach(c => {
      const starSpriteMat = new THREE.SpriteMaterial({
        map: this.textures.prominentStar,
        color: 0xbfdbfe, // Brilliant sapphire jewel blue
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const starSprite = new THREE.Sprite(starSpriteMat);
      starSprite.position.set(c.x, c.y, 0);
      const s = c.size * 2.8;
      starSprite.scale.set(s, s, 1);
      starSprite.renderOrder = -620;
      pleiadesGroup.add(starSprite);
    });

    this.clustersGroup.add(pleiadesGroup);

    // -----------------------------------------------------------------------
    // B. GLOBULAR STAR CLUSTER (Hercules Cluster M13)
    // -----------------------------------------------------------------------
    // Dense spherical swarm of 750 stars packed into tight Gaussian core
    const m13Dir = new THREE.Vector3(0.35, 0.78, 0.52).normalize();
    const m13Center = m13Dir.clone().multiplyScalar(4240);

    const m13Group = new THREE.Group();
    m13Group.position.copy(m13Center);
    m13Group.lookAt(0, 0, 0);

    const m13Stars = 750;
    const m13Positions = new Float32Array(m13Stars * 3);
    const m13Colors = new Float32Array(m13Stars * 3);
    const gcColor = new THREE.Color();

    for (let i = 0; i < m13Stars; i++) {
      // Gaussian distribution for dense stellar core
      const u1 = Math.max(0.0001, Math.random());
      const u2 = Math.random();
      const radiusG = Math.sqrt(-2.0 * Math.log(u1)) * 36;
      const theta = u2 * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      m13Positions[i * 3] = radiusG * Math.sin(phi) * Math.cos(theta);
      m13Positions[i * 3 + 1] = radiusG * Math.sin(phi) * Math.sin(theta);
      m13Positions[i * 3 + 2] = radiusG * Math.cos(phi);

      // Core stars are diamond white and warm gold
      if (radiusG < 22) {
        gcColor.setHSL(0.12, 0.75, 0.9); // Golden core star
      } else {
        gcColor.setHSL(0.58, 0.6, 0.92); // Outer blue-white stellar member
      }

      m13Colors[i * 3] = gcColor.r;
      m13Colors[i * 3 + 1] = gcColor.g;
      m13Colors[i * 3 + 2] = gcColor.b;
    }

    const m13Geo = new THREE.BufferGeometry();
    m13Geo.setAttribute('position', new THREE.BufferAttribute(m13Positions, 3));
    m13Geo.setAttribute('color', new THREE.BufferAttribute(m13Colors, 3));

    const m13Mat = new THREE.PointsMaterial({
      size: 3.2,
      vertexColors: true,
      map: this.textures.star,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const m13Mesh = new THREE.Points(m13Geo, m13Mat);
    m13Mesh.renderOrder = -630;
    m13Group.add(m13Mesh);

    // Subtle core glow halo
    const m13HaloMat = new THREE.SpriteMaterial({
      map: this.textures.galaxyCore,
      color: 0xfef08a,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const m13Halo = new THREE.Sprite(m13HaloMat);
    m13Halo.scale.set(160, 160, 1);
    m13Halo.renderOrder = -640;
    m13Group.add(m13Halo);

    this.clustersGroup.add(m13Group);

    this.group.add(this.clustersGroup);
  }

  // =========================================================================
  // 9. BACKGROUND STARFIELD (4,500+ REALISTIC TWINKLING STARS)
  // =========================================================================

  createBackgroundStarfield() {
    const count = 4500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const twinklePhases = new Float32Array(count);
    const twinkleSpeeds = new Float32Array(count);
    const baseAlphas = new Float32Array(count);

    const tempColor = new THREE.Color();
    const r = 4350;

    for (let i = 0; i < count; i++) {
      // Distribute evenly across upper and mid celestial sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 1.85 - 0.95); // hemisphere bias towards visible sky

      const dist = r + (Math.random() - 0.5) * 200;
      positions[i * 3] = dist * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = Math.abs(dist * Math.cos(phi)) + 120; // upper hemisphere
      positions[i * 3 + 2] = dist * Math.sin(phi) * Math.sin(theta);

      // Realistic Stellar Spectral Classes:
      // O/B: Sapphire Blue-White (40%)
      // A: Pure Diamond White (35%)
      // F/G: Golden Yellow (15%)
      // K/M: Vibrant Orange/Red Supergiants (10%)
      const rand = Math.random();
      if (rand < 0.40) {
        tempColor.setHSL(0.58 + Math.random() * 0.06, 0.75, 0.82); // O/B Blue
      } else if (rand < 0.75) {
        tempColor.setHSL(0.0, 0.0, 0.95);                         // A Diamond White
      } else if (rand < 0.90) {
        tempColor.setHSL(0.12 + Math.random() * 0.04, 0.85, 0.80); // G Solar Yellow
      } else {
        tempColor.setHSL(0.04 + Math.random() * 0.04, 0.90, 0.75); // M Red Giant
      }

      colors[i * 3] = tempColor.r;
      colors[i * 3 + 1] = tempColor.g;
      colors[i * 3 + 2] = tempColor.b;

      twinklePhases[i] = Math.random() * Math.PI * 2;
      twinkleSpeeds[i] = 1.5 + Math.random() * 3.5;
      baseAlphas[i] = 0.65 + Math.random() * 0.35;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Store for CPU twinkle modulation (smooth & compatible across all GPUs)
    this.starOriginalColors = colors.slice();
    this.starColorsAttr = starGeo.attributes.color;
    this.twinklePhases = twinklePhases;
    this.twinkleSpeeds = twinkleSpeeds;
    this.baseAlphas = baseAlphas;
    this.bgStarCount = count;

    const starMat = new THREE.PointsMaterial({
      size: 3.8,
      vertexColors: true,
      map: this.textures.star,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.starPoints = new THREE.Points(starGeo, starMat);
    this.starPoints.renderOrder = -800;
    this.group.add(this.starPoints);
  }

  // =========================================================================
  // 10. ANIMATION & RENDER LOOP UPDATE
  // =========================================================================

  /**
   * Called every frame to keep sky pinned at infinity and animate celestial dynamics
   */
  update(camera, delta, audioLevels = {}) {
    this.elapsedTime += delta;

    // 1. Lock celestial dome center precisely to camera position
    // (Parallax at infinity: celestial objects never move closer as drone flies!)
    if (camera) {
      this.group.position.copy(camera.position);
    }

    // 2. Slow celestial diurnal rotation around Polaris axis
    // (Gives continuous living cinematic cosmos)
    this.group.rotation.y += delta * 0.0015;

    // 3. Slow rotation of Andromeda Galaxy spiral arms
    if (this.andromedaGroup) {
      this.andromedaGroup.rotation.z += delta * 0.012;
    }

    // 4. Subtle audio-reactive breathing of Nebulae & Moon Halo
    const bass = audioLevels.bass || 0;
    const pulseFactor = 1.0 + bass * 0.18;

    if (this.nebulaSprites) {
      this.nebulaSprites.forEach(item => {
        item.sprite.material.opacity = item.baseOpacity * (0.85 + pulseFactor * 0.15);
      });
    }

    // 5. Dynamic Star Twinkling Scintillation (smoothly modulate stellar brightness)
    this.twinkleFrame = (this.twinkleFrame || 0) + 1;
    if (this.starColorsAttr && this.elapsedTime > 0 && this.twinkleFrame % 3 === 0) {
      const colors = this.starColorsAttr.array;
      const orig = this.starOriginalColors;
      const t = this.elapsedTime;
      const count = this.bgStarCount;

      // Update a subset of stars per frame for high 60fps performance
      const step = 8;
      const startOffset = Math.floor((this.elapsedTime * 60) % step);

      for (let i = startOffset; i < count; i += step) {
        const phase = this.twinklePhases[i];
        const speed = this.twinkleSpeeds[i];
        // Sine twinkle between 0.4 and 1.15
        const twinkle = 0.77 + 0.38 * Math.sin(t * speed + phase);

        colors[i * 3] = Math.min(1.0, orig[i * 3] * twinkle);
        colors[i * 3 + 1] = Math.min(1.0, orig[i * 3 + 1] * twinkle);
        colors[i * 3 + 2] = Math.min(1.0, orig[i * 3 + 2] * twinkle);
      }
      this.starColorsAttr.needsUpdate = true;
    }
  }

  /**
   * Toggle visibility (for theme switching)
   */
  setVisible(visible) {
    this.group.visible = visible;
  }
}
