# 3D Scroll-Animated Website — Complete Build Skill Guide

> **Purpose**: This document captures every technical detail, dependency, file structure, architecture pattern, and skill required to recreate an immersive 3D scroll-driven website like "The House Of Edits" / "WLT Design" from scratch.

---

## Table of Contents

1. [Overview & What This Website Does](#1-overview--what-this-website-does)
2. [Technology Stack & Dependencies](#2-technology-stack--dependencies)
3. [Skills Required (Human / Team)](#3-skills-required-human--team)
4. [Complete File & Folder Structure](#4-complete-file--folder-structure)
5. [Architecture Deep-Dive](#5-architecture-deep-dive)
6. [The 3D Engine (Three.js)](#6-the-3d-engine-threejs)
7. [Scroll-Driven Animation System (GSAP + ScrollTrigger)](#7-scroll-driven-animation-system-gsap--scrolltrigger)
8. [Smooth Scrolling (Lenis)](#8-smooth-scrolling-lenis)
9. [Custom Cursor (CurDot)](#9-custom-cursor-curdot)
10. [Loading System (Pace.js)](#10-loading-system-pacejs)
11. [Mobile vs Desktop Strategy](#11-mobile-vs-desktop-strategy)
12. [CSS Architecture & Design Tokens](#12-css-architecture--design-tokens)
13. [3D Model Pipeline (Blender → GLB)](#13-3d-model-pipeline-blender--glb)
14. [Texture Pipeline & Optimization](#14-texture-pipeline--optimization)
15. [GLSL Shaders (Water Effect)](#15-glsl-shaders-water-effect)
16. [HTML Structure Blueprint](#16-html-structure-blueprint)
17. [JavaScript Logic Breakdown](#17-javascript-logic-breakdown)
18. [Portfolio System (JSON-Driven)](#18-portfolio-system-json-driven)
19. [Contact Form](#19-contact-form)
20. [Performance Optimization Techniques](#20-performance-optimization-techniques)
21. [Hosting & Deployment](#21-hosting--deployment)
22. [Common Pitfalls & Gotchas](#22-common-pitfalls--gotchas)
23. [Step-by-Step Rebuild Checklist](#23-step-by-step-rebuild-checklist)
24. [Tools & Software List](#24-tools--software-list)

---

## 1. Overview & What This Website Does

This is a **single-page, fully static website** that uses a **3D animated room walkthrough** as the hero/background. As the user scrolls, a virtual camera flies through a series of 3D rooms built in Blender, with text content appearing and disappearing at specific scroll positions.

### Key User Experience Flow:
1. **Preloader** → Shows brand logo + "Loading" / "Launching 3D" text while assets load
2. **Hero Section** → 3D room entrance with animated god-rays, particles, and a sky sphere. Text overlays introduce the brand.
3. **Room Walkthrough** → Camera animates through 4 interconnected rooms as user scrolls. Each room has unique textures, lighting, and narrative text.
4. **Services Section** → Horizontal scroll section listing services (pinned with GSAP)
5. **Products/Upsell Section** → Second 3D scene with a product model (e.g., earbuds) that animates on scroll
6. **Portfolios Section** → Grid of portfolio items with tilt hover effects and popup detail views (data from JSON)
7. **Contact Section** → Contact form with video background
8. **Footer** → Social links + copyright

### Key Visual Features:
- Two independent WebGL renderers (room scene + product scene)
- Scroll-linked camera animation driven by GSAP ScrollTrigger
- Water shader with animated normal maps
- Particle system (floating dust/light specks)
- God-ray entrance effect with pulsating opacity
- Room entrance transitions with additive blending
- Smooth scrolling via Lenis
- Custom animated cursor via CurDot
- Page transition overlay for menu navigation
- VanillaTilt 3D hover effect on portfolio images

---

## 2. Technology Stack & Dependencies

### Core Libraries (loaded via CDN)

| Library | Version | CDN URL | Purpose |
|---------|---------|---------|---------|
| **Three.js** | 0.159.0 | `unpkg.com/three@0.159.0/build/three.module.min.js` | 3D WebGL rendering engine |
| **Three.js GLTFLoader** | 0.159.0 | `unpkg.com/three@0.159.0/examples/jsm/loaders/GLTFLoader.js` | Loading .glb 3D models |
| **Three.js DRACOLoader** | 0.159.0 | `unpkg.com/three@0.159.0/examples/jsm/loaders/DRACOLoader.js` | Decompressing Draco-compressed meshes |
| **GSAP** | 3.11.5 | `cdn.jsdelivr.net/npm/gsap@3.11.5/dist/gsap.min.js` | Animation engine |
| **GSAP ScrollTrigger** | 3.11.5 | `cdn.jsdelivr.net/npm/gsap@3.11.5/dist/ScrollTrigger.min.js` | Scroll-linked animations |
| **Lenis** | 1.0.33 | `unpkg.com/@studio-freight/lenis@1.0.33/dist/lenis.min.js` | Smooth scrolling (desktop only) |
| **VanillaTilt** | 1.8.1 | `cdn.jsdelivr.net/npm/vanilla-tilt@1.8.1/dist/vanilla-tilt.min.js` | 3D tilt effect on hover |
| **Pace.js** | latest | `cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js` | Page load progress bar |

### Custom Scripts

| File | Purpose |
|------|---------|
| `script.clean.js` | Main application logic (3D scene setup, animations, event handlers) — ES Module |
| `curdot_loader.js` | Deferred loader for the custom cursor library |
| `CurDot.min.js` | Custom animated cursor library |

### Typography
- **Font**: `neulis-sans` loaded via Adobe Typekit (`https://use.typekit.net/mqu3bsc.css`)
- Applied globally to: `h1, h2, h3, h4, h5, h6, div, p, a, span`

### Important: Import Map
Three.js is loaded as an ES Module using an **import map** in the HTML `<head>`:
```html
<script type="importmap">
    {
        "imports": {
            "three": "https://unpkg.com/three@0.159.0/build/three.module.min.js",
            "three/": "https://unpkg.com/three@0.159.0/"
        }
    }
</script>
<script src="script.clean.js" type="module"></script>
```
This allows the JS to use `import * as THREE from "three"` without a bundler.

---

## 3. Skills Required (Human / Team)

### Must-Have Skills:
1. **3D Modeling (Blender)** — Creating rooms, props, camera paths, and exporting to `.glb`
2. **Three.js / WebGL** — Scene setup, texture mapping, camera animation, shader programming
3. **GSAP + ScrollTrigger** — Complex scroll-pinned timelines, scrubbed animations
4. **Advanced CSS** — Custom properties, transitions, media queries, flexbox/grid
5. **JavaScript (ES Modules)** — DOM manipulation, event handling, async loading
6. **Texture Optimization** — Baking textures in Blender, exporting as WebP/JPG at correct resolutions
7. **GLSL Shader Programming** — At minimum the water shader; bloom compositing shaders

### Nice-to-Have Skills:
- **Draco Compression** — Compressing .glb models for faster loading
- **Video Production** — Creating looping background videos for monitor/phone screens in the 3D scene
- **UI/UX Design** — Layout, typography, color theory
- **Server-Side** — PHP for contact form (`form.php`)

---

## 4. Complete File & Folder Structure

```
project-root/
├── index.html                    # Single-page HTML (all sections)
├── style.css                     # All CSS (~2357 lines, ~51KB)
├── script.clean.js               # Main JS logic (~37KB, minified single-line ES module)
├── curdot_loader.js              # Deferred CurDot initialization
├── CurDot.min.js                 # Custom cursor library
├── portfolios.json               # Portfolio data (titles, descriptions, images, videos)
│
├── model/
│   ├── room.glb                  # Main 3D room model with camera animation (~928KB)
│   ├── model.glb                 # Product/upsell 3D model (~2.5MB)
│   └── img/
│       ├── sky_hdri7.webp        # Sky sphere texture (618KB)
│       ├── main_entrance_ray.png # God-ray texture (393KB)
│       ├── entrance_main-com.jpg # Entrance wall texture (396KB)
│       ├── hdr5.jpg              # Environment map for product scene (79KB)
│       ├── particles.png         # Particle sprite texture (9KB)
│       ├── waterNormal1.png      # Water normal map 1 (38KB)
│       ├── waterNormal2.png      # Water normal map 2 (37KB)
│       ├── video-desktop-img.webp # Fallback still for desktop video (mobile)
│       ├── video-mobile-img.webp  # Fallback still for mobile video (mobile)
│       ├── room1_wall-resize.webp
│       ├── room1_floor-resize.webp
│       ├── room1_window-resize.webp
│       ├── room1_furniture1-resize.webp
│       ├── room1_furniture2-adjusted.webp
│       ├── room2_floor-resize.webp
│       ├── room2_blocks-resize.webp
│       ├── room2_wall-topaz-compressed.jpg
│       ├── room2_products-topaz-resize.webp
│       ├── room3_floor-resize.webp
│       ├── room3_rocks-den.webp
│       ├── room3_deer-den.webp
│       ├── room3_plants1_com1.webp  # Transparent foliage (alpha)
│       ├── room3_plants2_com1.webp  # Transparent foliage (alpha)
│       ├── room4_roof-topaz.webp
│       ├── room4_floor-resize.webp
│       ├── room4_platforms-den.webp
│       ├── room4_items-topaz.webp
│       └── mobile/               # Lower-res copies for mobile devices
│           ├── sky_hdri7-mobile.webp
│           ├── entrance_ray-min-mobile.png
│           ├── entrance_main-com-mobile.jpg
│           ├── room1_wall-resize-mobile.webp
│           ├── ... (21 total mobile textures)
│
├── draco/
│   ├── draco_decoder.js          # Draco WASM decoder (719KB)
│   ├── draco_decoder.wasm        # Draco WASM binary (285KB)
│   └── draco_wasm_wrapper.js     # Draco wrapper (58KB)
│
├── img/
│   ├── thelogo.png               # Site logo
│   ├── the-white.png             # White version for preloader
│   ├── featured-image.jpg        # OG image for social sharing
│   ├── favicon.png               # Browser tab icon
│   ├── desktop-video.mp4         # Video played on 3D monitor screen (42KB)
│   ├── mobile-video.mp4          # Video played on 3D phone screen (33KB)
│   ├── contact.mp4               # Contact section background video (337KB)
│   ├── facebook-logo.svg
│   ├── instagram-logo.svg
│   ├── twitter-logo.svg
│   ├── linkedin-logo.svg
│   ├── close.svg                 # Mobile menu close icon
│   ├── arrow.svg
│   ├── awards.svg
│   ├── loading.svg
│   ├── logo.svg                  # Original SVG logo
│   ├── logo-white.svg            # White SVG logo
│   └── portfolios/
│       ├── portfolio-wlt-1.webp  # Portfolio thumbnails
│       ├── portfolio-wlt-2.webp  # Portfolio gallery images
│       ├── portfolio-wlt-3.webp
│       ├── portfolio-wlt-video.mp4
│       ├── portfolio-bb-1.webp
│       ├── ... (3 images per portfolio × 7 portfolios + videos)
│
└── docs/                         # Documentation folder
    ├── Content_Editing_Guide.md
    ├── Deployment_Guide.md
    └── screenshots/
```

---

## 5. Architecture Deep-Dive

### Rendering Architecture
This website uses **two completely separate WebGL renderers**:

1. **`renderer`** — Renders the main room walkthrough scene (`#scene-inner`)
2. **`rendererUpsell`** — Renders the product showcase scene (`#scene_product`)

Each has its own:
- `THREE.Scene`
- `THREE.PerspectiveCamera`
- `THREE.Group` (holder)
- `THREE.AnimationMixer`
- Render loop function (`render()` and `renderUpsell()`)

### Performance Optimization: Render Pausing
The two render loops **alternate** based on scroll position:
- When the user is in the **room section** → `render()` runs, `renderUpsell()` is paused
- When the user scrolls **past the services section** → `render()` pauses, `renderUpsell()` starts
- This is controlled by `renderRoomPause` and `renderUpsellPause` boolean flags

### Scene Graph Structure
```
scene (THREE.Scene)
├── holder (THREE.Group)
│   ├── camera (from GLB)
│   └── model (loaded from room.glb)
│       ├── camera_empty
│       ├── entrance_godray (additive blended)
│       ├── room_entrance_1, _2, _3 (animated doorways)
│       ├── entrance_wall (textured)
│       ├── room1_wall, floor, window, furniture1, furniture2
│       ├── room2_wall, floor, blocks, products
│       ├── room3_floor, rocks, deer, plants1_com, plants2_com
│       ├── room4_roof, floor, platforms, items
│       ├── monitor_screen (VideoTexture)
│       ├── phone_screen (VideoTexture)
│       └── white_mat (various white surfaces)
├── skyMesh (SphereGeometry + sky texture)
├── surface (water shader mesh)
└── particles × 5 (Points with sprite textures)
```

---

## 6. The 3D Engine (Three.js)

### Scene Setup
```javascript
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

// Renderer 1: Room scene
var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.autoClear = false;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
document.querySelector("#scene-inner").appendChild(renderer.domElement);

// Renderer 2: Product scene
var rendererUpsell = new THREE.WebGLRenderer({ alpha: true, antialias: true });
rendererUpsell.toneMapping = THREE.ACESFilmicToneMapping;
// Shadows only on desktop
if (window.innerWidth > 960) {
    rendererUpsell.shadowMap.enabled = true;
}
```

### Key Three.js Concepts Used:
- **TextureLoader** for all image textures (WebP, JPG, PNG)
- **VideoTexture** for playing MP4 videos on 3D surfaces
- **MeshBasicMaterial** for most surfaces (no lighting needed = faster)
- **MeshPhysicalMaterial** for glass (metalness, roughness, reflectivity)
- **ShaderMaterial** for the water surface (custom GLSL)
- **PointsMaterial** for floating particles
- **SphereGeometry** for the sky dome
- **AdditiveBlending** for god-rays and entrance glow effects
- **EquirectangularReflectionMapping** for the product scene environment map
- **DRACOLoader** for decompressing the 3D models
- **AnimationMixer + AnimationClip** for camera animation

### Model Loading Pattern
```javascript
var loader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/");  // Local Draco decoder files
loader.setDRACOLoader(dracoLoader);

loader.load("/model/room.glb", function(gltf) {
    gltf.scene.traverse(mesh => {
        // Assign custom materials based on mesh name
        if (mesh.name.includes("entrance_wall")) {
            mesh.material = entranceWallMaterial;
        }
        // ... repeat for each named mesh
    });
    
    // Use camera from the GLB file
    camera = window.innerWidth > 960 ? gltf.cameras[0] : gltf.cameras[1];
    
    // Setup camera animation
    var cameraClip = THREE.AnimationClip.findByName(gltf.animations, "CameraAction");
    mixer = new THREE.AnimationMixer(model);
    action = mixer.clipAction(cameraClip);
    action.clampWhenFinished = true;
    action.setLoop(THREE.LoopOnce);
    action.play();
});
```

### Texture Assignment Pattern
Every mesh in the GLB is named in Blender (e.g., `room1_wall`, `room2_floor`). The JavaScript identifies meshes by name and assigns pre-loaded textures:
```javascript
// All textures are loaded BEFORE the model loads
room1WallTexture = textureLoader.load("/model/img/room1_wall-resize.webp");
room1WallTexture.flipY = false; // CRITICAL: GLB textures need flipY = false
const room1WallMaterial = new THREE.MeshBasicMaterial({ map: room1WallTexture });
```

> **CRITICAL**: All textures used on GLB meshes must have `flipY = false` because glTF uses a different UV convention than Three.js defaults.

---

## 7. Scroll-Driven Animation System (GSAP + ScrollTrigger)

### How Scroll Controls the 3D Camera
The camera's animation is **baked into the GLB file** (created in Blender as a camera path). GSAP ScrollTrigger scrubs through this animation based on scroll position:

```javascript
function createAnimation(mixer, action, clip) {
    let proxy = {
        get time() { return mixer.time; },
        set time(value) {
            action.paused = false;
            mixer.setTime(value);
            action.paused = true;
        }
    };

    let timeline = gsap.timeline({
        scrollTrigger: {
            trigger: renderer.domElement,
            start: "top top",
            end: "+=900%",       // 9x viewport height of scrollable distance
            pin: "#scene-inner", // Pin the 3D canvas
            pinType: "fixed",
            scrub: 1.25,         // Smooth scrubbing with 1.25s easing
        }
    });

    timeline.to(proxy, { time: clip.duration }); // Scrub through entire animation

    // On desktop, also push the text overlay away in 3D
    if (window.innerWidth > 960) {
        timeline.to(".scene-content-inner", {
            ease: "none", z: 4000, duration: 0.245
        }, "<");
    }
}
```

### Text Reveal Based on Room Progress
The `roomProgress` variable (0–100%) tracks how far through the camera animation the user has scrolled. Text elements are shown/hidden at specific progress thresholds:
```javascript
// Desktop anchors
sceneProgressAnchor(14, "#scene-content-2-h2");  // Show at 14%
sceneProgressAnchor(18, "#scene-content-2-p");   // Show at 18%
sceneProgressAnchor(34, "#scene-content-3-h2");  // Show at 34%
// etc.

// Mobile anchors (show AND hide)
sceneProgressMobileAnchor(14, 28, "#scene-content-2-h2"); // Show 14%-28%
```

### Services Section (Horizontal Scroll)
The services section uses a **pinned horizontal scroll** pattern:
```javascript
servicesTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".services-wrapper",
        start: "top top",
        end: "+=320%",
        pin: true,
        pinType: "fixed",
        anticipatePin: 1,
        scrub: 1
    }
});
// Horizontally scroll the inner wrapper
servicesTimeline.to(".services-inner-wrapper", { ease: "none", x: "0%", duration: 1.2 });
```

### Product Section Animation
The product (upsell) section has its own scroll-linked 3D animation with text captions fading in/out:
```javascript
function createAnimationUpsell(mixer, action, clip) {
    // Same proxy pattern as room animation
    let timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".products-wrapper",
            start: "top top",
            end: "+=600%",
            pin: true,
            scrub: 1.8
        }
    });
    // Fade title, animate 3D, show captions sequentially
    timeline.to(proxy, { time: clip.duration }, "<");
    timeline.to(".product-captions-1", { opacity: 1, y: "0%", duration: 0.02 }, "<");
    // ... more sequential caption animations
}
```

---

## 8. Smooth Scrolling (Lenis)

Lenis provides buttery-smooth scrolling on **desktop only** (disabled on mobile for native feel):
```javascript
if (window.innerWidth > 960) {
    window.onload = function() {
        let lenis = new Lenis({
            duration: 1.2,
            easing: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            smoothTouch: false  // Native touch on mobile
        });
        requestAnimationFrame(function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        });
    };
}
```

> **Important**: Lenis is stopped when portfolio popups open (`lenis.stop()`) and restarted when they close (`lenis.start()`).

---

## 9. Custom Cursor (CurDot)

CurDot is loaded **after** Three.js to prevent WebGL context conflicts:
```javascript
// curdot_loader.js
(function() {
    function loadCurDot() {
        const script = document.createElement('script');
        script.src = 'CurDot.min.js';
        script.onload = function() {
            if (window.innerWidth > 960) {
                curDot({
                    zIndex: 100,
                    diameter: 10,
                    borderWidth: 0,
                    easing: 6,
                    background: "linear-gradient(90deg, #ff9000, #cf6500)",
                    mixBlendMode: "screen"
                }).over("a, input[type='submit']", { scale: -1, opacity: 1 });
            }
        };
        document.body.appendChild(script);
    }
    // Delay to let Three.js grab WebGL context first
    setTimeout(loadCurDot, 500);
})();
```

> **CRITICAL**: CurDot uses a `<canvas>` element. If it loads before Three.js, it will claim the WebGL context and crash the 3D rendering. Always load it AFTER Three.js with a delay.

---

## 10. Loading System (Pace.js)

Pace.js shows a progress bar while assets load. The preloader stays visible until BOTH Pace finishes AND the GLB model is loaded:
```javascript
var gltfLoaded = false;
Pace.on("done", function() {
    var check = setInterval(function() {
        if (gltfLoaded === true) {
            paceDone = true;
            document.body.classList.add("pace-preloaded");
            setTimeout(function() {
                document.getElementsByClassName("scene-content")[0].classList.add("loaded");
            }, 1500);
            clearInterval(check);
        }
    }, 200);
});
```

### Preloader CSS Sequence:
1. `.preloader` is visible by default (full screen overlay)
2. `body.preloaded` → preloader begins fade out
3. `body.pace-preloaded` → preloader fully hidden, 3D scene revealed
4. `.scene-content.loaded` → text content fades in

---

## 11. Mobile vs Desktop Strategy

The site uses a **hard breakpoint at 960px** to switch between completely different rendering strategies:

### Detection
```javascript
var initialScreenSize = window.innerWidth;

// Force reload if user resizes across the breakpoint
window.addEventListener("resize", function() {
    if ((initialScreenSize > 959 && window.innerWidth < 960) ||
        (initialScreenSize < 960 && window.innerWidth > 959)) {
        location.reload();
    }
});
```

### Desktop (> 960px):
- Uses **Camera 0** from GLB
- Loads **full-resolution textures** from `/model/img/`
- **Video textures** on monitor/phone screens (MP4 → VideoTexture)
- **Lenis** smooth scrolling enabled
- **CurDot** custom cursor enabled
- **VanillaTilt** on portfolio images
- **Shadow maps** on product scene
- **Water shader** rendered
- Text pushed away in 3D space (`z: 4000`)

### Mobile (≤ 960px):
- Uses **Camera 1** from GLB (different angle/FOV)
- Loads **lower-resolution textures** from `/model/img/mobile/`
- **Static image fallbacks** instead of VideoTexture
- No Lenis, no CurDot, no VanillaTilt
- No shadow maps
- Separate mobile text content (`.scene-content-mobile`)
- Text shown/hidden with progress ranges (not just thresholds)

### Mobile Textures
The `/model/img/mobile/` folder must contain 21 files named with `-mobile` suffix:
```
sky_hdri7-mobile.webp
entrance_ray-min-mobile.png
entrance_main-com-mobile.jpg
room1_wall-resize-mobile.webp
room1_floor-resize-mobile.webp
room1_window-resize-mobile.webp
room1_furniture1-resize-mobile.webp
room1_furniture2-adjusted-mobile.webp
room2_floor-resize-mobile.webp
room2_blocks-resize-mobile.webp
room2_wall-topaz-compressed-mobile.jpg
room2_products-topaz-resize-mobile.webp
room3_floor-resize-mobile.webp
room3_rocks-den-mobile.webp
room3_deer-den-mobile.webp
room4_roof-topaz-mobile.webp
room4_floor-resize-mobile.webp
room4_platforms-den-mobile.webp
room4_items-topaz-mobile.webp
room3_plants1_com1-mobile.webp
room3_plants2_com1-mobile.webp
```

### Critical Mobile Video Attributes
Videos MUST have `autoplay playsinline muted loop` for mobile browsers:
```html
<video id="video_desktop" src="/img/desktop-video.mp4" autoplay playsinline muted loop></video>
<video id="video_mobile" src="/img/mobile-video.mp4" autoplay playsinline muted loop></video>
```
> Without `playsinline`, iOS will open video in fullscreen. Without `muted`, autoplay is blocked.

---

## 12. CSS Architecture & Design Tokens

### CSS Variables (`:root`)
```css
:root {
    --white: #fff;
    --dark: #101010;
    --orange: #df4418;
    --dark_transition: 0.4s;
}
```

### Dark Mode Toggle
When the user scrolls past the room section, the page switches to dark mode:
```css
html.dark {
    background: var(--dark);
}
```
This is toggled via JavaScript:
```javascript
document.querySelector("html").classList.add("dark", "room-over");
```

### Key CSS Patterns:
- **Pinned sections** use GSAP's `pin: true` (creates `.pin-spacer` wrappers)
- **Menu transitions** use a full-screen overlay (`.menu-transition`) with CSS transitions
- **Portfolio popups** use fixed positioning with backdrop blur
- **Mobile menu** slides in from top with staggered link animations
- **Text reveal** uses `.animate.active` class toggling

### CSS File Size: ~2357 lines, ~51KB
The CSS is a single monolithic file with sections for:
- Base styles & typography
- Header & navigation
- Mobile menu
- Preloader
- Scene content & overlays
- Services section
- Products section
- Portfolios section
- Contact section
- Footer/copyright
- Media queries (responsive breakpoints)

---

## 13. 3D Model Pipeline (Blender → GLB)

### Blender Setup Requirements:

#### Room Model (`room.glb` — ~928KB):
1. **Create 4 interconnected rooms** with distinct themes
2. **Name every mesh** with a consistent prefix system:
   - `entrance_wall`, `entrance_godray`
   - `room1_wall`, `room1_floor`, `room1_window`, `room1_furniture1`, `room1_furniture2`
   - `room2_wall`, `room2_floor`, `room2_blocks`, `room2_products`
   - `room3_floor`, `room3_rocks`, `room3_deer`, `room3_plants1_com`, `room3_plants2_com`
   - `room4_roof`, `room4_floor`, `room4_platforms`, `room4_items`
   - `room_entrance_1`, `room_entrance_2`, `room_entrance_3` (doorway meshes)
   - `room_entrance-1_cover`, `room_entrance-2_cover`, `room_entrance-3_cover`
   - `monitor_screen`, `phone_screen` (flat quads for video playback)
   - `white_mat` (simple white surfaces)
3. **Create a camera** and animate it along a path through all rooms
   - Name the animation `CameraAction`
   - The camera path should take ~10-15 seconds at 24fps
4. **Add a second camera** for mobile (tighter FOV or different angle)
5. **UV unwrap** all meshes and bake textures externally
6. **Export as GLB** with Draco compression enabled

#### Product Model (`model.glb` — ~2.5MB):
1. Model the product (e.g., earbuds, shoes, etc.)
2. Include lights in the scene (they'll cast shadows on desktop)
3. Name rotating meshes with `meshRotate` prefix
4. Name glass surfaces with `glass` prefix
5. Create and animate a camera (`CameraAction`)
6. Add a second camera for mobile
7. Export as GLB with Draco compression

### Draco Compression:
The Draco decoder files must be hosted locally at `/draco/`:
```
draco/
├── draco_decoder.js
├── draco_decoder.wasm
└── draco_wasm_wrapper.js
```
Get these from the Three.js repository: `three/examples/jsm/libs/draco/`

---

## 14. Texture Pipeline & Optimization

### Texture Baking Workflow:
1. In Blender, create detailed materials with textures
2. Bake each surface to a flat image texture
3. Export in optimized formats:
   - **WebP** for most textures (best compression-to-quality ratio)
   - **JPG** for very large textures where WebP is too slow to decode
   - **PNG** for textures requiring alpha transparency (god-rays, plants)

### Resolution Guidelines:
| Texture Type | Desktop Resolution | Mobile Resolution |
|-------------|-------------------|-------------------|
| Sky sphere | 2048×1024 | 1024×512 |
| Wall textures | 2048×2048 | 1024×1024 |
| Floor textures | 2048×2048 | 1024×1024 |
| Furniture | 1024×1024 | 512×512 |
| Plants (alpha) | 2048×2048 | 1024×1024 |
| God-ray | 1024×1024 | 512×512 |

### Critical Texture Settings:
```javascript
texture.flipY = false; // MUST be false for GLB models
```

---

## 15. GLSL Shaders (Water Effect)

The water surface uses custom vertex and fragment shaders injected via `THREE.ShaderChunk`:

### Vertex Shader:
```glsl
varying vec2 _worldPos;
varying vec2 _uv;
void main() {
    vec4 worldPos = vec4(position, 1.0);
    _worldPos = worldPos.xz;
    _uv = _worldPos * NORMAL_MAP_SCALE;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * worldPos;
}
```

### Fragment Shader:
```glsl
void main() {
    vec3 viewDir = normalize(vec3(_worldPos.x, 0.0, _worldPos.y) - cameraPosition);
    
    // Animated normal maps (two layers scrolling in different directions)
    vec3 normal = texture2D(_NormalMap1, _uv + VELOCITY_1 * _Time).xyz * 2.0 - 1.0;
    normal += texture2D(_NormalMap1, _uv + VELOCITY_2 * _Time).xyz * 2.0 - 1.0;
    normal = normalize(normal).xzy;
    
    // Fresnel reflection
    float reflectivity = 1.25 - max(0.0, dot(-viewDir, normal));
    vec3 reflection = sampleSkybox(reflect(viewDir, normal));
    vec3 surface = reflectivity * reflection;
    
    gl_FragColor = vec4(surface, max(reflectivity, specular));
}
```

### Bloom Compositing Shaders (in HTML):
```html
<script type="x-shader/x-vertex" id="vertexshader">
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
</script>
<script type="x-shader/x-fragment" id="fragmentshader">
    uniform sampler2D baseTexture;
    uniform sampler2D bloomTexture;
    varying vec2 vUv;
    void main() {
        gl_FragColor = (texture2D(baseTexture, vUv) + vec4(1.0) * texture2D(bloomTexture, vUv));
    }
</script>
```

---

## 16. HTML Structure Blueprint

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags, OG tags -->
    <!-- CDN scripts (GSAP, Three.js importmap, Lenis, VanillaTilt, Pace) -->
    <!-- Inline shaders (vertex + fragment) -->
    <!-- CSS link -->
    <!-- Font link (Adobe Typekit) -->
</head>
<body oncontextmenu="return false;">

    <!-- HEADER (fixed navigation) -->
    <header>
        <div class="logo-wrapper">...</div>
        <div class="menu-wrapper">
            <!-- Menu links with data-menu="#section" attributes -->
            <div class="menu-toggle menu-burger">...</div>
        </div>
    </header>

    <!-- MENU TRANSITION OVERLAY -->
    <div class="menu-transition"></div>

    <!-- PRELOADER -->
    <div class="preloader">
        <div class="preloader-logo"><img src="logo-white.png"></div>
        <h2 class="preloader-title-1">Loading</h2>
        <h2 class="preloader-title-2">Launching 3D</h2>
    </div>

    <!-- MAIN CONTAINER -->
    <div id="home" class="main-container">
        <!-- 3D SCENE -->
        <div id="scene">
            <div id="scene-inner">
                <!-- Desktop text overlays -->
                <div class="scene-content">
                    <div class="scene-content-inner">
                        <!-- h1/h2/p elements with scene-content-1 through scene-content-4 classes -->
                    </div>
                </div>
                <!-- Mobile text overlays -->
                <div class="scene-content-mobile">
                    <!-- Separate mobile paragraphs -->
                </div>
            </div>
        </div>

        <!-- SERVICES (horizontal scroll) -->
        <div class="services-wrapper">
            <div id="services" class="services-inner-container">
                <div class="services-mobile-title">...</div>
                <div id="services_wrapper" class="services-inner-pos">
                    <div class="services-inner-wrapper">
                        <h2>Services</h2>
                        <div class="services-items-wrapper">
                            <!-- 4 service items (div > h3 + p) -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- PRODUCTS (second 3D scene) -->
    <div id="products">
        <div class="products-wrapper">
            <div class="products-title">...</div>
            <div class="products-end-title">...</div>
            <div id="scene_product"></div>  <!-- Second WebGL canvas injected here -->
            <div class="product-captions">
                <!-- 3 caption paragraphs that fade in/out -->
            </div>
        </div>
    </div>

    <!-- PORTFOLIOS -->
    <div id="portfolios">
        <div class="portfolios-inner">
            <!-- Scrolling title marquee -->
            <!-- Portfolio grid (7 items) -->
        </div>
        <div class="portfolios-popup">
            <div class="portfolios-popup-inner" data-lenis-prevent>
                <!-- 7 empty portfolio detail containers (populated from JSON) -->
            </div>
            <div class="portfolios-popup-close">...</div>
        </div>
        <div class="portfolios-popup-bg"></div>
    </div>

    <!-- CONTACT -->
    <div id="contact">
        <div class="contact-wrapper">
            <!-- Left: email + video -->
            <!-- Right: form -->
            <!-- Bottom: social links -->
        </div>
        <div class="copyright-wrapper">...</div>
    </div>

    <!-- MOBILE MENU (full-screen overlay) -->
    <div class="menu-mobile">
        <div class="menu-mobile-wrapper">  <!-- MUST use this class name -->
            <div class="menu-mobile-close">...</div>
            <a class="menu-child mobile-menu-child" data-menu="#home">Home</a>
            <a class="menu-child mobile-menu-child" data-menu="#services">Services</a>
            <a class="menu-child mobile-menu-child" data-menu="#portfolios">Portfolios</a>
            <a class="menu-child mobile-menu-child" data-menu="#contact">Contact</a>
        </div>
        <div class="menu-mobile-social">...</div>
    </div>

    <!-- HIDDEN VIDEOS (for 3D textures) -->
    <div class="room-videos-wrapper">
        <video id="video_desktop" autoplay playsinline muted loop>...</video>
        <video id="video_mobile" autoplay playsinline muted loop>...</video>
    </div>

    <script src="curdot_loader.js"></script>
</body>
</html>
```

> **CRITICAL HTML CLASS NAMES**: The CSS targets very specific class names. Renaming classes (e.g., `menu-mobile-wrapper` → `menu-mobile-inner`) will break styling and animations. Always verify class names match the CSS.

---

## 17. JavaScript Logic Breakdown

### Initialization Order:
1. Three.js scenes and renderers created
2. Sky sphere added to scene
3. Environment map loaded for product scene
4. Particle system created (5 layers × 35 particles)
5. Video textures created (desktop) or static fallback images loaded (mobile)
6. All 21 room textures loaded
7. Water shader initialized
8. Room GLB loaded → materials assigned → camera animation setup → GSAP timeline created
9. Product GLB loaded → waits for room to finish → creates its own animation
10. Pace.js fires "done" → preloader removed → scene content revealed
11. CurDot loaded after 500ms delay

### Mouse Parallax:
The camera has subtle mouse-following behavior:
```javascript
camera.position.x += 0.05 * (0.0002 * mouseX - camera.position.x);
camera.position.z += 0.05 * (0.0002 * mouseY - camera.position.z);
camera.rotation.x -= 0.02 * (0.00001 * mouseY + camera.rotation.x + Math.PI/2);
```

### God-Ray Animation:
The entrance god-ray has a pulsating opacity:
```javascript
entranceGodray.material.opacity = 0.12 + 0.08 * Math.abs(Math.sin(0.8 * time));
```

### Room Entrance Fade:
Doorway meshes fade out as the camera passes through:
```javascript
roomAnimate0.material.opacity = Math.min(Math.max(1.35 - roomProgress/10, 0), 1);
```

---

## 18. Portfolio System (JSON-Driven)

Portfolio data is stored in `portfolios.json` and loaded via XHR when a user clicks:
```json
[
  {
    "content": {
      "type": "video",        // or "img"
      "video": "/img/portfolios/portfolio-video.mp4",
      "image": null,
      "title": "Project Name",
      "category": "CATEGORY",
      "description": "Description text...",
      "link": "https://example.com"  // or null
    },
    "gallery": {
      "gallery1": "/img/portfolios/gallery-1.webp",
      "gallery2": "/img/portfolios/gallery-2.webp"
    }
  }
]
```

The HTML contains **empty placeholder divs** that are populated dynamically when clicked.

---

## 19. Contact Form

The form uses vanilla JavaScript + XHR to submit to `form.php`:
```javascript
document.getElementById("contact_form").addEventListener("submit", function(e) {
    e.preventDefault();
    var form = e.target;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.send(formData);
});
```

> **Note**: You need a server-side `form.php` file on your hosting to handle the submission. For static hosting without PHP, use a third-party form service like Formspree, Netlify Forms, or EmailJS.

---

## 20. Performance Optimization Techniques

1. **Render pausing**: Only one 3D scene renders at a time
2. **Frustum culling**: Disabled during load, re-enabled after Pace.js completes
3. **Pixel ratio capping**: `Math.min(window.devicePixelRatio, 2)` prevents 3x rendering on high-DPI screens
4. **Draco compression**: Reduces GLB file sizes by ~60-80%
5. **WebP textures**: 25-35% smaller than equivalent JPG
6. **Mobile texture set**: Lower resolution textures for phones
7. **Static image fallbacks**: Mobile uses still images instead of video textures
8. **Conditional features**: Shadows, smooth scrolling, custom cursor only on desktop
9. **Deferred loading**: CurDot loads 500ms after DOM ready
10. **Lazy portfolio loading**: Portfolio details loaded on-demand from JSON

---

## 21. Hosting & Deployment

This is a **100% static website**. No Node.js, no build step, no server-side rendering needed.

### Hostinger:
1. Go to File Manager → `public_html`
2. Upload all files from the `clone` folder directly into `public_html`
3. Ensure folder structure is preserved (`model/`, `img/`, `draco/`)
4. Done — the site is live

### AWS S3 + CloudFront:
1. Create an S3 bucket with static website hosting enabled
2. Upload all files preserving folder structure
3. Set `index.html` as the index document
4. Create a CloudFront distribution pointed at the S3 bucket
5. Configure HTTPS via ACM certificate

### Important MIME Types:
Ensure your server serves these correctly:
- `.glb` → `model/gltf-binary`
- `.webp` → `image/webp`
- `.wasm` → `application/wasm`
- `.js` (module) → `application/javascript`

---

## 22. Common Pitfalls & Gotchas

| Problem | Cause | Fix |
|---------|-------|-----|
| **Black screen on mobile** | Missing `/model/img/mobile/` folder | Create folder with all 21 mobile textures |
| **Videos not playing on iOS** | Missing `playsinline` attribute | Add `autoplay playsinline muted loop` to ALL `<video>` tags |
| **Mobile menu links invisible** | Wrong wrapper class name | Must use `.menu-mobile-wrapper`, not `.menu-mobile-inner` or `.menu-mobile-nav` |
| **CurDot crashes WebGL** | CurDot loaded before Three.js | Use `curdot_loader.js` with 500ms delay |
| **Textures appear flipped** | Three.js default `flipY = true` | Set `texture.flipY = false` for all GLB textures |
| **Page breaks on resize** | Crossing 960px breakpoint | Force `location.reload()` when crossing the breakpoint |
| **3D not loading** | Missing Draco decoder files | Ensure `/draco/` folder exists with all 3 files |
| **Stray `#` characters in HTML** | Accidental editing | Remove any bare `#` characters from `<head>` |
| **Portfolio popup scroll issues** | Lenis intercepting scroll | Add `data-lenis-prevent` to popup inner container |

---

## 23. Step-by-Step Rebuild Checklist

### Phase 1: Foundation
- [ ] Create project folder structure
- [ ] Set up `index.html` with all CDN scripts and import map
- [ ] Create `style.css` with CSS variables and base styles
- [ ] Test that Three.js loads correctly with a simple cube

### Phase 2: 3D Room Scene
- [ ] Design 4 rooms in Blender with consistent naming
- [ ] Create camera animation path through all rooms
- [ ] Add a second camera for mobile
- [ ] Bake and export all textures (desktop + mobile versions)
- [ ] Export as Draco-compressed GLB
- [ ] Load and display the model in Three.js
- [ ] Assign all textures via mesh name matching

### Phase 3: Scroll Animation
- [ ] Set up GSAP ScrollTrigger
- [ ] Link camera animation to scroll position
- [ ] Add text reveal/hide at correct progress thresholds
- [ ] Add sky sphere, particles, water shader
- [ ] Add god-ray entrance effect

### Phase 4: Product Scene
- [ ] Model product in Blender
- [ ] Create camera animation
- [ ] Set up second renderer
- [ ] Link to scroll with GSAP
- [ ] Add caption animations

### Phase 5: Services Section
- [ ] Build horizontal scroll layout
- [ ] Add GSAP pinned scroll animation
- [ ] Style service items

### Phase 6: Portfolios
- [ ] Create portfolio grid layout
- [ ] Set up `portfolios.json` data
- [ ] Build popup system with dynamic content loading
- [ ] Add VanillaTilt hover effects (desktop)

### Phase 7: Contact & Footer
- [ ] Build contact form layout
- [ ] Add contact video
- [ ] Style social links
- [ ] Add copyright

### Phase 8: Mobile
- [ ] Create mobile texture set (21 files)
- [ ] Add mobile menu with correct class names
- [ ] Add mobile text content section
- [ ] Test on real iOS and Android devices
- [ ] Ensure all videos have `autoplay playsinline muted loop`

### Phase 9: Polish
- [ ] Add preloader with logo
- [ ] Set up Pace.js loading integration
- [ ] Add CurDot custom cursor (deferred)
- [ ] Add Lenis smooth scrolling (desktop)
- [ ] Add menu transition overlay
- [ ] Test cross-browser
- [ ] Optimize texture sizes
- [ ] Compress GLB models with Draco

### Phase 10: Deploy
- [ ] Upload to hosting (Hostinger/AWS)
- [ ] Verify MIME types for .glb, .wasm, .webp
- [ ] Test on multiple devices
- [ ] Set up custom domain + SSL

---

## 24. Tools & Software List

| Tool | Purpose | Cost |
|------|---------|------|
| **Blender** | 3D modeling, animation, texture baking | Free |
| **VS Code** | Code editing | Free |
| **Topaz Gigapixel AI** | Upscaling textures (seen in filenames like `topaz-resize`) | Paid |
| **ImageMagick / Squoosh** | Texture compression to WebP | Free |
| **Chrome DevTools** | Debugging, mobile emulation | Free |
| **Brave/Chrome Mobile** | Real device testing | Free |
| **Adobe Typekit** | Premium fonts (neulis-sans) | Paid (Adobe CC) |
| **Google Fonts** | Free font alternative | Free |
| **Hostinger** | Web hosting | ~$3/mo |
| **AWS S3 + CloudFront** | Cloud hosting | Pay-as-you-go |

---

> **Final Note**: The most technically challenging part of this entire project is the **Blender → Three.js pipeline**. The 3D models must be meticulously named, the camera paths carefully crafted, and the textures properly baked and optimized. The web development side (HTML/CSS/JS) follows established patterns once the 3D assets are ready.
