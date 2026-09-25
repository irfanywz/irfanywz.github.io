---
title: Pengajuan Google Reader Reveneu diterima
slug: Pengajuan Google Reader Reveneu diterima
date: 2026-09-23T14:00:35+07:00
weather: Cerah
location: Bogor, Indonesia
journal_category: ["Penghargaan"]
draft: false
---

setelah 2 minggu lebih pengajuan, akhirnya pengajuan google reader reveneu disetujui

program ini mirip seperti google adsense, namun bedanya ini khusus monetisasi konten premium

saya mengetahui program ini pas lagi ngunjungin blog yang memasang fitur ini

dia melakukan monetisasi konten dengan cara memberi paywall atau penghalang agar konten tidak terbaca secara utuh

sayapun mengide untuk mencobanya juga dan ternyata lumayan mudah

sempat curiga kenapa lama sekali diterimanya, mungkin karena pengaturan pembayaran belum di-isi

bergegaslah saya melengkapi data pembayaran dengan menggunakan akun jenius yang masih aktif 

walaupun saldonya udah 0 semoga bisa.

setelah mengisi data pembayaran, satu hari setelahnya langsung diterima

seberpengaruh itu ternyata....

...

sayapun bergegas merapihkan dan menerapkan sistem paywall kedalam blog ini, 

mulai dari merombak fitur paywall sampai memberi badge premium disetiap konten premium

perjuangan tidak berhenti disini...

semoga web ini terus jalan dan bisa terus dibayar domainnya wakakaka...

...

screenshootnya bisa dilihat disini

<style>#form_hash{display:flex;flex-direction:column;gap:20px}#key{padding:15px;border:2px solid #e0e0e0;border-radius:8px;font-size:16px;width:100%;box-sizing:border-box;transition:border-color .3s,box-shadow .3s}#key:focus{border-color:#007bff;outline:0;box-shadow:0 0 0 3px rgba(0,123,255,.2)}input[type=submit]{background-color:#007bff;color:#fff;padding:15px;border:none;border-radius:8px;cursor:pointer;font-size:18px;font-weight:700;letter-spacing:1px;transition:background-color .3s,transform .1s;box-shadow:0 5px 15px rgba(0,123,255,.3)}input[type=submit]:hover{background-color:#0056b3}input[type=submit]:active{transform:scale(.98)}</style>
<div id=resultDecrypt><form id=form_hash><input autofocus id=key name=password placeholder="Masukan Kunci"> <input type=submit value=Buka></form></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>
<script>
function hashFormatDecrypt(t,e){return CryptoJS.PBKDF2(t,e,{keySize:8,iterations:1e3}).toString()}function decrypt(t,e){var r=e.substring(0,64),n=e.substring(64);return CryptoJS.HmacSHA256(n,CryptoJS.SHA256(t).toString()).toString()===r&&decryptMsg(n,t)}function decryptMsg(t,e){var r=CryptoJS.enc.Hex.parse(t.substr(0,32)),n=t.substring(32);return CryptoJS.AES.decrypt(n,e,{iv:r,padding:CryptoJS.pad.Pkcs7,mode:CryptoJS.mode.CBC}).toString(CryptoJS.enc.Utf8)}document.getElementById("form_hash").addEventListener("submit",function(t){t.preventDefault();var e,r=hashFormatDecrypt(document.getElementById("key").value,"5b2c6a24d17f9eec9720beec67a2b141"),n=decrypt(r,"a200b2dcd15ee9aac0425cebd12e134dbff4d3a37f9d2413f1958475b8ce2d1f2c40a9b3c3c51f0ac9178b4155eaef4fU2FsdGVkX19Y2J0BSYB/2hm1dA75Cexb6NOaiWYfWptCr5NnTEL3ZhLVvML8+LABmL2w3AdGrtzuHIU6J16hwiX+J5SG9ma5qeT5JeXoyxYUpmL4OiJkII7QlR5Dej9qDbSVJxrz5xUwTxOFl6gZpPP4j5iht7jO/B+SoheN3qgnm1yE3jI1CPMRFwP1b7HuskJg62ZS2QG1rLa/nB6Z5gp5W54j6Xid0vjdFmJ7lps7N48jZTKoNOdMRpcEanCNRjpo/VNSF9fiFOWAuUUslJX6PfUGAD+WsvhbNuaUXahN7Hb8iQAAo2zdvSTZ98wDxYHstJJzSCwQwPlLzMFnQr1+czkIXRP4A7DpreNPyuBIPpLjljsXB656HecAdC4ku2gA7bSie48qUQPTfu21WCuHShTXpXIa6dvuI22YbiPVEBXtnfr8yyoTzkLE1HL92VPQIcfwfq1/aj0tTu7RP3ZnivM0zxN5QmabmiYIiJx0kCQXTqeJyPjKxnky0x68d5iS3XPT8PeUgWfdDGdJEL039rdVbUaeBdv0nCNtEPRenR3BgkuRhOWEW4YZ3EhlfZWAvZDT7oHud0/XbiGjPx5nSpGuTefcPo5DHUmPurdGUbteaZExYXhWOFhoSSxxVRfRb1FktWf4d2NWeH/y4ghId02nFC/nTVlrbRliaE9HRMwDWaHhTCURKPnYrx1lWs5pp8xK1BbrwZjI/Orxoi0KjCReMnHpDaFofpG8VsuY49vSzHMBQl7/92XfCx1OF8t/4PQnNIwI5Pl0ZwhW6GGhadsNBlXG3TbCEafecsOMPXYbG+1AiqfhlQIzJxl+B23Hl+JGBdb+28dJ3XT1/yEdeAnS2gL8sT4Ka9lYbtVJeIwnF5dhdkCk59NznH+38VnYnuOAq0mbU1TqNXudssIt7TjOS0E+K1hN4xMMvFUKfdVGaWQ54ZwdHIemFlYtF4xk+ZUp5ckW5371kK09jPqX5bIc6gpGroC2ijHCzlTgtBM6OePGQP5MiqtezW3O1Bis/ktrFPg+nwMCq7AjyJ96gZjLRqls5E0WSYBmvvE=");n?document.getElementById("resultDecrypt").innerHTML=n:alert("password salah!")});    
</script>
