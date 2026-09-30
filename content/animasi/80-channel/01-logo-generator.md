---
title: "Logo Generator"
slug: "logo-generator"
description: "Prompt builder untuk merancang logo original bergaya animasi 2D dengan siluet kuat, garis tebal, dan warna solid yang konsisten dengan dunia animasi"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: 'Buat logo untuk channel YouTube "Bang Jay" logo horizontal untuk ditaruh diatas video sebelah kiri dibuat lurus aja kasih logo kepala bangjay sama text'
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for custom 2D animated logos based on:

  [{target}]

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

Use the attached image as the STRICT STYLE REFERENCE ONLY.

Create a completely NEW ORIGINAL LOGO based on this description:

<br>

[{humanInput}]

<br>

The logo must have a completely unique identity, concept, shape, silhouette, composition, typography treatment (if needed), symbols, details, proportions, and visual elements.

DO NOT COPY the logo, character, object, symbol, composition, or specific design from the reference image.

Use the reference image ONLY to understand and match its:
* visual art style
* drawing language
* line quality
* shape language
* color treatment
* simplicity
* overall design approach

LOGO STYLE:
Design the logo so it feels like it belongs to the same animated world and was created by the same artist as the reference.

Use:
* simple 2D cartoon design
* thick black outlines
* flat solid colors
* clean rounded or simple shapes
* minimal visual details
* slightly handmade line quality
* expressive and playful shape language
* strong readable silhouette
* simple color palette
* animation-friendly visual construction
* clear and recognizable design

LOGO DESIGN:
Create a standalone logo with a strong and memorable visual identity.

The logo must:
* be clearly recognizable at a glance
* have a strong silhouette
* remain readable when displayed at small size
* use simple shapes that are easy to understand
* have balanced proportions
* avoid unnecessary tiny details
* avoid overly realistic rendering
* avoid complex gradients or textures
* feel playful, natural, and suitable for a 2D animated series
* visually fit naturally with the animation style of the reference

If the description suggests a symbol, mascot, object, animal, character, or other visual element, transform it into a simplified logo design, not a detailed illustration.

If text is required by the description, integrate it naturally into the logo design using lettering that matches the same cartoon visual language.

IMPORTANT:
The logo should NOT look like a generic modern corporate logo.
It should feel like a hand-designed logo from the same 2D animated universe, with the same simplicity, bold outlines, flat colors, and playful visual language as the reference.

Do not simply place an object inside a logo shape.
Instead, combine the concept into a single cohesive visual identity.

Prioritize:
* unique identity
* memorable silhouette
* clear concept
* strong shape language
* clean composition
* readable design
* consistent visual style
* simple colors
* thick outlines
* animation-world consistency
* professional but playful appearance

Do not add characters, objects, decorations, mockups, posters, signs, UI elements, scenery, or unrelated elements unless they are essential to the logo concept.

Do not imitate or reproduce the reference logo.

The final result must look like a completely original logo, while naturally feeling as if it was designed and illustrated by the same artist who created the reference animation style.

Centered composition, complete logo visible, clean simple background, no unnecessary elements.