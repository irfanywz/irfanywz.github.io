---
title: "Background POV"
slug: "background-pov"
description: "Prompt builder untuk menghasilkan sudut pandang (POV), sisi, atau area lain dari lokasi background animasi 2D yang sama"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Different angle of the traditional room showing the opposite wall with wooden cabinets and hanging decorations."
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for different viewpoints of the same location based on:

  [DESKRIPSIKAN]

  Rules:

  * Each variant must represent a clearly different camera viewpoint, not merely a small camera shift.
  * Focus ONLY on camera angle, facing direction, viewpoint, perspective, and visible environmental features.
  * Vary the viewpoint meaningfully using front, reverse, left, right, corner, diagonal, entrance-facing, room-facing, or other logical perspectives.
  * Clearly describe what becomes visible or changes in visibility from each viewpoint.
  * Preserve the exact same architecture, layout, furniture, objects, proportions, spatial relationships, and environmental identity.
  * Do not add, remove, rearrange, replace, or redesign any environmental elements.
  * Keep the perspective physically believable and consistent with the original location.
  * Keep each viewpoint suitable for 2D animation background generation.
  * Keep each description concise and directly usable for asset generation pipelines.

  Output exactly [JUMLAH_VARIANT] numbered variants, ONE sentence per variant, with no explanations or extra text.


image_prompt: |
  Create ONE short visual description of a different viewpoint or angle of the reference location using the reference image.

  Analyze the reference image to understand the environment's architecture, style, and identity, then describe a logical alternative angle or opposite side.
  Write exactly ONE natural sentence describing the new POV.
  RULES:
  - Preserve the architecture, materials, and stylistic identity visible in the reference.
  - Describe a different side, opposite wall, or alternative perspective of the same location.
  - Do not describe specific characters, people, animals, text, or logos.
  - Keep the sentence short and directly usable as an image-generation prompt.
  - Use simple, natural English.
  - Do not use bullet points or multiple sentences.
  - OUTPUT EXACTLY ONE SENTENCE.

database:
  "Interior":
    - title: "Sisi Seberang Ruangan"
      description: "Different angle of the traditional room showing the opposite wall with wooden cabinets and hanging decorations."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23365314"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ecfccb" font-size="10" font-family="sans-serif">Seberang</text></svg>'
    - title: "Sudut Pintu Masuk"
      description: "Alternative viewpoint near the doorway looking inward into the main living space with a wooden threshold and window view."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2378350f"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fef3c7" font-size="10" font-family="sans-serif">Pintu</text></svg>'
    - title: "Sudut Jendela Samping"
      description: "Close-up perspective focusing on the traditional wooden window side with natural light filtering through translucent shutters."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23dbeafe" font-size="10" font-family="sans-serif">Jendela</text></svg>'

  "Exterior":
    - title: "Sisi Tampak Samping Bangunan"
      description: "Different exterior angle showing the side wall of the building, exposed brick patterns, and small side windows matching the reference architecture."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%239a3412"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffedd5" font-size="10" font-family="sans-serif">Samping</text></svg>'
    - title: "Area Halaman Depan / Teras"
      description: "Alternative exterior viewpoint showing the front porch area, steps, and surrounding garden elements consistent with the building style."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23166534"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23dcfce7" font-size="10" font-family="sans-serif">Teras</text></svg>'
    - title: "Sudut Belakang / Halaman Belakang"
      description: "Rear exterior perspective showing the back section of the building structure, alleyway, or surrounding backyard landscape."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23f3f4f6" font-size="10" font-family="sans-serif">Belakang</text></svg>'

outputs:
  - JSON
---
Use the attached image as the **STRICT ENVIRONMENT REFERENCE**.

Create a **NEW BACKGROUND showing a different area or section of the SAME LOCATION** based on:

[{humanInput}]

### LOCATION LOCK

The new background must clearly belong to the **same location** as the reference.

Preserve the location's:

* architecture and structural design
* materials and colors
* proportions and visual identity
* environmental style
* distinctive structural features
* logical spatial relationships

If the requested area is not visible in the reference, intelligently reconstruct it using the reference's architecture, materials, structure, and environmental clues.

Do NOT create an unrelated environment or redesign the location.

### CAMERA LOCK

Preserve the **EXACT SAME CAMERA SYSTEM** as the reference:

* same view type
* same camera height
* same viewing direction
* same projection/perspective
* same framing style
* same spatial scale

If the reference is a side-scroller, the result MUST remain a side-scroller.

Do NOT switch to front view, top-down, isometric, cinematic perspective, dramatic angle, close-up, or extreme perspective.

### AREA CHANGE

Show the specific area requested in [humanInput].

Change **WHAT PART OF THE LOCATION IS VISIBLE**, not how the camera system works.

The result should feel like the camera has moved to another logical section of the same continuous location while maintaining the same visual viewpoint.

### VISUAL STYLE

Match the reference's visual language:

* simple 2D cartoon
* thick natural black outlines
* flat solid colors
* clean simple shapes
* minimal detail
* slightly handmade line quality
* animation-friendly environment design

### COMPOSITION

* Wide 16:9 animation background.
* Maintain the reference's general framing and spatial scale.
* Keep sufficient usable space for characters.
* Create a new composition; do NOT reproduce the original composition.

### FINAL LOCK

No characters, people, animals, or unrelated environments.

Do NOT copy unrelated objects or rearrange the reference into a new composition.

The final image must feel like **ANOTHER AREA OF THE SAME LOCATION + SAME CAMERA SYSTEM + NEW VISIBLE COMPOSITION**.

**Output ONLY the new background.**
