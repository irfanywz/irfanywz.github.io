---
title: "Karakter Badan"
slug: "karakter-badan"
description: "Prompt builder untuk merancang variasi bentuk tubuh, proporsi, dan postur fisik karakter kartun original"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Badan Berotot Petarung MMA"
desc_prompt: |
  Create **ONE short visual description** for the character's body shape based on:

  [DESKRIPSIKAN]

  Write it as **one concise sentence**, describing torso proportions, hip width, bust/chest volume, limb thickness, and overall physical silhouette clearly.

  Rules:
  * Focus **ONLY on the body silhouette, proportions, and physical build**
  * Clearly describe shoulders, waist, hips, chest/bust volume, and limb structure
  * **DO NOT modify the head or facial features (face, eyes, eyebrows, nose, mouth, hair)**
  * **DO NOT mention location, environment, background, setting, or lighting**
  * Keep it **short and directly usable for image generation**

  **Output ONE sentence only.**

image_prompt: |
  Create ONE short visual description of the character's body shape using image reference

  If a reference image is provided, use it as the PRIMARY BODY SHAPE REFERENCE. Carefully observe the character's visible physical build, torso proportions, shoulder breadth, hip width, and limb thickness to translate only the important anatomical proportion traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “Voluptuous curvy figure with exceptionally large bust, wide prominent hips, thick thighs, and a soft rounded belly.”
  RULES:
  - Preserve the character's clearly visible body silhouette, torso shape, muscle definition or soft curves, and proportion traits from the reference.
  - Prioritize distinctive visible body shape traits: shoulder width, waist definition, hip shape, and limb volume.
  - Do not invent physical features or proportions that are not visible or reasonably supported.
  - Do not describe the character's identity, head, facial features, skin tone, clothing design details, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference character's exact identity if the task is to create a new body shape; use the reference only for body shape visual guidance.
  - Keep the appearance believable and suitable for a stylized cartoon world.
  - Avoid generic descriptions.
  - Avoid exaggerated or unusual physical features unless clearly present in the reference.
  - Avoid backstory, biography, personality explanation, or unnecessary details.
  - Keep the sentence short and directly usable as an image-generation prompt.
  - Use simple, natural English.
  - Do not use bullet points or multiple sentences.
  - OUTPUT EXACTLY ONE SENTENCE.
  
  [note]

