---
title: "Fix Kualitas Gambar"
slug: "fix-image"
description: "Prompt builder untuk memperbaiki kualitas gambar, mempertajam detail, menghilangkan blur, noise, serta artefak kompresi tanpa mengubah bentuk atau isi asli gambar"
#image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
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

outputs: ["JSON"]
---
Use the attached image as the **STRICT IMAGE REFERENCE**.

Enhance and restore the image to a **clean, sharp, high-definition version** while preserving the original image exactly.

### PROBLEMS TO FIX

Fix ONLY the issues specified in:

[{humanInput}]

Also correct blur, softness, pixelation, jagged edges, compression artifacts, noise, broken outlines, and unwanted visual artifacts when present.

Recover existing details naturally. **Do not invent new details.**

### CONTENT LOCK

Preserve EXACTLY:

* subject and identity
* objects and elements
* shapes and proportions
* positions and composition
* perspective and camera angle
* pose and expression
* clothing and hairstyle
* colors, lighting, shadows, and atmosphere
* visual and rendering style

Do NOT add, remove, redesign, replace, or rearrange anything.

### RESTORATION

Sharpen existing edges and details naturally. Keep original shapes and small details intact. If information is unclear, reconstruct it conservatively from the surrounding image.

Avoid hallucinated details, excessive sharpening, halos, artificial textures, oversmoothing, or overprocessing.

### STYLE LOCK

Preserve the original linework, outlines, shapes, colors, shading, texture, rendering, and level of detail.

The result must look like the **same original image in higher quality**, not a newly generated or redesigned image.

### FINAL

**SAME IMAGE + SAME CONTENT + SAME STYLE + IMPROVED QUALITY ONLY.**

Output the enhanced image.
