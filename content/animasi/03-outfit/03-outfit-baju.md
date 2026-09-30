---
title: "Outfit Baju"
slug: "outfit-baju"
description: "Prompt builder untuk merancang, mengganti, dan mengekstrak variasi pakaian atasan, kemeja, jaket, dan kaos karakter kartun secara presisi"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Casual denim jacket over a plain white t-shirt"
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for the character's new upper-body clothing based on:

  [DESKRIPSIKAN]

  Each variant must describe a **clearly different upper-body outfit design**, with noticeable differences in garment type, cut, fit, sleeves, collar, material, details, and colors.

  Write each variant as **ONE concise sentence**, describing the upper garment, sleeves, collar or neckline, fit, material, and colors clearly.

  Rules:

  * Focus **ONLY on upper-body clothing**
  * Clearly identify the main upper garment
  * Describe sleeve length and style
  * Describe collar or neckline when relevant
  * Describe fit such as fitted, regular, loose, oversized, or cropped when relevant
  * Describe fabric or material when visually important
  * Describe colors and simple clothing details when relevant
  * Create natural, believable, and animation-friendly clothing designs
  * Make each variant visually distinct
  * Do NOT make variants different only by changing color
  * Do NOT make variants different only by changing sleeve length
  * Avoid repeating the same garment type, construction, silhouette, material, or overall design
  * Keep the clothing visually coherent with [DESKRIPSIKAN]

  **CHARACTER LOCK:**

  * DO NOT modify or mention character identity
  * DO NOT modify or mention head shape
  * DO NOT modify or mention face or facial features
  * DO NOT modify or mention eyes, eyebrows, nose, or mouth
  * DO NOT modify or mention hairstyle or hair
  * DO NOT modify or mention hair color
  * DO NOT modify or mention skin tone
  * DO NOT modify or mention body shape or proportions
  * DO NOT modify or mention lower-body clothing
  * DO NOT modify or mention footwear
  * DO NOT modify or mention pose or expression
  * ONLY change the upper-body clothing

  **UPPER-BODY CLOTHING STYLE:**

  * Keep the clothing consistent with [DESKRIPSIKAN]
  * Keep the design simple, clean, readable, and suitable for 2D cartoon animation
  * Maintain natural clothing proportions
  * Avoid excessive folds, patterns, textures, or tiny details unless specifically requested
  * Prioritize a clear and recognizable clothing silhouette

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
  TOP / SHIRT EXTRACTION ANALYSIS

  Use the attached reference image to analyze and extract the precise upper-body clothing and shirt details.

  Create **ONE concise visual description sentence** of the upper-body clothing for character replacement.

  Rules:
  * Focus **ONLY on the upper garments, shirts, jackets, sweaters, or top pieces**
  * Clearly specify colors, patterns, style, sleeves, collar, and fit
  * **DO NOT include character facial features, hair, or body shape**
  * **DO NOT include background, lighting, or environment**
  * Keep the text short, clean, and directly usable for the top replacement tool

  **Output ONE description sentence only.**

database:
  "T-Shirt":
    - title: "Graphic Print T-Shirt"
      description: "Faded black graphic t-shirt with a large vintage motorcycle illustration."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Graphic</text></svg>'
    - title: "Typography Text Print Tee"
      description: "Vintage thrifted graphic t-shirt with bold “Cosmic Journey 1973” typography."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234b5563"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Typo</text></svg>'
    - title: "Logo Design Shirt"
      description: "Dark green polo shirt with a small embroidered company logo on the chest."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Logo</text></svg>'
    - title: "Illustration Art Tee"
      description: "Black graphic t-shirt with a bold eagle and flame illustration."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23991b1b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Illust</text></svg>'
    - title: "Vintage / Retro Design Tee"
      description: "Thrifted black t-shirt with a distressed 1980s-style racing graphic."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c2d12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Vintage</text></svg>'
    - title: "Band / Music Design Tee"
      description: "Faded black band t-shirt with a distressed heavy-metal graphic."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2318181b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Band</text></svg>'
    - title: "Motorcycle / Automotive Tee"
      description: "Faded gray biker t-shirt with a motorcycle club emblem and distressed lettering."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Motor</text></svg>'
    - title: "Skull / Dark Design Tee"
      description: "Worn black biker t-shirt with a bold skull-and-flame graphic and distressed lettering."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Skull</text></svg>'
    - title: "Pattern / Pola Berulang Shirt"
      description: "Loose-fitting red-and-black plaid button-up shirt with a classic checked pattern."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%239f1239"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Pattern</text></svg>'
    - title: "Distressed / Worn Design Tee"
      description: "Worn gray t-shirt with a cracked retro graphic."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23475569"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Worn</text></svg>'

outputs:
  - JSON
---

**TOP / SHIRT REPLACEMENT**

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with new upper-body clothing.

**NEW TOP:**

<br>

[{humanInput}]

<br>

Replace **ONLY** the character's upper-body clothing with the new clothing described above.

**CHARACTER AND LOWER CLOTHING LOCK — DO NOT CHANGE:**

* exact same character identity
* exact same head and face
* exact same facial features
* exact same face shape
* exact same hairstyle and hair shape
* exact same hair color
* exact same skin tone
* exact same body shape
* exact same body proportions
* exact same age
* exact same pose
* exact same body position
* exact same camera angle
* exact same 3/4 front view facing slightly right
* exact same art style

**KEEP EXACTLY THE SAME:**

* original pants, skirt, shorts, or other lower-body clothing
* original footwear
* original accessories unless they are part of the upper-body clothing

**ONLY CHANGE:**

* shirt
* t-shirt
* blouse
* polo shirt
* jacket
* sweater
* hoodie
* cardigan
* dress top or other upper-body clothing specified in [NEW TOP]

The new upper-body clothing must naturally fit the character's existing body shape and proportions.

Follow the new clothing description accurately, including important colors, patterns, sleeves, collar, and visible details.

Keep the same visual style:

* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* animation-friendly design

Do not change the pants, skirt, shorts, or other lower-body clothing.

Do not change the footwear.

Do not redesign the character.

Do not change the face.

Do not change the hairstyle.

Do not change the body.

Do not change the pose.

Do not change the camera angle.

Do not add props, extra characters, or text.

**The ONLY intended change is the upper-body clothing.**