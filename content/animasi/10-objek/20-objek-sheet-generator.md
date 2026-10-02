---
title: "Object Sprite Sheet"
slug: "objek-sheet-generator"
description: "Prompt builder untuk menghasilkan sprite sheet progresif yang menunjukkan perubahan kondisi, state, atau fase dari sebuah objek dengan konsistensi visual yang ketat"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Tampilkan progres objek yang terisi penuh cairan hingga perlahan habis kosong secara bertahap."

desc_prompt: false
image_prompt: false

database:
  "Konsumsi & Penggunaan":
    - title: "Cairan Berkurang (Cangkir/Gelas)"
      description: "Tampilkan progres objek cairan di dalam wadah yang terisi penuh hingga perlahan habis kosong secara bertahap."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230284c7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Liquid</text></svg>'
    - title: "Makanan/Buah Dimakan"
      description: "Tampilkan progres objek makanan atau buah utuh yang perlahan digigit berkurang hingga tersisa bagian inti atau habis."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2316a34a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Food</text></svg>'

  "Mekanik & Kerusakan":
    - title: "Baterai & Indikator Daya"
      description: "Tampilkan progres indikator lampu atau level baterai dari status penuh menyala terang hingga redup dan mati total."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23ea580c"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Battery</text></svg>'
    - title: "Kerusakan & Retak Fisik"
      description: "Tampilkan progres objek utuh mulus yang perlahan mengalami retakan garis kecil hingga pecah terbelah bertahap."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2352525b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Crack</text></svg>'

outputs: ["JSON"]
---
Use the attached image as the STRICT OBJECT REFERENCE.

Create a clean **OBJECT STATE SPRITE SHEET** showing the exact same object in multiple sequential states based on:

[{humanInput}]

Keep the object's original design STRICTLY CONSISTENT across all states.

LOCK the following across every sprite:
* exact object identity
* shape and silhouette
* proportions
* size and scale
* structure and components
* materials and surface appearance
* colors
* details
* orientation
* viewing angle
* position
* visual style

ONLY change the object's physical state or condition according to **[{humanInput}]**.

Each sprite must represent a clear progression from one state to the next. The changes should be gradual, logical, visually obvious, and consistent with the requested transformation.

For example, if **[{humanInput}]** describes a drink being consumed, show a gradual reduction of the liquid level from full to empty while keeping the glass completely unchanged.

Do NOT redesign, recolor, reshape, rotate, reposition, replace, or reinterpret the object between states.

Do NOT add or remove unrelated objects.

## SPRITE SHEET

Arrange all states in a clean horizontal row with equal spacing.

Each sprite must be fully visible and separated clearly from the others.

Use a clean plain white background.

No text, labels, arrows, numbers, characters, hands, or extra objects.

The sprite sheet must be suitable for 2D animation and easy to separate into individual frames.

### RESULT

A clean, consistent object sprite sheet showing the same object progressing through the states described in **[{humanInput}]**.