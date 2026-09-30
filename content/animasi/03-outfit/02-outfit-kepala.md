---
title: "Outfit Kepala"
slug: "outfit-kepala"
description: "Prompt builder untuk merancang, menambahkan, dan mengekstrak aksesori kepala atau topi pada karakter kartun secara presisi dan konsisten"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Classic black baseball cap worn forward"
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for the character's new head accessory based on:

  [DESKRIPSIKAN]

  Each variant must describe a **clearly different head accessory design**, with noticeable differences in item type, shape, size, fit, material, structure, and colors.

  Write each variant as **ONE concise sentence**, describing the head accessory item, style, fit, material, shape, and colors clearly.

  Rules:

  * Focus **ONLY on the head accessory**
  * Clearly identify the accessory or hat type
  * Describe its shape, size, fit, structure, and material when relevant
  * Clearly describe its color and important visual details
  * Create natural, believable, and animation-friendly accessory designs
  * Make each variant visually distinct
  * Do NOT make variants different only by changing color
  * Do NOT make variants different only by changing a tiny decorative detail
  * Avoid repeating the same accessory type, shape, fit, material, or overall silhouette
  * The accessory must naturally fit on the character's head

  **CHARACTER LOCK:**

  * DO NOT modify or mention character identity
  * DO NOT modify or mention face shape
  * DO NOT modify or mention facial features
  * DO NOT modify or mention hairstyle or hair shape
  * DO NOT modify or mention hair color
  * DO NOT modify or mention skin tone
  * DO NOT modify or mention body shape or proportions
  * DO NOT modify or mention clothing
  * DO NOT modify or mention pose or expression
  * ONLY change the head accessory

  **ACCESSORY STYLE:**

  * Keep the accessory consistent with [DESKRIPSIKAN]
  * Keep the design simple, clean, readable, and suitable for 2D cartoon animation
  * Maintain natural scale and proportions relative to the character's head
  * Make the accessory clearly recognizable
  * Avoid excessive detail unless specifically requested

  **DO NOT mention:**

  * location
  * environment
  * background
  * setting
  * atmosphere
  * lighting
  * weather
  * time
  * actions
  * poses
  * personality
  * backstory
  * story

  Keep every description **short and directly usable for image generation**.

  **OUTPUT RULES:**

  * Output EXACTLY **[JUMLAH_VARIANT] variants**
  * Number each variant
  * One sentence per variant
  * Do not output fewer or more variants
  * Do not default to any specific number
  * Do not add explanations, headings, or commentary


image_prompt: |
  HEAD ACCESSORY EXTRACTION ANALYSIS

  Use the attached reference image to analyze and extract the precise head accessory, hat, or headwear details.

  Create **ONE concise visual description sentence** of the head accessory for character replacement.

  Rules:
  * Focus **ONLY on the head accessory, hat, ribbon, or headwear item**
  * Clearly specify colors, patterns, style, and fit
  * **DO NOT include character facial features or body shape**
  * **DO NOT include background, lighting, or environment**
  * Keep the text short, clean, and directly usable for the head accessory tool

  **Output ONE description sentence only.**

database:
  "Topi":
    - title: "Baseball Cap"
      description: "Classic fabric baseball cap worn forward with a curved brim."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230d9488"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Cap</text></svg>'
    - title: "Beanie (Kupluk)"
      description: "Cozy knitted winter beanie cap fitting snugly over the head."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230f766e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Beanie</text></svg>'
    - title: "Bucket Hat"
      description: "Casual fabric hat with a downward sloping, all-around brim."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2314b8a6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Bucket</text></svg>'
    - title: "Beret"
      description: "Soft, round, flat-crowned French-style wool cap worn slightly tilted."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23db2777"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Beret</text></svg>'

  "Topeng":
    - title: "Topeng Ski / Balaclava (Topeng Pencuri)"
      description: "Black fabric ski mask balaclava covering the entire head and face with cutouts for the eyes."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2318181b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">SkiMask</text></svg>'    
    - title: "Topeng Stylized (Gaya Sky / Fantasi)"
      description: "Mystical minimalist white artistic mask covering the upper face with glowing aesthetic markings."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c3aed"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Mask</text></svg>'
    - title: "Kitsune Mask (Topeng Rubah)"
      description: "Traditional Japanese stylized fox mask worn tilted on top of the head or over the face."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%239333ea"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Kitsune</text></svg>'
    - title: "Masker Medis / Kain"
      description: "Simple protective face mask worn covering the nose and mouth."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%236d28d9"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">FaceMask</text></svg>'

  "Kacamata":
    - title: "Kacamata Hitam (Sunglasses)"
      description: "Stylish dark-tinted sunglasses resting on the face."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e293b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Shades</text></svg>'
    - title: "Kacamata Bulat (Round Glasses)"
      description: "Classic vintage thin-rimmed round optical glasses."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23334155"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Glasses</text></svg>'

  "Hiasan Rambut":
    - title: "Pita Rambut (Hair Bow)"
      description: "Large cute fabric hair bow ribbon attached neatly to the hairstyle."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23ec4899"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Bow</text></svg>'
    - title: "Headband (Bando)"
      description: "Simple minimalist fabric headband resting across the top of the hair."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23f43f5e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Band</text></svg>'
    - title: "Peci Hitam Tradisional"
      description: "Traditional formal black velvet peci cap worn on the head."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e5e7eb" font-size="12" font-family="sans-serif">Peci</text></svg>'

outputs:
  - JSON
---

**HEAD ACCESSORY REPLACEMENT**

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with a new head accessory.

**NEW HEAD ACCESSORY:**

<br>

[{humanInput}]

<br>

**CHARACTER LOCK — DO NOT CHANGE:**

* exact same face
* exact same facial features
* exact same face shape
* exact same hairstyle
* exact same hair shape
* exact same hair color
* exact same skin tone
* exact same body shape
* exact same body proportions
* exact same age and identity
* exact same outfit
* exact same pose
* exact same camera angle
* exact same 3/4 front view facing slightly right
* exact same art style

**ONLY ADD THE HEAD ACCESSORY.**

The accessory must naturally fit the character's existing head shape and scale.

Preserve the character's original hairstyle and visible hair unless the accessory naturally covers part of it.

Keep the same visual style:

* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* animation-friendly design

Do not change the face.

Do not change the hairstyle.

Do not change the body.

Do not change the outfit.

Do not change the pose.

Do not change the camera angle.

Do not redesign the character.

Do not add extra accessories.

Do not add props.

Do not add text.

**The ONLY intended change is adding the head accessory.**