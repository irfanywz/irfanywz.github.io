---
title: "Background Time"
slug: "background-time"
description: "Prompt builder untuk mengubah waktu"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Peaceful golden hour sunset, warm orange ambient light, long soft shadows, clear warm sky."
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for changing the time and atmosphere of an existing environment based on:

  [DESKRIPSIKAN]

  Rules:

  * Each variant must represent a clearly different lighting or atmospheric condition, not merely a minor brightness or color change.
  * Focus ONLY on time of day, lighting, sky, brightness, color temperature, shadows, and atmosphere.
  * Vary the time, light direction, brightness, color temperature, sky condition, atmospheric quality, and shadow behavior meaningfully.
  * Possible conditions include morning, midday, golden hour, sunset, blue hour, night, overcast, rain, fog, or other logical conditions.
  * Apply the lighting and atmosphere consistently across the entire scene.
  * Keep the original environment completely unchanged, including composition, layout, architecture, objects, vegetation, proportions, perspective, and camera.
  * Do NOT mention specific physical objects or introduce, remove, or modify environmental elements.
  * Keep each condition physically believable and suitable for 2D animation background generation.
  * Keep each description concise and directly usable for asset generation pipelines.

  Output exactly [JUMLAH_VARIANT] numbered variants, ONE sentence per variant, with no explanations or extra text.


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

outputs: ["JSON"]
---
Use the attached image as the **STRICT BACKGROUND REFERENCE**.

Create the **EXACT SAME BACKGROUND** with only the requested time, lighting, weather, or atmosphere changed:

[[{humanInput}]]

### ONLY CHANGE

Change ONLY the visual conditions specified in [[{humanInput}]], such as:

* time of day
* overall lighting
* sky appearance
* brightness
* color temperature
* shadows
* atmospheric conditions
* weather conditions when requested

Apply these changes naturally and consistently across the entire scene.

### ENVIRONMENT LOCK

Keep the physical environment **EXACTLY UNCHANGED**:

* buildings and architecture
* roads, floors, and terrain
* walls, doors, windows, and structures
* furniture and objects
* trees and vegetation
* object positions and spatial relationships
* composition and scene layout
* perspective and proportions
* camera angle and framing

Do NOT add, remove, replace, resize, move, redesign, or rearrange any existing environmental element.

### VISUAL STYLE LOCK

Preserve the original:

* 2D cartoon art style
* linework and outline quality
* shapes and proportions
* colors and material appearance
* rendering style
* level of detail
* visual design

Do NOT reinterpret or redraw the environment in a different style.

### ATMOSPHERE RULE

The requested change must feel like the **SAME LOCATION under different environmental conditions**, not a new background.

If changing time of day, adjust lighting, sky, shadows, and brightness naturally.

If changing weather, modify ONLY weather-related visual conditions while keeping the physical environment unchanged.

If changing atmosphere, adjust ONLY the requested atmospheric qualities without introducing unrelated elements.

### DO NOT ADD OR REMOVE

No new:

* buildings
* furniture
* objects
* trees
* vehicles
* characters
* text
* logos
* environmental elements

No existing elements may be removed unless they are naturally obscured by the requested weather or atmosphere.

### FINAL LOCK

**SAME LOCATION**
**SAME ENVIRONMENT**
**SAME OBJECTS**
**SAME OBJECT POSITIONS**
**SAME COMPOSITION**
**SAME PERSPECTIVE**
**SAME CAMERA VIEW**
**SAME ART STYLE**
**ONLY TIME / LIGHTING / WEATHER / ATMOSPHERE CHANGES**

The final result must look like the **exact same background under the conditions specified in [[{humanInput}]]**.

**ONLY CHANGE WHAT IS REQUESTED IN [[{humanInput}]].**
