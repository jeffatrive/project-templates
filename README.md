# project-templates
Templates for spinning up Rive implementations quickly. Primarily JS/Webgl2 runtime.

## Rive WebGL2 template

The **rive-webgl2/** folder is a minimal Rive WebGL2 test project you can copy or use as a starting point.

### Files

- **rive-webgl2/index.html** — Single full-viewport canvas; loads Rive WebGL2 from unpkg and the app script.
- **rive-webgl2/styles.css** — Full-viewport layout for the canvas.
- **rive-webgl2/script.js** — Rive instance with Layout, autoplay, autoBind, and resize handling.

### How to use

1. Add your `.riv` file (e.g. as **rive-webgl2/animation.riv**).
2. In **rive-webgl2/script.js**, set `artboard` and `stateMachines` to match your .riv file (defaults are `'Artboard'` and `['State Machine 1']`). Update `src` if you use a different path or filename.
3. Run a local server from the **rive-webgl2/** folder (e.g. `npx serve rive-webgl2` or open from a server) so the .riv file loads without CORS issues. Opening **index.html** directly in the browser may fail to load local .riv files.
