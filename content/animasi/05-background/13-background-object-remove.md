---
title: "Background Object Removal"
slug: "background-object-remove"
description: "Prompt builder untuk menghapus objek tertentu dari background animasi 2D dan merekonstruksi latar belakang di baliknya secara alami tanpa mengubah elemen atau gaya lainnya"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: false
variables_config:
  OBJEK_DIHILANGKAN:
    type: "text"
    label: "OBJEK_DIHILANGKAN"
    placeholder: "Gelas"
    default: "" 
outputs:
  - JSON
---
Use the attached image as the STRICT BACKGROUND REFERENCE.

Remove ONLY the specified object or element:

[OBJEK_DIHILANGKAN]

Preserve the original background exactly as much as possible.

Do NOT change, redesign, move, resize, recolor, or replace any other:
* buildings
* roads
* walls
* floors
* trees
* furniture
* objects
* environmental elements
* composition
* perspective
* proportions
* camera angle
* lighting
* time of day
* atmosphere
* art style

After removing the specified object, naturally reconstruct the area that was hidden behind it using the surrounding environment.

The reconstructed area must match:
* original colors
* original linework
* original shapes
* original perspective
* original lighting
* original visual style

Do not add new objects or details that were not already implied by the surrounding environment.

Do not alter any area outside the removed object.

### STRICT REFERENCE LOCK
* Same environment.
* Same composition.
* Same perspective.
* Same camera angle.
* Same lighting.
* Same atmosphere.
* Same visual style.

ONLY remove the specified object and reconstruct the hidden background naturally.

The final result must look like the original background was created without the removed object in the first place.

Output a clean 2D animation background.