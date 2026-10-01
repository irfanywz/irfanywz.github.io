---
title: "Nama Karakter Generator [Spesial]"
slug: "nama-karakter-spesial-generator"
description: "Prompt builder untuk menghasilkan daftar lengkap karakter manusia 2D berdasarkan peran khusus, profesi, kelompok kriminal, atau identitas spesifik dengan pakaian khas yang terstandarisasi"
image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiExESY3B5GkDeNZjqXKTVsWe0f1bhSHb4uwMd700wjPutMbm3ynvHe6rRS7kWrt4mM3POzHY_vHhfHNOTDRaMB9qgHlw9OzTFwG5SMKGllDg5fRcwJx9SioUPyEN0Tp5PNITq107nEXFWvzrke1_4K7BtW4TtTqLObSiKdkmX9O42Ew6fNb4cbeYw60uY/s1600/Analisa.png
has_database: true
default_input: "[10] orang napi di dalam penjara dengan berbagai latar belakang usia dan postur tubuh."

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
      description: "10 orang petugas keamanan atau satpam dengan [seragam dinas] lengkap, topi lapangan, dan postur tegap."
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
Act as a **character designer for a 2D animated series**.

Based on:

[{humanInput}]

Create a complete set of **unique human characters** that naturally fit the requested role, profession, group, identity, culture, region, or concept.

### CHARACTER DESIGN

Every character must clearly belong to the requested group through their **appearance, clothing, hairstyle, body type, and relevant visual traits**.

Vary meaningful combinations of:

* age
* gender
* height
* body type
* face shape
* facial features
* hairstyle
* skin tone
* clothing variation
* color combination
* overall silhouette
* simple distinctive traits

Do NOT create copies with only different colors. Each character must have a distinct individual identity while remaining visually coherent as one group.

### OUTFIT LOCK

Design clothing according to the requested concept, role, or profession.

* The **complete outfit is mandatory**: upper garment + lower garment + footwear + relevant accessories.
* **Always explicitly describe the lower garment** such as pants, shorts, skirt, sarong, or other appropriate lower clothing.
* Never omit clearly required or visible lower-body clothing.
* Choose footwear naturally for the concept; use **barefoot** only when appropriate or specifically requested.
* Keep the core outfit identity consistent across the group while allowing differences in color, cut, size, hairstyle, and minor clothing details.
* Keep clothing practical, recognizable, believable, simple, and easy to reproduce for 2D animation.
* Avoid unnecessary accessories, patterns, layers, or elaborate costume details.

Do NOT default to a basic T-shirt when the requested role clearly requires a specific uniform or outfit.

### POSE & EXPRESSION LOCK

Every character must use the same **neutral idle state**:

* calm neutral expression
* mouth closed
* eyes naturally open
* head upright
* standing upright
* shoulders relaxed
* arms naturally at the sides
* hands relaxed and visible
* legs naturally positioned
* feet naturally planted
* static pose

No actions, gestures, movement, dramatic poses, or active expressions.

### VISUAL STYLE

Keep every character:

* simple 2D cartoon
* clean readable shapes
* clear silhouette
* controlled detail
* readable facial features
* practical clothing construction
* animation-friendly proportions
* non-anime

Do NOT add fantasy elements unless requested.

Let [humanInput] determine the appropriate role, group, culture, region, nationality, clothing, and visual identity. Do NOT assume these details unless supported by the input.

### OUTPUT

**[GROUP NAME]**

01 — [CHARACTER NAME]
[One complete English sentence containing age, gender, body type, face shape, hairstyle, distinctive appearance, group/role identity, complete outfit, relevant accessories, neutral expression, and idle standing posture.]

02 — [CHARACTER NAME]
[One complete English sentence.]

Continue until all requested characters are created.

Every character description must be **ONE complete English sentence**.

Output ONLY the group name, character names, numbering, and character descriptions. No explanations, tables, analysis, or extra notes.