---
title: "Background Transform"
slug: "background-transform"
description: "Prompt builder untuk mengubah kondisi background"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Heavily neglected, walls covered in grime and cracks, overgrown vines and weeds covering everything."
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for transforming the condition and age of an existing environment based on:

  [DESKRIPSIKAN]

  Rules:

  * Each variant must represent a clearly different condition, age, deterioration, or maintenance state, not merely more dirt or a darker color.
  * Focus ONLY on condition, age, wear, cleanliness, maintenance, weathering, surface deterioration, and vegetation overgrowth.
  * Vary the overall level of aging, damage, cleanliness, weathering, decay, maintenance, and vegetation growth meaningfully between variants.
  * Keep the condition visually believable, consistent throughout the environment, and suitable for 2D animation.
  * Preserve the original environment's composition, architecture, layout, proportions, perspective, camera, objects, and identity completely unchanged.
  * Do not introduce, remove, rearrange, or identify specific objects, structures, furniture, props, or environmental elements.
  * Describe only their visible condition, surface state, age, wear, cleanliness, deterioration, or vegetation growth.
  * Match the requested condition in [DESKRIPSIKAN].
  * Keep each description concise and directly usable for asset generation pipelines.

  Output exactly [JUMLAH_VARIANT] numbered variants, ONE sentence per variant, with no explanations or extra text.

image_prompt: |
  BACKGROUND CONDITION & AGE EXTRACTION ANALYSIS

  Use the attached reference background image to analyze and extract the precise condition, age, and maintenance parameters.

  Create **ONE concise visual condition description sentence** for applying this state to other backgrounds.

  Rules:
  * Focus **ONLY on surface wear, pelapukan, kerusakan, and tingkat kebersihan**
  * Note the presence of grime, moss, cracks, faded paint, or overgrown plants
  * **DO NOT describe the specific physical scene elements** (buildings, objects)
  * Keep the text short, clean, and directly usable for the transformation tool

  **Output ONE condition description sentence only.**

database:
  "Usia & Pelapukan":
    - title: "Heavily Neglected"
      description: "Heavily neglected, walls covered in grime and cracks, overgrown vines and weeds covering everything."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23a16207"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Neglected</text></svg>'
    - title: "Moderately Worn"
      description: "Moderately worn and aged, faded paint, minor stains on walls, some rust on metal parts."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23ca8a04"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Worn</text></svg>'
    - title: "Ancient & Decayed"
      description: "Ancient and heavily decayed structure, crumbling bricks, moss and mold everywhere, roof partially collapsed."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23854d0e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Decayed</text></svg>'

  "Perawatan & Kebersihan":
    - title: "Pristine & New"
      description: "Pristine brand new condition, clean surfaces, fresh paint, no wear or tear visible."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2316a34a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Pristine</text></svg>'
    - title: "Well-Maintained"
      description: "Well-maintained older environment, clean but showing slight signs of age like minor fading."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2315803d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Maintained</text></svg>'
    - title: "Dirty & Messy"
      description: "Dirty and messy, scattered trash, dust accumulation, lack of recent cleaning."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23059669"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Dirty</text></svg>'

  "Kerusakan & Vegetasi":
    - title: "Minor Damage"
      description: "Minor structural damage, a few broken tiles, small graffiti tag, some peeling paint."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23b45309"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Minor Damage</text></svg>'
    - title: "Heavily Overgrown"
      description: "Heavily overgrown with thick ivy, bushes, and weeds consuming walls, fences, and pathways."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23a3e635"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23166534" font-size="10" font-family="sans-serif">Overgrown</text></svg>'
    - title: "Vandalized"
      description: "Environment showing signs of vandalism, extensive graffiti, broken windows, scattered debris."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2378350f"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Vandalized</text></svg>'

outputs: ["JSON"]
---
Use the attached image as the **STRICT BACKGROUND REFERENCE**.

Transform the **AGE AND PHYSICAL CONDITION** of the existing environment based on:

[[{humanInput}]]

### ONLY CHANGE

Change ONLY the apparent:

* age
* cleanliness
* maintenance
* wear
* weathering
* deterioration
* physical condition
* vegetation overgrowth

Apply these changes to the **existing environmental elements only**.

### ENVIRONMENT LOCK

Keep the exact same:

* location and environment identity
* buildings and architecture
* roads, floors, and terrain
* walls, doors, windows, and structures
* furniture and major objects
* trees and vegetation
* object positions and spatial relationships
* composition and layout
* perspective
* proportions
* camera angle and framing
* lighting and atmosphere
* original colors unless naturally affected by aging or deterioration

Do NOT add, remove, replace, redesign, resize, move, or rearrange environmental elements.

### CONDITION TRANSFORMATION

Express [[{humanInput}]] naturally through visible changes such as:

* faded or worn surfaces
* peeling or aged paint
* stains and accumulated dirt
* scratches and surface wear
* weathered materials
* minor cracks or damage
* rust or discoloration where physically appropriate
* neglected surfaces
* overgrown vegetation
* general signs of aging or maintenance

Use changes that are **proportional to the requested condition**.

A cleaner or newer condition should remove/reduce visible wear naturally; an older or neglected condition should increase believable wear and deterioration.

### STRUCTURE LOCK

The original environment must remain clearly recognizable.

Do NOT:

* completely destroy the environment
* rebuild or redesign structures
* replace materials with different materials
* invent new damage
* turn minor deterioration into major destruction
* change the physical layout

Only modify the **visible condition of what already exists**.

### VISUAL STYLE LOCK

Preserve the original:

* 2D cartoon animation style
* thick natural black outlines
* flat solid colors
* clean simple shapes
* slightly handmade line quality
* original rendering style
* original perspective and proportions
* original lighting and atmosphere

Do NOT change the art style or reinterpret the environment.

### DO NOT ADD

No characters, people, animals, vehicles, text, logos, buildings, furniture, props, or unrelated environmental elements.

Do NOT dramatically change the weather, lighting, atmosphere, or time of day unless explicitly requested.

### FINAL LOCK

**SAME LOCATION**
**SAME ENVIRONMENT**
**SAME ARCHITECTURE**
**SAME OBJECTS**
**SAME OBJECT POSITIONS**
**SAME COMPOSITION**
**SAME PERSPECTIVE**
**SAME CAMERA VIEW**
**SAME ART STYLE**
**ONLY AGE AND PHYSICAL CONDITION CHANGE**

The final result must look like the **SAME LOCATION at a different stage of age, cleanliness, maintenance, or deterioration**.

**ONLY CHANGE THE AGE AND PHYSICAL CONDITION.**

Output a clean 2D animation background.
