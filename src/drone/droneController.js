import * as THREE from 'three';

/**
 * Advanced FPV Drone Flight Controller
 * Supports:
 * 1. Autonomous 'straight' Flight (Endless Avenue Cruise)
 * 2. Autonomous 'random' Flight (Dynamic Slalom, Weaving, Banking)
 * 3. 'manual' Pilot Flight (WASD + Mouse/Keyboard)
 * Features dynamic speed slider, audio-reactive speed bursts, and authentic FPV drone roll/tilt.
 */
export class DroneController {
  constructor(camera, domElement) {
    this.camera = camera;
    this.domElement = domElement || document.body;

    // Flight Modes: 'straight', 'random', 'manual'
    this.mode = 'straight';

    // Speed configuration (KM/H displayed, converted to units/sec)
    // 1 unit in Three.js ≈ 1 meter
    this.baseSpeedKmh = 140; // Default speed in KM/H
    this.currentSpeedKmh = 140;
    this.audioBoostMultiplier = 1.0;

    // Drone Position & Orientation
    this.position = new THREE.Vector3(0, 75, 0); // start at 75m altitude
    this.velocity = new THREE.Vector3(0, 0, -1);
    this.direction = new THREE.Vector3(0, 0, -1);

    // Drone Angles (Radians)
    this.yaw = 0;
    this.pitch = 0;
    this.roll = 0;

    // Smoothing targets for buttery cinematic motion
    this.targetPitch = 0;
    this.targetRoll = 0;
    this.targetYaw = 0;

    // Autonomous City Exploration State (360° Free-Roam Slalom & Navigation)
    this.simTime = 0;
    this.randomYaw = 0;
    this.randomTurnRate = 0;
    this.targetManeuverTurnRate = 0;
    this.maneuverTimer = 2.0;
    this.evasionTimer = 0;
    this.evasionDir = 1;
    this.cruiseAltitudeCyber = 80;
    this.altitudeCycleTimer = 0;

    // Organic harmonic curves for Nature Mode
    this.randomCurves = {
      yawFreq1: 0.12,
      yawFreq2: 0.28,
      yawAmp: 0.7,
      pitchFreq: 0.18,
      pitchAmp: 0.22,
      altitudeCenter: 75,
      altitudeAmp: 35
    };

    // Manual controls state
    this.keys = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      up: false,
      down: false,
      boost: false
    };

    this.mouse = {
      isDown: false,
      deltaX: 0,
      deltaY: 0
    };

    // Telemetry data fed to the FPV HUD
    this.telemetry = {
      speedKmh: 140,
      altitudeM: 75,
      pitchDeg: 0,
      rollDeg: 0,
      headingDeg: 0,
      flightMode: 'STRAIGHT CRUISING',
      gForce: 1.0,
      isBoosting: false
    };

