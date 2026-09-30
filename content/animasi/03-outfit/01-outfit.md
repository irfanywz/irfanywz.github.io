---
title: "Outfit"
slug: "karakter-outfit"
description: "Prompt builder untuk merancang, mengganti, dan mengekstrak variasi pakaian karakter kartun original secara presisi dan konsisten"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Casual denim jacket over a plain white t-shirt, dark cargo pants, and canvas sneakers"
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for the character's new outfit based on:

  [DESKRIPSIKAN]

  Each variant must describe a **clearly different outfit design**, with noticeable differences in clothing pieces, layers, footwear, accessories, materials, colors, and overall silhouette.

  Write each variant as **ONE concise sentence**, describing the clothing items, layers, materials, footwear, accessories, and colors clearly.

  Rules:

  * Focus **ONLY on clothing, footwear, and accessories**
  * Clearly describe the upper-body clothing
  * Clearly describe the lower-body clothing
  * Describe layers, footwear, and accessories when relevant
  * Describe materials and colors when visually important
  * Create natural, believable, and animation-friendly outfit combinations
  * Make each variant visually distinct
  * Do NOT make variants different only by changing clothing colors
  * Do NOT make variants different only by changing one small accessory
  * Avoid repeating the same clothing combination, silhouette, material combination, or accessory set
  * Keep outfits appropriate and visually coherent for the target character

  **CHARACTER LOCK:**

  * DO NOT modify or mention character identity
  * DO NOT modify or mention body shape or proportions
  * DO NOT modify or mention head shape
  * DO NOT modify or mention face or facial features
  * DO NOT modify or mention hairstyle or hair
  * DO NOT modify or mention skin tone
  * DO NOT modify or mention pose or expression
  * ONLY change the outfit

  **OUTFIT STYLE:**

  * Keep the outfit consistent with [DESKRIPSIKAN]
  * Use simple, clear, readable clothing shapes
  * Keep designs suitable for 2D cartoon animation
  * Avoid excessive clothing details unless specifically requested
  * Maintain believable proportions and natural clothing construction

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
  OUTFIT EXTRACTION ANALYSIS

  Use the attached reference outfit image to analyze and extract the precise clothing and footwear details.

  Create **ONE concise visual description sentence** of the outfit for character replacement.

  Rules:
  * Focus **ONLY on the clothing, upper garments, lower garments, accessories, and footwear**
  * Clearly specify colors, patterns, style, and fit
  * **DO NOT include character facial features, hair, or body shape**
  * **DO NOT include background, lighting, or environment**
  * Keep the text short, clean, and directly usable for the outfit replacement tool

  **Output ONE description sentence only.**

