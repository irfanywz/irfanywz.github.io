---
title: "Background Camera Angle"
slug: "background-angle"
description: "Prompt builder untuk mengubah sudut pandang kamera, perspektif, dan framing (low angle, high angle, bird eye, wide, close-up) pada background animasi 2D"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Low angle shot looking up, showing towering height and dramatic vertical perspective of the environment."
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for changing the camera viewpoint of an existing environment based on:

  [DESKRIPSIKAN]

  Rules:

  * Each variant must represent a clearly different camera position, angle, height, orientation, perspective, or framing, not merely a small movement or zoom.
  * Focus ONLY on camera placement, viewing height, viewing direction, perspective, and framing.
  * Clearly describe where the camera is positioned, how it faces the scene, and how the framing differs.
  * Use believable variations such as eye-level, low-angle, high-angle, straight-on, side, diagonal, corner, centered, off-center, closer, or wider views when appropriate.
  * Vary the perspective from minimal to natural or moderate distortion, while keeping it physically believable.
  * The original environment must remain completely unchanged.
  * Do NOT mention specific objects or modify the architecture, layout, furniture, objects, vegetation, materials, colors, proportions, or environmental identity.
  * Only the camera changes; it observes the exact same environment from a different viewpoint.
  * Keep each description concise and suitable for 2D animation background generation.

  Output exactly [JUMLAH_VARIANT] numbered variants, ONE sentence per variant, with no explanations or extra text.



image_prompt: |
  BACKGROUND CAMERA ANGLE EXTRACTION ANALYSIS

  Use the attached reference background image to analyze and extract the precise camera viewpoint, perspective lines, and framing.

  Create **ONE concise visual camera angle description sentence** for applying this viewpoint to other backgrounds.

  Rules:
  * Focus **ONLY on camera angle, framing, height, and spatial perspective**
  * Note whether it is low angle, high angle, eye-level, side view, or wide shot
  * **DO NOT describe the specific physical scene elements** (buildings, objects)
  * Keep the text short, clean, and directly usable for the angle-shifting tool

  **Output ONE camera angle description sentence only.**

database:
  "Sudut Vertikal":
    - title: "Low Angle Shot"
      description: "Low angle shot looking up, showing towering height and dramatic vertical perspective of the environment."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%236366f1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Low Angle</text></svg>'
    - title: "High Angle Shot"
      description: "High angle shot looking down, viewing the scene from an elevated position with extended ground layout."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234338ca"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">High Angle</text></svg>'
    - title: "Bird Eye View"
      description: "Top-down bird's-eye view, completely overhead map perspective of the environment layout."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%233730a3"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Bird Eye</text></svg>'

  "Sudut Horizontal & Samping":
    - title: "Side Profile View"
      description: "Side profile view, orthogonal lateral angle showing objects and structures from the side."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230284c7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Side View</text></svg>'
    - title: "Three-Quarter Angle"
      description: "Classic three-quarter isometric perspective angle, showing both front and side faces of the buildings clearly."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230369a1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">3/4 Angle</text></svg>'
    - title: "Reverse Back Angle"
      description: "Reverse angle shot looking back from the opposite side of the environment, showing inverted depth."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23075985"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Reverse</text></svg>'

  "Jarak & Fokus Lensa":
    - title: "Wide Establishing Shot"
      description: "Wide angle establishing shot, capturing a much larger area of the surrounding environment with deep perspective."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230d9488"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Wide Shot</text></svg>'
    - title: "Close-up Detail Shot"
      description: "Tight close-up shot focused tightly on a specific section or object of the environment with shallow depth."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230f766e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Close-up</text></svg>'
    - title: "Dutch Angle (Tilted)"
      description: "Dynamic tilted Dutch angle shot, skewed horizon line creating an energetic and dramatic composition."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23115e59"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Dutch Angle</text></svg>'

outputs:
  - JSON
---
Use the attached image as the **STRICT ENVIRONMENT REFERENCE**.

Recreate the **EXACT SAME ENVIRONMENT** from a different camera viewpoint based on:

[[{humanInput}]]

### ONLY CHANGE

Change ONLY the **camera viewpoint** according to [[{humanInput}]]:

* camera position
* viewing direction
* viewing angle
* camera height
* visible surfaces
* perspective
* framing

The requested viewpoint must feel physically connected to the original scene, as if the camera moved to another position within the **same location**.

### ENVIRONMENT LOCK

Preserve the original environment identity and physical structure:

* buildings and architecture
* roads, floors, and terrain
* walls, doors, windows, and structures
* furniture
* trees and vegetation
* major objects
* object proportions
* materials and colors
* spatial relationships
* overall environment identity

Do NOT redesign, replace, remove, add, or randomly reposition environmental elements.

Objects that become hidden or partially visible because of the new viewpoint may naturally change visibility, but their physical placement must remain consistent.

### CAMERA RULE

Adjust the scene naturally to match the requested viewpoint.

Reveal the correct sides, surfaces, depth, and spatial relationships that would realistically be visible from the new camera position.

Do NOT treat the new viewpoint as a completely new composition or redesigned environment.

### VISUAL STYLE LOCK

Preserve the original:

* 2D cartoon animation style
* thick natural black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* animation-friendly design
* original rendering and visual language

### DO NOT CHANGE

Do NOT change:

* environment identity
* architecture
* object design
* object proportions
* materials
* colors
* physical layout
* spatial relationships

Do NOT add:

* characters
* people
* animals
* vehicles
* text
* logos
* new buildings
* unrelated objects

### FINAL LOCK

**SAME LOCATION**
**SAME ENVIRONMENT**
**SAME ARCHITECTURE**
**SAME OBJECTS**
**SAME SPATIAL RELATIONSHIPS**
**DIFFERENT CAMERA VIEWPOINT ONLY**

The result must look like the **SAME physical location viewed from the camera viewpoint specified in [[{humanInput}]]**, with the environment remaining visually and structurally consistent.

**ONLY CHANGE THE CAMERA VIEWPOINT.**