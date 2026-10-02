---
title: "Karakter Sprite Sheet"
slug: "karakter-sprite-sheet"
description: "Prompt builder untuk merancang urutan animasi (sprite sheet) berbagai aksi dan gerakan karakter kartun secara konsisten dalam satu kanvas bersih"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Character swinging a wooden sword downward with full anticipation, impact, and follow-through"
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for animation action sequences based on:

  [DESKRIPSIKAN]

  Rules:

  * Each variant must represent a clearly different movement sequence, not merely a change in direction or speed.
  * Focus ONLY on movement, pose changes, physical dynamics, and action flow.
  * Describe the sequence chronologically as **beginning → movement → ending**.
  * Include the relevant preparation, main action, reaction/follow-through, and final pose when appropriate.
  * Vary the movement pattern, pose progression, and physical dynamics meaningfully between variants.
  * Keep movements natural, readable, simple, and suitable for 2D character animation.
  * Do NOT mention or modify the character, face, hair, body proportions, clothing, accessories, identity, or appearance.
  * Do NOT mention the location, environment, background, lighting, weather, atmosphere, personality, backstory, or story.
  * Mention objects or props only when directly required by [DESKRIPSIKAN].
  * Keep each sequence concise and directly usable for animation or image generation.

  Output exactly [JUMLAH_VARIANT] numbered variants, ONE sentence per variant, with no explanations or extra text.

image_prompt: |
  Create ONE short visual description of the character's action sequence using image reference

  If a reference image is provided, use it as the PRIMARY ACTION & STYLE REFERENCE. Carefully observe the character's visible movement stage, body mechanics, and prop interaction to translate only the important action traits into a concise description.
  Write exactly ONE natural sentence, similar to:
  “Character swinging a wooden sword downward with full anticipation, impact, and follow-through.”
  RULES:
  - Preserve the character's clearly visible movement mechanics, pose transition, and action traits from the reference.
  - Prioritize distinctive visible action traits: pose progression, balance, and limb dynamics.
  - Do not invent action features that are not visible or reasonably supported.
  - Do not describe the character's exact identity, specific facial features, background, camera angle, or art style unless specifically requested.
  - Do not copy the reference character's exact identity if the task is to create a new action; use the reference only for action visual guidance.
  - Keep the appearance believable and suitable for a stylized cartoon world.
  - Avoid generic descriptions.
  - Avoid exaggerated or unusual physical distortions unless clearly present in the reference.
  - Avoid backstory, biography, personality explanation, or unnecessary details.
  - Keep the sentence short and directly usable as an image-generation prompt.
  - Use simple, natural English.
  - Do not use bullet points or multiple sentences.
  - OUTPUT EXACTLY ONE SENTENCE.
  
  [note]

database:
  "#Favorite":
    - title: "Berjalan (Walk Cycle)"
      description: "Pose 1 (Frame 1): The character stands in a contact position with the left leg extended forward making contact with the ground and the right leg trailing behind, while the opposite arms swing in coordination.   Pose 2 (Frame 13): The character reaches the passing position with the right leg lifted and passing forward beneath the body while the torso remains upright and balanced.   Pose 3 (Frame 25): The character transitions to the opposite contact position with the right leg extended forward on the ground and the left leg trailing, completing the cycle's stride mirror."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="12" font-family="sans-serif">Walk</text></svg>'

  "Combat & Aksi":
    - title: "Ayunan Pedang (Sword Swing)"
      description: "Character swinging a wooden sword downward with full anticipation, impact, and follow-through"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237f1d1d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fecaca" font-size="12" font-family="sans-serif">Sword</text></svg>'
    - title: "Pukulan Kuat (Punch)"
      description: "Character throwing a heavy punch with winding up, extension, and recovery pose"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bfdbfe" font-size="12" font-family="sans-serif">Punch</text></svg>'
  "Gerakan & Animasi":
    - title: "Melompat (Jump Action)"
      description: "Character jumping sequence showing squat anticipation, take-off, apex peak, and landing"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23581c87"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e9d5ff" font-size="12" font-family="sans-serif">Jump</text></svg>'

outputs: ["JSON"]
---
Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create a **CLEAN SPRITE SHEET** of the same character performing:

[[{humanInput}]]

The character must remain the **EXACT SAME CHARACTER** in every pose.

### CHARACTER LOCK

Preserve the same:

* face and identity
* hairstyle
* body proportions
* clothing and colors
* skin tone
* accessories
* linework and visual style

Do NOT redesign, replace, or randomly alter the character.

### ACTION SEQUENCE

Break [{humanInput}] into a natural chronological sequence:

**anticipation → preparation → main action → follow-through → final pose**

Each pose must represent a meaningful stage of movement with clear, readable silhouettes.

### SPRITE SHEET

Place multiple **full-body poses** directly on one plain clean canvas.

* No borders, boxes, panels, grids, separators, frame lines, text, labels, arrows, or numbering.
* No shadows behind individual poses.
* No background objects or unnecessary elements.
* Keep every pose fully visible and clearly separated.
* Leave enough empty space around each pose for easy manual cropping.
* Do not allow poses or body parts to overlap.

### CONSISTENCY

Maintain consistent character scale, proportions, camera angle, perspective, line thickness, colors, clothing, and overall design.

If a prop is required, keep the **same prop design, proportions, colors, and scale** throughout the sequence while allowing natural movement.

### ANIMATION STYLE

Use simple **2D pose-to-pose animation** with:

* strong readable silhouettes
* clear pose changes
* natural anticipation and follow-through
* believable movement
* simple animation-friendly construction

Avoid motion blur, speed lines, duplicate poses, extreme perspective, visual effects, and unnecessary detail.

**Output ONLY the clean sprite sheet.**
