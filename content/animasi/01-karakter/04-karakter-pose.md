---
title: "Karakter Pose"
slug: "karakter-pose"
description: "Prompt builder untuk merancang variasi pose karakter kartun original baru"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "A natural standing pose."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for character poses based on:

  [NAMA_POSE]

  Each variant must be a **clearly different overall pose** that naturally fits [NAMA_POSE], with meaningful changes in body position, silhouette, gesture, and weight distribution.

  ### RULES

  * Focus ONLY on pose, body position, gesture, and physical movement.
  * Vary the combination of arms, hands, legs, feet, torso, body direction, head direction, leaning, and weight distribution.
  * Each variant must have a noticeably different silhouette and posture, not just one changed body part.
  * Avoid repeating the same arm position, hand gesture, leg position, foot placement, leaning direction, or overall silhouette.
  * Keep poses simple, natural, physically believable, readable, and suitable for 2D animation.
  * Keep every pose appropriate to [NAMA_POSE].
  * Do NOT create random, exaggerated, or physically unnatural movements.

  ### CHARACTER LOCK

  Do NOT modify the character's identity, face, facial features, hairstyle, hair color, body design, proportions, skin tone, clothing, or accessories.

  ONLY the pose, gesture, and body position may change.

  ### EXCLUSIONS

  Do NOT mention the location, environment, background, setting, atmosphere, lighting, weather, time, character appearance, clothing, props, backstory, lore, or story.

  ### OUTPUT

  Output exactly **[JUMLAH_VARIANT] numbered variants**, matching the requested number exactly.

  Each variant must be **ONE concise sentence only**.

  Do NOT add headings, explanations, extra text, duplicate poses, or combined poses.



