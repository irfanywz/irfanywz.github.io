---
title: Melihatnya Kembali dan wajahnya terlihat berbeda
slug: Melihatnya Kembali dan wajahnya terlihat berbeda
date: 2026-02-28T05:00:35+07:00
weather: Cerah
location: Bogor, Indonesia
draft: false
---

<style>#form_hash{display:flex;flex-direction:column;gap:20px}#key{padding:15px;border:2px solid #e0e0e0;border-radius:8px;font-size:16px;width:100%;box-sizing:border-box;transition:border-color .3s,box-shadow .3s}#key:focus{border-color:#007bff;outline:0;box-shadow:0 0 0 3px rgba(0,123,255,.2)}input[type=submit]{background-color:#007bff;color:#fff;padding:15px;border:none;border-radius:8px;cursor:pointer;font-size:18px;font-weight:700;letter-spacing:1px;transition:background-color .3s,transform .1s;box-shadow:0 5px 15px rgba(0,123,255,.3)}input[type=submit]:hover{background-color:#0056b3}input[type=submit]:active{transform:scale(.98)}</style>
<div id=resultDecrypt><form id=form_hash><input autofocus id=key name=password placeholder="Masukan Kunci"> <input type=submit value=Buka></form></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>
<script>
function hashFormatDecrypt(t,e){return CryptoJS.PBKDF2(t,e,{keySize:8,iterations:1e3}).toString()}function decrypt(t,e){var r=e.substring(0,64),n=e.substring(64);return CryptoJS.HmacSHA256(n,CryptoJS.SHA256(t).toString()).toString()===r&&decryptMsg(n,t)}function decryptMsg(t,e){var r=CryptoJS.enc.Hex.parse(t.substr(0,32)),n=t.substring(32);return CryptoJS.AES.decrypt(n,e,{iv:r,padding:CryptoJS.pad.Pkcs7,mode:CryptoJS.mode.CBC}).toString(CryptoJS.enc.Utf8)}document.getElementById("form_hash").addEventListener("submit",function(t){t.preventDefault();var e,r=hashFormatDecrypt(document.getElementById("key").value,"403ffa65680e4cecd0851318c3a8d9cc"),n=decrypt(r,"e02ff3dfcfedde41ee7805e680c0a402e203e26fb624877a6ed6d3339c1f1bb22e752166a95782c46a560a0fcaf3068dU2FsdGVkX18skKntYqw0gd5pDKOx6YZQOzaS5ZPFa6YuiIOz5t1Cbp86IMm6q/gzx64MqiEfafaBpPFwr9NsyHnEvNFInI99WDNZ5hvjnJnp04T2nOipvbopVJw1qEIa6/CFBl76C8LFSa1bPd0Ccjb9v5NX4H+c0q9XFIpwPpHOZ2vYdvd2tFQh8b74N1wlE7qUuJIk+pRYVey0nGq5fWZ75KbtgOB6wEHYbRrbjFPFAOhrVYz3qdtLClSEXdUbDNrJKe/HhFB4UjSavWb/33ExRZ0Apv8+XYsYH6zq+SyBa+v3rHwtUZ++Du6kBhK/xrJX/nkWL5n5vkm/m6aVQVbH/C0Y49yr0dK34IasBYVDp7l298vRZXzDNCNjP6vapjuRhi/I9DsCYWhGzibw1/I4A/tE2rPOae3unJpxeY+WUJcBYaQK1Xf7xsc20Ts05HPfnJ3UgHqC7tBEIiHbLQ02zvhsYV1LCR4eXbA+0yM5h+6UG1GJ8X7fugrnWcvl6FCZqzFlFjfePE+3YlwiRMWlrYg4Y60LfXqukFj96NX9Hc4aWOGvKJHbv1TJ/j6L2CQbW8WAmpXj2ZLIqajZRPeTeU0sr9Mzk4FsthB3lukNpMoDy9hdCnekOQ2bzCQOmblgWo2y5z6RYcO57JEoxq1bshDJxT5COkHE2g/FTOGJhnrSx1/BKZ3n2QF4pyn0");n?document.getElementById("resultDecrypt").innerHTML=n:alert("password salah!")});    
</script>
