---
title: "POV Kendaraan"
slug: "kendaraan-pov"
description: "Prompt builder untuk mereproduksi kendaraan 2D yang sama persis dari berbagai sudut pandang kamera (depan, belakang, samping, 3/4, atas) dengan konsistensi bentuk dan gaya yang ketat"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "front-right 3/4 view"
desc_prompt: |
  Create **ONE short visual description** for a specific viewing angle of a vehicle based on:

  [DESKRIPSIKAN]

  Write it as **one concise descriptive phrase**, specifying the exact angle (e.g., front-right 3/4 view, rear view, top-front view) and ensuring all vehicle details remain consistent.

  Rules:
  * Focus **ONLY on the camera angle and the visible vehicle parts**
  * **DO NOT change the vehicle identity, color, or style**
  * Keep it **short and directly usable for POV generation**

  **Output ONE angle description phrase only.**

image_prompt: |
  VEHICLE IDENTITY & STYLE EXTRACTION

  Use the attached reference image to analyze and extract the precise vehicle identity, body shape, proportions, colors, materials, and the semi-realistic 2D cartoon art style.

  Create **ONE concise vehicle analysis sentence** for guiding the recreation of this specific vehicle from a new camera angle.

  Rules:
  * Focus **ONLY on the vehicle's core identity, unique features, and art style consistency**
  * **DO NOT describe the existing camera angle**
  * Keep the text short, clean, and directly usable for the POV tool

  **Output ONE vehicle analysis sentence only.**

database:
  "Sudut Pandang Dasar":
    - title: "Tampak Depan"
      description: "front view"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230284c7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Front</text></svg>'
    - title: "Tampak Belakang"
      description: "rear view"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2316a34a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Rear</text></svg>'
    - title: "Tampak Samping Kiri"
      description: "left side view"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23d97706"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Left</text></svg>'
    - title: "Tampak Samping Kanan"
      description: "right side view"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23db2777"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Right</text></svg>'

  "Sudut Pandang 3/4":
    - title: "Depan-Kiri 3/4"
      description: "front-left 3/4 view"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c3aed"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">FL 3/4</text></svg>'
    - title: "Depan-Kanan 3/4"
      description: "front-right 3/4 view"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23be123c"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">FR 3/4</text></svg>'
    - title: "Belakang-Kiri 3/4"
      description: "rear-left 3/4 view"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230f766e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">RL 3/4</text></svg>'
    - title: "Belakang-Kanan 3/4"
      description: "rear-right 3/4 view"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23a21caf"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">RR 3/4</text></svg>'

outputs:
  - JSON
---
Use the attached image as the STRICT MASTER VEHICLE REFERENCE.

Recreate the SAME vehicle from the requested viewing angle:

VIEW: [{humanInput}]

Do not redesign, modify, replace, or reinterpret the vehicle.

Maintain the exact same:
* vehicle identity
* body shape
* proportions
* silhouette
* colors
* materials
* wheels
* windows
* lights
* doors
* major components
* visual style

Only change the camera/viewing angle.

### VIEW
Show the vehicle clearly from the requested viewpoint.

Examples:
* front view
* rear view
* left side view
* right side view
* front-left 3/4 view
* front-right 3/4 view
* rear-left 3/4 view
* rear-right 3/4 view
* top-front view
* top-rear view

Maintain believable perspective and consistent vehicle proportions from the master reference.

### STYLE
Keep the same semi-realistic 2D cartoon style:
* thick controlled black outlines
* clean simplified shapes
* flat base colors
* subtle cel shading
* slight highlights
* believable volume and materials
* slightly handmade line quality
* animation-friendly construction

The result should feel like the same real-world vehicle illustrated from another angle, not a new vehicle.

Do not add people, characters, animals, text, logos, extra objects, scenery, roads, or complex backgrounds.

Show the complete vehicle, centered, with a clean simple background.