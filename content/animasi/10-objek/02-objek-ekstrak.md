---
title: "Object Extractor"
slug: "objek-ekstrak"
description: "Prompt builder untuk mengekstrak objek tertentu"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: false

variables_config:
  OBJEK_YANG_DIEKSTRAK:
    type: "text"
    label: "OBJEK_YANG_DIEKSTRAK"
    placeholder: ""
    default: "pintu saja, dibuat jadi spritesheet, tertutup terbuka WARNA DISAMAKAN, KASIH GAGANG"

outputs:
  - JSON
---
Use the attached image as the **STRICT IMAGE REFERENCE**.

Extract only this object or part of the image:

**[OBJEK_YANG_DIEKSTRAK]**

Recreate the selected object as a **standalone asset**, preserving its original design, shape, proportions, colors, details, perspective, and visual style.

Remove everything else from the original image.

**BACKGROUND:** pure solid white (#FFFFFF).

Do not redesign, simplify, modify, or add details to the extracted object.

**Result:** only the requested object, isolated on a clean white background and ready to use as a separate asset.
