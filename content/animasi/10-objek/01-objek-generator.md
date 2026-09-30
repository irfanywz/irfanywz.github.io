---
title: "Objek Generator"
slug: "objek-generator"
description: "Prompt builder untuk merancang objek atau prop animasi 2D original yang bersih, proporsional, dan konsisten dengan gaya seni referensi"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "A vintage wooden toolbox filled with simple metal tools and a red latch."
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for new 2D animation props based on:

  [{target}]

  Rules:

  * Each variant must represent a clearly different prop design, not just a different color or minor detail.
  * Focus ONLY on the prop concept, structure, shape, proportions, and material identity.
  * Keep each prop recognizable as the same general type described in [{target}], while allowing meaningful differences in design and construction.
  * Make each variant simple, practical, visually clear, and suitable for 2D animation asset generation.
  * Do not describe characters, scenery, backgrounds, actions, poses, or unrelated objects.
  * Keep each description concise and directly usable for asset generation pipelines.

  Output exactly [JUMLAH_VARIANT] numbered variants, ONE sentence per variant, with no explanations or extra text.

image_prompt: |
  PROP ART STYLE EXTRACTION

  Use the attached reference image to analyze and extract the precise line weight, outline thickness, solid color palette, and minimalist cartoon drawing style.

  Create **ONE precise art style matching instruction** ensuring that any newly generated prop seamlessly fits the same artistic visual language.

  **Output ONE instruction sentence only.**

database:
  "Example":
    - title: "Kotak Alat Kayu"
      description: "A vintage wooden toolbox filled with simple metal tools and a red latch."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%236366f1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Toolbox</text></svg>'

outputs:
  - JSON
---

Use the attached image as the STRICT STYLE REFERENCE ONLY.

Create a completely NEW OBJECT / PROP based on this description:

<br>

**[{humanInput}]**

<br>

The new object must have a unique shape, structure, proportions, silhouette, details, materials, colors, and identity. Do not copy, recolor, or slightly modify any object from the reference.

Keep ONLY the SAME VISUAL ART STYLE, DRAWING LANGUAGE, AND DESIGN APPROACH of the reference:
* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* clear readable design
* animation-friendly construction

DESIGN:
Create the object in a clear side scroll view.

Show the complete object clearly:
* full object visible
* clear overall shape
* clear silhouette
* natural proportions
* readable construction
* important functional parts clearly visible
* simple clean details
* no unnecessary complexity

The object should be designed as a standalone animation prop, with a clear and recognizable shape that can easily be reused in different scenes and poses.

This image will be used as the MASTER PROP REFERENCE for generating other views, variations, and uses later.

Therefore, prioritize:
* clear object identity
* consistent proportions
* clear construction
* recognizable shape
* distinctive silhouette
* readable functional parts
* consistent colors and materials
* simple visual details
* animation-friendly shapes
* strong visual consistency with the reference style

Do not add characters, text, labels, extra objects, dynamic movement, or complex background.

The final object must look like a completely original prop, while feeling as if it was designed and illustrated by the same artist using the same visual style and design language as the reference.

Centered composition, complete object visible, clean simple background.