database:
  "Wanita":
    - title: "Hourglass Curvy"
      description: "Curvy hourglass figure with wide hips, pronounced curves, balanced bust, narrow waist, and soft limbs."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23831843"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fbcfe8" font-size="12" font-family="sans-serif">Hourglass</text></svg>'
    - title: "Voluptuous Full"
      description: "Voluptuous figure with exceptionally large bust, wide prominent hips, thick thighs, and a soft rounded belly."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%239d174d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fce7f3" font-size="12" font-family="sans-serif">Full</text></svg>'
    - title: "Slim Petite"
      description: "Slim, delicate frame with narrow shoulders, small bust, defined waist, slender hips, and thin limbs."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23be185d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fbcfe8" font-size="12" font-family="sans-serif">Slim</text></svg>'
    - title: "Athletic Toned"
      description: "Toned, athletic build with moderately broad shoulders, firm bust, narrow waist, slim hips, and muscular limbs."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23db2777"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fce7f3" font-size="12" font-family="sans-serif">Athletic</text></svg>'
    - title: "Muscular Fit"
      description: "Muscular, defined female build with broad shoulders, firm chest, narrow waist, and thick, powerful limbs."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23a21caf"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fae8ff" font-size="12" font-family="sans-serif">Muscular</text></svg>'

  "Pria":
    - title: "Lean Fighter"
      description: "Lean, densely muscled torso with broad shoulders, narrow waist, thick arms and legs, and an athletic, powerful silhouette built for combat."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23991b1b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fecaca" font-size="12" font-family="sans-serif">MMA</text></svg>'
    - title: "Bodybuilder Massive"
      description: "Massive, chiseled torso with exaggerated chest volume, wide shoulders, narrow waist, and thick, defined limbs."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c2d12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fed7aa" font-size="12" font-family="sans-serif">Muscle</text></svg>'
    - title: "Slender Tall"
      description: "Slender, elongated frame with narrow shoulders, flat chest, thin limbs, and a tall, willowy silhouette."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bfdbfe" font-size="12" font-family="sans-serif">Slender</text></svg>'
    - title: "Chubby Relaxed"
      description: "Round, soft torso with wide hips, protruding belly, thick limbs, and a bulky, comfortable silhouette."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23b45309"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde68a" font-size="12" font-family="sans-serif">Chubby</text></svg>'
    - title: "Swimmer Athletic"
      description: "V-shaped torso with broad shoulders, slim waist, toned arms, and a streamlined, hydrodynamic silhouette."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230e7490"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23cffafe" font-size="12" font-family="sans-serif">Swimmer</text></svg>'
    - title: "Sturdy Farmer"
      description: "Sturdy, broad torso with thick shoulders, strong arms, wide hips, and a grounded, robust silhouette."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23365a2a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bbf7d0" font-size="12" font-family="sans-serif">Farmer</text></svg>'
    - title: "Agile Ninja"
      description: "Lean, wiry frame with narrow shoulders, flat chest, thin but toned limbs, and an agile, stealthy silhouette."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23111827"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e5e7eb" font-size="12" font-family="sans-serif">Ninja</text></svg>'
    - title: "Giant Barbarian"
      description: "Hulking, oversized torso with massive shoulders, thick chest, wide hips, and enormous limbs, creating a dominant, brutal silhouette."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234c1d95"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ddd6fe" font-size="12" font-family="sans-serif">Giant</text></svg>'

  "Universal":
    - title: "Small Childlike"
      description: "Small, compact frame with a proportionally large head, narrow shoulders, short limbs, and a cute, stubby silhouette."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23be185d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fbcfe8" font-size="12" font-family="sans-serif">Small</text></svg>'
    - title: "Chibi Mungil"
      description: "Chibi-style small rounded body with a large head, stubby limbs, soft torso, and a compact, cute silhouette."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23f472b6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fdf2f8" font-size="12" font-family="sans-serif">Chibi</text></svg>'
    - title: "Mechanical Robot"
      description: "Blocky, mechanical frame with rigid segmented torso, squared shoulders, cylindrical limbs, and a sturdy, robotic silhouette."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e5e7eb" font-size="12" font-family="sans-serif">Robot</text></svg>'
    - title: "Monster Hulk"
      description: "Massive, monstrous frame with hunched broad shoulders, thick chest, wide hips, and oversized heavy limbs."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2314532d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bbf7d0" font-size="12" font-family="sans-serif">Monster</text></svg>'
    - title: "Elegant Elf"
      description: "Graceful, slender frame with narrow shoulders, slim waist, delicate limbs, and a tall, elegant silhouette."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23d1fae5" font-size="12" font-family="sans-serif">Elf</text></svg>'
    - title: "Dwarf Stocky"
      description: "Short, stocky frame with broad shoulders, thick torso, wide hips, and short, powerful limbs."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2392400e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fed7aa" font-size="12" font-family="sans-serif">Dwarf</text></svg>'  

outputs:
  - JSON
---
Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **EXACT SAME CHARACTER** with a new body shape and physical proportions based on:

[[{humanInput}]]

### BODY CHANGE

Change **ONLY the body shape, physical proportions, and overall body silhouette** according to [[{humanInput}]].

Adapt the existing clothing naturally to the new body contours while preserving its original design and colors.

### CHARACTER LOCK

Keep everything else **EXACTLY UNCHANGED**, including:

* face shape and facial features
* hairstyle, hair shape, and hair color
* skin tone
* clothing design, outfit style, and colors
* age and identity
* pose
* camera angle and perspective
* 3/4 front view facing slightly right
* art style and line quality

Do NOT redesign, replace, resize, or reposition any locked element.

Do NOT change the facial design, hairstyle, skin tone, clothing design, clothing colors, pose, camera angle, or character identity.

### FINAL LOCK

The result must look like the **same original character**, with the **ONLY visible change being the new body shape and proportions** described in [[{humanInput}]].

**ONLY CHANGE THE BODY SHAPE AND SILHOUETTE.**