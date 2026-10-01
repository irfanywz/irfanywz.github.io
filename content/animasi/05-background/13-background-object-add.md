---
title: "Background Object Addition"
slug: "background-object-add"
description: "Prompt builder untuk menambahkan objek atau elemen baru ke dalam background animasi 2D yang ada pada posisi tertentu dengan penyesuaian skala, perspektif, dan gaya seni yang selaras"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: false
default_object: "A vintage wooden bench"
default_placement: "On the empty sidewalk on the right side of the street"

variables_config:
  OBJEK_DITAMBAHKAN:
    type: "text"
    label: "OBJEK_DITAMBAHKAN"
    placeholder: "Lukisan Jokowi"
    default: ""  
  LOKASINYA:
    type: "text"
    label: "LOKASINYA"
    placeholder: "Dinding"
    default: ""

outputs:
  - JSON
---
Use the attached image as the STRICT BACKGROUND REFERENCE.

Add ONLY the specified new object or element:

[OBJEK_DITAMBAHKAN]

Place the new object naturally in the specified location:

[LOKASINYA]

Preserve the original background exactly as much as possible.

Do NOT change, redesign, remove, move, resize, recolor, or replace any existing:
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
* perspective
* proportions
* camera angle
* lighting
* time of day
* atmosphere
* art style

The new object must naturally match the existing environment.

Match the new object with the original:
* cartoon art style
* linework
* outline thickness
* colors
* lighting
* perspective
* scale
* proportions
* visual simplicity

Make sure the new object has the correct size and perspective relative to its position in the environment.

Do not add any additional objects or unnecessary details.

Do not alter any area outside the placement of the new object.

### STRICT REFERENCE LOCK
* Same environment.
* Same composition.
* Same existing objects.
* Same object positions.
* Same perspective.
* Same camera angle.
* Same lighting.
* Same atmosphere.
* Same visual style.

ONLY add the specified object in the requested location.

The final result must look like the new object naturally belongs in the original background.

Output a clean 2D animation background.