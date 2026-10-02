---
title: "Nama Karakter Generator"
slug: "nama-karakter-generator"
description: "Prompt builder untuk menghasilkan daftar lengkap karakter manusia 2D lokal yang unik, lengkap dengan deskripsi visual, postur idle netral, dan pakaian kasual sederhana"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true

default_input: "Warga desa yang ramah dan beragam usia, dari anak-anak hingga kakek-nenek, untuk serial animasi keseharian."
desc_prompt: false
image_prompt: false

database:
  Kantor:
    - title: "Kantor"
      description: "Pekerja kantoran profesional dengan pakaian formal berjas atau kemeja rapi, cocok untuk sketsa dunia kerja."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230369a1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Kantor</text></svg>'
    - title: "Bos"
      description: "Sosok manajer atau bos perusahaan yang tegas, berwibawa, dan mengenakan setelan jas eksklusif."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23334155"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Bos</text></svg>'

  Kampung:
    - title: "Kampung"
      description: "Sekelompok warga lokal dengan pakaian santai rumahan (daster, kaos oblong, sarung) untuk cerita keseharian."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23b45309"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Kampung</text></svg>'
    - title: "Desa"
      description: "Petani lokal yang ramah menggunakan topi caping dan pakaian lapangan untuk cerita pedesaan yang asri."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2315803d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Desa</text></svg>'

  Pasar:
    - title: "Pedagang"
      description: "Karakter penjual sayur atau pembeli di pasar tradisional dengan celemek dan gaya interaksi yang ekspresif."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23c2410c"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Pasar</text></svg>'
    - title: "Warkop"
      description: "Penjaga warung kopi santai lengkap dengan teko air panas dan para pelanggan yang sedang asyik ngobrol."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2378350f"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Warkop</text></svg>'

  Sekolah:
    - title: "Sekolah"
      description: "Sekelompok pelajar dengan seragam sekolah rapi atau pakaian kasual remaja yang energik."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231d4ed8"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Sekolah</text></svg>'
    - title: "Kampus"
      description: "Anak muda kuliahan dengan gaya kasual, membawa ransel, buku, atau laptop untuk sketsa dunia kampus."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%236d28d9"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Kampus</text></svg>'

outputs: ["JSON"]
---
Act as a character designer for a 2D animated series.

Based on this input:

[{humanInput}]

Create a complete list of unique human characters that naturally fit the input.

## FIXED CHARACTER STYLE

All characters MUST follow these fixed visual rules:

### OUTFIT — STRICTLY LOCKED

Simple everyday clothing only.

Plain basic T-shirt or simple short-sleeve shirt as the default top.

Simple everyday pants, shorts, or simple skirt as the bottom.

Clothing must look ordinary, practical, and easy to reproduce in 2D animation.

Different characters may use different shirt and bottom colors.

Different characters may use slightly different basic T-shirt or shirt designs.

DO NOT use:

* jackets
* hoodies
* coats
* sweaters
* blazers
* suits
* formalwear
* uniforms unless specifically required by the input
* traditional ceremonial clothing unless specifically required by the input
* fashionable outfits
* luxury clothing
* layered outfits
* elaborate clothing
* complicated patterns
* unnecessary accessories

The default outfit should look like an ordinary person wearing a basic T-shirt and simple everyday bottoms.

### FOOTWEAR — STRICTLY LOCKED

All characters are barefoot.

No shoes.

No sandals.

No slippers.

No socks.

### POSE & EXPRESSION — STRICTLY LOCKED

Every character must always be described in a neutral idle state:

* Calm neutral facial expression
* Mouth closed
* Eyes naturally open
* Head upright
* Standing upright
* Shoulders relaxed
* Arms hanging naturally at the sides
* Hands relaxed and visible
* Legs in a natural standing position
* Feet planted naturally on the ground
* Static idle pose
* No action
* No gesture
* No dynamic movement

DO NOT use:

* smiling
* laughing
* crying
* angry expression
* surprised expression
* scared expression
* shouting
* waving
* pointing
* running
* walking
* sitting
* jumping
* leaning
* fighting
* dancing
* any active pose

## CHARACTER ORGANIZATION

Organize the characters into suitable groups based on age or role, such as:

Kelompok Anak
Kelompok Muda
Kelompok Ibu & Bapak
Kelompok Lansia

The groups must adapt naturally to the characters requested in the input.

Each character must have:

* a unique name appropriate to the input
* a suitable age
* a clearly different body type
* a different face shape
* a distinct hairstyle
* a simple basic everyday outfit
* different clothing colors
* a unique overall silhouette
* a calm neutral expression
* bare feet

Make the characters visually diverse through differences in age, gender, body shape, height, face shape, hairstyle, clothing colors, and silhouette.

However, keep the overall clothing category and neutral idle state consistent across all characters.

The input determines the characters' cultural, regional, social, or environmental context. Do not automatically assume or impose any specific country, nationality, ethnicity, culture, naming style, or regional appearance unless it is indicated by the input.

Keep all character designs simple, natural, believable, and suitable for consistent 2D cartoon character generation and modular animation.

Avoid anime characteristics, fantasy elements, exaggerated physiques, complex accessories, props, fashionable clothing, layered clothing, or unnecessary visual details.

## OUTPUT FORMAT

[GROUP NAME]

01 — [CHARACTER NAME]
[A single complete English character description.]

02 — [CHARACTER NAME]
[A single complete English character description.]

03 — [CHARACTER NAME]
[A single complete English character description.]

Continue until all suitable characters for the input are created.

Each character description MUST follow this structure:

A [age]-year-old [man/woman/boy/girl] with a [body type], [face shape], [hairstyle], and a calm neutral expression, wearing a simple basic [T-shirt/short-sleeve shirt] and [simple everyday pants/shorts/skirt], barefoot, standing in a relaxed idle posture.

Do not add explanations, tables, character analysis, pose v
