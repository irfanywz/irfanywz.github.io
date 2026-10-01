---
title: "Karakter Transform"
slug: "karakter-transform"
description: "Prompt builder untuk mengubah kondisi fisik karakter animasi 2D (seperti basah, kotor, terbakar, shock, berkeringat) dengan memanfaatkan database kondisi berdasarkan gambar referensi asli"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Soaked in heavy rain, clothes dripping wet, hair sticking to the face, and shivering slightly."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for transforming a character's physical condition or state based on:

  [DESKRIPSIKAN]

  Each variant must represent a **clearly different physical condition**, not merely a stronger or weaker version of the same condition.

  Focus ONLY on visible physical changes such as:

  * dirt or mud
  * wetness or rain-soaked appearance
  * dust
  * sweat
  * stains
  * scratches
  * bruises
  * minor damage
  * messy or disheveled appearance
  * tired or exhausted physical state
  * other visible condition changes relevant to [DESKRIPSIKAN]

  Keep the character's **identity, body, pose, clothing structure, hairstyle, and proportions unchanged**.

  Do NOT change the outfit design, add/remove clothing, change the pose, or introduce unrelated objects or environments.

  Each description must be **short, visual, specific, believable, and directly usable for a character transformation pipeline**.

  Avoid repeating the same condition or changing only a minor detail.

  **Output exactly [JUMLAH_VARIANT] numbered variants, ONE concise sentence per variant, with no headings or explanations.**

image_prompt: |
  CHARACTER IDENTITY & STYLE EXTRACTION

  Use the attached reference image to analyze and extract the precise character identity, face, hairstyle, body proportions, outfit design, pose, and 2D cartoon art style.

  Create **ONE concise character analysis sentence** ensuring that the transformed character retains its exact identity and art style.

  Rules:
  * Focus **ONLY on preserving character identity, pose, and art style**
  * **DO NOT describe the new physical condition here**

  **Output ONE character style instruction sentence only.**

database:
  "Kondisi Lingkungan & Cuaca":
    - title: "Basah Kehujanan"
      description: "Soaked in heavy rain, clothes dripping wet, hair sticking to the face, and glistening wet highlights."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230284c7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Wet</text></svg>'
    - title: "Kepanasan & Berkeringat"
      description: "Exhausted from summer heat, heavy sweat drops on the forehead, flushed cheeks, and slightly panting expression."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23d97706"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Sweaty</text></svg>'

  "Kondisi Fisik & Insiden":
    - title: "Kotor / Lumpur"
      description: "Covered in splashes of mud and dirt smudges across the face and clothes, messy look."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2378350f"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Muddy</text></svg>'
    - title: "Terbakar / Gosong"
      description: "Slightly singed and covered in black soot marks on the face and clothes, messy spiked hair from an explosion."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23b91c1c"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Burned</text></svg>'

  "Kondisi Mental & Ekspresi Shock":
    - title: "Terkejut / Shock"
      description: "Shocked expression, wide eyes, pale face, with comic-style sweat drop or nervous lines nearby."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c3aed"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Shocked</text></svg>'
    - title: "Kedinginan / Menggigil"
      description: "Shivering from extreme cold, blueish tint on lips, wrapped tight or arms crossed, small visible frost details."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230f766e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Frozen</text></svg>'

outputs:
  - JSON
---

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** in the same pose, but change the character's physical condition based on:

[{humanInput}]

Show clear visible effects of the event on the character, such as damaged, burned, dirty, wet, sweaty, shocked, frozen, etc., depending on the description.

Keep exactly the same:
* character identity
* face and hairstyle
* body proportions
* outfit design
* pose
* camera angle
* composition
* art style

Only change the character's **physical condition and appearance caused by [{humanInput}]**.

Keep the effects natural, visually clear, and consistent with the original 2D cartoon style.

Do not redesign the character.
Do not change the pose.
Do not change the outfit design.
Do not add unrelated effects, characters, props, or text.