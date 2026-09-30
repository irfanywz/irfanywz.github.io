---
title: "Karakter Rambut"
slug: "karakter-rambut"
description: "Prompt builder untuk merancang variasi gaya rambut animasi karakter kartun original (pria dan wanita)"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "short messy black hair"
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for hairstyles based on:

  [DESKRIPSIKAN]

  Each description must represent a **UNIQUE hairstyle variant**.

  Write each variant as **ONE concise sentence**, clearly describing the hair length, haircut, texture, bangs, volume, and overall silhouette.

  ### VARIATION REQUIREMENTS

  Each hairstyle must be clearly different through a natural combination of:

  * hair length
  * haircut style
  * hair texture
  * hair volume
  * bangs style
  * hair shape
  * side shape
  * top shape
  * back shape
  * overall silhouette

  Do NOT simply change the hair color.

  Each variant must have a noticeably different overall hairstyle.

  Avoid repeating the same:

  * haircut
  * hair length
  * bangs
  * texture
  * volume
  * overall silhouette

  ### RULES

  * Focus ONLY on hairstyle and hair volume
  * Clearly describe the haircut and overall hair shape
  * Describe bangs when relevant
  * Describe hair texture such as straight, wavy, curly, messy, thick, fine, or fluffy when relevant
  * Keep the hairstyle visually coherent and believable
  * Make every hairstyle distinctive and memorable
  * Keep descriptions short and directly usable for image generation

  ### CHARACTER LOCK

  Do NOT modify or mention:

  * face shape
  * eyes
  * eyebrows
  * nose
  * mouth
  * facial features
  * skin tone
  * body
  * clothing
  * accessories
  * pose
  * expression

  ONLY describe the hairstyle.

  ### DO NOT MENTION

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
  * lore
  * story

  ### OUTPUT REQUIREMENTS

  Generate **EXACTLY [JUMLAH_VARIANT] variants**.

  The number of descriptions MUST match **[JUMLAH_VARIANT] EXACTLY**.

  For example:

  * `[JUMLAH_VARIANT] = 5` → output exactly 5 hairstyles
  * `[JUMLAH_VARIANT] = 8` → output exactly 8 hairstyles
  * `[JUMLAH_VARIANT] = 10` → output exactly 10 hairstyles
  * `[JUMLAH_VARIANT] = 15` → output exactly 15 hairstyles

  Do NOT default to 10.
  Do NOT generate fewer variants.
  Do NOT generate more variants.

  ### OUTPUT FORMAT

  1. [One concise hairstyle description]
  2. [One concise hairstyle description]
  3. [One concise hairstyle description]
     ...
     Continue numbering until exactly **[JUMLAH_VARIANT]** descriptions are completed.

  Each variant must be **ONE concise sentence only**.

  Do not add explanations.
  Do not add headings.
  Do not repeat hairstyles.
  Do not combine multiple hairstyles into one sentence.
  ::


image_prompt: |
  Create ONE short visual description of the character's hairstyle using image reference

  If a reference image is provided, use it as the PRIMARY HAIRSTYLE REFERENCE. Carefully observe the character's visible hairstyle and translate only the important hair traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “Short messy black hair with textured bangs and natural volume.”
  RULES:
  - Preserve the character's clearly visible hair length, cut style, texture, and color from the reference.
  - Prioritize distinctive visible hair traits: hair cut style, bangs, hair texture, and volume.
  - Do not invent hair features or styles that are not visible or reasonably supported.
  - Do not describe the character's identity, face, skin tone, clothing, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference character's identity if the task is to create a new hairstyle; use the reference only for hair visual guidance.
  - Keep the appearance believable and suitable for a stylized cartoon world.
  - Avoid generic descriptions.
  - Avoid exaggerated or unusual hair features unless clearly present in the reference.
  - Avoid backstory, biography, personality explanation, or unnecessary details.
  - Keep the sentence short and directly usable as an image-generation prompt.
  - Use simple, natural English.
  - Do not use bullet points or multiple sentences.
  - OUTPUT EXACTLY ONE SENTENCE.
  
  [note]

database:
  "Pria (Male)":
    - title: "Short Messy Black"
      description: "short messy black hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Curly Afro Black"
      description: "curly afro black hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Bald Clean Shaved"
      description: "bald clean shaved head"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Neat Side-Parted"
      description: "neat side-parted brown hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Spiky Anime Style"
      description: "spiky anime style dark hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Burst Fade Mohawk"
      description: "burst fade modern mohawk hairstyle"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Edgar Cut Fringe"
      description: "edgar cut textured fringe hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Low Fade Slicked"
      description: "low fade slicked back hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "French Crop"
      description: "french crop textured fringe hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
    - title: "Undercut Pompadour"
      description: "undercut pompadour hairstyle"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Male</text></svg>'
  "Wanita (Female)":
    - title: "Long Straight Bangs"
      description: "long straight black hair with bangs"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "High Ponytail Blonde"
      description: "high ponytail blonde hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Short Bob Brown"
      description: "short bob brown haircut"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Wavy Shoulder-Length"
      description: "wavy shoulder-length dark hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Twin Tails Cute"
      description: "twin tails cute style hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Butterfly Layers"
      description: "butterfly layers haircut with face-framing"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Hush Cut Medium"
      description: "hush cut textured medium layered hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Curtain Bangs Layered"
      description: "curtain bangs layered long hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Pixie Cut Textured"
      description: "pixie cut short textured hair"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Korean Choppy Bob"
      description: "korean choppy bob hairstyle"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'
    - title: "Medium to Long Wolf Cut"
      description: "medium to long wolf cut hairstyle"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23311042"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde047" font-size="12" font-family="sans-serif">Female</text></svg>'

outputs:
  - JSON
---

HAIR REPLACEMENT

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with a new hairstyle.

**NEW HAIRSTYLE:**

<br>

[{humanInput}]

<br>

**CHARACTER LOCK — DO NOT CHANGE:**

* exact same face
* exact same facial features
* exact same face shape
* exact same eyes
* exact same eyebrows
* exact same mouth
* exact same skin tone
* exact same body shape
* exact same body proportions
* exact same age and identity
* exact same pose
* exact same camera angle
* exact same 3/4 front view facing slightly right
* exact same art style

**ONLY CHANGE THE HAIRSTYLE.**

The new hair must naturally fit the character's existing head shape and preserve the original hairline and overall character identity.

Keep the same visual style:

* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* animation-friendly design

Do not change the face.
Do not change the head shape.
Do not change the skin tone.
Do not change the body.
Do not change the pose.
Do not change the camera angle.
Do not add accessories unless specified.

**The ONLY intended change is the hairstyle.**