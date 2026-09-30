---
title: "Desain Ulang Objek"
slug: "objek-redesain"
description: "Prompt builder untuk merancang ulang (redesign) sebuah objek referensi menjadi bentuk baru yang unik, kreatif, dan fungsional tanpa menghilangkan identitas aslinya"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Ubah objek menjadi gaya futuristik dengan aksen lampu neon bercahaya dan material metalik modern."

desc_prompt: false
image_prompt: false

database:
  "Gaya & Estetika":
    - title: "Futuristik & Sci-Fi"
      description: "Ubah objek menjadi gaya futuristik dengan aksen lampu neon bercahaya dan material metalik modern."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%232563eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Futuristik</text></svg>'
    - title: "Klasik Retro & Vintage"
      description: "Redesain objek dengan gaya klasik retro era 80-an, tekstur kayu tua, dan detail kuningan antik."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23b45309"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Vintage</text></svg>'

  "Tema & Konsep":
    - title: "Fantasi & Magic"
      description: "Transformasikan objek menjadi bertema sihir fantasi dengan ukiran rune magis dan kristal bercahaya."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c2d12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Fantasi</text></svg>'
    - title: "Minimalis Modern"
      description: "Redesain objek menjadi bentuk geometris bersih, sudut melengkung halus, dan palet warna monokromatik."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Minimalis</text></svg>'

outputs:
  - JSON
---

Use the attached image as the STRICT OBJECT REFERENCE.

Redesign the object into a completely NEW and UNIQUE visual version based on:

<br>

**[{humanInput}]**

<br>

Keep the object's core identity, function, and object type clearly recognizable.

Redesign its visual design according to the instruction, allowing changes to its silhouette, proportions, shape, structure, components, details, materials, surface treatment, and colors when appropriate.

The original image is ONLY a reference for identifying the object and understanding its function.

DO NOT simply copy, recolor, slightly modify, or reproduce the original design.

The redesigned object should feel like a genuinely different version of the same type of object, while remaining immediately recognizable and functionally believable.

Keep all changes relevant to **[{humanInput}]**. Do not introduce unrelated objects, features, or design elements.

### RESULT

A clean, original, visually distinct redesign of the same object type, following **[{humanInput}]**.