#define M_PI 3.1415926535897932384626433832795

uniform float uTime;
uniform float uGrassDistance;
uniform vec3 uPlayerPosition;
uniform sampler2D uNoiseTexture;
uniform float uFresnelOffset;
uniform float uFresnelScale;
uniform float uFresnelPower;
uniform vec3 uSunPosition;
uniform float uAudioBass;

attribute vec2 center;
attribute float tipness;

varying vec3 vColor;

#include ../partials/inverseLerp.glsl
#include ../partials/remap.glsl
#include ../partials/getSunShade.glsl;
#include ../partials/getSunShadeColor.glsl;
#include ../partials/getSunReflection.glsl;
#include ../partials/getSunReflectionColor.glsl;
#include ../partials/getGrassAttenuation.glsl;
#include ../partials/getRotatePivot2d.glsl;

// Procedural continuous terrain elevation with natural organic alpine curves & glacial valleys
float getTerrainElevation(vec2 pos)
{
    float x = pos.x;
    float z = pos.y; // XZ plane
    
    // Smooth serpentine river canyon meander with natural curvature
    float riverCurve = sin(z * 0.0028) * 110.0 + cos(z * 0.0014) * 55.0 + sin(z * 0.006) * 18.0;
    float distToRiver = abs(x - riverCurve);

    // Glacial U-shaped valley floor with rolling alluvial terraces
    float valleyWidth = 75.0 + sin(z * 0.002) * 20.0;
    float valleyFactor = min(1.0, distToRiver / valleyWidth);
    float valleyProfile = pow(valleyFactor, 1.8); // Smooth parabolic U-shape curves

    float riverBed = -6.0 * (1.0 - min(1.0, distToRiver / 32.0));

    // Multi-harmonic alpine mountain ridges and crags
    float macro = sin(x * 0.004 + 0.5) * 65.0 + cos(z * 0.0035 - 0.3) * 75.0;
    float ridges = abs(sin(x * 0.0085 + z * 0.0065)) * 48.0; // Sharp natural arête crests
    float hills = cos(x * 0.016 - z * 0.012) * 22.0 + sin(x * 0.025 + z * 0.02) * 10.0;

    float totalMountain = (macro + ridges + hills) * (0.15 + valleyProfile * 1.55);
    return max(-8.0, totalMountain + riverBed);
}

// Terrain normal calculation via central differences
vec3 getTerrainNormal(vec2 pos)
{
    float eps = 0.6;
    float hL = getTerrainElevation(pos - vec2(eps, 0.0));
    float hR = getTerrainElevation(pos + vec2(eps, 0.0));
    float hD = getTerrainElevation(pos - vec2(0.0, eps));
    float hU = getTerrainElevation(pos + vec2(0.0, eps));
    return normalize(vec3(hL - hR, 2.0 * eps, hD - hU));
}

