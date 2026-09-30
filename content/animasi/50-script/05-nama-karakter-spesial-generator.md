---
title: "Nama Karakter Generator [Spesial]"
slug: "nama-karakter-spesial-generator"
description: "Prompt builder untuk menghasilkan daftar lengkap karakter manusia 2D berdasarkan peran khusus, profesi, kelompok kriminal, atau identitas spesifik dengan pakaian khas yang terstandarisasi"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "10 orang napi di dalam penjara dengan berbagai latar belakang usia dan postur tubuh."

desc_prompt: false
image_prompt: false

database:
  "Kriminal & Narapidana":
    - title: "10 Orang Napi (Prison Inmates)"
      description: "10 orang napi di dalam penjara dengan berbagai latar belakang usia, postur tubuh, dan seragam tahanan bernomor yang khas."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23b91c1c"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Napi</text></svg>'
    - title: "10 Orang Pencopet (Pickpockets)"
      description: "10 orang pencopet jalanan dengan pakaian kasual lusuh, jaket berkerudung tipis, dan tampang licik yang beragam."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%234b5563"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Pencopet</text></svg>'
    - title: "10 Orang Anggota Gangster"
      description: "10 orang anggota gengster jalanan dengan rompi kulit atau jaket gelap, tato minimalis, dan berbagai variasi postur intimidatif."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231f2937"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Gangster</text></svg>'

  "Profesi & Keamanan":
    - title: "10 Orang Satpam (Security Guards)"
      description: "10 orang petugas keamanan atau satpam dengan seragam dinas lengkap, topi lapangan, dan postur tegap."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%231e3a8a"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Satpam</text></svg>'
    - title: "10 Orang Pekerja Konstruksi"
      description: "10 orang buruh bangunan atau pekerja konstruksi mengenakan helm proyek, rompi keselamatan, dan pakaian kerja lapangan."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%23d97706"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Konstruksi</text></svg>'
    - title: "10 Orang Dokter & Medis"
      description: "10 orang tenaga medis dan dokter dengan jas putih laboratorium, pakaian scrub, serta stetoskop di leher."
      image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" fill="%230284c7"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23ffffff" font-size="11" font-family="sans-serif">Medis</text></svg>'

outputs:
  - JSON
---

Act as a character designer for a 2D animated series.

Based on this input:

<br>

**[{humanInput}]**

<br>

Create a complete list of unique human characters that naturally fit the requested role, profession, group, identity, or concept.

### CHARACTER DESIGN RULES

Each character must clearly belong to the group described in the input through their overall visual identity, clothing, hairstyle, body type, and relevant visual details.

The outfit must be automatically designed to match the input.

For example:
* Prison inmates → recognizable prison clothing
* Doctors → practical medical clothing
* Motorcycle gang members → recognizable gang-style clothing
* Security guards → recognizable security uniform
* Construction workers → practical workwear
* Religious figures → appropriate clothing for the requested role
* Athletes → suitable sportswear
* Criminal groups → practical clothing appropriate to the concept

Do NOT force a basic T-shirt outfit when the requested role clearly requires a specific outfit or uniform.

**OUTFIT**

Design each character's clothing based on the requested concept.

Clothing should be:
* visually recognizable
* practical for the role
* believable for everyday use within that group
* simple enough for 2D animation
* easy to reproduce consistently
* clearly different between characters while remaining part of the same group

Different characters may have different clothing colors, cuts, sizes, hairstyles, and minor clothing variations.

Keep the core outfit identity consistent across the group.

Avoid unnecessary fashion details, excessive accessories, complicated patterns, excessive layering, or overly elaborate costumes unless specifically required by the input.

**CHARACTER DIVERSITY**

Create clearly different characters within the same group.

Vary:
* age
* gender
* height
* body type
* face shape
* hairstyle
* skin tone
* facial structure
* clothing variation
* color combination
* overall silhouette
* distinctive but simple physical features

Do NOT create five copies of the same character with only different colors.

Each character must have a clearly recognizable individual identity while still belonging to the same group.

**POSE & EXPRESSION — STRICTLY LOCKED**

Every character must always be described in a neutral idle state:
* calm neutral facial expression
* mouth closed
* eyes naturally open
* head upright
* standing upright
* shoulders relaxed
* arms hanging naturally at the sides
* hands relaxed and visible
* legs in a natural standing position
* feet planted naturally on the ground
* static idle pose
* no action
* no gesture
* no dynamic movement

DO NOT use:
* smiling
* laughing
* crying
* shouting
* waving
* pointing
* running
* walking
* sitting
* jumping
* fighting
* dancing
* dramatic poses
* active gestures

**FOOTWEAR**

Choose footwear naturally based on the requested character concept.

If the input specifically requires barefoot characters, keep them barefoot.

Otherwise, use simple and believable footwear appropriate to the role.

Do not add unnecessary footwear details.

**VISUAL STYLE**

Keep every character suitable for simple 2D animation:
* simple 2D cartoon design
* clean shapes
* clear silhouette
* controlled details
* readable facial features
* practical clothing construction
* animation-friendly proportions
* no anime characteristics
* no fantasy elements unless specifically requested
* no exaggerated physiques
* no unnecessary visual complexity

The input determines the character's role, group, profession, culture, region, nationality, clothing style, and visual identity.

Do not automatically assume any specific country, culture, nationality, ethnicity, naming style, or regional appearance unless indicated by the input.

### OUTPUT FORMAT

**[GROUP NAME]**

01 — [CHARACTER NAME]
[A single complete English character description.]

02 — [CHARACTER NAME]
[A single complete English character description.]

03 — [CHARACTER NAME]
[A single complete English character description.]

Continue until all requested characters are created.

Each character description MUST include:
* age
* gender
* body type
* face shape
* hairstyle
* distinctive physical appearance
* role/group identity
* complete outfit
* relevant accessories only when appropriate
* calm neutral expression
* neutral idle standing posture

Write each character as ONE complete English sentence.

Do not add explanations, tables, character analysis, pose variations, or extra notes.

The final output must contain only the group name, character names, numbering, and ready-to-use English character descriptions.