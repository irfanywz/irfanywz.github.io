---
title: "Background Decor Adder"
slug: "background-decor-add"
description: "Prompt builder untuk mengisi background animasi 2D yang kosong dengan furnitur, dekorasi, atau properti tambahan yang sesuai secara kontekstual, skala, dan gaya seni"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: false

variables_config:
  DEKORASI_INPUT:
    type: "text"
    label: "DEKORASI_INPUT"
    placeholder: ""
    default: "masukan orang kedalamnya."

outputs: ["JSON"]
---
Use the attached image as the **STRICT ENVIRONMENT REFERENCE**.

Add the appropriate **scene elements** based on:

[DEKORASI_INPUT]

Scene elements may include **objects, furniture, decorations, props, people, characters, animals, vehicles, vegetation, signs, or other relevant elements** when required by [DEKORASI_INPUT].

### ENVIRONMENT LOCK

Keep the original environment EXACTLY unchanged:

* architecture and structure
* layout and spatial arrangement
* existing objects
* camera angle and perspective
* composition
* proportions and scale
* materials and surfaces
* lighting and atmosphere
* visual style
* environment identity

Do NOT remove, redesign, move, resize, replace, or modify anything that already exists.

### ADDITION RULE

ONLY add elements that are relevant to [DEKORASI_INPUT].

Interpret [DEKORASI_INPUT] naturally and choose appropriate elements based on the existing environment.

Added elements must:

* fit the environment
* have believable scale and proportions
* use correct perspective
* interact naturally with the ground or surrounding space
* have consistent lighting and shadows
* match the original visual style
* feel naturally integrated rather than randomly placed

If [DEKORASI_INPUT] requires **people or characters**, include them as part of the scene and place them naturally within the environment.

If it requires **animals, vehicles, vegetation, furniture, or objects**, add only the relevant elements.

Do NOT automatically add people, animals, vehicles, or objects unless they are supported by [DEKORASI_INPUT].

### VISUAL CONSISTENCY

All newly added elements must match the original environment's:

* art style
* linework
* proportions
* perspective
* scale
* colors
* materials
* lighting
* shadows
* rendering

New people and characters must look like they naturally belong in the same animated world.

### DO NOT

Do NOT add unrelated elements.

Do NOT change the original environment to make room for additions.

Do NOT alter existing objects.

Do NOT redesign the architecture or composition.

Do NOT add text, logos, or decorative elements unless specifically requested.

### FINAL RESULT

The result must look like the **SAME ORIGINAL ENVIRONMENT**, naturally populated and enriched with the scene elements requested in [DEKORASI_INPUT].

**EXISTING ENVIRONMENT = LOCKED.**
**[DEKORASI_INPUT] = ONLY SOURCE FOR NEW ELEMENTS.**

Output ONLY the completed background scene.