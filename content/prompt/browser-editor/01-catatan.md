---
title: Catatan Browser Editor
description: Catatan dalam membuat editor video menggunakan teknologi web browser
outputs: ["JSON"]
---

Rendering pakai Canvas 2D, bukan WebGL2.

kenapa setiap refresh izinkan selalu muncul yah ? apa gak bisa disimpan statenya atau semacamnya, terus kenapa folder output harus pilih lagi pas refresh ? 

Folder output: handle-nya cuma disimpan di state React, jadi hilang tiap refresh. File media sudah disimpan di IndexedDB, folder belum.