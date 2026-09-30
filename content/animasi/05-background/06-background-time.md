---
title: "Background Time"
slug: "background-time"
description: "Prompt builder untuk mengubah waktu"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Peaceful golden hour sunset, warm orange ambient light, long soft shadows, clear warm sky."
desc_prompt: |
  Create **[JUMLAH_VARIANT] DIFFERENT short visual descriptions** for a time and atmosphere shift of an existing background based on:

  [{target}]

  Each variant must describe a **clearly different lighting and atmospheric condition**, not merely change the brightness or color slightly.

  Write each variant as **one concise descriptive sentence**, specifying the overall lighting, sky appearance when visible, brightness level, color temperature, ambient illumination, and shadow characteristics.

  Rules:

  * Focus **ONLY on lighting, sky, color temperature, brightness, shadows, and atmosphere**
  * Describe how the new lighting affects the **entire scene consistently**
  * Make each variant meaningfully different in **time of day, light direction, brightness, color temperature, sky condition, atmospheric quality, or shadow behavior**
  * Examples may include morning, bright midday, golden hour, sunset, blue hour, night, overcast, rainy atmosphere, foggy atmosphere, or other appropriate conditions
  * Do NOT create variants that differ only by a minor hue or brightness adjustment
  * Keep the lighting physically believable and visually coherent
  * Adapt the atmospheric condition naturally to [{target}]

  ### ENVIRONMENT LOCK

  The original environment is **completely locked**.

  Do NOT change:

  * composition
  * layout
  * architecture
  * furniture
  * objects
  * vegetation
  * structures
  * proportions
  * perspective
  * camera angle
  * environment elements

  Only change the **lighting and atmospheric condition**.

  ### CONTENT LOCK

  Do NOT mention or describe specific physical objects such as:

  * buildings
  * houses
  * trees
  * furniture
  * vehicles
  * roads
  * walls
  * floors
  * decorations
  * props

  Do NOT introduce new physical objects or environmental elements.

  ### OUTPUT RULES

  * Output exactly **[JUMLAH_VARIANT]** variants
  * Number them sequentially
  * One sentence per variant
  * No explanations
  * No headings
  * No additional commentary
  * Do not output fewer or more variants than requested


image_prompt: |
  BACKGROUND TIME & LIGHTING EXTRACTION ANALYSIS

  Use the attached reference background image to analyze and extract the precise lighting, time-of-day, and atmospheric parameters.

  Create **ONE concise visual atmosphere description sentence** for applying this time/lighting to other backgrounds.

  Rules:
  * Focus **ONLY on the sky, ambient light color, color grading, and shadow direction**
  * Note the time of day (e.g., sunset, noon, night) and overall brightness
  * **DO NOT describe the specific physical scene elements** (buildings, objects)
  * Keep the text short, clean, and directly usable for the time-shifting tool

  **Output ONE atmosphere description sentence only.**

database:
  "Waktu Alami":
    - title: "Golden Hour Sunset"
      description: "Peaceful golden hour sunset, warm orange ambient light, long soft shadows, clear warm sky."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23ea580c"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Sunset</text></svg>'
    - title: "Bright Midday Sun"
      description: "Bright clear midday sun, high-key harsh lighting, short sharp shadows, clear blue sky."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23ca8a04"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Midday</text></svg>'
    - title: "Early Morning Sunrise"
      description: "Soft early morning sunrise, gentle cool blue and soft pink/yellow light, long diffuse shadows, clear dewy atmosphere."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23facc15"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Sunrise</text></svg>'
    - title: "Blue Hour Night"
      description: "Deep blue hour just after sunset, cool dark ambient light, illuminated windows, soft streetlights, clear deep blue sky."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e40af"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Night</text></svg>'

  "Atmosfer & Cuaca":
    - title: "Overcast Cloudy Day"
      description: "Dull overcast cloudy day, flat diffuse cool lighting, no harsh shadows, grey cloudy sky."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2364748b"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Cloudy</text></svg>'
    - title: "Rainy Day Atmosphere"
      description: "Moody rainy day atmosphere, wet reflective surfaces, flat cool lighting, visible raindrops, dark stormy sky."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23475569"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Rain</text></svg>'
    - title: "Foggy Morning"
      description: "Dense foggy morning, low visibility, soft diffuse grey light, elements fading into mist, muted colors."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%2394a3b8"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Fog</text></svg>'
    - title: "Sunrise with Haze"
      description: "Hazy sunrise, soft warm light filtering through morning haze, gentle colors, warm dusty atmosphere."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23f97316"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Haze</text></svg>'

  "Lainnya":
    - title: "Full Moon Night"
      description: "Bright full moon night, cool silvery light, deep shadows, dark indigo sky with visible stars."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Moon</text></svg>'
    - title: "Indoor Ambient Light (Senja)"
      description: "Interior room view with ambient warm light filtering in from a window during late sunset."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23c2410c"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Indoor Senja</text></svg>'

outputs:
  - JSON
---

Use the attached image as the STRICT BACKGROUND REFERENCE.

ONLY change the following:

<br>

[{humanInput}]

<br>

Preserve the original background EXACTLY.

Do not change, redesign, remove, add, move, resize, or replace any existing:
- buildings
- roads
- walls
- furniture
- trees
- objects
- environmental elements
- object positions
- composition
- perspective
- proportions
- camera angle
- scene layout

Keep the original cartoon art style, linework, shapes, and visual design unchanged.

Transform the scene naturally by adjusting ONLY:
- overall lighting
- sky appearance
- environmental brightness
- color temperature
- shadows
- atmosphere
- weather conditions when requested

The physical environment must remain exactly the same.

Do not add new buildings, objects, characters, vehicles, text, logos, or environmental elements unless specifically requested.

Do not remove any existing elements.

Maintain the exact same composition and camera view.

The result must look like the SAME background captured at a different time or under a different atmosphere.

Preserve all original object placement, proportions, perspective, and environmental structure.

STRICT REFERENCE LOCK:
Same location.
Same composition.
Same objects.
Same object positions.
Same perspective.
Same camera angle.
Same visual style.

ONLY change the time, lighting, and atmosphere.

Output a clean 2D animation background with the exact same environment and composition as the original image.