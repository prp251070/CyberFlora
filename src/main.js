import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

import { AudioManager } from './audio/audioManager.js';
import { CityManager } from './city/cityManager.js';
import { NatureManager } from './nature/natureManager.js';
import { DroneController } from './drone/droneController.js';
import { HudRenderer } from './hud/hudRenderer.js';
import { CosmicSky } from './sky/cosmicSky.js';

class NeonSkyApp {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.hudCanvas = document.getElementById('hud-canvas');

    this.clock = new THREE.Clock();
    // Plain Naked-Eye View by default - zero horizontal lines or camera clutter
    this.isHudVisible = false;
    if (this.hudCanvas) this.hudCanvas.style.display = 'none';

    // 1. Initialize Subsystems
    this.initThree();
    this.initPostProcessing();
    this.audioManager = new AudioManager();
    this.drone = new DroneController(this.camera, this.renderer.domElement);

    // Biome Managers
    this.currentTheme = 'cyber'; // 'cyber' or 'nature'
    this.city = new CityManager(this.scene);
    this.nature = new NatureManager(this.scene);

    this.hud = new HudRenderer(this.hudCanvas);

    // 2. Setup UI & Event Listeners
    this.setupUI();
    this.setupWindowResize();

    // 3. Start Animation Loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  initThree() {
    // Clear crisp deep dark-blue space background - ZERO FOG
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x030718);
    this.scene.fog = null; // Completely removed fog for 100% crystal-clear visibility

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.5,
      6000
    );

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.container.appendChild(this.renderer.domElement);

    // Cyber Night Mood Lighting - Deep atmospheric illumination (NO WHITE WASHOUT)
    this.ambientLight = new THREE.AmbientLight(0x182436, 0.35);
    this.scene.add(this.ambientLight);

    this.cyanDirLight = new THREE.DirectionalLight(0x1e6f9f, 0.32);
    this.cyanDirLight.position.set(250, 450, 200);
    this.scene.add(this.cyanDirLight);

    this.pinkDirLight = new THREE.DirectionalLight(0x831843, 0.22);
    this.pinkDirLight.position.set(-200, 350, -200);
    this.scene.add(this.pinkDirLight);

    // High-Fidelity Celestial Galaxy Sky System (Moon, Milky Way, Constellations, Nebulae, Galaxies, Star Clusters)
    this.cosmicSky = new CosmicSky(this.scene);
  }

  initPostProcessing() {
    const renderScene = new RenderPass(this.scene, this.camera);

    // High-performance bloom pass at 75% buffer resolution (crisp, zero fillrate lag)
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(Math.floor(window.innerWidth * 0.75), Math.floor(window.innerHeight * 0.75)),
      0.35,  // gentle bloom strength
      0.25, // tight radius
      0.88  // high threshold so only pure neon glows, no background fog
    );
    this.bloomPass = bloomPass;
    this.isBloomEnabled = true;

    const outputPass = new OutputPass();

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(renderScene);
    this.composer.addPass(bloomPass);
    this.composer.addPass(outputPass);
  }

  setupUI() {
    // Launch / Start Modal
    const startOverlay = document.getElementById('start-overlay');
    const btnStart = document.getElementById('btn-start');
    btnStart.addEventListener('click', () => {
      this.audioManager.startBuiltInSynth();
      startOverlay.classList.add('hidden');
    });

    // Flight Mode Toggles: Straight, Random, Manual
    const btnStraight = document.getElementById('btn-mode-straight');
    const btnRandom = document.getElementById('btn-mode-random');
    const btnManual = document.getElementById('btn-mode-manual');
    const modeButtons = [btnStraight, btnRandom, btnManual];

    const setFlightMode = (mode, activeBtn) => {
      this.drone.setMode(mode);
      modeButtons.forEach(btn => btn.classList.remove('active'));
      activeBtn.classList.add('active');
    };

    btnStraight.addEventListener('click', () => setFlightMode('straight', btnStraight));
    btnRandom.addEventListener('click', () => setFlightMode('random', btnRandom));
    btnManual.addEventListener('click', () => setFlightMode('manual', btnManual));

    // Speed Slider & Presets
    const speedSlider = document.getElementById('speed-slider');
    const speedDisplay = document.getElementById('speed-display');

    speedSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      this.drone.setBaseSpeed(val);
      speedDisplay.textContent = `${val} KM/H`;
    });

    document.querySelectorAll('.preset-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const spd = parseInt(chip.getAttribute('data-speed'), 10);
        speedSlider.value = spd;
        this.drone.setBaseSpeed(spd);
        speedDisplay.textContent = `${spd} KM/H`;
      });
    });

    // Audio Source Buttons
    const btnSynth = document.getElementById('btn-audio-synth');
    const btnMic = document.getElementById('btn-audio-mic');
    const btnFile = document.getElementById('btn-audio-file');
    const fileInput = document.getElementById('audio-file-input');
    const audioBtns = [btnSynth, btnMic, btnFile];

    const setAudioSource = (activeBtn) => {
      audioBtns.forEach(b => b.classList.remove('active'));
      activeBtn.classList.add('active');
    };

    btnSynth.addEventListener('click', () => {
      setAudioSource(btnSynth);
      this.audioManager.startBuiltInSynth();
    });

    btnMic.addEventListener('click', () => {
      setAudioSource(btnMic);
      this.audioManager.startMicrophone();
    });

    btnFile.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        setAudioSource(btnFile);
        this.audioManager.loadAudioFile(e.target.files[0]);
      }
    });

    // Drag-and-drop audio file anywhere on window
    window.addEventListener('dragover', (e) => e.preventDefault());
    window.addEventListener('drop', (e) => {
      e.preventDefault();
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith('audio/') || file.name.match(/\.(mp3|wav|ogg|flac|m4a)$/i)) {
          setAudioSource(btnFile);
          this.audioManager.loadAudioFile(file);
          startOverlay.classList.add('hidden');
        }
      }
    });

    // Deck Collapse Button
    const controlDeck = document.getElementById('control-deck');
    const btnCollapse = document.getElementById('btn-collapse-deck');
    let isCollapsed = false;

    btnCollapse.addEventListener('click', () => {
      isCollapsed = !isCollapsed;
      if (isCollapsed) {
        controlDeck.classList.add('collapsed');
        btnCollapse.textContent = 'EXPAND ▼';
      } else {
        controlDeck.classList.remove('collapsed');
        btnCollapse.textContent = 'COLLAPSE ▲';
      }
    });

    // Quick Action: Toggle All Options / Clean View (Key 'H' or 'H' icon button)
    const btnToggleHud = document.getElementById('btn-toggle-hud');
    const btnHideAllDeck = document.getElementById('btn-hide-all-options');
    const quickDeck = document.querySelector('.quick-deck');
    const uiToast = document.getElementById('ui-toast');
    let toastTimeout = null;

    const showToast = (text) => {
      if (!uiToast) return;
      uiToast.textContent = text;
      uiToast.classList.add('show');
      if (toastTimeout) clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        uiToast.classList.remove('show');
      }, 1800);
    };

    this.isUiVisible = true;
    const toggleAllOptions = () => {
      this.isUiVisible = !this.isUiVisible;
      this.isHudVisible = this.isUiVisible;

      // 1. Toggle tactical FPV HUD Canvas
      this.hudCanvas.style.display = this.isUiVisible ? 'block' : 'none';

      // 2. Toggle Flight Control Deck (all sliders, buttons, options)
      controlDeck.classList.toggle('ui-hidden', !this.isUiVisible);

      // 3. Minimize auxiliary buttons in quick deck
      if (quickDeck) {
        quickDeck.classList.toggle('ui-hidden-mode', !this.isUiVisible);
      }

      // 4. Update H button visual states
      if (btnToggleHud) {
        btnToggleHud.classList.toggle('hidden-mode', !this.isUiVisible);
        btnToggleHud.title = this.isUiVisible ? "Hide All Options (H)" : "Show All Options (H)";
      }

      if (btnHideAllDeck) {
        btnHideAllDeck.textContent = this.isUiVisible ? 'HIDE ALL (H)' : 'SHOW ALL (H)';
      }

      showToast(this.isUiVisible ? 'ALL OPTIONS RESTORED' : 'ALL OPTIONS HIDDEN // PRESS [H] TO RESTORE');
    };

    if (btnToggleHud) btnToggleHud.addEventListener('click', toggleAllOptions);
    if (btnHideAllDeck) btnHideAllDeck.addEventListener('click', toggleAllOptions);

    // Quick Action: Fullscreen (Key 'F' or icon button)
    const btnFullscreen = document.getElementById('btn-fullscreen');
    const toggleFullscreen = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    };
    btnFullscreen.addEventListener('click', toggleFullscreen);

    // Quick Action: Toggle Glow / Bloom (Key 'B' or icon button)
    const btnToggleBloom = document.getElementById('btn-toggle-bloom');
    const toggleBloom = () => {
      this.isBloomEnabled = !this.isBloomEnabled;
      if (this.bloomPass) {
        this.bloomPass.enabled = this.isBloomEnabled;
      }
      btnToggleBloom.classList.toggle('active', this.isBloomEnabled);
    };
    if (btnToggleBloom) btnToggleBloom.addEventListener('click', toggleBloom);

    // Theme / Biome Switcher (Cyber vs Nature)
    const btnThemeCyber = document.getElementById('btn-theme-cyber');
    const btnThemeNature = document.getElementById('btn-theme-nature');
    const btnToggleTheme = document.getElementById('btn-toggle-theme');

    this.setTheme = (theme) => {
      this.currentTheme = theme;

      if (theme === 'cyber') {
        this.city.cityGroup.visible = true;
        this.nature.setVisible(false);
        this.scene.background.set(0x030718);
        this.scene.fog = null; // Zero fog for razor-sharp cyberpunk space
        if (this.cosmicSky) this.cosmicSky.setVisible(true);

        // Cyber Night Mood Lighting - Deep atmospheric illumination (NO WHITE WASHOUT)
        this.ambientLight.color.set(0x182436);
        this.ambientLight.intensity = 0.35;
        this.cyanDirLight.color.set(0x1e6f9f);
        this.cyanDirLight.intensity = 0.32;
        this.cyanDirLight.position.set(250, 450, 200);
        this.pinkDirLight.color.set(0x831843);
        this.pinkDirLight.intensity = 0.22;

        if (btnThemeCyber) btnThemeCyber.classList.add('active');
        if (btnThemeNature) btnThemeNature.classList.remove('active');
      } else if (theme === 'nature') {
        this.city.cityGroup.visible = false;
        this.nature.setVisible(true);

        const isNight = this.timeOfDay === 'night';
        // Brilliant Sunlit Day Sky vs Midnight Abyss
        this.scene.background.set(isNight ? 0x030a1c : 0x38bdf8);
        this.scene.fog = new THREE.FogExp2(isNight ? 0x06142e : 0x7dd3fc, 0.00015);
        if (this.cosmicSky) this.cosmicSky.setVisible(isNight);

        // Sunlit Daylight Lighting vs Starlight
        this.ambientLight.color.set(isNight ? 0x0c1526 : 0xbae6fd);
        this.ambientLight.intensity = isNight ? 0.28 : 1.45;
        this.cyanDirLight.color.set(isNight ? 0x60a5fa : 0xfffbe8);
        this.cyanDirLight.intensity = isNight ? 0.45 : 2.2;
        this.cyanDirLight.position.set(400, 800, 250);
        this.pinkDirLight.color.set(isNight ? 0x1e1b4b : 0x34d399); // Lush emerald meadow bounce
        this.pinkDirLight.intensity = isNight ? 0.15 : 0.55;

        if (btnThemeNature) btnThemeNature.classList.add('active');
        if (btnThemeCyber) btnThemeCyber.classList.remove('active');
      }
    };

    this.toggleTheme = () => {
      const nextTheme = this.currentTheme === 'cyber' ? 'nature' : 'cyber';
      this.setTheme(nextTheme);
    };

    if (btnThemeCyber) btnThemeCyber.addEventListener('click', () => this.setTheme('cyber'));
    if (btnThemeNature) btnThemeNature.addEventListener('click', () => this.setTheme('nature'));
    if (btnToggleTheme) btnToggleTheme.addEventListener('click', () => this.toggleTheme());

    // Celestial Time Switcher (Day vs Night) - Manual Switching Only (Not Automatic)
    const btnTimeDay = document.getElementById('btn-time-day');
    const btnTimeNight = document.getElementById('btn-time-night');
    const btnToggleDayNight = document.getElementById('btn-toggle-daynight');
    this.timeOfDay = 'day';

    this.setTimeOfDay = (time) => {
      if (time !== 'day' && time !== 'night') return;
      this.timeOfDay = time;
      if (this.nature) {
        this.nature.setTimeOfDay(time);
      }

      // Update Cosmic Galaxy visibility: active in Cyber, and in Nature when it's Night
      const showCosmic = (this.currentTheme === 'cyber') || (this.currentTheme === 'nature' && time === 'night');
      if (this.cosmicSky) {
        this.cosmicSky.setVisible(showCosmic);
      }

      if (btnTimeDay) btnTimeDay.classList.toggle('active', time === 'day');
      if (btnTimeNight) btnTimeNight.classList.toggle('active', time === 'night');

      if (btnToggleDayNight) {
        btnToggleDayNight.title = time === 'day' ? "Switch to Night (N)" : "Switch to Day (N)";
        btnToggleDayNight.innerHTML = time === 'day'
          ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
            </svg>`
          : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>`;
      }

      showToast(time === 'day' ? 'CELESTIAL TIME: DAY [☀️ BRIGHT SUNNY DAY]' : 'CELESTIAL TIME: NIGHT [🌙 STARRY GALAXY SKY]');
    };

    this.toggleTimeOfDay = () => {
      const nextTime = this.timeOfDay === 'day' ? 'night' : 'day';
      this.setTimeOfDay(nextTime);
    };

    if (btnTimeDay) btnTimeDay.addEventListener('click', () => this.setTimeOfDay('day'));
    if (btnTimeNight) btnTimeNight.addEventListener('click', () => this.setTimeOfDay('night'));
    if (btnToggleDayNight) btnToggleDayNight.addEventListener('click', () => this.toggleTimeOfDay());

    // Global Key Shortcuts: H, B, F, T, N, 1/2/3 for modes
    window.addEventListener('keydown', (e) => {
      if (e.target && e.target.tagName === 'INPUT') return;
      if (e.code === 'KeyH' || e.key === 'h' || e.key === 'H') toggleAllOptions();
      if (e.code === 'KeyB') toggleBloom();
      if (e.code === 'KeyF') toggleFullscreen();
      if (e.code === 'KeyT') this.toggleTheme();
      if (e.code === 'KeyN' || e.key === 'n' || e.key === 'N') this.toggleTimeOfDay();
      if (e.code === 'Digit1') setFlightMode('straight', btnStraight);
      if (e.code === 'Digit2') setFlightMode('random', btnRandom);
      if (e.code === 'Digit3') setFlightMode('manual', btnManual);
    });
  }

  setupWindowResize() {
    window.addEventListener('resize', () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(w, h);
      this.composer.setSize(w, h);
      if (this.bloomPass) {
        this.bloomPass.setSize(Math.floor(w * 0.75), Math.floor(h * 0.75));
      }
    });
  }

  animate() {
    requestAnimationFrame(this.animate);

    const delta = Math.min(this.clock.getDelta(), 0.1);

    // 1. Audio Frequency Analysis
    const audioLevels = this.audioManager.update();

    // 2. Subtle Dynamic Bloom pulse (kept gentle to prevent any white wash)
    if (this.bloomPass) {
      this.bloomPass.strength = 0.32 + (audioLevels.bass || 0) * 0.12;
    }

    // 3. Drone Flight Physics Update (with Mountain Avoidance in Nature & Skyscraper Radar in Cyber)
    const terrainFunc = (this.currentTheme === 'nature')
      ? (x, z) => this.nature.getTerrainHeight(x, z)
      : null;

    const buildingRadarFunc = (this.currentTheme === 'cyber')
      ? (pos, dir, dist) => this.city.checkObstacleRadar(pos, dir, dist)
      : null;

    this.drone.update(delta, audioLevels, terrainFunc, buildingRadarFunc);

    // 4. Procedural Biome Chunk Recycling Update
    if (this.currentTheme === 'cyber') {
      this.city.update(this.drone.position, audioLevels, delta);
    } else {
      this.nature.update(this.drone.position, audioLevels, delta, {
        ambientLight: this.ambientLight,
        cyanDirLight: this.cyanDirLight,
        pinkDirLight: this.pinkDirLight,
        scene: this.scene
      });
    }

    // 5. Update Cosmic Galaxy Sky (locked to camera parallax at infinity & celestial rotation)
    const isCosmicActive = (this.currentTheme === 'cyber') || (this.currentTheme === 'nature' && this.timeOfDay === 'night');
    if (this.cosmicSky && isCosmicActive) {
      this.cosmicSky.update(this.camera, delta, audioLevels);
    }

    // 6. Render 3D Scene with Bloom Post-Processing
    this.composer.render();

    // 7. Render Tactical Cyber HUD (themed for active biome)
    if (this.isHudVisible) {
      this.hud.render(this.drone.telemetry, audioLevels, this.currentTheme);
    }
  }
}

// Start application when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  new NeonSkyApp();
});
