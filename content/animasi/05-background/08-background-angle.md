---
title: "Background Camera Angle"
slug: "background-angle"
description: "Prompt builder untuk mengubah sudut pandang kamera, perspektif, dan framing (low angle, high angle, bird eye, wide, close-up) pada background animasi 2D"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Low angle shot looking up, showing towering height and dramatic vertical perspective of the environment."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for changing the camera angle and viewpoint of an existing environment based on:

  [{target}]

  Each variant must describe a **clearly different camera viewpoint or framing**, not merely a small camera movement or minor zoom adjustment.

  Write each variant as **one concise descriptive sentence**, specifying the camera placement, viewing height, viewing direction, perspective, and framing clearly.

  Rules:

  * Focus **ONLY on camera viewpoint, camera position, perspective, and framing**
  * Clearly describe where the camera is positioned relative to the scene
  * Clearly describe the viewing height and viewing direction
  * Clearly describe the perspective type or amount of perspective distortion
  * Describe how the framing changes from the original viewpoint
  * Make each variant meaningfully different in **camera position, angle, height, orientation, perspective, or framing**
  * Keep the requested camera change physically believable
  * Do NOT mention or describe any specific physical objects
  * Do NOT redesign, replace, rearrange, or modify the original environment
  * Do NOT change the identity or structure of the original environment

  ### CAMERA-ONLY LOCK

  The environment remains **completely unchanged**.

  Only the camera changes.

  Do NOT change:

  * architecture
  * layout
  * furniture
  * objects
  * vegetation
  * materials
  * colors
  * proportions
  * environmental identity

  The camera simply observes the **same unchanged environment from a different viewpoint**.

  ### VIEWPOINT

  Possible variations may include:

  * eye-level view
  * low-angle view
  * high-angle view
  * straight-on view
  * left-side angle
  * right-side angle
  * diagonal view
  * corner view
  * closer framing
  * wider framing
  * centered framing
  * off-center framing

  Only use viewpoints that make sense for [{target}].

  ### PERSPECTIVE

  Clearly distinguish between:

  * minimal perspective distortion
  * shallow perspective
  * natural perspective
  * moderate perspective
  * stronger perspective

  Do not create unrealistic or extreme distortion unless


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

Use the attached image as the STRICT ENVIRONMENT REFERENCE.

Recreate the SAME environment from a different camera viewpoint based on:

<br>

[{humanInput}]

<br>

Preserve the original environment identity and all important environmental elements.

Do NOT redesign the location or create a different environment.

Keep consistent:
- buildings
- roads
- furniture
- trees
- major objects
- object proportions
- environmental layout
- architectural design
- colors
- visual style
- linework
- overall scene identity

Adjust the visible surfaces and spatial relationships naturally according to the requested camera viewpoint.

Maintain a clean 2D cartoon animation style with:
- thick black outlines
- flat solid colors
- clean simple shapes
- minimal details
- slightly handmade line quality
- animation-friendly environment design

Do not add characters, text, logos, new buildings, or unrelated objects.

Do not randomly move or redesign existing environmental elements.

The result must look like the SAME location viewed from a different camera position.

Output a clean animation background with consistent environment design and the requested camera viewpoint.