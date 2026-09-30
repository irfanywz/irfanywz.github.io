---
title: "Background POV"
slug: "background-pov"
description: "Prompt builder untuk menghasilkan sudut pandang (POV), sisi, atau area lain dari lokasi background animasi 2D yang sama"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Different angle of the traditional room showing the opposite wall with wooden cabinets and hanging decorations."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for a different viewpoint or perspective of the same location based on:

  [{target}]

  Each variant must describe a **clearly different camera viewpoint**, while preserving the same location, architecture, layout, and environmental identity.

  Write each variant as **one concise descriptive sentence**, specifying the camera angle, facing direction, viewpoint, and the important furniture or architectural features visible from that perspective.

  Rules:

  * Focus **ONLY on the viewpoint, camera angle, facing direction, and visible environmental features**
  * Keep the location **exactly the same**
  * Each variant must show a meaningfully different viewpoint, not merely a small camera shift
  * Possible viewpoints include front view, reverse view, left-side view, right-side view, corner view, diagonal view, entrance-facing view, room-facing view, or other logical perspectives
  * Clearly describe what becomes visible or changes in visibility from each viewpoint
  * Ensure the architecture, furniture, structures, and spatial relationships remain logically connected to the same location
  * Do NOT redesign, rearrange, replace, or add environmental elements simply because the viewpoint changes
  * Keep perspective believable and consistent with the physical structure of the location
  * Keep descriptions suitable for 2D animation background generation

  ### LOCATION LOCK

  The original location must remain unchanged.

  Preserve:

  * architecture
  * room structure
  * environmental layout
  * furniture
  * major objects
  * proportions
  * spatial relationships
  * overall environment identity

  **ONLY change the viewpoint and perspectiv**


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

Create a NEW background showing a different side, area, or section of the **SAME LOCATION** based on:

<br>

[{humanInput}]

<br>

The new background must remain visually and spatially consistent with the reference image.

### CAMERA AND VIEWPOINT LOCK

**Preserve the EXACT SAME CAMERA TYPE, VIEW DIRECTION, AND PROJECTION STYLE as the reference image.**

If the reference is a **side-scroller / side-view background**, the new background MUST also be a **side-scroller / side-view background**.

If the reference uses:

* side view → keep side view
* front-facing view → keep front-facing view
* eye-level view → keep eye-level view
* 3/4 view → keep 3/4 view
* horizontal sidescroller framing → keep horizontal sidescroller framing

**Do NOT change the camera style or perspective type.**

The camera may reveal a different **area of the same location**, but it must do so from the **same visual viewpoint system** as the reference.

Do NOT turn a side-scroller into:

* front view
* top-down view
* isometric view
* cinematic perspective
* dramatic angle
* close-up
* extreme perspective

The goal is:

**SAME LOCATION + SAME CAMERA STYLE + DIFFERENT VISIBLE AREA**

### ENVIRONMENT CONSISTENCY

Preserve the identity of the same location, including:

* architecture
* building design
* environmental layout
* materials
* colors
* proportions
* object design
* vegetation
* surrounding environment
* distinctive structural features
* overall visual identity

The new scene must logically connect to the reference.

If the requested area is not directly visible in the reference, intelligently reconstruct it using the architecture, structure, materials, and environmental clues from the reference.

Do NOT invent an unrelated environment.

### VIEWPOINT CHANGE

Show the area requested in [DESC] while maintaining the same camera orientation and visual perspective as the reference.

Change **WHAT PART OF THE LOCATION IS VISIBLE**, not **HOW THE CAMERA TYPE WORKS**.

The new view should feel like the camera has moved along or around the same location while maintaining the same sidescroller visual language.

### VISUAL STYLE

Maintain the reference's visual style:

* simple 2D cartoon illustration
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* animation-friendly environment design

### COMPOSITION

Create a clean, readable **wide 16:9 animation background**.

Maintain the same general framing and spatial scale as the reference.

Keep sufficient open space for characters.

Do not recreate the exact original composition.

### EXCLUSIONS

No characters.

No people.

No animals.

Do not copy unrelated objects from the reference.

Do not introduce a completely different building, neighborhood, or environment.

Do not change the camera type.

Do not change the projection style.

Do not change from side-scroller to another perspective.

The result must look like **another visible area of the SAME LOCATION**, viewed through the **SAME CAMERA STYLE** as the reference.

**Output ONLY the new background.**
