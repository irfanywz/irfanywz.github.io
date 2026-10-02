---
title: "Background Object Replacement"
slug: "background-object-replace"
description: "Prompt builder untuk mengganti objek tertentu di dalam background animasi 2D dengan objek baru tanpa mengubah lingkungan, perspektif, maupun gaya seni di sekitarnya"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: false

variables_config:
  OBJEK_LAMA:
    type: "text"
    label: "OBJEK_LAMA"
    placeholder: "Gelas"
    default: ""  
  OBJEK_BARU:
    type: "text"
    label: "OBJEK_BARU"
    placeholder: "Piring"
    default: ""

outputs: ["JSON"]
---
Use the attached image as the STRICT BACKGROUND REFERENCE.

Replace ONLY the specified existing object:

[OBJEK_LAMA]


with:

[OBJEK_BARU]

Preserve the original background exactly as much as possible.

The new object must occupy the same general location and naturally fit into the existing environment.

Do NOT change, redesign, remove, move, resize, recolor, or replace any other existing:
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
* visual style

ONLY replace the specified target object with the requested new object.

The replacement must:
* remain in the same general position
* match the surrounding scale
* follow the existing perspective
* fit naturally into the environment
* maintain believable proportions
* match the original cartoon art style
* match the original linework and outline thickness
* match the existing color simplicity and visual quality

Adjust ONLY the immediate surrounding area when necessary to make the replacement object naturally fit into the environment.

Do not alter unrelated areas of the image.

### STRICT REFERENCE LOCK
* Same environment.
* Same location.
* Same composition.
* Same perspective.
* Same camera angle.
* Same lighting.
* Same atmosphere.
* Same surrounding objects.
* Same visual style.

ONLY replace the specified object.

The final result must look like the SAME original background, except that the specified object has been naturally replaced with the new object.

Output a clean and consistent 2D animation background.