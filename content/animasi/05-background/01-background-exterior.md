---
title: "Background Exterior"
slug: "background-exterior"
description: "Prompt builder untuk background exterior"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Traditional Indonesian village alley with bamboo fences and tropical trees"
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for a 2D animation sidescroller background based on:

  [DESKRIPSIKAN]

  Each variant must show a clearly different environment through its environment type, architecture, layout, major structures, or scenery — not just different colors, lighting, weather, or small props.

  Write each variant as ONE concise sentence in this exact order:

  **Foreground → Middle ground → Background → Upper environment**

  Rules:

  * Focus ONLY on the environment and setting.
  * Include only elements naturally appropriate to [DESKRIPSIKAN].
  * Keep each environment believable, coherent, readable, and animation-friendly.
  * Do not force any specific country, culture, architecture, or environmental elements unless relevant to [DESKRIPSIKAN].
  * Avoid excessive clutter and unnecessary tiny details.
  * All four layers must belong to the same location and form believable spatial depth.
  * Keep the composition suitable for a horizontal 2D sidescroller with a clear foreground area for characters.

  Output exactly [JUMLAH_VARIANT] numbered variants, ONE sentence per variant, with no explanations or extra text.

image_prompt: |
  Create ONE short visual description of the Indonesian animation background using image reference

  If a reference image is provided, use it as the PRIMARY BACKGROUND STYLE REFERENCE. Carefully observe the environment's art style, linework, color palette, lighting, and composition to translate only the important background traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “Traditional Indonesian village alley with bamboo fences, tropical banana trees, and classic rural houses.”
  RULES:
  - Preserve the environmental theme, architectural style, and regional characteristics visible in the reference.
  - Prioritize distinctive visual traits: structure layout, vegetation types, and surface textures.
  - Do not invent background features or elements that are not visible or reasonably supported.
  - Do not describe specific characters, people, animals, text, or logos.
  - Do not copy the reference exact composition if the task is to create a new scene; use the reference only for style guidance.
  - Keep the appearance believable and suitable for an Indonesian animated world.
  - Avoid generic descriptions.
  - Avoid unnecessary details or backstory.
  - Keep the sentence short and directly usable as an image-generation prompt.
  - Use simple, natural English.
  - Do not use bullet points or multiple sentences.
  - OUTPUT EXACTLY ONE SENTENCE.

database:
  "#Favorite":

    - title: "Depan Kantor Polisi"
      description: "Permukaan lantai semen kasar membentuk foreground, melewati jalur koridor penjagaan lapang dan meja pos jaga kosong di middle ground, berlatar deretan dinding sel tahanan berteralis besi tebal di background, di bawah struktur plafon beton terbuka dengan pipa utilitas terekspos di upper area."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230339A0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Depan Kantor Polisi</text></svg>'


  "Example":
    - title: "Pinggir Jalan Raya Kota"
      description: "Indonesian suburban roadside with sidewalk, telephone poles with tangled cables, concrete fences, and shophouses (ruko)."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e293b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23cbd5e1" font-size="12" font-family="sans-serif">Jalan</text></svg>'

outputs: ["JSON"]
---
Use the attached image as the **STRICT STYLE REFERENCE ONLY**.

Create a completely NEW **horizontal 2D sidescroller animation background** based on:

[{humanInput}]

Use the reference ONLY for its general visual language: line quality, rendering technique, shading, texture, detail level, and artistic feel.

**DO NOT copy or closely reproduce** its composition, architecture, objects, layout, colors, perspective, proportions, or specific visual elements.

### VISUAL STYLE

Create a **semi-realistic hand-drawn 2D animation background** with:

* natural line variation
* believable proportions
* realistic-looking materials and textures
* subtle dimensional shading
* clear readable shapes
* convincing but controlled depth
* practical environmental detail
* animation-friendly rendering

The result should feel like a **real-world environment simplified into hand-drawn 2D animation art**, not a flat vector illustration, vector icon, logo, 3D render, CGI scene, anime scene, or photorealistic image.

Avoid perfectly geometric vector shapes, uniform outlines, flat fills, glossy digital surfaces, childish proportions, toy-like objects, and overly simplified surfaces.

### ENVIRONMENT STRUCTURE

Build the scene in this visual order:

**Foreground:** ground, floor, road, terrain, or nearby surfaces.
**Middle ground:** walls, fences, vegetation, furniture, vehicles, small structures, and environmental elements.
**Background:** main buildings, houses, structures, terrain, roads, and dominant scenery.
**Upper environment:** sky, distant scenery, rooftops, trees, clouds, poles, wires, ceilings, and upper structures.

All layers must belong to the same environment and connect naturally with believable depth.

### COMPOSITION

* Wide horizontal **16:9 sidescroller** composition.
* Eye-level, front-facing view unless [{humanInput}] requires another viewpoint.
* Large readable foreground area for characters.
* Clear horizontal layout and layer separation.
* Consistent perspective and natural depth.
* Balanced environmental detail.
* Designed as a background for characters moving horizontally, not a cinematic illustration.

### RULES

* Build the environment entirely from [{humanInput}].
* Do not force any specific culture, architecture, materials, objects, or regional style unless relevant to [{humanInput}].
* Do not add unrelated elements or unnecessary props.
* No characters, people, animals, logos, or unnecessary text.
* If text or signage is specifically requested, make it clean and readable.

**Output ONLY the background.**