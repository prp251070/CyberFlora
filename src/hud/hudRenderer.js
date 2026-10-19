/**
 * Tactical Cyber FPV Drone HUD Renderer
 * Renders on a full-screen canvas over the 3D WebGL scene:
 * - Dynamic Artificial Horizon with pitch ladder and roll rotation
 * - Left vertical speed ladder (KM/H) & Right vertical altitude ladder (M)
 * - Top sliding compass heading tape
 * - Bottom circular audio oscilloscope radar & spectrum visualizer
 * - Drone flight mode, G-force, battery, and telemetry readouts
 * - Audio-reactive glitch lines and lens reticle
 */
export class HudRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.resize();

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(this.dpr, this.dpr);
  }

  render(telemetry, audioLevels, currentTheme = 'cyber') {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const cx = w / 2;
    const cy = h / 2;

    ctx.clearRect(0, 0, w, h);

    const bass = audioLevels.bass || 0;
    const beat = audioLevels.beat || 0;
    const isGlitch = beat > 0.75 && Math.random() > 0.8;

    // Tactical Color Palette (Emerald for Nature, Cyan for Cyber)
    const isNature = currentTheme === 'nature';
    const themeBaseColor = isNature ? '#00ffaa' : '#00f3ff';
    const primaryColor = isGlitch ? '#ff0077' : themeBaseColor;
    const boostColor = '#ff0055';

    ctx.save();
    if (isGlitch) {
      ctx.translate((Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4);
    }

    // 1. FPV Outer Framing Brackets
    this.drawCornerBrackets(ctx, w, h, primaryColor);

    // 2. Top Compass Heading Tape (Clean)
    this.drawCompassTape(ctx, cx, 40, telemetry.headingDeg, primaryColor);

    // 3. Center Subtle Pip (Zero horizontal lines across the view)
    this.drawCenterReticle(ctx, cx, cy, primaryColor, beat);

    // 5. Left Speed Ladder (KM/H)
    this.drawSpeedLadder(ctx, 80, cy, telemetry.speedKmh, primaryColor, telemetry.isBoosting);

    // 6. Right Altitude Ladder (M)
    this.drawAltitudeLadder(ctx, w - 80, cy, telemetry.altitudeM, primaryColor);

    // 7. Bottom Circular Audio Radar & Oscilloscope
    this.drawAudioRadar(ctx, cx, h - 85, audioLevels, primaryColor);

    // 8. Telemetry & Flight Mode Status Banners
    this.drawTelemetryOverlay(ctx, w, h, telemetry, audioLevels, primaryColor, boostColor, isNature);

    ctx.restore();
  }

  drawCornerBrackets(ctx, w, h, color) {
    const pad = 24;
    const len = 35;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    // Top-Left
    ctx.beginPath();
    ctx.moveTo(pad, pad + len);
    ctx.lineTo(pad, pad);
    ctx.lineTo(pad + len, pad);
    ctx.stroke();

    // Top-Right
    ctx.beginPath();
    ctx.moveTo(w - pad - len, pad);
    ctx.lineTo(w - pad, pad);
    ctx.lineTo(w - pad, pad + len);
    ctx.stroke();

    // Bottom-Left
    ctx.beginPath();
    ctx.moveTo(pad, h - pad - len);
    ctx.lineTo(pad, h - pad);
    ctx.lineTo(pad + len, h - pad);
    ctx.stroke();

    // Bottom-Right
    ctx.beginPath();
    ctx.moveTo(w - pad - len, h - pad);
    ctx.lineTo(w - pad, h - pad);
    ctx.lineTo(w - pad, h - pad - len);
    ctx.stroke();
  }

  drawCompassTape(ctx, cx, cy, heading, color) {
    const tapeWidth = 320;
    const startX = cx - tapeWidth / 2;

    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 1.5;
    ctx.font = '11px "Share Tech Mono", monospace';
    ctx.textAlign = 'center';

    // Top marker triangle
    ctx.beginPath();
    ctx.moveTo(cx, cy + 18);
    ctx.lineTo(cx - 6, cy + 26);
    ctx.lineTo(cx + 6, cy + 26);
    ctx.closePath();
    ctx.fill();

    // Degrees & Cardinal ticks (clean without horizontal baseline bar)
    const pxPerDeg = 2.4;
    for (let deg = -60; deg <= 60; deg += 5) {
      const curDeg = (heading + deg + 360) % 360;
      const x = cx + deg * pxPerDeg;

      if (x >= startX && x <= startX + tapeWidth) {
        const isMajor = curDeg % 15 === 0;
        const tickH = isMajor ? 10 : 5;

        ctx.beginPath();
        ctx.moveTo(x, cy + 16);
        ctx.lineTo(x, cy + 16 - tickH);
        ctx.stroke();

        if (isMajor) {
          let label = curDeg.toString().padStart(3, '0');
          if (curDeg === 0) label = 'N';
          else if (curDeg === 90) label = 'E';
          else if (curDeg === 180) label = 'S';
          else if (curDeg === 270) label = 'W';

          ctx.fillText(label, x, cy + 4);
        }
      }
    }

    // Digital Heading Box
    ctx.fillStyle = 'rgba(10, 15, 26, 0.8)';
    ctx.fillRect(cx - 30, cy + 28, 60, 20);
    ctx.strokeStyle = color;
    ctx.strokeRect(cx - 30, cy + 28, 60, 20);

    ctx.fillStyle = color;
    ctx.font = 'bold 12px "Orbitron", monospace';
    ctx.fillText(`${heading.toString().padStart(3, '0')}°`, cx, cy + 42);
  }

  drawArtificialHorizon(ctx, cx, cy, pitch, roll, color) {
    ctx.save();
    ctx.translate(cx, cy);
    // Rotate with drone roll
    ctx.rotate((roll * Math.PI) / 180);

    const pitchPxPerDeg = 4.5;
    const pitchOffset = pitch * pitchPxPerDeg;

    ctx.strokeStyle = 'rgba(0, 243, 255, 0.45)';
    ctx.fillStyle = color;
    ctx.lineWidth = 1.5;
    ctx.font = '10px "Share Tech Mono", monospace';
    ctx.textAlign = 'center';

    // Pitch Ladder Lines from -30 to +30 deg
    for (let deg = -30; deg <= 30; deg += 10) {
      if (deg === 0) continue; // 0 line is handled by center
      const y = -deg * pitchPxPerDeg - pitchOffset;
      if (Math.abs(y) > 130) continue; // clip within view

      const halfW = 35;
      const tickH = 6;

      ctx.beginPath();
      // Left bracket
      ctx.moveTo(-halfW, y);
      ctx.lineTo(-halfW + 20, y);
      ctx.lineTo(-halfW + 20, y + (deg > 0 ? tickH : -tickH));

      // Right bracket
      ctx.moveTo(halfW, y);
      ctx.lineTo(halfW - 20, y);
      ctx.lineTo(halfW - 20, y + (deg > 0 ? tickH : -tickH));
      ctx.stroke();

      // Degree labels
      ctx.fillText(`${Math.abs(deg)}`, -halfW - 10, y + 3);
      ctx.fillText(`${Math.abs(deg)}`, halfW + 10, y + 3);
    }

    // Horizon line (0 deg)
    const zeroY = -pitchOffset;
    if (Math.abs(zeroY) < 140) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-60, zeroY);
      ctx.lineTo(-20, zeroY);
      ctx.moveTo(20, zeroY);
      ctx.lineTo(60, zeroY);
      ctx.stroke();
    }

    ctx.restore();
  }

  drawCenterReticle(ctx, cx, cy, color, beat) {
    // Subtle, clean flight pip - NO horizontal line clutter across the camera view
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
    ctx.fill();
  }

  drawSpeedLadder(ctx, x, cy, speed, color, isBoosting) {
    const h = 260;
    const startY = cy - h / 2;

    // Background panel
    ctx.fillStyle = 'rgba(8, 12, 22, 0.75)';
    ctx.fillRect(x - 45, startY, 70, h);
    ctx.strokeStyle = isBoosting ? '#ff0055' : color;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x - 45, startY, 70, h);

    // Speed Title
    ctx.fillStyle = isBoosting ? '#ff0055' : color;
    ctx.font = 'bold 11px "Orbitron", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('SPEED', x - 10, startY + 18);
    ctx.font = '9px "Share Tech Mono", monospace';
    ctx.fillText('KM/H', x - 10, startY + 30);

    // Moving Speed Ticks
    const pxPerUnit = 1.8;
    for (let s = -60; s <= 60; s += 20) {
      const curSpeed = speed + s;
      if (curSpeed < 0) continue;
      const y = cy - s * pxPerUnit;

      if (y >= startY + 40 && y <= startY + h - 10) {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(x + 15, y);
        ctx.lineTo(x + 25, y);
        ctx.stroke();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '10px "Share Tech Mono", monospace';
        ctx.textAlign = 'right';
        ctx.fillText(`${curSpeed}`, x + 10, y + 3);
      }
    }

    // Center Pointer Box
    ctx.fillStyle = isBoosting ? 'rgba(255, 0, 85, 0.9)' : 'rgba(0, 243, 255, 0.9)';
    ctx.fillRect(x - 40, cy - 14, 60, 28);

    ctx.fillStyle = '#05070f';
    ctx.font = 'bold 16px "Orbitron", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${speed}`, x - 10, cy + 6);
  }

  drawAltitudeLadder(ctx, x, cy, altitude, color) {
    const h = 260;
    const startY = cy - h / 2;

    // Background panel
    ctx.fillStyle = 'rgba(8, 12, 22, 0.75)';
    ctx.fillRect(x - 25, startY, 70, h);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x - 25, startY, 70, h);

    // Altitude Title
    ctx.fillStyle = color;
    ctx.font = 'bold 11px "Orbitron", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('ALT', x + 10, startY + 18);
    ctx.font = '9px "Share Tech Mono", monospace';
    ctx.fillText('METERS', x + 10, startY + 30);

    // Moving Altitude Ticks
    const pxPerUnit = 1.8;
    for (let a = -50; a <= 50; a += 15) {
      const curAlt = altitude + a;
      if (curAlt < 0) continue;
      const y = cy - a * pxPerUnit;

      if (y >= startY + 40 && y <= startY + h - 10) {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(x - 25, y);
        ctx.lineTo(x - 15, y);
        ctx.stroke();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '10px "Share Tech Mono", monospace';
        ctx.textAlign = 'left';
        ctx.fillText(`${curAlt}m`, x - 10, y + 3);
      }
    }

    // Center Pointer Box
    ctx.fillStyle = 'rgba(0, 243, 255, 0.9)';
    ctx.fillRect(x - 20, cy - 14, 60, 28);

    ctx.fillStyle = '#05070f';
    ctx.font = 'bold 16px "Orbitron", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${altitude}m`, x + 10, cy + 6);
  }

  drawAudioRadar(ctx, cx, cy, audioLevels, color) {
    const radius = 42;
    const waveform = audioLevels.waveform || [];
    const bass = audioLevels.bass || 0;
    const beat = audioLevels.beat || 0;

    // Radar Dial Background
    ctx.fillStyle = 'rgba(5, 10, 20, 0.8)';
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Concentric grid circles
    ctx.strokeStyle = 'rgba(0, 243, 255, 0.25)';
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.5, 0, Math.PI * 2);
    ctx.arc(cx, cy, radius * 0.8, 0, Math.PI * 2);
    ctx.stroke();

    // Live Circular Waveform Oscilloscope
    if (waveform.length > 0) {
      ctx.strokeStyle = beat > 0.6 ? '#ff0077' : color;
      ctx.lineWidth = 2;
      ctx.beginPath();

      const total = waveform.length;
      for (let i = 0; i < total; i++) {
        const angle = (i / total) * Math.PI * 2;
        const amp = radius + waveform[i] * 18 * (1.0 + bass * 1.5);
        const px = cx + Math.cos(angle) * amp;
        const py = cy + Math.sin(angle) * amp;

        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
    }

    // Center Pulse Dot
    ctx.fillStyle = beat > 0.6 ? '#ff0077' : color;
    ctx.beginPath();
    ctx.arc(cx, cy, 3 + beat * 4, 0, Math.PI * 2);
    ctx.fill();

    // Radar Label
    ctx.fillStyle = color;
    ctx.font = '9px "Share Tech Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('AUDIO//RADAR', cx, cy + radius + 15);
  }

  drawTelemetryOverlay(ctx, w, h, telemetry, audioLevels, color, boostColor, isNature) {
    ctx.font = '11px "Share Tech Mono", monospace';

    // Top-Left Telemetry
    ctx.textAlign = 'left';
    ctx.fillStyle = color;
    ctx.fillText(isNature ? 'BIOME // EMERALD CANYON (DAY MODE)' : 'BIOME // NEO-METROPOLIS (NIGHT)', 32, 22);
    ctx.fillText(`FPV-LINK // 5.8GHZ [99.4%]`, 32, 38);
    ctx.fillText(`ALT-AGL // ${telemetry.altitudeAGL !== undefined ? telemetry.altitudeAGL : telemetry.altitudeM}M [GROUND RADAR]`, 32, 54);
    ctx.fillText(`G-FORCE // ${telemetry.gForce}G | BATT // 24.8V`, 32, 70);

    // Top-Right Status
    ctx.textAlign = 'right';
    ctx.fillStyle = color;
    ctx.fillText(`GPS // 18 SATS LOCKED`, w - 32, 38);
    ctx.fillText(`FPS // 60.0 [STABLE]`, w - 32, 54);

    // Active Flight Mode Banner (Top Center under compass)
    ctx.textAlign = 'center';
    ctx.font = 'bold 12px "Orbitron", monospace';
    ctx.fillStyle = color;
    ctx.fillText(telemetry.flightMode, w / 2, 88);

    // Hyperspeed / Warp Boost Banner
    if (telemetry.isBoosting) {
      ctx.fillStyle = boostColor;
      ctx.font = 'bold 16px "Orbitron", monospace';
      ctx.fillText('⚡ HYPERSPEED WARP BOOST ⚡', w / 2, 114);
    }

    // Mountain Ridge Proximity Status
    if (telemetry.terrainWarning && isNature) {
      ctx.fillStyle = '#ffaa00';
      ctx.font = 'bold 12px "Orbitron", monospace';
      ctx.fillText('▲ TERRAIN RADAR: MOUNTAIN SKIM ACTIVE ▲', w / 2, 134);
    }

    // Bottom-Left Audio Meter Bars
    const barX = 32;
    const barY = h - 65;
    const barW = 85;
    const barH = 7;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '10px "Share Tech Mono", monospace';
    ctx.textAlign = 'left';

    // Bass
    ctx.fillText('BASS', barX, barY);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(barX + 45, barY - 7, barW, barH);
    ctx.fillStyle = '#ff0077';
    ctx.fillRect(barX + 45, barY - 7, barW * (audioLevels.bass || 0), barH);

    // Mid
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText('MID', barX, barY + 16);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(barX + 45, barY + 9, barW, barH);
    ctx.fillStyle = '#00f3ff';
    ctx.fillRect(barX + 45, barY + 9, barW * (audioLevels.mid || 0), barH);

    // Treble
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText('TREB', barX, barY + 32);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(barX + 45, barY + 25, barW, barH);
    ctx.fillStyle = '#ffaa00';
    ctx.fillRect(barX + 45, barY + 25, barW * (audioLevels.treble || 0), barH);
  }
}
