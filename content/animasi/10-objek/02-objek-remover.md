---
title: "Object Remover"
slug: "objek-remover"
description: "Prompt builder untuk menghapus bagian, komponen, atau aksesori tertentu dari suatu objek referensi secara bersih dan merekonstruksi struktur dasarnya tanpa mengubah keseluruhan desain atau gaya aslinya"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: false

variables_config:
  OBJEK_YANG_DIHILANGKAN:
    type: "text"
    label: "OBJEK_YANG_DIHILANGKAN"
    placeholder: ""
    default: "bannya dihilangkan"

outputs:
  - JSON
---
Using the attached image as the exact reference.

Preserve 100%:
* overall design
* proportions
* perspective
* colors
* style
* linework

Remove only:

[OBJEK_YANG_DIHILANGKAN]

Completely erase the selected component.

Do not replace it with another object.

Do not redesign the remaining structure.

Reconstruct any hidden surfaces naturally where the removed part was attached.

Keep all remaining components unchanged.

Maintain the original visual style.

White background.

No text.

No watermark.