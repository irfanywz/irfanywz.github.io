---
title: "Background Repair & Cleanup"
slug: "background-repair"
description: "Prompt builder untuk memperbaiki dan membersihkan background animasi 2D dari garis yang buram, bentuk yang terdistorsi, serta artefak yang tidak diinginkan tanpa mengubah struktur asli gambar"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: false
default_input: ""
variables_config:
  fix:
    type: "text"
    label: "Masukan Deskripsi"
    placeholder: ""
    default: "Clean up blurry outlines, fix distorted geometric shapes, and remove unwanted AI artifacts on structures."
outputs:
  - JSON
---

Use the attached image as the STRICT BACKGROUND REFERENCE.

Repair and clean up ONLY the specified problem areas:

<br>

[fix]

<br>

Preserve the original background exactly as much as possible.

Do NOT redesign, replace, move, resize, recolor, remove, or alter any correctly rendered part of the image.

Keep the original:
* environment
* buildings
* roads
* walls
* floors
* trees
* furniture
* objects
* environmental elements
* object positions
* composition
* proportions
* perspective
* camera angle
* lighting
* time of day
* atmosphere
* colors
* visual style

ONLY repair the specified problem areas.

Correct issues such as:
* broken or inconsistent outlines
* blurry areas
* distorted shapes
* malformed objects
* unwanted AI artifacts
* incorrect object connections
* inconsistent proportions
* minor perspective errors
* incomplete environmental details

Reconstruct the repaired area naturally while matching the surrounding image.

Maintain consistency with the original:
* cartoon art style
* thick black outlines
* line quality
* flat solid colors
* simple shapes
* proportions
* perspective
* lighting
* environmental scale

Do not add unnecessary new objects, details, or decorations.

Do not alter any area outside the specified problem area.

### STRICT REFERENCE LOCK

Same environment.
Same composition.
Same objects.
Same object positions.
Same perspective.
Same camera angle.
Same lighting.
Same atmosphere.
Same visual style.

ONLY repair the specified problem areas.

The final result must look identical to the original background, except that the specified problems have been naturally corrected.

Output a clean and consistent 2D animation background.