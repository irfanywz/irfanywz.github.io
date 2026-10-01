---
title: "Background Decor Adder"
slug: "background-decor-add"
description: "Prompt builder untuk mengisi background animasi 2D yang kosong dengan furnitur, dekorasi, atau properti tambahan yang sesuai secara kontekstual, skala, dan gaya seni"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: false

variables_config:
  DEKORASI_INPUT:
    type: "text"
    label: "DEKORASI_INPUT"
    placeholder: ""
    default: "Remove all loose objects, paintings, furniture, and clutter from the room, leaving only the bare structural interior."

outputs:
  - JSON
---
Use the attached image as the STRICT ENVIRONMENT REFERENCE.

Add appropriate environmental objects, decorations, props, and visual details based on:

[DEKORASI_INPUT]

Keep the original environment completely unchanged, including its:
* architecture or natural structure
* layout and spatial arrangement
* camera angle and perspective
* composition
* proportions and scale
* existing structural elements
* materials and surface appearance
* visual style
* overall environment identity

ONLY add objects, decorations, props, and environmental details that naturally belong to the environment described by [DEKORASI_INPUT].

The added elements must feel practical, believable, properly scaled, and naturally integrated into the existing environment.

Choose the type and placement of added elements according to the environment itself. Interior environments may receive appropriate furniture, household items, fixtures, and decorations, while exterior environments may receive appropriate street elements, vegetation, vehicles, structures, signs, outdoor objects, or other relevant environmental details.

Do NOT randomly add unrelated objects.

Do NOT remove, redesign, relocate, resize, or modify the existing environment or existing objects.

Do NOT add characters, people, animals, or unrelated elements unless specifically required by [DEKORASI_INPUT].

Maintain consistent perspective, scale, lighting, materials, shadows, and visual style between the original environment and all newly added elements.

The final image should look like the same original environment, naturally furnished, decorated, and visually enriched according to [DEKORASI_INPUT].

Output ONLY the completed background.