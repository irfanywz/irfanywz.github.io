---
title: "Background Decor Remover"
slug: "background-decor-remover"
description: "Prompt builder untuk membersihkan seluruh dekorasi, properti, furnitur, dan objek lepas dari background animasi 2D, menyisakan struktur arsitektur dasar yang bersih dan kosong"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: false

variables_config:
  DECOR_REMOVE:
    type: "text"
    label: "DECOR_REMOVE"
    placeholder: ""
    default: "Remove all loose objects, paintings, furniture, and clutter from the room, leaving only the bare structural interior."

outputs: ["JSON"]
---
Use the attached image as the STRICT ENVIRONMENT REFERENCE.

Remove ALL removable objects, decorations, props, furniture, clutter, and non-structural visual elements from the background.

Based on:

[DECOR_REMOVE]

Keep the original environment structure completely unchanged, including:
* architecture
* walls
* floors
* ceilings
* doors and windows
* built-in structural elements
* perspective
* camera angle
* composition
* proportions
* materials
* surface textures
* lighting and shadows

ONLY remove objects and decorative elements that are not part of the permanent architecture or structural environment.

After removing them, naturally reconstruct the empty areas using the surrounding walls, floors, surfaces, textures, colors, lighting, and materials so the result looks clean and continuous.

Do NOT redesign, rearrange, resize, rotate, or modify the environment.

Do NOT replace removed objects with new objects, decorations, furniture, patterns, or unnecessary details.

The final image must look like the SAME background/location, but completely empty, clean, uncluttered, and free of removable objects and decorations.

Output ONLY the cleaned background.