database:
  "Seragam":
    - title: "Tahanan"
      description: "A bright orange long-sleeve jumpsuit with a collared neck, a front zipper, black \"TAHANAN PULICI\" text printed on the left chest"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23CCE24B"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Tahanan</text></svg>'

    - title: "Polisi"
      description: "A short-sleeve grey tactical uniform button-down shirt with shoulder insignia and dual chest pockets, paired with a black belt, dark trousers, and polished black shoes. outfit polisi indonesia"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Polisi</text></svg>'

    - title: "Formal Suit"
      description: "Classic tailored business suit jacket over a crisp dress shirt with necktie, trousers, and dress shoes."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Suit</text></svg>'

    - title: "Jas Formal"
      description: "Elegant formal tuxedo suit jacket with vest, dress pants, and polished leather shoes."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23172554"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Formal</text></svg>'

    - title: "Baju Olahraga"
      description: "Athletic sporty zipped track jacket and matching track pants with running sneakers."
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikHB5Ue29FPvOSiH7F2gQ_uJ6mRCNMdSjZOXHS_GbQ1bNu1dOsSj2TEHDAFcp_0zoQnE4MjNC0AzxYuR5DAl76ocXKabZvc4yVmjupJ_sofr0KW19c4OV7svfB4Z98V_e72Ihowh3qUh1RSi6ZvyfBNA9KQ-e2_6MBBOEHJhQO7qd8o9gUv_LC4eYFMZE/s100/Gemini_Generated_Image_fzwyhwfzwyhwfzwy.jpg'
    - title: "Seragam Sekolah SMA"
      description: "Indonesian senior high school uniform consisting of white short-sleeve shirt, grey skirt/trousers, tie, and black shoes."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234f46e5"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">SMA</text></svg>'
    - title: "Seragam Pemadam Kebakaran"
      description: "Heavy-duty firefighter protective turnout gear jacket with high-visibility reflective stripes and safety boots."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23c2410c"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Damkar</text></svg>'
    - title: "Seragam Polisi"
      description: "Official law enforcement uniform tactical shirt with badge, matching trousers, duty belt, and boots."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e293b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Polisi</text></svg>'
    - title: "Jas Lab Dokter"
      description: "Clean white medical doctor laboratory coat over professional attire with stethoscope around the neck."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23475569"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Dokter</text></svg>'
    - title: "Pakaian Pilot"
      description: "Commercial airline captain pilot uniform with epaulets, white shirt, black necktie, suit jacket, and trousers."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230f172a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Pilot</text></svg>'
    - title: "Pakaian Chef / Koki"
      description: "Traditional double-breasted white chef jacket with black checkered trousers and kitchen safety shoes."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23334155"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Chef</text></svg>'
    - title: "Kostum Astronot"
      description: "Detailed space exploration astronaut flight suit with life support chest control panel and heavy boots."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2364748b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Astronot</text></svg>'
    - title: "Pakaian Militer / Tentara"
      description: "Camouflage military tactical combat uniform shirt and cargo trousers with combat boots."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23365314"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Militer</text></svg>'

  "#Pria":
    - title: "Bomber Jacket Style"
      description: "Classic ribbed collar bomber jacket worn over a basic t-shirt, slim-fit denim jeans, and sneakers."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%232563eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Bomber</text></svg>'      

  "#Wanita":
    - title: "Casual Pinafore"
      description: "Cute casual pinafore dress layered over a plain long-sleeve t-shirt with comfortable flats."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23db2777"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Pinafore</text></svg>'

    - title: "Summer Floral Dress"
      description: "Lightweight summer floral pattern midi dress with short sleeves and casual sandals."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23ec4899"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Floral</text></svg>'
    - title: "Knitted Cardigan Set"
      description: "Cozy pastel knitted cardigan buttoned up over a simple top, high-waisted skirt, and loafers."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23f43f5e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Cardigan</text></svg>'
    - title: "Chic Blazer & Skirt"
      description: "Professional chic tailored blazer jacket paired with a matching pleated skirt and formal shoes."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23be185d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="12" font-family="sans-serif">Chic</text></svg>'      

outputs:
  - JSON
---

**OUTFIT REPLACEMENT**

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** wearing the new outfit described below.

**NEW OUTFIT:**

<br>

[{humanInput}]

<br>

Replace the character's current clothing with the new outfit.

The new outfit must naturally fit the character's existing body shape, proportions, age, and anatomy.

**CHARACTER LOCK — DO NOT CHANGE:**

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

**OUTFIT RULES:**

* change ONLY the clothing and footwear
* follow the outfit description accurately
* adapt the clothing naturally to the character's body
* keep the outfit visually clear and easy to recognize
* maintain simple, believable clothing construction
* include all clothing pieces specified in [DESCRIPTION]
* preserve specified colors, patterns, and important clothing details
* do not add unnecessary clothing or accessories
* do not remove clothing pieces unless required by the new outfit description

Keep the same visual style:

* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* minimal details
* slightly handmade line quality
* animation-friendly design

Do not redesign the character.

Do not change the head or face.

Do not change the hairstyle.

Do not change the hair color.

Do not change the skin tone.

Do not change the body shape or proportions.

Do not change the pose or body position.

Do not change the camera angle or view.

Do not add props, extra characters, or text.

**The ONLY intended change is the character's clothing and footwear.**