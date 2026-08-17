---
name: 3d-scroll-website
description: Build immersive 3D scroll-driven websites — a WebGL scene (Three.js) that the camera flies through as the user scrolls, driven by GSAP ScrollTrigger, with smooth scrolling (Lenis), mobile/desktop fallback strategy, and a static single-page architecture. Use this whenever the user wants to build a "3D scroll website," a "scroll-driven 3D experience," a site with a "camera flythrough," an "immersive portfolio/agency site," or references sites like Awwwards-style 3D room walkthroughs, product showcases, or scroll-triggered WebGL scenes — regardless of what the site is actually about (architecture firm, product launch, portfolio, agency, event, etc). This is a general-purpose technical pattern, not tied to any one design — always start by interviewing the user about their specific project before generating code.
---

# 3D Scroll-Animated Website Builder

This skill captures a proven architecture for building single-page, scroll-driven 3D websites: a WebGL scene (built in Blender, exported as GLB) that a virtual camera moves through as the user scrolls, with GSAP ScrollTrigger scrubbing the camera animation and text content revealing at specific scroll progress points.

The technical pattern is general. The **content is not** — every project has a different number of scenes, different models, different brand assets, and different sections. Never hardcode room names, section counts, or asset lists from a previous project. Always derive them from this project's brief.

## Step 0: Interview the user first

Before writing any code, get clear on:

