---
title: "Fix Kualitas Gambar"
slug: "fix-image"
description: "Prompt builder untuk memperbaiki kualitas gambar, mempertajam detail, menghilangkan blur, noise, serta artefak kompresi tanpa mengubah bentuk atau isi asli gambar"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "Fix overall blur, softness, and low resolution."
desc_prompt: false
image_prompt: false
database:
  "Resolusi & Ketajaman":
    - title: "Fix Blur & Softness"
      description: "Fix overall blur, softness, and low resolution."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%232563eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Fix Blur</text></svg>'
    - title: "Sharpen Outlines & Edges"
      description: "Sharpen jagged or broken edges, blurry outlines, and enhance overall definition."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231d4ed8"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Sharpen Edges</text></svg>'
    - title: "High Definition Upscale"
      description: "Upscale resolution, clarify small details, and remove pixelation without altering shapes."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e40af"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">HD Upscale</text></svg>'

  "Artefak & Noise":
    - title: "Remove Compression Artifacts"
      description: "Remove compression artifacts, blocky pixel noise, and unwanted color banding."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230284c7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Clean Noise</text></svg>'
    - title: "Fix AI Artifacts & Distortions"
      description: "Correct unwanted AI rendering artifacts, inconsistent line quality, and malformed minor details."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230369a1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Fix AI Flaws</text></svg>'
    - title: "Reduce Visual Noise"
      description: "Clean up excess grain and visual noise while preserving original surface textures."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23075985"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Reduce Noise</text></svg>'

  "Restorasi Detail":
    - title: "Restore Clarity & Definition"
      description: "Recover unclear details conservatively, ensuring sharp lines and natural proportions."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230d9488"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Restore Clarity</text></svg>'
    - title: "Clean Line Art Restoration"
      description: "Clean up rough linework, ensure consistent outline thickness, and preserve flat color fills."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230f766e"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="10" font-family="sans-serif">Clean Lines</text></svg>'

outputs:
  - JSON
---

Use the attached image as the STRICT IMAGE REFERENCE.
Enhance and restore the image to a clean, sharp, high-definition version while preserving the original image exactly as much as possible.

ADDITIONAL PROBLEMS TO FIX

<br>

[{humanInput}]

<br>

Improve the overall image quality by correcting:
* blur
* softness
* low resolution
* jagged or broken edges
* blurry outlines
* pixelation
* compression artifacts
* unwanted AI artifacts
* inconsistent line quality
* unclear small details
* distorted or malformed details
* noise
* visual inconsistencies

Recover and sharpen existing details naturally.
Improve clarity and definition without inventing unnecessary new details.

STRICT CONTENT LOCK
Preserve the original:
* subject
* objects
* elements
* shapes
* details
* positions
* proportions
* composition
* perspective
* camera angle
* pose
* expression
* clothing
* hairstyle
* colors
* lighting
* shadows
* atmosphere
* visual style
* rendering style

Do NOT redesign the image.
Do not add new objects.
Do not remove existing objects.
Do not change the subject's identity.
Do not change shapes or proportions.
Do not change the composition.
Do not change the perspective.
Do not change the camera angle.
Do not change the pose.
Do not change the colors.
Do not change the lighting.
Do not change the visual style.

DETAIL RESTORATION
Restore existing details that are unclear because of blur or low resolution.
Make edges clean and well-defined.
Make outlines sharp and consistent.
Preserve the original shapes instead of replacing them with newly generated shapes.
Preserve small details instead of simplifying them.
If an area is unclear, reconstruct it conservatively based on the surrounding original information.
Do not hallucinate unnecessary details.

STYLE LOCK
Maintain the exact visual language of the original image:
* same linework
* same outline thickness
* same shapes
* same color treatment
* same texture
* same shading
* same rendering
* same level of detail

The enhancement must look like a higher-quality version of the original image, not a newly generated image.

QUALITY TARGET
Produce a clean, sharp, high-resolution result with:
* crisp edges
* clear details
* clean outlines
* reduced blur
* reduced noise
* reduced artifacts
* consistent shapes
* natural detail restoration
* high visual clarity

Do not over-sharpen.
Do not create halos around edges.
Do not create artificial textures.
Do not make the image look overly processed.

FINAL RESULT
The final image must remain visually identical to the original, except that its technical image quality has been improved.
It should look as if the original image was created or captured in much higher resolution from the beginning.
ENHANCE QUALITY ONLY. DO NOT REDESIGN THE IMAGE.