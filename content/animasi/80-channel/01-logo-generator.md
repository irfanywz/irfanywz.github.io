---
title: "Logo Generator"
slug: "logo-generator"
description: "Prompt builder untuk merancang logo original bergaya animasi 2D dengan siluet kuat, garis tebal, dan warna solid yang konsisten dengan dunia animasi"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: 'Buat logo untuk channel YouTube "Bang Jay" logo horizontal untuk ditaruh diatas video sebelah kiri dibuat lurus aja kasih logo kepala bangjay sama text'
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for custom 2D animated logos based on:

  [DESKRIPSIKAN]

  Write each as ONE concise descriptive sentence specifying the core logo concept, main visual icon/symbol or mascot, lettering/text treatment, and horizontal or badge-style layout.

  Rules:

  * Each variant must be clearly and meaningfully different in concept, symbol, mascot, lettering, or logo composition, not just a color change.
  * Focus ONLY on the logo concept, symbols, mascot, text/lettering, and horizontal/badge layout.
  * Describe the main character, mascot, or visual identity represented when relevant.
  * Keep the logo simple, recognizable, memorable, and suitable for animation branding.
  * DO NOT describe scenery, backgrounds, mockups, environments, or unrelated scenes.
  * DO NOT add explanations, design notes, or multiple sentences.

  Output exactly [JUMLAH_VARIANT] numbered variants, ONE sentence per variant.

image_prompt: |
  LOGO STYLE EXTRACTION ANALYSIS

  Use the attached reference image to analyze and extract the precise 2D animation art style, linework thickness, shape language, and color treatment.

  Create **ONE concise visual logo style sentence** for guiding the creation of a matching original logo.

  Rules:
  * Focus **ONLY on art style extraction (linework, flat colors, simple shapes, 2D animation feel)**
  * **DO NOT describe the specific subject or content of the reference image**
  * Keep the text short, clean, and directly usable for the logo generator tool

  **Output ONE style description sentence only.**

database:
  "Channel & Streaming":
    - title: "Channel YouTube Horizontal"
      description: 'Buat logo untuk channel YouTube "Bang Jay" logo horizontal untuk ditaruh diatas video sebelah kiri dibuat lurus aja kasih logo kepala bangjay sama text'
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e1b4b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23c7d2fe" font-size="12" font-family="sans-serif">YouTube</text></svg>'
    - title: "Badge Komunitas Desa"
      description: "Buat logo emblem bundar untuk komunitas warga desa dengan ilustrasi maskot kepala warga lokal yang ramah dan tipografi melingkar"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="12" font-family="sans-serif">Badge</text></svg>'

  "Karakter & Maskot":
    - title: "Maskot Animasi 2D"
      description: "Buat logo ikonik minimalis menampilkan siluet kepala karakter animasi 2D dengan gaya rambut unik dan garis tebal yang ekspresif"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c2d12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffedd5" font-size="12" font-family="sans-serif">Maskot</text></svg>'

outputs:
  - JSON
---
Use the attached image as the **STRICT STYLE REFERENCE ONLY**.

Create a **COMPLETELY NEW ORIGINAL LOGO** based on:

[humanInput]

### ORIGINALITY

Create a unique logo with its own:

* concept
* identity
* silhouette
* composition
* shape language
* typography, if needed
* symbols and visual elements

Do NOT copy, trace, recolor, remix, or closely imitate the reference logo or any of its specific design elements.

### STYLE REFERENCE

Use the reference ONLY for its general:

* visual language
* line quality
* shape language
* color treatment
* simplicity
* illustration approach

The new logo should feel like it belongs to the **same 2D animated world**, while remaining completely original.

### LOGO STYLE

Use:

* hand-drawn 2D cartoon design
* thick natural black outlines
* flat solid colors
* clean simple shapes
* slightly handmade line quality
* simple color palette
* strong readable silhouette
* minimal meaningful details
* playful expressive shapes
* animation-friendly construction

Avoid:

* generic corporate logo design
* flat vector-icon appearance
* excessive geometric precision
* photorealism
* 3D rendering
* complex gradients
* excessive textures
* tiny unreadable details

### DESIGN

Create a **single cohesive visual identity**, not simply an object placed inside a logo shape.

Prioritize:

* memorable silhouette
* clear concept
* recognizable shape
* balanced proportions
* strong visual hierarchy
* readability at small size
* simple but distinctive details

If [humanInput] contains a character, animal, object, or symbol, simplify it into a **strong logo form**, not a detailed illustration.

If text is required, integrate it naturally into the logo using bold, playful lettering consistent with the same 2D cartoon language.

### COMPOSITION

* centered
* complete logo visible
* clean simple background
* no unnecessary elements
* no mockup or presentation scene

Do NOT add unrelated characters, objects, scenery, decorations, UI elements, posters, or signs.

### FINAL

The result must be a **completely original, memorable logo** that feels hand-designed for a 2D animated series while naturally matching the reference's visual language.

**REFERENCE = STYLE ONLY.**
**[humanInput] = LOGO CONCEPT.**

Output ONLY the finished logo.
