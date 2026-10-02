---
title: "Outfit"
slug: "karakter-outfit"
description: "Prompt builder untuk merancang, mengganti, dan mengekstrak variasi pakaian karakter kartun original secara presisi dan konsisten"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Casual denim jacket over a plain white t-shirt, dark cargo pants, and canvas sneakers"
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for new outfits based on:

  [DESKRIPSIKAN]

  Rules:

  * Each variant must represent a clearly different outfit design, not merely a color or small accessory change.
  * Focus ONLY on clothing, footwear, and accessories.
  * Describe the upper garment, lower garment, layers, footwear, accessories, materials, and colors when relevant.
  * Vary the clothing combination, silhouette, layers, materials, footwear, and accessory set meaningfully between variants.
  * Avoid repeating the same overall outfit combination or silhouette.
  * Keep each outfit natural, believable, coherent with [DESKRIPSIKAN], and suitable for modular 2D animation.
  * Keep clothing shapes simple, clear, and recognizable.
  * Do NOT mention or modify the character, face, facial features, hair, skin, body proportions, pose, expression, or movement.
  * Do NOT mention the environment, background, setting, lighting, weather, atmosphere, time, actions, personality, or story.
  * Avoid excessive details unless relevant to [DESKRIPSIKAN].

  Output exactly [JUMLAH_VARIANT] numbered variants, ONE sentence per variant, with no explanations or extra text.


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

outputs: ["JSON"]
---

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** wearing a completely new outfit based on:

[[{humanInput}]]

### ONLY CHANGE

Replace the character's existing clothing and footwear with the requested outfit.

Follow [[{humanInput}]] accurately, including:

* upper-body clothing
* lower-body clothing
* footwear
* clothing layers
* accessories when specified
* colors, patterns, materials, and distinctive details

Include **EVERY specified clothing piece**. Do NOT omit the lower garment or footwear, and do NOT invent unnecessary outfit elements.

Adapt the new outfit naturally to the character's existing body shape, proportions, age, and anatomy.

### CHARACTER LOCK

Keep EVERYTHING ELSE EXACTLY UNCHANGED:

* character identity and age
* head, face, and facial features
* hairstyle and hair color
* skin tone
* body shape, proportions, and silhouette
* pose and body position
* 3/4 front view facing slightly right
* camera angle and perspective
* art style and line quality

Do NOT redesign, resize, reposition, or modify any locked element.

### VISUAL STYLE

Match the original character:

* simple 2D cartoon
* thick natural black outlines
* flat solid colors
* clean simple shapes
* minimal detail
* slightly handmade line quality
* animation-friendly design

### FINAL LOCK

Do NOT add props, extra characters, text, or unrelated elements.

The result must look like the **same original character wearing ONLY the newly requested outfit**, with all other character features preserved.

**ONLY CHANGE THE CLOTHING AND FOOTWEAR.**