    this.initEventListeners();
  }

  setMode(mode) {
    if (['straight', 'random', 'manual'].includes(mode)) {
      this.mode = mode;
      if (mode === 'straight') {
        // Reset yaw smoothly back to straight forward along boulevard
        this.targetYaw = 0;
        this.targetPitch = 0;
        this.targetRoll = 0;
      } else if (mode === 'random') {
        // Inherit current heading seamlessly with zero snap or jump
        this.randomYaw = this.yaw;
        this.targetYaw = this.yaw;
        this.randomTurnRate = 0;
        this.targetManeuverTurnRate = 0;
        this.evasionTimer = 0;
        this.maneuverTimer = 1.5;
        this.cruiseAltitudeCyber = Math.max(50, Math.min(260, this.position.y));
      }
    }
  }

  setBaseSpeed(kmh) {
    this.baseSpeedKmh = Math.max(10, Math.min(450, kmh));
  }

  initEventListeners() {
    // Keyboard listeners for manual control
    window.addEventListener('keydown', (e) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.keys.forward = true;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.keys.backward = true;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.keys.left = true;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.keys.right = true;
          break;
        case 'Space':
          this.keys.up = true;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.keys.down = true;
          break;
      }
    });

    window.addEventListener('keyup', (e) => {
      switch (e.code) {
        case 'KeyW':
        case 'ArrowUp':
          this.keys.forward = false;
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.keys.backward = false;
          break;
        case 'KeyA':
        case 'ArrowLeft':
          this.keys.left = false;
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.keys.right = false;
          break;
        case 'Space':
          this.keys.up = false;
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.keys.down = false;
          break;
      }
    });

    // Mouse drag for manual flight pitch/yaw
    let prevMouseX = 0;
    let prevMouseY = 0;

    this.domElement.addEventListener('mousedown', (e) => {
      if (e.target.closest('#control-deck')) return; // ignore UI clicks
      this.mouse.isDown = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    window.addEventListener('mousemove', (e) => {
      if (this.mouse.isDown && this.mode === 'manual') {
        const dx = e.clientX - prevMouseX;
        const dy = e.clientY - prevMouseY;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;

        this.yaw -= dx * 0.003;
        this.pitch -= dy * 0.003;
        this.pitch = Math.max(-Math.PI * 0.4, Math.min(Math.PI * 0.4, this.pitch));
      }
    });

    window.addEventListener('mouseup', () => {
      this.mouse.isDown = false;
    });
  }

  update(delta, audioLevels, terrainHeightFunc = null, buildingRadarFunc = null) {
    this.simTime += delta;

    // Audio-reactive speed surge (Bass drops give an adrenaline boost!)
    const bass = audioLevels.bass || 0;
    const beat = audioLevels.beat || 0;
    this.audioBoostMultiplier = 1.0 + (bass * 0.4) + (beat * 0.6);

    // Calculate actual speed in KM/H and World Units/sec (1 km/h = 1000m / 3600s = ~0.277 m/s)
    let speedUnitsPerSec = (this.baseSpeedKmh * (1000 / 3600)) * this.audioBoostMultiplier;
    this.currentSpeedKmh = Math.round(this.baseSpeedKmh * this.audioBoostMultiplier);

    // Terrain Collision Avoidance & Ground Proximity Radar (Nature Mode)
    const currentGroundY = terrainHeightFunc ? terrainHeightFunc(this.position.x, this.position.z) : 0;
    const lookaheadDist = 55 + (this.currentSpeedKmh * 0.25);
    const aheadX = this.position.x + this.direction.x * lookaheadDist;
    const aheadZ = this.position.z + this.direction.z * lookaheadDist;
    const aheadGroundY = terrainHeightFunc ? terrainHeightFunc(aheadX, aheadZ) : 0;
    const peakObstacle = Math.max(currentGroundY, aheadGroundY);

    // Building Collision Avoidance Radar (Cyber Mode)
    const obstacleLookahead = 85 + (this.currentSpeedKmh * 0.32);
    const obstacle = buildingRadarFunc ? buildingRadarFunc(this.position, this.direction, obstacleLookahead) : null;

    // Safe altitude clearance (keeps drone gliding smoothly above mountain peaks)
    const minClearance = 32;
    const safeTargetAltitude = peakObstacle + minClearance;

    // Handle Flight Physics by Mode
    if (this.mode === 'straight') {
      this.updateStraightFlight(delta, bass, beat, safeTargetAltitude, terrainHeightFunc, obstacle);
    } else if (this.mode === 'random') {
      this.updateRandomFlight(delta, bass, beat, safeTargetAltitude, aheadGroundY - currentGroundY, obstacle, terrainHeightFunc);
    } else if (this.mode === 'manual') {
      this.updateManualFlight(delta, speedUnitsPerSec, currentGroundY, obstacle);
    }

    // Move drone forward in the horizontal X-Z flight plane
    const moveStep = this.direction.clone().multiplyScalar(speedUnitsPerSec * delta);
    this.position.x += moveStep.x;
    this.position.z += moveStep.z;
    if (this.mode === 'manual') {
      this.position.y += moveStep.y;
    }

    // Soft building repulsion cushion (smoothly glides drone away, zero teleport jitter)
    if (obstacle && (obstacle.pushX || obstacle.pushZ)) {
      const maxCushion = Math.min(speedUnitsPerSec * delta * 0.35, 0.45);
      this.position.x += THREE.MathUtils.clamp(obstacle.pushX * delta * 2.5, -maxCushion, maxCushion);
      this.position.z += THREE.MathUtils.clamp(obstacle.pushZ * delta * 2.5, -maxCushion, maxCushion);
    }

    // Absolute Collision Guard: Hard safety cushion above ground / mountain terrain
    const hardFloor = currentGroundY + 18;
    if (this.position.y < hardFloor) {
      this.position.y = hardFloor;
      if (this.pitch < 0) this.pitch = 0.05; // level off pitch
    }

    // Apply Camera Position & Rotation
    this.camera.position.copy(this.position);

    // Set camera rotation from yaw, pitch, roll
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    euler.y = this.yaw;
    euler.x = this.pitch;
    euler.z = this.roll;
    this.camera.quaternion.setFromEuler(euler);

    // Dynamic Camera FOV (Hyperspeed Warp stretch on heavy beats)
    const baseFov = 75;
    const targetFov = baseFov + (this.baseSpeedKmh / 40) + (bass * 14) + (beat * 18);
    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, Math.min(115, targetFov), 0.1);
    this.camera.updateProjectionMatrix();

    // Subtle camera vibration / micro-turbulences on bass drops
    if (beat > 0.6) {
      const shakeAmp = 0.35 * beat;
      this.camera.position.x += (Math.random() - 0.5) * shakeAmp;
      this.camera.position.y += (Math.random() - 0.5) * shakeAmp;
    }

    // Update Telemetry for HUD
    this.updateTelemetry(bass, beat, currentGroundY);
  }

  // --- MODE 1: STRAIGHT FLIGHT WITH OBSTACLE AVOIDANCE STEERING ---
  updateStraightFlight(delta, bass, beat, safeAltitude, terrainHeightFunc, obstacle = null) {
    if (terrainHeightFunc) {
      // In Nature mode: Guide drone gracefully along the organic winding river canyon
      const riverCenter = Math.sin(this.position.z * 0.0028) * 110 + Math.cos(this.position.z * 0.0014) * 55 + Math.sin(this.position.z * 0.006) * 18;
      const xDiff = (riverCenter - this.position.x) * 0.018;
      this.targetYaw = Math.max(-0.4, Math.min(0.4, xDiff));
      this.targetRoll = this.targetYaw * 0.8;

      // Nature Altitude & Dive Recovery:
      // Climbs over mountain peaks, then actively dives back down to low canyon cruise level (never stays stranded up high!)
      const targetAGL = 28; // Ideal low cruising clearance (28m above river/valley floor)
      const currentGround = terrainHeightFunc(this.position.x, this.position.z);
      const lookahead = 65 + (this.currentSpeedKmh * 0.25);
      const aheadGround = terrainHeightFunc(this.position.x + this.direction.x * lookahead, this.position.z + this.direction.z * lookahead);
      const slopeAhead = aheadGround - currentGround;

      let targetAlt;
      if (slopeAhead > 6) {
        // Approaching a rising mountain: climb smoothly to clear the upcoming crest
        targetAlt = aheadGround + 28;
        this.targetPitch = THREE.MathUtils.clamp(slopeAhead * 0.007, 0.08, 0.28);
      } else {
        // Peak passed or flat valley floor: target low canyon altitude
        targetAlt = currentGround + targetAGL;
        const excessAltitude = this.position.y - targetAlt;

        // HIGH ALTITUDE THRESHOLD:
        // If altitude is above threshold (> 6m above target), actively pitch nose DOWN to dive back to the canyon!
        if (excessAltitude > 6) {
          const divePitch = THREE.MathUtils.clamp(excessAltitude * 0.007, 0.08, 0.26);
          this.targetPitch = -divePitch;
        } else {
          this.targetPitch = -0.04;
        }
      }

      // Smooth rapid descent: pull drone swiftly back down if high above threshold
      const excess = this.position.y - targetAlt;
      const lerpSpeed = excess > 15 ? 5.2 : 3.8;
      this.position.y = THREE.MathUtils.lerp(this.position.y, targetAlt, delta * lerpSpeed);

      this.yaw = THREE.MathUtils.lerp(this.yaw, this.targetYaw, delta * 3.2);
      this.pitch = THREE.MathUtils.lerp(this.pitch, this.targetPitch, delta * 4.2);
      this.roll = THREE.MathUtils.lerp(this.roll, this.targetRoll, delta * 4.2);

    } else {
      // In Cyber mode: locked trajectory along -Z, but dynamically turns and banks around buildings
      this.targetYaw = 0;
      this.targetRoll = Math.sin(this.simTime * 0.4) * 0.04;
      this.targetPitch = -0.05 - (this.baseSpeedKmh / 1200);

      if (obstacle && obstacle.collisionAhead) {
        // Evasive steering: smoothly turn and bank away from oncoming skyscraper
        const steerStrength = (0.75 + obstacle.urgency * 1.5);
        this.targetYaw = obstacle.avoidDir * steerStrength;
        this.targetRoll = obstacle.avoidDir * THREE.MathUtils.clamp(steerStrength * 0.75, 0.4, 1.15);

        if (obstacle.buildingHeight && this.position.y < obstacle.buildingHeight + 25) {
          this.targetPitch = Math.max(this.targetPitch, 0.14 * obstacle.urgency);
        }
      }

      this.yaw = THREE.MathUtils.lerp(this.yaw, this.targetYaw, delta * 3.2);
      this.pitch = THREE.MathUtils.lerp(this.pitch, this.targetPitch, delta * 4.0);
      this.roll = THREE.MathUtils.lerp(this.roll, this.targetRoll, delta * 4.2);

      // Maintain terrain-cleared cruising altitude (rides smoothly over hills)
      const targetAlt = Math.max(safeAltitude, 65 + Math.sin(this.simTime * 0.3) * 6);
      this.position.y = THREE.MathUtils.lerp(this.position.y, targetAlt, delta * 3.5);
    }

    // Recalculate forward direction
    this.direction.set(0, 0, -1).applyEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ')).normalize();
  }

  // --- MODE 2: AUTONOMOUS DYNAMIC RANDOM FLIGHT (TRUE 360° CITY SLALOM & WEAVING) ---
  updateRandomFlight(delta, bass, beat, safeAltitude, elevationSlopeAhead, obstacle = null, terrainHeightFunc = null) {
    if (terrainHeightFunc) {
      // === NATURE MODE RANDOM FLIGHT ===
      // Organic alpine slalom through river canyons and mountain ridges
      const rc = this.randomCurves;
      const t = this.simTime;

      const yawWave = (
        Math.sin(t * rc.yawFreq1) * 0.65 +
        Math.sin(t * rc.yawFreq2 + 1.2) * 0.35
      ) * rc.yawAmp;
      this.targetYaw = yawWave;

      const yawRate = (
        Math.cos(t * rc.yawFreq1) * rc.yawFreq1 * 0.65 +
        Math.cos(t * rc.yawFreq2 + 1.2) * rc.yawFreq2 * 0.35
      ) * rc.yawAmp;
      this.targetRoll = yawRate * 1.8;

      // Nature Altitude & Dive Recovery in Random Slalom:
      const targetAGL = 28 + (Math.sin(t * 0.35) * 0.5 + 0.5) * 10; // 28m to 38m low canyon flight
      const currentGround = terrainHeightFunc(this.position.x, this.position.z);
      const lookahead = 65 + (this.currentSpeedKmh * 0.25);
      const aheadGround = terrainHeightFunc(this.position.x + this.direction.x * lookahead, this.position.z + this.direction.z * lookahead);
      const slopeAhead = aheadGround - currentGround;

      let targetAlt;
      if (slopeAhead > 6) {
        // Approaching a rising mountain: climb over the peak
        targetAlt = aheadGround + 28;
        this.targetPitch = THREE.MathUtils.clamp(slopeAhead * 0.007, 0.10, 0.30);
      } else {
        // Mountain passed: dive back down to low canyon cruise level
        targetAlt = currentGround + targetAGL;
        const excessAltitude = this.position.y - targetAlt;

        // HIGH ALTITUDE THRESHOLD:
        if (excessAltitude > 6) {
          const diveIntensity = THREE.MathUtils.clamp(excessAltitude * 0.007, 0.08, 0.26);
          this.targetPitch = -diveIntensity;
        } else {
          this.targetPitch = Math.sin(t * rc.pitchFreq) * 0.05 - 0.03;
        }
      }

      // Smooth rapid descent when high above threshold
      const excess = this.position.y - targetAlt;
      const lerpSpeed = excess > 15 ? 5.2 : 3.8;
      this.position.y = THREE.MathUtils.lerp(this.position.y, targetAlt, delta * lerpSpeed);

      this.yaw = THREE.MathUtils.lerp(this.yaw, this.targetYaw, delta * 2.8);
      this.pitch = THREE.MathUtils.lerp(this.pitch, this.targetPitch, delta * 4.0);
      this.roll = THREE.MathUtils.lerp(this.roll, this.targetRoll, delta * 4.2);

    } else {
      // === CYBERPUNK 360° AUTONOMOUS CITY EXPLORATION FLIGHT ===
      // Fluid, cinematic FPV flight carving through the neon metropolis with natural curves,
      // authentic roll banking, and zero snapping or angular glitches.

      // 1. Natural Flight Slalom & Avenue Curve Generator
      this.maneuverTimer -= delta;
      if (this.maneuverTimer <= 0) {
        const rollType = Math.random();
        if (rollType < 0.45) {
          // A) Long, sweeping high-speed slalom curve between skyscrapers
          const dir = Math.random() < 0.5 ? 1 : -1;
          this.targetManeuverTurnRate = dir * (0.12 + Math.random() * 0.16); // 7° to 16°/s
          this.maneuverTimer = 4.5 + Math.random() * 3.5;
        } else if (rollType < 0.75) {
          // B) Fast cruising corridor sprint along avenue
          this.targetManeuverTurnRate = 0;
          this.maneuverTimer = 5.0 + Math.random() * 4.0;
        } else {
          // C) Gracefully curved avenue turn (smoothly banking around a city block)
          const dir = Math.random() < 0.5 ? 1 : -1;
          this.targetManeuverTurnRate = dir * (0.28 + Math.random() * 0.14); // 16° to 24°/s
          this.maneuverTimer = 3.2 + Math.random() * 2.2;
        }
      }

      // Smoothly accelerate/decelerate turn rate (critically damped FPV drone aerodynamics)
      this.randomTurnRate = THREE.MathUtils.lerp(this.randomTurnRate, this.targetManeuverTurnRate, delta * 1.8);

      // Subtle atmospheric flight sway on music beats
      const beatSway = Math.sin(this.simTime * 1.2) * (0.02 + bass * 0.04);

      // 2. Predictive Obstacle Avoidance (Proactive, smooth avoidance - zero snapping!)
      let obstacleAvoidTurn = 0;
      if (obstacle && obstacle.collisionAhead) {
        this.evasionDir = obstacle.avoidDir;
        // Lock evasion commitment smoothly
        this.evasionTimer = Math.max(this.evasionTimer, 1.6 + obstacle.urgency * 1.0);

        // Calculate smooth proportional steering force away from skyscraper
        const avoidUrgency = THREE.MathUtils.clamp(obstacle.urgency, 0.2, 1.0);
        obstacleAvoidTurn = this.evasionDir * (0.35 + avoidUrgency * 0.45);

        // If approaching a skyscraper, smoothly pitch up to climb over the rooftop
        if (obstacle.buildingHeight && this.position.y < obstacle.buildingHeight + 30) {
          const climbTarget = Math.min(320, obstacle.buildingHeight + 40);
          this.cruiseAltitudeCyber = THREE.MathUtils.lerp(this.cruiseAltitudeCyber, climbTarget, delta * 2.5);
          this.targetPitch = Math.max(this.targetPitch, avoidUrgency * 0.16);
        }
      }

      // Sustain smooth evasion trajectory until clearance is established
      if (this.evasionTimer > 0) {
        this.evasionTimer -= delta;
        const decay = THREE.MathUtils.clamp(this.evasionTimer / 1.6, 0.2, 1.0);
        const evasionStrength = this.evasionDir * (0.38 * decay);
        obstacleAvoidTurn = THREE.MathUtils.lerp(obstacleAvoidTurn, evasionStrength, delta * 3.0);
      }

      // Combine base cruising turn rate with proactive obstacle deflection
      const effectiveTurnRate = (obstacleAvoidTurn !== 0)
        ? THREE.MathUtils.lerp(this.randomTurnRate, obstacleAvoidTurn, delta * 3.5)
        : this.randomTurnRate;

      this.randomTurnRate = effectiveTurnRate;

      // 3. Integrate Continuous Heading (Direct integration eliminates all angle-wrapping glitches!)
      const totalAngularVelocity = effectiveTurnRate + beatSway;
      this.yaw += totalAngularVelocity * delta;

      // 4. Authentic FPV Drone Banking Roll (Proportional to turning rate, capped to steady cinematic angles)
      const targetBank = THREE.MathUtils.clamp(totalAngularVelocity * 0.85, -0.65, 0.65);
      this.targetRoll = targetBank;
      this.roll = THREE.MathUtils.lerp(this.roll, this.targetRoll, delta * 3.8);

      // 5. Dynamic Urban Cruising Altitude & Glide
      this.altitudeCycleTimer += delta;
      if (this.altitudeCycleTimer > 22) {
        this.altitudeCycleTimer = 0;
        // Alternate between neon canyon skim (60m - 90m) and mid-skyline cruise (120m - 180m)
        this.cruiseAltitudeCyber = this.cruiseAltitudeCyber > 105
          ? (65 + Math.random() * 25)
          : (130 + Math.random() * 50);
      }

      const altWave = Math.sin(this.simTime * 0.28) * 8;
      const targetAlt = Math.max(50, Math.max(safeAltitude, this.cruiseAltitudeCyber + altWave));
      this.position.y = THREE.MathUtils.lerp(this.position.y, targetAlt, delta * 2.0);

      // Smooth pitch based on gentle vertical ascent/descent
      const altDelta = targetAlt - this.position.y;
      this.targetPitch = THREE.MathUtils.clamp(altDelta * 0.005 - 0.04, -0.12, 0.16);
      this.pitch = THREE.MathUtils.lerp(this.pitch, this.targetPitch, delta * 3.0);
    }

    // Recalculate 3D flight direction vector
    this.direction.set(0, 0, -1).applyEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ')).normalize();
  }

  // --- MODE 3: MANUAL PILOT FLIGHT WITH ASSIST ---
  updateManualFlight(delta, speedUnitsPerSec, currentGroundY, obstacle = null) {
    const turnSpeed = 1.4 * delta;

    if (this.keys.left) {
      this.yaw += turnSpeed;
      this.targetRoll = 0.45; // bank left
    } else if (this.keys.right) {
      this.yaw -= turnSpeed;
      this.targetRoll = -0.45; // bank right
    } else {
      this.targetRoll = 0;
    }

    if (this.keys.forward) {
      this.targetPitch = -0.18;
    } else if (this.keys.backward) {
      this.targetPitch = 0.15;
    } else {
      this.targetPitch = 0;
    }

    if (this.keys.up) {
      this.position.y += 35 * delta;
    }
    if (this.keys.down) {
      this.position.y -= 35 * delta;
    }

    this.roll = THREE.MathUtils.lerp(this.roll, this.targetRoll, delta * 6.0);
    this.pitch = THREE.MathUtils.lerp(this.pitch, this.targetPitch, delta * 5.0);

    this.direction.set(0, 0, -1).applyEuler(new THREE.Euler(this.pitch, this.yaw, 0, 'YXZ')).normalize();
  }

  updateTelemetry(bass, beat, groundY = 0) {
    this.telemetry.speedKmh = this.currentSpeedKmh;
    this.telemetry.altitudeM = Math.round(this.position.y);
    this.telemetry.altitudeAGL = Math.max(0, Math.round(this.position.y - groundY));
    this.telemetry.terrainWarning = this.telemetry.altitudeAGL < 24;
    this.telemetry.pitchDeg = Math.round(THREE.MathUtils.radToDeg(-this.pitch));
    this.telemetry.rollDeg = Math.round(THREE.MathUtils.radToDeg(this.roll));

    let heading = Math.round(THREE.MathUtils.radToDeg(this.yaw) % 360);
    if (heading < 0) heading += 360;
    this.telemetry.headingDeg = heading;

    this.telemetry.flightMode =
      this.mode === 'straight'
        ? 'AUTONOMOUS // STRAIGHT BOULEVARD'
        : this.mode === 'random'
        ? 'AUTONOMOUS // DYNAMIC SLALOM'
        : 'MANUAL // FPV PILOT';

    this.telemetry.isBoosting = beat > 0.6 || this.currentSpeedKmh > 260;
    this.telemetry.gForce = (1.0 + (this.currentSpeedKmh / 200) + Math.abs(this.roll) * 1.5).toFixed(1);
  }
}
