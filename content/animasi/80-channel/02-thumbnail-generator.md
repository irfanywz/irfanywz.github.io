---
title: "Thumbnail Generator"
slug: "thumbnail-generator"
description: "Prompt builder untuk merancang thumbnail YouTube animasi 2D ber-impact tinggi dengan tipografi teks judul yang artistik, ekspresi karakter dramatis, dan komposisi yang memikat"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "WARGA KAMPUNG GEMPAR!"
desc_prompt: |
  Create [JUMLAH_VARIANT] DIFFERENT short visual descriptions for high-impact YouTube thumbnail scenes based on:

  [{target}]

  Write each as ONE concise descriptive sentence specifying the dramatic action, character expressions, emotional tone, and visual focus clearly.

  Rules:

  * Each variant must be clearly and meaningfully different in action, character reaction, emotional intensity, or composition.
  * Focus ONLY on the dramatic scene, action, character emotions, and visual composition.
  * Make the scene visually striking, easy to understand at thumbnail size, and designed to create curiosity and excitement.
  * Use clear foreground/background character positioning, strong poses, facial expressions, and visual contrast when relevant.
  * DO NOT mention or describe title text, captions, logos, or written elements.
  * DO NOT describe unrelated scenery or background details unless they directly support the scene composition.
  * Keep each description short and directly usable for thumbnail generation.
  * DO NOT add explanations or multiple sentences.

  Output exactly [JUMLAH_VARIANT] numbered variants, ONE sentence per variant.

image_prompt: |
  THUMBNAIL STYLE & SCENE EXTRACTION ANALYSIS

  Use the attached reference image to analyze and extract the precise character art style, lighting drama, emotional expressions, and composition style.

  Create **ONE concise visual thumbnail scene description sentence** for applying this style and energy to a new thumbnail.

  Rules:
  * Focus **ONLY on art style, character expressiveness, dramatic lighting, and composition feel**
  * **DO NOT describe specific plot details or text content**
  * Keep the text short, clean, and directly usable for the thumbnail generator tool

  **Output ONE scene description sentence only.**

database:
  "Drama & Kejutan Warga":
    - title: "Warga Kampung Gempar"
      description: "WARGA KAMPUNG GEMPAR!"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23dc2626"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">GEMPAR</text></svg>'
    - title: "Rahasia Terbongkar"
      description: "RAHASIA INI AKHIRNYA TERBONGKAR!"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23b91c1c"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">TERBONGKAR</text></svg>'

  "Komedi & Kepanikan":
    - title: "Kacau Balau"
      description: "Bikin Ulah Lagi, Suasana Langsung Kacau!"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23d97706"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">KACAU</text></svg>'
    - title: "Panik Banget"
      description: "PANIK! KETAHUAN WARGA SEKAMPUNG!"
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23b45309"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">PANIK</text></svg>'

outputs:
  - JSON
---

Use the attached image as the **STRICT VISUAL REFERENCE**.

Create a **high-impact YouTube thumbnail for an animated story video** using this title:

<br>

**[{humanInput}]**

<br>

Keep the main characters and important visual elements recognizable and consistent with the reference.

Create a dynamic, dramatic, and visually engaging composition with strong focal points, expressive characters, clear silhouettes, depth, contrast, and strong readability at small thumbnail size.

Add **"[{humanInput}]"** as the main graphic typography element.

Treat the title as **stylized thumbnail artwork, NOT as a normal sentence or paragraph**.

Design the title with:

* bold, custom-looking cartoon typography
* dynamic word arrangement
* 1–3 visually balanced lines when appropriate
* different font sizes between important words when useful
* strong outline, shadow, highlight, or dimensional effects
* playful or dramatic letter shapes matching the story
* slight rotation, stacking, or overlapping when appropriate
* strong contrast against the background
* clear visual hierarchy

The title may be creatively arranged to make the thumbnail more attractive, while **keeping every word and letter exactly correct**.

Do not place the title as one long horizontal sentence unless that composition works best.

Do not add any other words, captions, logos, or watermark. 

**Result:** a professional animated YouTube thumbnail where **[{humanInput}] becomes a strong graphic design element**, not plain text.