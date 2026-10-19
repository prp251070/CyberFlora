/**
 * Audio Manager with Web Audio API Analyzer
 * Supports:
 *  1. Built-in Procedural Cyberpunk/Synthwave Bass & Drum Groove Generator
 *  2. User Audio File Upload (MP3, WAV, etc.)
 *  3. Live Microphone Input
 * Provides real-time frequency analysis (Bass, Mid, Treble, Beat Peak).
 */
export class AudioManager {
  constructor() {
    this.audioCtx = null;
    this.analyser = null;
    this.dataArray = null;
    this.sourceNode = null;
    this.gainNode = null;

    // Current state
    this.isPlaying = false;
    this.currentMode = 'synth'; // 'synth', 'file', 'mic'
    this.audioElement = null;
    this.micStream = null;

    // Procedural Synth Sequencer state
    this.synthInterval = null;
    this.bpm = 124;
    this.step = 0;
    this.bassNotes = [36, 36, 48, 36, 39, 36, 41, 38]; // MIDI frequencies
    this.leadNotes = [60, 63, 67, 70, 72, 70, 67, 63, 65, 68, 72, 75, 77, 75, 72, 68];

    // Normalized audio levels (0.0 to 1.0)
    this.levels = {
      bass: 0,
      mid: 0,
      treble: 0,
      overall: 0,
      beat: 0,
      waveform: new Float32Array(128)
    };

    this.sensitivity = 1.3;
    this.beatDecay = 0.92;
  }

  initContext() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 512;
      this.analyser.smoothingTimeConstant = 0.82;
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.timeData = new Uint8Array(this.analyser.fftSize);

      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.value = 0.9;
      this.gainNode.connect(this.analyser);
      this.analyser.connect(this.audioCtx.destination);
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // --- 1. BUILT-IN PROCEDURAL SYNTHWAVE / CYBERPUNK GENERATOR ---
  startBuiltInSynth() {
    this.stopCurrentSource();
    this.initContext();
    this.currentMode = 'synth';
    this.isPlaying = true;

    const stepDuration = (60 / this.bpm) / 4; // 16th notes
    let nextStepTime = this.audioCtx.currentTime + 0.05;

    const scheduleLoop = () => {
      if (!this.isPlaying || this.currentMode !== 'synth') return;

      while (nextStepTime < this.audioCtx.currentTime + 0.15) {
        this.playSynthStep(this.step, nextStepTime);
        this.step = (this.step + 1) % 64;
        nextStepTime += stepDuration;
      }

      this.synthInterval = requestAnimationFrame(scheduleLoop);
    };

    scheduleLoop();
  }

  midiToFreq(midi) {
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  playSynthStep(step, time) {
    if (!this.audioCtx) return;

    // Heavy Cyber Kick on beats 0, 4, 8, 12, etc. (4/4 time)
    if (step % 4 === 0) {
      const kickOsc = this.audioCtx.createOscillator();
      const kickGain = this.audioCtx.createGain();

      kickOsc.type = 'sine';
      kickOsc.frequency.setValueAtTime(140, time);
      kickOsc.frequency.exponentialRampToValueAtTime(32, time + 0.12);

      kickGain.gain.setValueAtTime(1.1, time);
      kickGain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);

      kickOsc.connect(kickGain);
      kickGain.connect(this.gainNode);

      kickOsc.start(time);
      kickOsc.stop(time + 0.25);
    }

    // Snappy Cyber Snare on beats 4 and 12
    if (step % 8 === 4) {
      // Noise buffer for snare snap
      const bufferSize = this.audioCtx.sampleRate * 0.15;
      const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.audioCtx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(1000, time);

      const snareGain = this.audioCtx.createGain();
      snareGain.gain.setValueAtTime(0.6, time);
      snareGain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);

      noise.connect(filter);
      filter.connect(snareGain);
      snareGain.connect(this.gainNode);

      noise.start(time);
      noise.stop(time + 0.16);
    }