1. **Narrative** — What is the camera moving through? (rooms, a landscape, a product exploded-view, an abstract space). How many distinct "scenes" or "stops" does the scroll journey have?
2. **Sections beyond the 3D hero** — Does this site need a services list, a portfolio grid, a second product scene, a contact form, etc.? Not every project needs all of these — the original reference build had 8 sections, but plenty of good 3D scroll sites are just a hero flythrough + one content section.
3. **Assets available** — Does the user already have a Blender model, or do they need guidance on building one? Do they have brand fonts/colors/logo, or should placeholders be used?
4. **Scope of "3D-ness"** — One WebGL scene, or multiple (e.g. a room scene + a separate product scene, like the reference build's two-renderer setup)?
5. **Hosting target** — Static hosting (Hostinger, Netlify, S3/CloudFront) is the default assumption for this pattern since there's no build step; confirm if something else is needed.

Use `ask_user_input_v0` or plain questions to pin these down if the user's request is vague. Once you know the shape of the project, adapt the file structure and naming conventions below to it — don't force their project into a fixed 4-room, 7-portfolio-item mold.

## Core tech stack

| Library | Purpose | Notes |
|---|---|---|
| **Three.js** (via CDN + import map) | WebGL rendering engine | Load as ES module, no bundler needed |
| **GLTFLoader + DRACOLoader** | Load `.glb` models, decompress Draco meshes | Host the Draco decoder files locally |
| **GSAP + ScrollTrigger** | Scroll-linked animation, pinned sections | The core of "scroll drives the camera" |
| **Lenis** | Smooth scrolling | Desktop only — disable on mobile for native feel |
| **VanillaTilt** (optional) | 3D hover tilt on cards/images | Only if there's a grid of visual items |
| **Pace.js** (optional) | Load progress bar | Nice-to-have preloader signal |

Reference CDN pattern (pin real version numbers when building — check current versions rather than assuming):
```html
<script type="importmap">
{
  "imports": {
    "three": "https://unpkg.com/three@<version>/build/three.module.min.js",
    "three/": "https://unpkg.com/three@<version>/"
  }
}
</script>
<script src="script.js" type="module"></script>
```

## Architecture pattern

### One WebGL renderer per distinct 3D scene
If the project has more than one 3D moment (e.g. a hero flythrough *and* a separate product scene later in the page), give each its own `THREE.Scene`, `THREE.PerspectiveCamera`, `THREE.Group`, `THREE.AnimationMixer`, and render loop — and **pause the render loop of whichever scene is off-screen**. Two renderers running simultaneously wastes GPU for nothing the user can see.

```javascript
// Alternate render loops based on which scene is in view
if (inSceneOneView) { renderSceneOne(); } // else paused
if (inSceneTwoView) { renderSceneTwo(); } // else paused
```

### The camera animation lives in the 3D model, not in JS
Animate the camera path in Blender (name the animation clip something findable, e.g. `CameraAction`), export it baked into the GLB, then in Three.js use a `THREE.AnimationMixer` + a GSAP proxy object to scrub `mixer.time` based on scroll position:

```javascript
function bindScrollToCamera(mixer, action, clip, {trigger, pinTarget, scrollDistance = "+=900%", scrub = 1.25}) {
    let proxy = {
        get time() { return mixer.time; },
        set time(value) {
            action.paused = false;
            mixer.setTime(value);
            action.paused = true;
        }
    };
    gsap.timeline({
        scrollTrigger: { trigger, start: "top top", end: scrollDistance, pin: pinTarget, pinType: "fixed", scrub }
    }).to(proxy, { time: clip.duration });
}
```

`scrollDistance` and `scrub` are tuning knobs — longer distance = slower/more scroll needed to traverse the scene; higher scrub = smoother but laggier follow. Adjust per project rather than copying values verbatim.

### Text reveals are progress-based, not scene-based
Track a `sceneProgress` (0–100%) derived from `mixer.time / clip.duration`, then show/hide text blocks at progress thresholds you define for *this* project's narrative beats:

```javascript
function revealAtProgress(threshold, selector) {
    // show `selector` once sceneProgress crosses `threshold`
}
// Mobile often needs a show+hide range instead of a single threshold,
// since there's no "z-depth" push-away to rely on:
function revealRangeMobile(showAt, hideAt, selector) { /* ... */ }
```

Define the actual threshold numbers by walking through the project's own scroll narrative — they're specific to how the client's Blender camera path was built, not a reusable constant.

### Naming convention for GLB meshes and textures
Use a consistent `{scene}_{element}` prefix so JS can assign materials by name-matching after load, e.g. `entrance_wall`, `scene1_floor`, `scene2_products`. Pick scene identifiers that match *this* project's narrative (could be `lobby_`, `workshop_`, `rooftop_` — whatever fits the story) rather than defaulting to `room1`/`room2`/`room3`/`room4`.

```javascript
loader.load("/model/scene.glb", (gltf) => {
    gltf.scene.traverse(mesh => {
        if (mesh.name.includes("<scene>_<element>")) mesh.material = correspondingMaterial;
    });
});
```

**Critical**: set `texture.flipY = false` on every texture applied to a GLB mesh — glTF's UV convention is flipped relative to Three.js defaults. This one line is the #1 cause of "why do my textures look wrong" bugs.

## Mobile vs desktop strategy

Pick a breakpoint (960px is a reasonable default, but confirm against the project's actual design) and treat mobile as a genuinely different build, not a squeezed desktop:

- Separate camera (a second camera baked into the GLB with a tighter FOV works well) — desktop framing rarely reads well on a phone screen.
- Lower-resolution texture set for mobile (roughly half the desktop pixel dimensions is a good starting point; tune per texture).
- Disable Lenis, custom cursors, and hover-only effects (tilt, cursor-follow) on mobile.
- Static image fallbacks instead of `VideoTexture` on mobile if video textures are used — mobile GPUs/bandwidth often can't sustain them.
- Force a reload on resize across the breakpoint (`location.reload()`) rather than trying to hot-swap the whole rendering strategy live — much less bug-prone than maintaining two live code paths simultaneously.
- Any `<video>` element MUST have `autoplay playsinline muted loop` or iOS will refuse autoplay / force fullscreen.

## Loading sequence

1. Set up renderer(s) and scene(s)
2. Preload all textures
3. Load GLB(s) → assign materials by mesh name → set up camera animation
4. Wire up GSAP ScrollTrigger once the mixer/clip are ready
5. Hide the preloader once both the load-progress signal (e.g. Pace.js) *and* the GLB load are done — gating on both prevents a flash of untextured geometry
6. Defer any custom-cursor library until after the WebGL context is claimed (a ~500ms delay after Three.js init is a safe rule of thumb) — cursor libraries that grab a `<canvas>` before Three.js can steal the WebGL context and crash rendering

## File structure (adapt counts to the project)

```
project-root/
├── index.html
├── style.css
├── script.js                 # Main app logic, ES module
├── model/
│   ├── <scene-name>.glb       # One per distinct 3D scene
│   └── img/                   # Desktop textures
│       └── mobile/            # Lower-res mobile textures
├── draco/                     # Draco WASM decoder (from three/examples/jsm/libs/draco/)
├── img/                       # Logo, icons, social, OG image
├── content.json                # Any dynamic content (portfolio items, product list, etc.) — only if the project has a data-driven grid/popup
└── docs/                      # Handoff docs for the client, if useful
```

## Common pitfalls

| Problem | Cause | Fix |
|---|---|---|
| Black screen on mobile | Missing mobile texture folder | Verify every desktop texture has a mobile counterpart before shipping |
| Textures look flipped/wrong | Default `flipY = true` | Set `texture.flipY = false` for every GLB-applied texture |
| Custom cursor crashes WebGL | Cursor lib grabbed canvas before Three.js | Load cursor library after Three.js init, with a short delay |
| Videos won't autoplay on iOS | Missing `playsinline`/`muted` | Always include `autoplay playsinline muted loop` |
| Layout breaks on resize across breakpoint | Mixing live desktop/mobile state | Reload the page when crossing the breakpoint instead of hot-swapping |
| Popup/modal scroll fights page scroll | Lenis intercepting scroll inside a modal | Add `data-lenis-prevent` (or the equivalent for your scroll lib) to the modal's scrollable inner container |
| Performance tanks with multiple 3D scenes | All renderers running simultaneously | Pause the render loop for any scene not currently in view |

## Build checklist (adapt phases/counts to the project)

1. **Foundation** — HTML shell, import map, CSS variables, confirm Three.js renders a test cube
2. **3D scene(s)** — Model in Blender with consistent naming, camera path(s), bake + export textures (desktop + mobile), export as Draco-compressed GLB, load and material-match in Three.js
3. **Scroll animation** — Bind ScrollTrigger to the camera mixer, tune scrub/distance, wire up progress-based text reveals
4. **Additional sections** — Whatever this project actually needs (content grid, form, secondary 3D scene, etc.) — build only what's in the brief
5. **Mobile pass** — Second camera/texture set, disable desktop-only effects, test on real devices
6. **Polish** — Preloader, smooth scroll, cursor (if wanted), cross-browser check, compress assets
7. **Deploy** — Static hosting, verify MIME types for `.glb` (`model/gltf-binary`), `.wasm` (`application/wasm`), `.webp` (`image/webp`)

## Tools

| Tool | Purpose | Cost |
|---|---|---|
| Blender | Modeling, camera animation, texture baking | Free |
| Squoosh / ImageMagick | WebP conversion & compression | Free |
| Chrome DevTools | Mobile emulation, WebGL debugging | Free |
| A static host (Netlify, Hostinger, S3+CloudFront) | Deployment | Free–low cost |

---

The hardest part of this pattern is always the Blender → Three.js handoff: consistent mesh naming, a well-paced camera path, and properly baked/optimized textures. Once those exist, the HTML/CSS/JS scroll-binding follows the patterns above regardless of what the site is actually about.
