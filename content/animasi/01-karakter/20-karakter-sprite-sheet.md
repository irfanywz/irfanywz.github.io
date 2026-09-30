---
title: "Karakter Sprite Sheet"
slug: "karakter-sprite-sheet"
description: "Prompt builder untuk merancang urutan animasi (sprite sheet) berbagai aksi dan gerakan karakter kartun secara konsisten dalam satu kanvas bersih"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Character swinging a wooden sword downward with full anticipation, impact, and follow-through"
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for the character's animation action sequence based on:

  [DESKRIPSIKAN]

  Each variant must describe a **clearly different action sequence**, with a distinct movement flow, progression, and series of poses.

  Write each variant as **ONE concise sentence**, describing the key movement stages, action flow, and pose dynamics clearly.

  Rules:

  * Focus **ONLY on the action sequence, movement stages, poses, and physical dynamics**
  * Each variant must contain a clear **beginning → movement → ending** flow
  * Describe the important pose changes in chronological order
  * Create natural, readable, and animation-friendly movement sequences
  * Make each variant meaningfully different
  * Do NOT make variants different only by changing the direction or speed of the same action
  * Avoid repeating the same movement pattern or pose sequence
  * Keep movements suitable for simple 2D character animation

  **CHARACTER LOCK:**

  * DO NOT modify or mention character identity
  * DO NOT modify or mention face shape
  * DO NOT modify or mention facial features
  * DO NOT modify or mention hairstyle
  * DO NOT modify or mention body proportions
  * DO NOT modify or mention clothing
  * DO NOT modify or mention accessories
  * ONLY describe the character's movement and action sequence

  **ACTION FLOW:**
  Describe movement progressively, for example:

  * starting pose
  * preparation movement
  * main action
  * reaction or follow-through
  * final pose

  Only include stages that are relevant to [DESKRIPSIKAN].

  **DO NOT mention:**

  * location
  * environment
  * background
  * setting
  * atmosphere
  * lighting
  * weather
  * time
  * objects or props unless they are directly required by the action
  * personality
  * backstory
  * story

  Keep every description **short and directly usable for animation or image generation**.

  **OUTPUT RULES:**

  * Output EXACTLY **[JUMLAH_VARIANT] variants**
  * Number each variant
  * One sentence per variant
  * Do not output fewer or more variants
  * Do not default to any specific number
  * Do not add explanations, headings, or commentary


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
  
  {note}

database:
  "Combat & Aksi":
    - title: "Ayunan Pedang (Sword Swing)"
      description: "Character swinging a wooden sword downward with full anticipation, impact, and follow-through"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237f1d1d"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23fecaca" font-size="12" font-family="sans-serif">Sword</text></svg>'
    - title: "Pukulan Kuat (Punch)"
      description: "Character throwing a heavy punch with winding up, extension, and recovery pose"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23bfdbfe" font-size="12" font-family="sans-serif">Punch</text></svg>'
  "Gerakan & Animasi":
    - title: "Berjalan (Walk Cycle)"
      description: "Pose 1 (Frame 1): The character stands in a contact position with the left leg extended forward making contact with the ground and the right leg trailing behind, while the opposite arms swing in coordination.   Pose 2 (Frame 13): The character reaches the passing position with the right leg lifted and passing forward beneath the body while the torso remains upright and balanced.   Pose 3 (Frame 25): The character transitions to the opposite contact position with the right leg extended forward on the ground and the left leg trailing, completing the cycle's stride mirror."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23065f46"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23a7f3d0" font-size="12" font-family="sans-serif">Walk</text></svg>'
    - title: "Melompat (Jump Action)"
      description: "Character jumping sequence showing squat anticipation, take-off, apex peak, and landing"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23581c87"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23e9d5ff" font-size="12" font-family="sans-serif">Jump</text></svg>'

outputs:
  - JSON
---

Use the attached character image as the **STRICT CHARACTER REFERENCE**.

Create a **CLEAN SPRITE SHEET** showing the same character performing this action:

**ACTION DESCRIPTION:**

<br>

[{humanInput}]

<br>

The character must remain the **EXACT SAME CHARACTER** throughout the entire sprite sheet.

**CHARACTER LOCK:**

Keep the character consistent in every pose:

* same face and identity
* same hairstyle
* same body proportions
* same clothing
* same colors
* same skin tone
* same accessories
* same visual style
* same linework
* same overall character design

Do not redesign, replace, or randomly change the character between poses.

**ACTION SEQUENCE:**

Break the action into a clear sequence of animation poses.

Show the complete action from:

* anticipation
* preparation
* main action
* follow-through
* final pose

Each pose must show a meaningful stage of the movement.

The poses should form a natural animation sequence when viewed in order.

**PURE SPRITE SHEET LAYOUT:**

Arrange multiple full-body character poses together on a single clean canvas.

**IMPORTANT:**

* NO border
* NO boxes
* NO panels
* NO grid lines
* NO frame outlines
* NO separators
* NO individual pose containers
* NO shadow behind each pose
* NO background objects
* NO text
* NO labels
* NO arrows
* NO numbering

Each pose must exist directly on the same plain canvas with empty space between poses.

The poses should be arranged in a clean and organized layout, but without any visible borders or containers.

Each character pose must be completely visible and isolated from the others.

Leave enough empty space around every pose so that each individual sprite can be easily cropped manually.

Do not allow characters, weapons, hands, or other body parts to overlap with another pose.

**CONSISTENCY:**

Maintain consistent:

* character scale
* body proportions
* camera/view angle
* perspective
* line thickness
* colors
* clothing
* prop size

All poses must look like they belong to the same animation sequence.

**PROP CONSISTENCY:**

If the action uses an object or weapon, keep the exact same prop design throughout the sprite sheet.

The prop must maintain:

* same shape
* same proportions
* same colors
* same design
* correct hand placement

The prop may rotate or change position naturally according to the action, but it must remain the same object.

**ANIMATION STYLE:**

Use simple 2D pose-to-pose cartoon animation.

Prioritize:

* strong readable silhouettes
* clear action poses
* natural anticipation
* clear main action
* believable follow-through
* animation-friendly construction
* simple readable movement

Avoid motion blur, speed lines, visual effects, duplicate poses, extreme perspective, or unnecessary details.

**FINAL OUTPUT:**

Create a **PURE CLEAN SPRITE SHEET ONLY**.

Multiple separate character poses on one plain background.

No borders, no boxes, no panels, no grids, and no frame lines.

The final image must look like a raw animation asset sheet, where every pose is placed directly on the canvas with enough empty space between them to be individually cropped and used as separate sprites.