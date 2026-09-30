---
title: "Background Exterior"
slug: "background-exterior"
description: "Prompt builder untuk background exterior"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Traditional Indonesian village alley with bamboo fences and tropical trees"
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for a **2D animation sidescroller background** based on:

  [{target}]

  Each variant must describe a **clearly different environmental setting**, not merely change a few props, colors, or decorative details.

  Write each variant as **one concise sentence**, describing the environment theme and its visual elements in a clear **foreground → middle ground → background → upper environment** order.

  Rules:

  * Focus **ONLY on the environment and setting**
  * The description must work as a **pure background environment**, designed for 2D sidescroller animation
  * Clearly describe the spatial arrangement and depth of the environment
  * Make each variant meaningfully different in **environment type, architecture, layout, spatial arrangement, major structures, or scenery**
  * Do NOT create variants that differ only by color, lighting, weather, or a few small props
  * Include environmental elements that naturally belong to [{target}]
  * Adapt the architecture, objects, vegetation, materials, and scenery to the specific setting described in [{target}]
  * Do NOT force any specific culture, country, architectural style, or environmental element unless it is relevant to [{target}]
  * Keep the environment believable, coherent, readable, and animation-friendly
  * Avoid excessive clutter or unnecessary tiny details

  ### ENVIRONMENT STRUCTURE

  Build every environment with a clear visual depth hierarchy in this exact order:

  **Foreground:**
  Ground, road, floor, pavement, terrain, or nearby environmental surfaces. Keep this area visually readable and suitable as the main space where characters can be placed.

  **Middle ground:**
  Fences, vegetation, walls, furniture, vehicles, small structures, objects, signs without readable text, and other environmental elements positioned between the foreground and main scenery.

  **Background:**
  Main houses, buildings, roads, structures, terrain, architecture, vegetation, or dominant scenery that establishes the location.

  **Upper environment:**
  Sky, distant trees, rooftops, mountains, clouds, poles, wires, hanging elements, ceilings, upper structures, or other environmental elements extending into the upper frame.

  All four layers must naturally belong to the **same location**, align spatially, and connect with believable depth.

  Do NOT randomly place unrelated objects between layers.

  ### SIDE-SCROLLER COMPOSITION

  The environment must read clearly as a **side-view horizontal 2D animation background**.

  Prioritize:

  * horizontal spatial layout
  * clear foreground*
  * sidescroll view


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
  "Example":
    - title: "Gang Kampung Padat"
      description: "Narrow urban Indonesian alley (gang sempit) with brick walls, potted plants, hanging laundry wires, and tiled roofs."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2378350f"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fed7aa" font-size="12" font-family="sans-serif">Gang</text></svg>'

    - title: "Pinggir Jalan Raya Kota"
      description: "Indonesian suburban roadside with sidewalk, telephone poles with tangled cables, concrete fences, and shophouses (ruko)."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e293b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23cbd5e1" font-size="12" font-family="sans-serif">Jalan</text></svg>'

outputs:
  - JSON
---

Use the attached image as the **STRICT STYLE REFERENCE ONLY**.

Create a completely NEW **horizontal 2D sidescroller animation background** based on:

[{humanInput}]

Use the reference ONLY for its visual style, including line quality, rendering technique, shading, texture treatment, level of detail, and overall artistic feel.

**DO NOT copy the reference image's composition, architecture, objects, layout, colors, perspective, or specific visual elements.**

### VISUAL STYLE

Create a **semi-realistic hand-drawn 2D animation background** with:

* clean detailed linework
* believable materials and textures
* subtle shading
* natural proportions
* clear shapes
* convincing depth
* controlled environmental detail
* animation-friendly rendering

Avoid flat childish cartoon styling, excessive outlines, overly simplified shapes, photorealism, 3D rendering, and anime styling.

### ENVIRONMENT STRUCTURE

Build the environment in this exact visual order:

**Foreground:** ground, floor, road, terrain, or nearby surfaces.

**Middle ground:** walls, fences, vegetation, furniture, vehicles, small structures, and environmental objects.

**Background:** main buildings, houses, structures, roads, terrain, and dominant scenery.

**Upper environment:** sky, distant scenery, rooftops, trees, clouds, poles, wires, ceilings, and upper structures.

All layers must belong to the **same environment** and connect naturally with believable depth.

### COMPOSITION

Use a **wide horizontal 16:9 sidescroller composition** with an eye-level front-facing view unless [humanInput] clearly requires another viewpoint.

Keep:

* a large readable foreground area for characters
* clear horizontal layout
* clear separation between layers
* consistent perspective
* natural depth
* balanced environmental detail

The result must look like a **background for characters moving horizontally through the scene**, not a cinematic illustration.

### RULES

Create the environment entirely from **[humanInput]**.

Do not force any specific country, culture, architecture, objects, materials, or environmental style unless relevant to [humanInput].

No characters, people, animals, logos, or unnecessary props.

Do not add unrelated objects.

If text or signage is specifically required by [humanInput], make it clean and readable.

**Output ONLY the background.**
