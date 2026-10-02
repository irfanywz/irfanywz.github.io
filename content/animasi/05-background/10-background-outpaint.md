---
title: "Background Outpainting"
slug: "background-outpaint"
description: "Prompt builder untuk memperluas area background animasi 2D yang ada (outpainting) ke berbagai arah (kiri, kanan, atas, bawah, panorama, atau sudut) dengan mempertahankan gaya dan perspektif asli"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Extend the scene naturally to the LEFT, continuing existing elements like roads, sidewalks, fences, or building facades."

desc_prompt: false
image_prompt: |
  BACKGROUND OUTPAINTING STYLE EXTRACTION

  Use the attached reference background image to analyze and extract the precise architectural continuation style, perspective lines, ground plane, and environmental coloring.

  Create **ONE precise style matching rule sentence** ensuring that any extended area blends perfectly with the original aesthetic.

  Rules:
  * Focus **ONLY on style preservation, perspective continuation, and element matching**
  * Keep text short and directly usable for background expansion pipelines

  **Output ONE style instruction sentence only.**

database:
  "Perluasan Horizontal":
    - title: "Lanjut ke Kiri"
      description: "Extend the scene naturally to the LEFT, continuing existing elements like roads, sidewalks, fences, or building facades."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%236366f1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Left</text></svg>'
    - title: "Lanjut ke Kanan"
      description: "Extend the scene naturally to the RIGHT, seamlessly expanding the landscape, street view, or interior room structure."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%238b5cf6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Right</text></svg>'
    - title: "Panorama Lebar (Kiri & Kanan)"
      description: "Expand the environment significantly on both sides to create a wide panoramic cartoon background, maintaining perfect perspective alignment."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23a855f7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Panorama</text></svg>'

  "Perluasan Vertikal":
    - title: "Lanjut ke Atas"
      description: "Extend the scene upwards, revealing more of tall buildings, upper floors, sky, or high ceiling details while preserving the low camera angle."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23d946ef"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Up</text></svg>'
    - title: "Lanjut ke Bawah"
      description: "Extend the scene downwards, showing more of the ground, floor patterns, street details, or lower foundation of structures."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23ec4899"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Down</text></svg>'
    - title: "Full Shot Vertikal"
      description: "Expand both upwards and downwards to capture a complete vertical view, such as a tall building from foundation to roof."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23f43f5e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Full Vertical</text></svg>'

  "Kompleks & Multi-Arah":
    - title: "Perluasan Sudut (L-Shape)"
      description: "Extend the canvas in two directions simultaneously (e.g., Left and Up) to expand a corner view while keeping the original image intact."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%236366f1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Corner</text></svg>'
    - title: "Perluasan Area Besar (Full Canvas)"
      description: "Dramatically increase the canvas size in all directions (Left, Right, Up, Down) to create a massive environmental context around the original image."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Full Area</text></svg>'

outputs: ["JSON"]
---
Use the attached image as the STRICT BACKGROUND REFERENCE.

Extend the existing background in the following direction:

[{humanInput}]

Extend the scene naturally based on the existing environment.

Preserve the entire original image exactly as it is.

Do NOT change, redesign, move, resize, recolor, remove, or replace anything inside the original image.

Keep the original:
* buildings
* roads
* walls
* floors
* trees
* furniture
* objects
* environmental elements
* object positions
* composition
* proportions
* perspective
* camera angle
* lighting
* time of day
* atmosphere
* colors
* linework
* visual style

ONLY generate new environmental areas outside the boundaries of the original image.

The newly generated area must continue the existing environment naturally.

Maintain consistency in:
* perspective
* horizon level
* ground level
* environmental scale
* object proportions
* architectural style
* vegetation
* colors
* lighting
* atmosphere
* cartoon linework

Continue roads, walls, buildings, landscapes, skies, floors, or other environmental elements naturally when appropriate.

Do not create unrelated locations or sudden changes in the environment.

The extended area must feel like a natural continuation of the SAME location.

### STRICT REFERENCE LOCK
Keep the original image unchanged.
Keep all existing objects unchanged.
Keep the same environment.
Keep the same perspective.
Keep the same camera angle.
Keep the same lighting.
Keep the same atmosphere.
Keep the same visual style.

ONLY expand the environment beyond the original boundaries.

The final result must look like the original background was always part of a larger continuous environment.

Output a clean wide 2D animation background.