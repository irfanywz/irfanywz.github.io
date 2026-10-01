---
title: "Scene POV & Camera Framing"
slug: "scene-pov"
description: "Prompt builder untuk merancang adegan animasi 2D baru dari berbagai sudut pandang spesifik (POV, melihat layar HP, interaksi tangan, over-the-shoulder, dll) berdasarkan gambar referensi"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "A close-up POV shot looking down at a smartphone screen held in hands, displaying a bright notification message."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for camera POV and framing based on:

  [DESKRIPSIKAN]

  Each variant must represent a **clearly different camera viewpoint, framing, or POV**, while keeping the same subject and intended scene.

  ### RULES

  * Focus ONLY on camera placement, POV, framing, viewing angle, distance, height, and focal subject.
  * Vary meaningful combinations of camera position, camera height, viewing direction, shot distance, framing, and perspective.
  * Use appropriate variations such as close-up, medium shot, medium-wide shot, wide shot, low-angle, high-angle, side view, over-the-shoulder, POV, front 3/4, or other logical viewpoints.
  * Clearly describe the **main focal subject** and how it is framed.
  * Mention character interaction or object visibility only when relevant to the camera POV, such as hands holding an object, looking at a screen, or an over-the-shoulder view.
  * Each variant must have a noticeably different composition, not merely a small camera shift or zoom.
  * Keep every viewpoint physically believable and suitable for 2D animation scene generation.
  * Do NOT modify the character, environment, objects, actions, or story; only change how the camera observes the scene.

  ### OUTPUT

  Output exactly **[JUMLAH_VARIANT] numbered variants**, matching the requested number exactly.

  Each variant must be **ONE concise directive sentence only**.

  Do NOT add headings, explanations, extra text, duplicate viewpoints, or combine multiple shots into one sentence.


image_prompt: |
  SCENE VISUAL STYLE & IDENTITY EXTRACTION

  Use the attached reference image(s) to analyze and extract the precise character identity, object details, environment elements, and 2D animation art style.

  Create **ONE concise art style matching sentence** ensuring that the newly framed POV scene seamlessly retains the original visual identity.

  Rules:
  * Focus **ONLY on preserving art style, colors, and character/environment traits**
  * **DO NOT describe the new camera angle here**

  **Output ONE style instruction sentence only.**

database:
  "POV Gadget & Interaksi Layar":
    - title: "POV Layar Smartphone"
      description: "A close-up POV shot looking at a smartphone screen held in hands, displaying digital UI elements."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230284c7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Phone POV</text></svg>'
    - title: "POV Mengetik Laptop"
      description: "A first-person POV shot looking down at a laptop keyboard and screen while typing with hands visible in frame."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230d9488"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Laptop POV</text></svg>'

  "POV Interaksi Tangan & Objek":
    - title: "Membuka Pintu / Laci"
      description: "A close-up handheld POV shot of hands reaching out to open an old wooden door knob."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23d97706"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Hand POV</text></svg>'
    - title: "Memegang Secangkir Kopi"
      description: "A first-person POV shot looking at hands holding a warm steaming mug on a table."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2316a34a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Mug POV</text></svg>'

  "Sudut Sinematik Khusus":
    - title: "Over-the-Shoulder (OTS)"
      description: "An over-the-shoulder shot showing a character from behind while observing an object or screen in front of them."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c3aed"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">OTS Shot</text></svg>'
    - title: "Insert Shot Detail"
      description: "An extreme close-up insert shot focusing sharply on a specific small object, prop, or text detail."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23db2777"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Insert Shot</text></svg>'

outputs:
  - JSON
---
Use the attached image(s) as STRICT VISUAL REFERENCES.

Create ONE new 2D animation scene based on:

[{humanInput}]

The reference image(s) may contain characters, environments, objects, props, or existing scenes. Preserve their recognizable visual identity and visual style.

The main purpose of the scene is to clearly show the requested SUBJECT from the requested VIEWPOINT, CAMERA ANGLE, or SHOT TYPE described in [{humanInput}].

Treat [{humanInput}] as instructions for:
* what the viewer is looking at
* where the camera is positioned
* how the subject is framed
* what should be visible inside the frame
* which visual element should receive the main focus

The subject may be ANY character, object, prop, environment element, screen, or other visual element specified by [{humanInput}].

### SPECIAL SHOT INSTRUCTIONS
* **For POV shots:** Place the camera at the natural viewpoint of the character or observer, making the viewer feel as if they are directly seeing through that character's eyes.
* **For handheld POV shots:** Include relevant hands, arms, or body parts inside the frame when appropriate to communicate that the character is holding, touching, using, or interacting with the subject.
* **For insert shots:** Make the specified subject the primary focal point and frame it closely enough for its important visual details to be clearly readable.
* **For over-the-shoulder shots:** Show the observing character partially from behind or beside the camera while keeping the viewed subject as the primary focal point.
* **For close-up or extreme close-up shots:** Fill most of the frame with the requested subject while preserving its recognizable design and important details.
* **For other viewpoints or shot types:** Follow the requested camera position, angle, distance, framing, and visual relationship between the observer and subject.

### PRESERVE WHEN APPLICABLE
* character identity
* object identity
* environment identity
* shape and proportions
* materials
* colors
* visual style
* important visual details

Only change the camera viewpoint, framing, visible area, and necessary scene composition required to create the requested shot.

Do NOT interpret the target only as a character pose or action.

Do NOT automatically use a normal third-person camera.

Do NOT add unrelated characters, objects, decorations, text, logos, or visual elements.

The final image must clearly communicate WHAT is being viewed and HOW it is being viewed.

Output ONLY the completed scene.