    // Hi-hat on offbeats
    if (step % 2 === 1 || (step % 4 === 2 && Math.random() > 0.3)) {
      const bufferSize = this.audioCtx.sampleRate * 0.04;
      const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const hat = this.audioCtx.createBufferSource();
      hat.buffer = buffer;

      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(6500, time);

      const hatGain = this.audioCtx.createGain();
      hatGain.gain.setValueAtTime(0.25, time);
      hatGain.gain.exponentialRampToValueAtTime(0.001, time + 0.035);

      hat.connect(filter);
      filter.connect(hatGain);
      hatGain.connect(this.gainNode);

      hat.start(time);
      hat.stop(time + 0.04);
    }

    // Pumping Sawtooth Cyber Bassline
    const noteIdx = Math.floor(step / 2) % this.bassNotes.length;
    const baseMidi = this.bassNotes[noteIdx];
    const bassFreq = this.midiToFreq(baseMidi);

    const bassOsc = this.audioCtx.createOscillator();
    const bassFilter = this.audioCtx.createBiquadFilter();
    const bassGain = this.audioCtx.createGain();

    bassOsc.type = 'sawtooth';
    bassOsc.frequency.setValueAtTime(bassFreq, time);

    bassFilter.type = 'lowpass';
    bassFilter.Q.setValueAtTime(4.5, time);
    bassFilter.frequency.setValueAtTime(400, time);
    bassFilter.frequency.exponentialRampToValueAtTime(1400, time + 0.03);
    bassFilter.frequency.exponentialRampToValueAtTime(250, time + 0.12);

    bassGain.gain.setValueAtTime(0.55, time);
    bassGain.gain.exponentialRampToValueAtTime(0.001, time + 0.14);

    bassOsc.connect(bassFilter);
    bassFilter.connect(bassGain);
    bassGain.connect(this.gainNode);

    bassOsc.start(time);
    bassOsc.stop(time + 0.15);