image_prompt: |
  Create ONE short visual description of the character pose using image reference

  If a reference image is provided, use it as the PRIMARY POSE REFERENCE. Carefully observe the character's visible body position and translate only the important pose traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “Running energetically forward with arms swinging and a dynamic leaning posture.”
  RULES:
  - Preserve the character's clearly visible action and posture from the reference.
  - Prioritize distinctive visible pose traits: action, body position, limb angles, leaning posture, and gesture.
  - Mention body build only when visually relevant to the pose.
  - Do not invent physical traits or poses that are not visible or reasonably supported.
  - Do not describe the character's identity, face, hair, clothing, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference character's identity if the task is to create a new pose; use the reference only for pose visual guidance.
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
  "#Favorite":
    - title: "Berdiri Natural"
      description: "Standing upright in a relaxed natural pose with arms hanging loosely at the sides and feet slightly apart."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Stand</text></svg>'
      
    - title: "Diikat ke Bangku"
      description: "Sitting upright on a chair with hands bound together and torso tied tightly with rope."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23450a0a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fca5a5" font-size="12" font-family="sans-serif">Bound</text></svg>'

    - title: "Megang Roko Sambil Rogoh Kantong"
      description: "Standing casually with one hand in his pocket and a cigarette held in the OTHER hand."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e5e7eb" font-size="12" font-family="sans-serif">Smoke</text></svg>'

    - title: "Nunjuk ke Kiri"
      description: "Standing upright with one arm extended sideways and index finger pointing forward."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bfdbfe" font-size="12" font-family="sans-serif">Point</text></svg>'

    - title: "Tangan Berbicara"
      description: "The character stands upright with a slight forward lean, gesturing mid-air with one open hand while the other rests loosely at their side."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23d1fae5" font-size="12" font-family="sans-serif">Talk</text></svg>'

    - title: "Tangan Melambai"
      description: "One hand waves near the shoulder with fingers slightly spread while the other arm hangs loosely, standing with a relaxed open stance and a slight tilt of the upper body to one side."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230e7490"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23cffafe" font-size="12" font-family="sans-serif">Wave</text></svg>'

    - title: "Tangan Garuk Kepala"
      description: "Standing upright with one arm bent and hand placed on the back of the head."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23b45309"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde68a" font-size="12" font-family="sans-serif">Scratch</text></svg>'

    - title: "Megang HP Dua Tangan"
      description: "Holding a smartphone in both hands with arms bent and looking down at the screen."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234c1d95"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ddd6fe" font-size="12" font-family="sans-serif">Phone</text></svg>'

    - title: "Megang HP Garuk Kepala"
      description: "Holding a smartphone in one hand and placing the other hand on the head."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c2d12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fed7aa" font-size="12" font-family="sans-serif">Phone+</text></svg>'

    - title: "Lagi Calling"
      description: "Holding a smartphone up to the ear with a bent arm."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2314532d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bbf7d0" font-size="12" font-family="sans-serif">Call</text></svg>'

    - title: "Calling Pegang Kepala"
      description: "Holding a smartphone up to the ear with a bent arm and other hand placed on the back of the head."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23a21caf"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fae8ff" font-size="12" font-family="sans-serif">Call+</text></svg>'


  "Pose Dasar":
    - title: "Berdiri Natural"
      description: "Standing upright in a relaxed natural pose with arms hanging loosely at the sides and feet slightly apart."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Stand</text></svg>'
    - title: "Berjalan Santai"
      description: "Walking forward casually with one leg stepping ahead, arms swinging gently, and a relaxed upright posture."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bfdbfe" font-size="12" font-family="sans-serif">Walk</text></svg>'
    - title: "Berlari Cepat"
      description: "Running energetically forward with arms swinging and a dynamic leaning posture."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2393c5fd" font-size="12" font-family="sans-serif">Run</text></svg>'
    - title: "Duduk di Kursi"
      description: "Sitting upright on a chair with both feet flat on the floor, hands resting on the lap, and a relaxed posture."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23374151"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e5e7eb" font-size="12" font-family="sans-serif">Sit</text></svg>'
    - title: "Duduk Bersila"
      description: "Sitting cross-legged on the floor with hands resting on the knees and a straight relaxed back."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23d1fae5" font-size="12" font-family="sans-serif">Sit</text></svg>'
    - title: "Jongkok Santai"
      description: "Crouching down with knees bent deeply, both feet flat on the ground, and arms resting loosely on the thighs."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23b45309"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fde68a" font-size="12" font-family="sans-serif">Crouch</text></svg>'
    - title: "Berbaring Telentang"
      description: "Lying flat on the back with arms resting at the sides and legs extended straight out."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234c1d95"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ddd6fe" font-size="12" font-family="sans-serif">Lie</text></svg>'
    - title: "Tidur Miring"
      description: "Lying on one side with knees slightly bent, one arm tucked under the head, and the other resting along the body."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230e7490"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23cffafe" font-size="12" font-family="sans-serif">Sleep</text></svg>'
    - title: "Melompat"
      description: "Jumping upward with both legs bent mid-air, arms raised slightly, and an energetic upward posture."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23991b1b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fecaca" font-size="12" font-family="sans-serif">Jump</text></svg>'
    - title: "Membungkuk"
      description: "Bending forward at the waist with arms hanging down and head lowered in a submissive or tired posture."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c2d12"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fed7aa" font-size="12" font-family="sans-serif">Bend</text></svg>'
    - title: "Berlutut"
      description: "Kneeling on the ground with both knees down, sitting back on the heels, and hands resting on the thighs."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23a21caf"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fae8ff" font-size="12" font-family="sans-serif">Kneel</text></svg>'
    - title: "Berdiri Menyandar"
      description: "Standing with the back leaning against a surface, one leg crossed over the other, and arms folded or relaxed."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2314532d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bbf7d0" font-size="12" font-family="sans-serif">Lean</text></svg>'


outputs: ["JSON"]
---
Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create the **SAME CHARACTER** from the reference image in a new pose.

**POSE:**

[{humanInput}]

**CHARACTER LOCK:**

* Keep the exact same face and facial features
* Keep the exact same hairstyle and hair shape
* Keep the exact same hair color
* Keep the exact same skin tone
* Keep the exact same body proportions and body shape
* Keep the exact same outfit, clothing design, colors, and details
* Keep the exact same character identity and visual style
* Do not redesign, replace, simplify, or modify the character

The new image must show the character performing the requested pose naturally and clearly.

Maintain correct anatomy, consistent proportions, and recognizable character construction. The character's face, hairstyle, outfit, and overall silhouette must remain consistent with the reference.

Show the full body unless the requested pose requires otherwise.

Keep the composition clean and animation-friendly:

* simple 2D cartoon
* thick black outlines
* flat solid colors
* clean simple shapes
* slightly handmade line quality
* minimal details

Do not add props, extra characters, text, new clothing, background elements, or unnecessary visual effects.

**IMPORTANT:**
Only change the **POSE**. Everything else must remain consistent with the reference character.