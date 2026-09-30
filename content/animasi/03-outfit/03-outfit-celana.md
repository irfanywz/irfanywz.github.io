---
title: "Outfit Celana"
slug: "outfit-celana"
description: "Prompt builder untuk merancang, mengganti, dan mengekstrak variasi pakaian bawahan, celana, rok, dan sarong karakter kartun secara presisi"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Dark distressed slim-fit jeans"
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for the character's new lower-body clothing based on:

  [DESKRIPSIKAN]

  Each variant must describe a **clearly different lower-body clothing design**, not just a different color or minor decorative change.

  Write each variant as **one concise sentence**, describing the lower garment, fit, length, material or fabric style, and colors clearly.

  Rules:

  * Focus **ONLY on the lower-body clothing pieces**
  * Clearly describe the main garment type, such as pants, trousers, jeans, shorts, skirt, sarong, or other lower-body clothing
  * Describe the garment's **fit, length, shape, material/fabric style, and colors** when visually relevant
  * Make each variant meaningfully different in **garment type, cut, silhouette, fit, length, construction, material, or overall design**
  * Do NOT create variants that differ only by color, tiny patterns, or minor decorative details
  * Avoid repeating the same garment type, silhouette, fit, length, or overall construction across variants
  * Keep all designs natural, believable, simple, and animation-friendly
  * Prioritize a clear and readable lower-body silhouette

  **CHARACTER LOCK:**

  * Do NOT modify or mention character identity
  * Do NOT modify or mention head shape or facial features
  * Do NOT modify or mention hairstyle or hair color
  * Do NOT modify or mention skin tone
  * Do NOT modify or mention body shape or body proportions
  * Do NOT modify or mention upper-body clothing
  * Do NOT modify or mention footwear
  * Do NOT modify or mention accessories
  * Do NOT modify or mention pose, expression, or body position
  * ONLY describe the lower-body clothing

  **STYLE:**

  * Simple clean 2D animation design
  * Natural cartoon proportions
  * Clear readable shapes
  * Avoid excessive folds, patterns, textures, or tiny details unless specifically requested
  * Keep the clothing visually practical for modular character animation

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
  * movements
  * personality
  * backstory
  * story

  **OUTPUT RULES:**

  * Output exactly **[JUMLAH_VARIANT]** variants
  * Number them sequentially
  * One sentence per variant
  * No explanations
  * No headings
  * No additional commentary
  * Do not output fewer or more variants than requested


image_prompt: |
  BOTTOM / PANTS EXTRACTION ANALYSIS

  Use the attached reference image to analyze and extract the precise lower-body clothing and pants details.

  Create **ONE concise visual description sentence** of the lower-body clothing for character replacement.

  Rules:
  * Focus **ONLY on the pants, trousers, jeans, shorts, skirt, or bottom pieces**
  * Clearly specify colors, patterns, style, length, shape, and fit
  * **DO NOT include character facial features, hair, or upper body shape**
  * **DO NOT include background, lighting, or environment**
  * Keep the text short, clean, and directly usable for the bottom replacement tool

  **Output ONE description sentence only.**

database:
  "Example":
    - title: "Casual Shorts"
      description: "Simple knee-length casual cotton shorts."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2314b8a6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Shorts</text></svg>'

outputs:
  - JSON
---

**BOTTOM / PANTS REPLACEMENT**

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with new lower-body clothing.

**NEW BOTTOM:**

<br>

[{humanInput}]

<br>

Replace **ONLY** the character's lower-body clothing with the new clothing described above.

**CHARACTER AND UPPER CLOTHING LOCK — DO NOT CHANGE:**

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

* original shirt, t-shirt, blouse, jacket, sweater, hoodie, or other upper-body clothing
* original footwear
* original accessories unless they are part of the lower-body clothing

**ONLY CHANGE:**

* pants
* trousers
* jeans
* shorts
* skirt
* sarong
* or other lower-body clothing specified in [NEW BOTTOM]

The new lower-body clothing must naturally fit the character's existing body shape, proportions, and leg position.

Follow the new clothing description accurately, including important colors, length, shape, patterns, and visible details.

Keep the same visual style:

* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* animation-friendly design

Do not change the upper-body clothing.

Do not change the footwear.

Do not redesign the character.

Do not change the face.

Do not change the hairstyle.

Do not change the body.

Do not change the pose.

Do not change the camera angle.

Do not add props, extra characters, or text.

**The ONLY intended change is the lower-body clothing.**