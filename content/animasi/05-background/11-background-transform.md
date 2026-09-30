---
title: "Background Transform"
slug: "background-transform"
description: "Prompt builder untuk mengubah kondisi background"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Heavily neglected, walls covered in grime and cracks, overgrown vines and weeds covering everything."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for transforming the condition and age of an existing environment based on:

  [{target}]

  Each variant must describe a **clearly different condition, age, and maintenance state**, not merely change the amount of dirt or one small surface detail.

  Write each variant as **one concise descriptive sentence**, specifying the overall state of repair, surface wear, cleanliness, aging, weathering, and vegetation growth clearly.

  Rules:

  * Focus **ONLY on condition, age, wear, cleanliness, maintenance, and vegetation overgrowth**
  * Describe visible surface conditions such as grime, dust, stains, cracks, peeling paint, discoloration, rust, erosion, weathering, moisture marks, or general deterioration when relevant
  * Describe the level of vegetation growth or overgrowth when relevant
  * Make each variant meaningfully different in **age, deterioration level, cleanliness, maintenance state, surface wear, or vegetation growth**
  * Do NOT create variants that differ only by a slightly darker color or a small amount of additional dirt
  * Keep the condition visually believable and consistent throughout the entire environment
  * Match the requested condition in [{target}]
  * Keep the transformation suitable for 2D animation

  ### ENVIRONMENT LOCK

  The original environment remains **completely unchanged in composition and structure**.

  Do NOT change:

  * layout
  * architecture
  * spatial arrangement
  * proportions
  * camera
  * perspective
  * objects
  * furniture
  * vegetation placement
  * environmental identity

  Only change the **visible condition and state of the existing environment**.

  ### CONTENT LOCK

  Do NOT mention or describe specific physical objects such as:

  * buildings
  * houses
  * trees
  * furniture
  * vehicles
  * roads
  * walls
  * floors
  * roofs
  * decorations
  * props

  Describe only their **condition, surface state, age, wear, cleanliness, or vegetation growth** without identifying the objects themselves.

  Do NOT introduce new objects, structures, or environmental elements.

  ### OUTPUT RULES

  * Output exactly **[JUMLAH_VARIANT]** variants
  * Number them sequentially
  * One sentence per variant
  * No explanations
  * No headings
  * No additional commentary
  * Do not output fewer or more variants than requested


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

outputs:
  - JSON
---

Use the attached image as the STRICT BACKGROUND REFERENCE.

Transform the condition and age of the existing environment based on:

<br>

[{humanInput}]

<br>

Preserve the original environment and its identity.

Do NOT change the location, architecture, layout, perspective, camera angle, or major environmental elements.

Keep consistent:
- buildings
- roads
- walls
- floors
- trees
- furniture
- major objects
- architectural structure
- object positions
- composition
- perspective
- proportions
- camera angle
- visual style

ONLY change the apparent age, condition, cleanliness, maintenance, and physical state of the existing environment.

Apply the requested condition naturally through appropriate visual changes such as:
- surface wear
- faded colors
- minor stains
- weathering
- aging materials
- worn paint
- slightly damaged surfaces
- overgrown vegetation
- accumulated dirt
- signs of neglect
- subtle deterioration

Keep the original structure recognizable.

Do NOT completely destroy, rebuild, replace, or redesign the environment unless specifically requested.

The transformation must remain believable and proportional to the requested condition.

Maintain the original:
- 2D cartoon art style
- thick black outlines
- flat solid colors
- clean simple shapes
- slightly handmade line quality
- perspective
- proportions
- lighting
- atmosphere

Do not add characters, text, logos, or unrelated objects.

Do not dramatically change the lighting, weather, or time of day unless specifically requested.

STRICT REFERENCE LOCK:
Same location.
Same environment.
Same architecture.
Same major objects.
Same object positions.
Same composition.
Same perspective.
Same camera angle.
Same visual style.

ONLY change the age and physical condition of the existing environment.

The final result must look like the SAME location at a different stage of age or maintenance.

Output a clean 2D animation background.