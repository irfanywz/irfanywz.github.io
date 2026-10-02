---
title: "Object Generator"
slug: "objek-generator"
description: "Prompt builder untuk merancang objek atau prop animasi 2D original yang bersih, proporsional, dan konsisten dengan gaya seni referensi"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "A vintage wooden toolbox filled with simple metal tools and a red latch."
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for new 2D animation props based on:

  [DESKRIPSIKAN]

  Rules:

  * Each variant must represent a clearly different prop design, not just a different color or minor detail.
  * Focus ONLY on the prop concept, structure, shape, proportions, and material identity.
  * Keep each prop recognizable as the same general type described in [DESKRIPSIKAN], while allowing meaningful differences in design and construction.
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

outputs: ["JSON"]
---
Use the attached image as the **STRICT STYLE REFERENCE ONLY**.

Create a **COMPLETELY NEW ORIGINAL OBJECT / PROP** based on:

[{humanInput}]

The new object must have its own **shape, structure, proportions, silhouette, materials, colors, functional parts, and visual identity**.

Do NOT copy, recolor, remix, or slightly modify any object from the reference.

### STYLE REFERENCE

Use the reference ONLY for its:

* drawing language
* line quality
* rendering approach
* visual simplicity
* level of detail
* overall 2D illustration feel

The result should feel like a **real-world object simplified into hand-drawn 2D animation art**.

Avoid an overly cartoonish interpretation. Keep the object **believable, practical, and physically recognizable**, while still matching the reference's simplified 2D visual language.

### VISUAL STYLE

* hand-drawn 2D animation
* natural black outlines with slight line variation
* solid base colors with subtle dimensional shading
* believable real-world proportions
* clean but slightly imperfect shapes
* simple material definition
* restrained detail
* natural surface variation
* clear readable forms
* animation-friendly construction

Avoid:

* flat vector-icon appearance
* geometric vector shapes
* perfectly uniform outlines
* excessive simplification
* childish/chibi proportions
* exaggerated cartoon deformation
* toy-like appearance
* glossy CGI surfaces
* 3D render appearance
* anime style
* photorealism
* logo or graphic-design treatment

### OBJECT DESIGN

Create the object as a **standalone master animation prop**.

Show:

* complete object
* full silhouette
* natural proportions
* clear structure
* important functional parts
* believable construction
* recognizable materials
* simple but meaningful surface details

Details should support the object's real-world construction rather than make it look overly decorative or cartoonish.

### VIEW

Show the complete object in a **clear side-scroll / side-oriented view** suitable for 2D animation.

Keep the viewpoint simple and readable, with minimal perspective distortion.

Do not crop the object.

### MASTER PROP PRIORITY

Prioritize:

* recognizable object identity
* distinctive silhouette
* believable proportions
* consistent construction
* functional parts
* material readability
* consistent colors
* reusable animation-friendly shapes
* clean separation of major parts

This image will be used as the **MASTER PROP REFERENCE** for generating other views, variations, interactions, and uses later.

Therefore, make the design **clear, stable, and easy to reproduce consistently**.

### COMPOSITION

* centered object
* complete object fully visible
* clean simple background
* sufficient empty space around the object
* no dynamic movement
* no dramatic perspective
* no unnecessary background elements

### DO NOT ADD

No characters, people, animals, text, labels, logos, extra objects, effects, or unrelated elements.

### FINAL RESULT

A **completely original real-world prop translated into believable hand-drawn 2D animation art**, using the attached image only as a **STYLE REFERENCE**.

It should look **simplified enough for animation, but realistic enough to feel like an actual physical object**.

**OUTPUT ONLY THE NEW OBJECT / PROP.**
