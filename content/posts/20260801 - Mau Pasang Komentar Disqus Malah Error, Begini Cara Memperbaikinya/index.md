---
title: Mau Pasang Komentar Disqus Malah Error, Begini Cara Mengatasinya
slug: Mau Pasang Komentar Disqus Malah Error, Begini Cara Mengatasinya
description: "disqus embed.js error Uncaught Error: parseColor received unparseable color: oklch(0.3730.034259.733)"
date: 2026-08-01T21:00:31+07:00
image: disqus-error.avif
topics: ["Teknologi"]
keywords: ["Kode"]
showAds: true
adPositions: [2, 5, 7]
draft: false
---

saat ingin menerapkan fitur komentar keweb ini saya mengalami kendala error yang menyebabkan komentar tidak muncul

errornya terlihat seperti ini

> disqus embed.js error Uncaught Error: parseColor received unparseable color: oklch(0.3730.034259.733)

sayapun mencari cara memperbaikinya, dan ketemu penjelasannya kira-kira seperti ini

error tersebut terjadi karena adanya overide fungsi yang dilakukan tailwindcss yang saya pakai

untuk mengatasi masalah ini cukup menambahkan kode css dan bungkus div disqus threadnya dengan wrapper

```
/* Mode Terang (Default) */
#disqus_wrapper {
  background-color: #ffffff !important;
  color: #1f2937 !important;
}

/* Mode Gelap (Saat class .dark aktif di html/body) */
.dark #disqus_wrapper {
  background-color: #0f172a !important; /* Gunakan warna background dark theme Anda */
  color: #f8fafc !important;
}
```


```
<div id="disqus_wrapper">
    <div id="disqus_thread"></div>
</div>

<script>
    // ... script embed.js bawaan disqus Anda ...
</script>

```

lalu dilanjut untuk menghilangkan text comment diakhir jumlah komentar, bisa masuk kebagian pengaturan community seperti link dibawah ini, sesuaikan username disqusnya

[https://muhamad-irfan.disqus.com/admin/settings/community/](https://muhamad-irfan.disqus.com/admin/settings/community/)