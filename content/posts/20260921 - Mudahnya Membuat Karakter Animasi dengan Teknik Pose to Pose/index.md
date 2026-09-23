---
title: Mudahnya Membuat Karakter Animasi dengan Teknik Pose to Pose
slug: karakter-animasi-pose-to-pose
description: "karakter animasi dengan teknik pose-to-pose adalah pilihan yang pas diera AI sekarang ini, karakter bisa dengan mudah diubah posenya dengan bantuan AI"
date: 2026-09-21T16:00:00+07:00
image: pose-to-pose-karakter.avif
topics: ["Konten Kreator"]
keywords: ["Animasi"]
series: "Belajar Animasi"
showAds: false
adPositions: []
premium: true
draft: false
---

kali ini gua mau bahas gimana cara buat karakter animasi dengan teknik pose-to-pose

kelebihan menggunakan pose-to-pose adalah karakter jadi lebih cepat dianimasikan, karakternya juga nggak terlihat modular karena setiap garis menyatu tanpa ada potongan sama sekali

namun ada kekurangannya yaitu, setiap ada pose baru berarti harus dibuat ulang

jadi nantinya akan banyak sekali gambar pose yang terus bertambah

tapi tenang, karena posenya bertambah terus, disinilah kita jadi cepat menganimasikan karakternya karena pose udah tersedia sebelumnya

nah gimana cara buat karakternya, oke ini tahapan cara gua buat karakter animasi pose-to-pose dengan AI

{{< toc show="true" >}}

## Base Pose Full Body

pertama yang gua lakuin yaitu buat base pose terlebih dahulu

base pose ini harus full body, biar nanti hasil pose-pose lainnya ikut full body juga

base posenya harus berdiri dengan tampilan depan 3/4 tangan dengan posisi idle lengkap dengan wajahnya

{{< image-grid >}}

{{< image-link "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUbV2D_miRvZNa995UyDMv5oDRjbt1x2Pe0RTXc6zk6twaF-1xRvxwz8aVody0qOpTR_1CdH4HBqz96ooxU48psNkquvqOVPtlhKhz6d6fRMHQtRFWpwJfE6UcFPKxFOkOtxBQZoW4G-nMIa54BWIwrk8XwAArMCCWjx6SnenKz_4Wp7pIcxX4xUxhivQ/s320/BASE_FULL_BODY.png" "BASE_FULL_BODY.png" "w09s" >}}

{{< /image-grid >}}

## Hilangkan Wajahnya

setelah base pose udah jadi, kita ilangin wajahnya, karena cuma area ini aja yang akan dianimasikan

wajah yang perlu dihilagkan cukup alis, mata, hidung dan mulut

sampai disini kita udah punya 2 gambar, 1 dengan wajah 1 lagi tanpa wajah

{{< image-grid >}}

{{< image-link "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmqUEMBwyWbP-dmM60MkMhcLxGuAXPwLiYSaqbXrxlSTlwkxzFLEtUVHfvRmgntRKsGvnwJZjsPOYMwtKC6jG0fux3WFBKFQ3BxeYTfKAyHO5Kp-7U3XWfYld40Tw29vY8IbRzgYPB-gbQiZ4iAQ59n-zDmbqvFsDNn2NPrFPTSpxiXMJ626MZ3HfbBoQ/s320/1_BERDIRI.png" "1_BERDIRI.png" "w09s" >}}

{{< /image-grid >}}

## Buat Pose Dasar

dilanjut dengan membuat pose dasar dengan menggunakan referensi gambar tanpa wajah yang sebelumnya dibuat

pose dasar yang dibuat diantaranya cukup:

- tangan menunjuk
- tangan memegang kepala
- tangan kekantong

hasil pose ini harus tanpa wajah 

{{< image-grid >}}