    // Neon Arpeggiator Lead
    if (step % 2 === 0 && (step >= 16)) {
      const leadMidi = this.leadNotes[(step / 2) % this.leadNotes.length];
      const leadFreq = this.midiToFreq(leadMidi);

      const leadOsc = this.audioCtx.createOscillator();
      const leadFilter = this.audioCtx.createBiquadFilter();
      const leadGain = this.audioCtx.createGain();

      leadOsc.type = 'square';
      leadOsc.frequency.setValueAtTime(leadFreq, time);

      leadFilter.type = 'bandpass';
      leadFilter.Q.setValueAtTime(3.0, time);
      leadFilter.frequency.setValueAtTime(leadFreq * 1.5, time);

      leadGain.gain.setValueAtTime(0.2, time);
      leadGain.gain.exponentialRampToValueAtTime(0.001, time + 0.12);

      leadOsc.connect(leadFilter);
      leadFilter.connect(leadGain);
      leadGain.connect(this.gainNode);

      leadOsc.start(time);
      leadOsc.stop(time + 0.13);
    }
  }

  // --- 2. FILE UPLOAD (MP3, WAV, etc.) ---
  loadAudioFile(file) {
    this.stopCurrentSource();
    this.initContext();
    this.currentMode = 'file';

    const url = URL.createObjectURL(file);
    this.audioElement = new Audio(url);
    this.audioElement.loop = true;

    this.sourceNode = this.audioCtx.createMediaElementSource(this.audioElement);
    this.sourceNode.connect(this.gainNode);

    this.audioElement.play().then(() => {
      this.isPlaying = true;
    }).catch(e => {
      console.warn('Playback error:', e);
    });
  }

  // --- 3. LIVE MICROPHONE INPUT ---
  async startMicrophone() {
    this.stopCurrentSource();
    this.initContext();
    this.currentMode = 'mic';

    try {
      this.micStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      this.sourceNode = this.audioCtx.createMediaStreamSource(this.micStream);
      // For mic, disconnect analyzer from destination to prevent feedback scream!
      this.analyser.disconnect();
      this.sourceNode.connect(this.gainNode);
      this.isPlaying = true;
    } catch (err) {
      console.error('Microphone access denied or error:', err);
      alert('Could not access microphone: ' + err.message);
      this.startBuiltInSynth();
    }
  }

  stopCurrentSource() {
    this.isPlaying = false;
    if (this.synthInterval) {
      cancelAnimationFrame(this.synthInterval);
      this.synthInterval = null;
    }
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.src = '';
      this.audioElement = null;
    }
    if (this.micStream) {
      this.micStream.getTracks().forEach(track => track.stop());
      this.micStream = null;
    }
    if (this.sourceNode) {
      this.sourceNode.disconnect();
      this.sourceNode = null;
    }
    // Re-connect analyser to destination if it was disconnected for mic
    if (this.analyser && this.audioCtx) {
      try {
        this.analyser.connect(this.audioCtx.destination);
      } catch (e) {
        // already connected
      }
    }
  }

  togglePlayPause() {
    if (!this.audioCtx) {
      this.startBuiltInSynth();
      return true;
    }
    if (this.isPlaying) {
      if (this.currentMode === 'synth') {
        this.isPlaying = false;
        if (this.synthInterval) cancelAnimationFrame(this.synthInterval);
      } else if (this.currentMode === 'file' && this.audioElement) {
        this.audioElement.pause();
        this.isPlaying = false;
      }
      return false;
    } else {
      if (this.currentMode === 'synth') {
        this.startBuiltInSynth();
      } else if (this.currentMode === 'file' && this.audioElement) {
        this.audioElement.play();
        this.isPlaying = true;
      }
      return true;
    }
  }

  // --- REAL-TIME FFT & FREQUENCY EXTRACTION ---
  update() {
    if (!this.analyser || !this.isPlaying) {
      // Gentle decay when paused
      this.levels.bass *= 0.9;
      this.levels.mid *= 0.9;
      this.levels.treble *= 0.9;
      this.levels.overall *= 0.9;
      this.levels.beat *= this.beatDecay;
      return this.levels;
    }

    this.analyser.getByteFrequencyData(this.dataArray);
    this.analyser.getByteTimeDomainData(this.timeData);

    const binCount = this.analyser.frequencyBinCount;

    // Sub & Kick Bass (bins ~2 to 14)
    let bassSum = 0;
    const bassEnd = Math.min(14, binCount);
    for (let i = 2; i < bassEnd; i++) {
      bassSum += this.dataArray[i];
    }
    const rawBass = (bassSum / (bassEnd - 2)) / 255;

    // Mid Frequencies (bins 15 to 70)
    let midSum = 0;
    const midEnd = Math.min(70, binCount);
    for (let i = 15; i < midEnd; i++) {
      midSum += this.dataArray[i];
    }
    const rawMid = (midSum / (midEnd - 15)) / 255;

    // Highs / Treble (bins 71 to 180)
    let trebleSum = 0;
    const trebleEnd = Math.min(180, binCount);
    for (let i = 71; i < trebleEnd; i++) {
      trebleSum += this.dataArray[i];
    }
    const rawTreble = (trebleSum / (trebleEnd - 71)) / 255;

    // Scale with sensitivity
    const s = this.sensitivity;
    this.levels.bass = Math.min(1.0, rawBass * s);
    this.levels.mid = Math.min(1.0, rawMid * s);
    this.levels.treble = Math.min(1.0, rawTreble * s);
    this.levels.overall = Math.min(1.0, (rawBass * 0.5 + rawMid * 0.3 + rawTreble * 0.2) * s);

    // Dynamic Beat Detection (bass spike)
    if (this.levels.bass > 0.65 && this.levels.bass > this.levels.beat * 1.15) {
      this.levels.beat = 1.0;
    } else {
      this.levels.beat *= this.beatDecay;
    }

    // Waveform data normalized (-1 to 1) for oscilloscope
    const waveLen = this.levels.waveform.length;
    const step = Math.floor(this.timeData.length / waveLen);
    for (let i = 0; i < waveLen; i++) {
      this.levels.waveform[i] = (this.timeData[i * step] / 128.0) - 1.0;
    }

    return this.levels;
  }
}
