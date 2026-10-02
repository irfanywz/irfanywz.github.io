---
title: "Kendaraan"
slug: "kendaraan"
description: "Prompt builder untuk merancang objek kendaraan atau alat transportasi 2D original bergaya semi-realistis kartun dengan proporsi yang konsisten dan siap animasi"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "A vintage pastel blue delivery van with rounded edges, a white roof rack, and classic round headlights."
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for new 2D animation vehicles based on:

  [DESKRIPSIKAN]

  Rules:

  * Each variant must represent a clearly different vehicle design, not merely a different color or minor detail.
  * Focus ONLY on the vehicle concept, structural form, body shape, proportions, components, and material identity.
  * Keep each vehicle recognizable as the same general vehicle type described in [DESKRIPSIKAN], while allowing meaningful differences in design and construction.
  * Vary the silhouette, body structure, proportions, component arrangement, construction style, materials, and functional design where appropriate.
  * Keep each design simple, readable, believable, and suitable for 2D animation asset generation.
  * Do not describe characters, scenery, backgrounds, actions, poses, or unrelated objects.
  * Keep each description concise and directly usable for asset generation pipelines.

  Output exactly [JUMLAH_VARIANT] numbered variants, ONE sentence per variant, with no explanations or extra text.


image_prompt: |
  Use the attached image as the **STRICT VEHICLE REFERENCE**.

  Create **ONE concise visual description** of the vehicle, focusing ONLY on its:

  * type
  * body shape and proportions
  * main structural parts
  * wheels
  * windows
  * colors
  * materials
  * distinctive visible features

  Describe ONLY what is clearly visible. Do NOT describe the art style, background, camera, lighting, atmosphere, people, actions, or story.

  Write **ONE natural English sentence** suitable for generating the same vehicle.

  **Output ONE sentence only.**



database:
  "Mobil & Transportasi Darat":
    - title: "Mobil Sedan Klasik"
      description: "A retro compact sedan with smooth curves, chrome bumpers, and round vintage headlights."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230284c7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Sedan</text></svg>'
    - title: "Van Pengiriman Vintage"
      description: "A vintage boxy delivery van with rounded corners, side sliding doors, and a front grille."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230d9488"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Van</text></svg>'

  "Kendaraan Niaga & Khusus":
    - title: "Truk Pikap Klasik"
      description: "A sturdy utility pickup truck with an open rear bed, wooden side panels, and rugged tires."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23d97706"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Pickup</text></svg>'
    - title: "Traktor Pertanian"
      description: "A charming agricultural tractor with massive rear wheels, a small steering wheel, and exhaust pipe."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2316a34a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Tractor</text></svg>'

  "Kendaraan Roda Dua":
    - title: "Skuter Perkotaan Retro"
      description: "A classic scooter with a curved front shield, floorboard, step-through frame, and rear spare tire."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23db2777"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Scooter</text></svg>'
    - title: "Sepeda Klasik Keranjang"
      description: "A charming city bicycle with a front wicker basket, curved handlebars, and a leather saddle."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%237c3aed"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Bicycle</text></svg>'

outputs: ["JSON"]
---
Use the attached image as the STRICT STYLE REFERENCE ONLY.

Create a completely NEW VEHICLE based on this description:

[{humanInput}]

Do not copy, trace, recolor, or modify any object from the reference. Create a unique vehicle with its own shape, proportions, silhouette, details, materials, colors, and identity.

## STYLE
Semi-realistic 2D cartoon illustration:
* thick controlled black outlines
* clean simplified shapes
* flat base colors
* subtle cel shading
* slight highlights and material variation
* believable volume and physical form
* slightly handmade line quality
* animation-friendly construction

The result should feel like a real-world vehicle simplified into 2D cartoon art, not a flat vector icon, logo, or 3D render.

## VEHICLE DESIGN
Show the complete vehicle in a clean full side view.

Maintain believable real-world proportions and clearly show the main body, cabin, windows, doors, wheels, tires, wheel arches, lights, mirrors, bumpers, and other important vehicle-specific parts.

Use realistic construction as the basis, but simplify details for animation.

Give materials subtle visual differences:
metal body, glass windows, rubber tires, plastic and metal components.

Use restrained 2D shading to suggest depth, weight, volume, and material without becoming photorealistic.

## MASTER PROP
Make the vehicle highly recognizable and consistent for future views, variations, and animation.

Prioritize:
* distinctive silhouette
* consistent proportions
* believable construction
* clear vehicle identity
* consistent colors and materials
* simple readable details

Do not add people, characters, animals, text, logos, extra objects, scenery, roads, or complex backgrounds.

Centered composition, complete vehicle visible, clean simple background.