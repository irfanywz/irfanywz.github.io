---
title: "Deskripsi Variasi"
slug: deskripsi-varias
description: "Membuat Deskripsi menjadi bervariasi, bermutasi jadi banyak versi untuk bisa dicoba"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: false
variables_config:
  DESCRIPTION:
    type: "text"
    label: "MASUKAN DESKRIPSI"
    placeholder: ""
    default: ""
  JUMLAH_VARIANT:
    type: "number"
    label: "JUMLAH_VARIANT"
    default: 5
outputs: ["JSON"]    
---

Create **[JUMLAH_VARIANT] DIFFERENT variations** of the description below:

[DESCRIPTION]

Each variant must preserve the **same core concept, category, and intended meaning**, while introducing meaningful changes to its visual characteristics.

Vary relevant attributes such as:

* shape and silhouette
* size and proportions
* structure and construction
* form and design
* materials and textures
* colors
* patterns and markings
* components and details
* style or design features
* other attributes naturally relevant to the subject

Only modify attributes that make sense for the described subject. Do NOT force irrelevant changes.

Each variant must feel like a **different version of the same concept**, not a completely different subject.

Avoid variations that differ only through minor color changes or tiny details. Make each version visually distinguishable while keeping the original concept recognizable.

Keep every description **concise, specific, natural, and directly usable as a visual-generation prompt**.

**Output exactly [JUMLAH_VARIANT] numbered variants, ONE concise sentence per variant, with no headings, explanations, or extra text.**