void main()
{
    // Recalculate center and keep around player (infinite field wrapping)
    vec2 newCenter = center;
    newCenter -= uPlayerPosition.xz;
    float halfSize = uGrassDistance * 0.5;
    newCenter.x = mod(newCenter.x + halfSize, uGrassDistance) - halfSize;
    newCenter.y = mod(newCenter.y + halfSize, uGrassDistance) - halfSize; // Y considered as Z
    vec4 modelCenter = modelMatrix * vec4(newCenter.x, 0.0, newCenter.y, 1.0);

    // Blade-specific pseudo-random hashes for organic variation
    float bladeHash1 = fract(sin(dot(center, vec2(12.9898, 78.233))) * 43758.5453);
    float bladeHash2 = fract(cos(dot(center, vec2(39.346, 11.135))) * 23421.631);

    // Move grass blade to world grid position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // --- 🌿 ORGANIC BLADE CURVATURE & PARABOLIC ARCH ---
    // Real grass blades arch gracefully in an organic curve rather than sticking straight up
    float archAngle = bladeHash1 * 6.28318;
    float archStrength = (0.35 + bladeHash2 * 0.45);
    float curveFactor = pow(tipness, 2.2); // Parabolic curvature increases toward tip

    modelPosition.x += cos(archAngle) * archStrength * curveFactor;
    modelPosition.z += sin(archAngle) * archStrength * curveFactor;
    modelPosition.y -= curveFactor * 0.22; // Natural gravitational droop

    modelPosition.xz += newCenter; // Root position

    // Rotate blade to face camera (billboarding)
    float angleToCamera = atan(modelCenter.x - cameraPosition.x, modelCenter.z - cameraPosition.z);
    modelPosition.xz = getRotatePivot2d(modelPosition.xz, angleToCamera, modelCenter.xz);

    // Analytical terrain data
    float terrainHeight = getTerrainElevation(modelPosition.xz);
    vec3 normal = getTerrainNormal(modelPosition.xz);

    modelPosition.y += terrainHeight;
    modelCenter.y += terrainHeight;

    // Slope attenuation (steep crags and vertical cliffs remain bare stone)
    float slope = 1.0 - abs(dot(vec3(0.0, 1.0, 0.0), normal));

    // Distance attenuation
    float distanceScale = getGrassAttenuation(modelCenter.xz);
    float slopeScale = smoothstep(remap(slope, 0.38, 0.54, 1.0, 0.0), 0.0, 1.0);
    
    // Water level exclusion (don't grow underwater, river bed is around y = 4.5)
    float waterScale = smoothstep(5.5, 7.2, terrainHeight);

    // High mountain snow summit exclusion (above 115m summits)
    float altitudeScale = 1.0 - smoothstep(95.0, 130.0, terrainHeight);

    float scale = distanceScale * slopeScale * waterScale * altitudeScale;
    modelPosition.xyz = mix(modelCenter.xyz, modelPosition.xyz, scale);

    // Wind animation using noise texture and audio reactivity
    vec2 noiseUv = modelPosition.xz * 0.018 + uTime * 0.055;
    vec4 noiseColor = texture2D(uNoiseTexture, noiseUv);
    float windStrength = (1.15 + uAudioBass * 0.95);
    modelPosition.x += (noiseColor.x - 0.5) * tipness * scale * windStrength;
    modelPosition.z += (noiseColor.y - 0.5) * tipness * scale * windStrength;

    // Final projected position
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;
    
    vec3 viewDirection = normalize(modelPosition.xyz - cameraPosition);
    vec3 worldNormal = normalize(mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal);
    vec3 viewNormal = normalize(normalMatrix * normal);

    // --- 🎨 BLADE-TO-BLADE ORGANIC COLOR DIVERSITY ---
    // Blend between deep meadow emerald, vibrant fresh lime shoots, and golden alpine fescue tips
    vec3 emeraldTip = vec3(0.36, 0.74, 0.28);
    vec3 limeTip    = vec3(0.52, 0.82, 0.22);
    vec3 goldenTip  = vec3(0.68, 0.76, 0.26);

    vec3 tipColor = mix(emeraldTip, limeTip, bladeHash1);
    if (bladeHash2 > 0.75) {
        tipColor = mix(tipColor, goldenTip, 0.55);
    }

    vec3 rootColor = vec3(0.11, 0.30, 0.12); // Deep moist organic root
    vec3 lowColor = mix(rootColor, tipColor, 1.0 - scale);
    vec3 color = mix(lowColor, tipColor, tipness);

    // Sun shade
    float sunShade = getSunShade(normal);
    color = getSunShadeColor(color, sunShade);

    // Sun reflection
    float sunReflection = getSunReflection(viewDirection, worldNormal, viewNormal);
    color = getSunReflectionColor(color, sunReflection);

    // --- ☀️ SUBSURFACE SCATTERING (SSS) / TRANSLUCENT BACKLIGHT GLOW ---
    // When looking toward the sun, thin grass blades glow with brilliant golden-green translucency
    vec3 sunDir = -normalize(uSunPosition);
    float backLight = max(0.0, dot(viewDirection, sunDir));
    float sss = pow(backLight, 3.8) * tipness * scale;
    vec3 sssColor = vec3(0.72, 0.96, 0.24); // Radiant translucent sunlit grass glow
    color += sssColor * sss * 0.68;

    vColor = color;
}