{{< image-link "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNw-Hlkl1cVswsrmT5TtDHy48V6p-KF2ktRkKk0fgHCZO1W1I2bbJaAowCAdPOZH5HY_AWY7nFIWVe_E5Fw0fyd0TvPz6dY7s52vPIQnSIKOKJES62QeojgsJScUB0B3KyMcvbXEFeLDc2ubvt5tre_zFnZjAQa1d1eXAad04v-5bNFRtbmwNSGI-bh00/s320/2_NUNJUK.png" "2_NUNJUK.png" "w09s" >}}
{{< image-link "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUMXtdFQggTZr55PZyY2Ro1f8yH0c_Fywl-ujuTMMYneOUO-gmlD05Yfw3GBBRitq6ypW32HO4G357PoP8RlM7HSoAIZ5SemVd9W_X3JPwr7npoIB78MXL0-Cv0P4ZYq8dwEsRnAFR0DgEEC8M-GyeZUaNQah6Xro82K2QjXwWBA7ZkCLODzwVhLp8l4U/s320/3_PEGANG_KEPALA.png" "3_PEGANG_KEPALA.png" "w09s" >}}
{{< image-link "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg28gVZF1TNDIwystzxb-xkuh6ibO4j8YhEjP5FRxsqj20WsIv3kA7SeflF46trt6weC-jfVlA-TOlW6KzRRUrf7WrU-e08XZnApdd1OFMCb76I1spcOJBpXGygGp09Tr4RvkUzIPGcX2tDMjAnEeLDbXD8JKBESb9qVbBvTsrzKVSGrvKJ7HJwPxaY5Cg/s320/4_TANGAN_DIKANTONG.png" "4_TANGAN_DIKANTONG.png" "w09s" >}}

{{< /image-grid >}}

## Buat Aset Wajah

karena wajah ini adalah bagian yang akan dianimasikan, maka aset wajah harus dibuat modular

artinya kita akan memisah dan membuat varian wajah yang berbeda

berikut apa saja yang perlu dibuat

**Alis**
- Normal
- Sedih
- Marah

**Mata**
- Normal
- Nutup
- Kosong

**Hidung**
- Normal

**Mulut**
- Idle
- A
- E

{{< image-grid >}}

{{< image-link "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_dVxXilamSm3n6v9QwmBfdBlHJLq18S9ytIe8w4KRqr44ZOYLIoitd5ENhB0k12i23_c0ssdQ6g_9vZdIH3pM5BEr0syPRYEOE_93j5TlEkd-adpAvjTIaZiB3Lex6pNjeOKUreApq0d9j33rFJuyiV3VKinj_IYgiv2S30RGAQ0EFGS9ifUtCk7nIKY/s320/EKSPRESI.jpg" "EKSPRESI.jpg" "w09s" >}}
{{< image-link "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyaX0Ml_K6p4mhFjCWdYpFb2W2GGcyO0AMSlz_ea48CsB6romDuDjJmO4tLE8E4dur7IL8sE7OvYmAAJp4R2ExbitqVThAzZZAUF5rMUQIlhV7MPA5F0OeMUQSJdjIEgNnr7DTec6SEaMSCRVxvjClr8DjqGZK_IvmNMwYJ08xtqwZC65bhmBffr2j7TM/s320/LYPSINK.jpg" "LYPSINK.jpg" "w09s" >}}

{{< /image-grid >}}

## Hasil Akhir

{{< youtube-lite id="RQDJsUMNZ24" title="Contoh Hasil Animasi Pose to Pose" >}}

setelah dipikir pikir untuk buat cerita animasi gak perlu hal yang ribet-ribet, ringging ini itu dan lainnya

cukup sediain 1 karakter namun banyak pose saja, jadi animasinya cukup dimulut saja

yang terpenting itu jalan ceritanya, kalau cerita menarik animasi bisa dimaafkan...

kelebihan cara ini adalah ketika 1 pose sudah ada lalu ada pose yang sama maka tinggal digunakan ulang

{{< paywall enc="56422567057ab9ff1a5883536f9941a51a5f0e8666954440acac1020d95abf8cb9dd06de56f045ca5192a9713fd0c537U2FsdGVkX1+0uPXJMv0o4H0Ica4E3AxGHuYA1lVZODE=" auth="4574f104150b048a003096759509d4b9:eweweawawa" >}}