---
title: Tubyu 
---

<!DOCTYPE html>
<html lang="id" class="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Tubyu Live Panel - Rental YouTube Live Streaming</title>
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
body { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; }
</style>
</head>
<body class="bg-[#0b0f19] text-slate-100 min-h-screen selection:bg-indigo-500 selection:text-white">

<!-- Header / Navbar -->
<header class="border-b border-slate-800/80 bg-[#0b0f19]/80 backdrop-blur-md sticky top-0 z-50">
<div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 text-white">
<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
</div>
<span class="font-bold text-lg tracking-tight text-white">Tubyu<span class="text-indigo-400">LivePanel</span></span>
</div>
<div class="flex items-center gap-4">
<a href="#fitur" class="text-xs text-slate-300 hover:text-white hidden sm:block">Fitur</a>
<a href="#galeri" class="text-xs text-slate-300 hover:text-white hidden sm:block">Galeri</a>
<span id="badgeKuota" class="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1.5 rounded-full font-medium flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-emerald-400"></span> Memuat Sisa Kuota...
</span>
</div>
</div>
</header>

<!-- Hero Section -->
<main class="max-w-6xl mx-auto px-4 py-12 lg:py-16">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div class="lg:col-span-7 space-y-6">
<div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs text-slate-300">
<span class="w-2 h-2 rounded-full bg-indigo-500"></span>
Platform SaaS Rental YouTube Live Streaming
</div>

<h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
Rental Live Streaming YouTube dengan <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Tubyu Live Panel</span>
</h1>

<p class="text-slate-400 text-base leading-relaxed">
Platform SaaS siap pakai untuk menyewakan layanan live streaming youtube. Kelola pelanggan dengan mudah di panel admin, sementara klien Anda dapat menikmati kemudahan penjadwalan live dan import video langsung dari Google Drive.
</p>

<div class="flex flex-wrap gap-4 pt-2">
<a href="#klaim-section" class="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition text-sm shadow-lg shadow-indigo-600/20">
Klaim Akses Unduhan
</a>
<a href="#fitur" class="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3 rounded-xl transition text-sm border border-slate-700">
Pelajari Fitur
</a>
</div>
</div>

<!-- Card Form -->
<div class="lg:col-span-5" id="klaim-section">
<div id="cardContainer" class="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
<div class="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

<div class="text-center mb-6">
<h2 class="text-xl font-bold text-white">Klaim Akses Download</h2>
<p class="text-xs text-slate-400 mt-1">Jangan sampai kehabisan kuota, siapa cepat dia dapat.</p>
</div>

<!-- Countdown Box -->
<div class="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 text-center mb-6">
<span class="text-[11px] font-semibold text-slate-400 uppercase tracking-widest block mb-1">Rilis Dibuka Dalam:</span>
<div id="countdown" class="text-3xl sm:text-4xl font-mono font-extrabold text-amber-400 tracking-wider">Menghitung...</div>
</div>

<!-- Form Input -->
<div class="space-y-4">
<div>
<label class="block text-xs font-medium text-slate-300 mb-1.5">Nama Anda</label>
<div class="relative">
<span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500">
<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
</span>
<input type="text" id="nama" placeholder="Ketik nama lengkap di sini..."
class="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition">
</div>
</div>

<button id="btnKlaim" onclick="klaimLink()"
class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 px-4 rounded-xl transition duration-200 shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 text-sm cursor-pointer">
Dapatkan Link Download
</button>
</div>

<div id="result" class="mt-5 text-center text-sm"></div>
</div>
</div>

</div>

<!-- Section Fitur -->
<section id="fitur" class="py-20 border-t border-slate-800/80 mt-16">
<div class="text-center max-w-2xl mx-auto mb-12">
<h2 class="text-2xl sm:text-3xl font-bold text-white">Fitur Utama Tubyu Live Panel</h2>
<p class="text-slate-400 text-sm mt-2">Dirancang khusus untuk kebutuhan bisnis rental live streaming dengan panel terpisah.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
<div class="inline-block px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider">Panel Admin</div>
<h3 class="text-lg font-bold text-white">Kontrol & Monitoring Bisnis</h3>
<ul class="space-y-3 text-sm text-slate-300">
<li><strong>Monitoring Server:</strong> Pantau resource real-time RAM, CPU, disk penyimpanan video, dan jaringan[cite: 3].</li>
<li><strong>Manajemen Customer:</strong> Kelola akun penyewa, masa aktif, dan kredensial login[cite: 4].</li>
</ul>
</div>
<div class="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
<div class="inline-block px-3 py-1 rounded-lg bg-violet-500/10 text-violet-400 text-xs font-bold uppercase tracking-wider">Panel User / Klien</div>
<h3 class="text-lg font-bold text-white">Kemudahan Siaran Klien</h3>
<ul class="space-y-3 text-sm text-slate-300">
<li><strong>Import Video Google Drive:</strong> Unduh materi siaran langsung ke server pakai link Google Drive[cite: 5].</li>
<li><strong>Jadwal & Auto-Stop Live:</strong> Atur waktu mulai tayang otomatis lengkap dengan fitur auto-stop[cite: 6].</li>
</ul>
</div>
</div>
</section>

<!-- Section Galeri (Screenshot Aplikasi) -->
<section id="galeri" class="py-16 border-t border-slate-800/80">
<div class="text-center max-w-2xl mx-auto mb-12">
<h2 class="text-2xl sm:text-3xl font-bold text-white">Galeri Antarmuka Aplikasi</h2>
<p class="text-slate-400 text-sm mt-2">Pratinjau tampilan asli dari Tubyu Live Panel.</p>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg p-3">
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpDpPbEhYM7vSjQdwfyQsYTMtEsgY9ZfBpnTHDqnoi-xb-hOzsV3sb2wQ2j_EsB9dwSk9pPy5lty7oe25htgMhDBpBo76-yXRxHpZDk_0_DMlhxFS-OnteCkVK8R8emBHKvIvk7CDkmnnNTGhw3l35dYcU_XjqahRRv9-sKWcOaF2MTkagI6Wzx4fcCBg/s400/Screenshot_18.png" alt="Dashboard Live" class="w-full h-48 object-cover rounded-lg border border-slate-800">
<p class="text-xs text-center text-slate-300 mt-3 font-medium">Dashboard User & Kontrol Live[cite: 2]</p>
</div>
<div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg p-3">
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibxSgIK_ENU4_a3agaMG2zYFsZ3yFqLPymy6Rez2S04rntmkqg5Q9DhMIFIB5c54_Xm21iAaWByWZwGm7UxhKMzVWWn9Cia2qpAwYHv_nyVtW4Bp3VbgYv8V9rqS8dZTCBaTfNeZ4KxsA6BfrAasmBjfEnbm3I-LltD4bafE-RkFx4beKjfURjpA3sHLs/s400/Screenshot_25.png" alt="Berkas Video" class="w-full h-48 object-cover rounded-lg border border-slate-800">
<p class="text-xs text-center text-slate-300 mt-3 font-medium">Berkas Video & Google Drive Grabber[cite: 5]</p>
</div>
<div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg p-3">
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6garZcOj3vH3OgGasvuDgPzz0yHyKDV2Hi8yiGnwll7p9YxucfAKVNf0NWzQGhR1r-iX2Q6PrtbK05lpP6ic-FETZ0k3i-TzKcXZX4bAxX_3vYD60_K5ZqkicZ0hOpOso4O3yXaCulls0hTwn4zDfbpr9Wd3W45keIhCN6TY-RoVVp_-KzNpYmAxWV7o/s400/Screenshot_22.png" alt="Pengaturan" class="w-full h-48 object-cover rounded-lg border border-slate-800">
<p class="text-xs text-center text-slate-300 mt-3 font-medium">Pengaturan Akun & Zona Waktu[cite: 1]</p>
</div>
<div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg p-3">
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK0iv8rWwCxTWBUa1n1CqxmXSZobmk9-xt7_YLCloi_hjPI65sk9c0omgRCgUNrZGYdn5X5468hZnASAd492q97_itcAb34FdRh6S_m6Pm35RWD_3jwx1Le2IacLnETSuq49EkJ9fjTqPxyleOL6ZeD5IEQBawXzgQMzBACTihY_oHdcPR5l-ECKV1TYU/s400/Screenshot_17.png" alt="Tugas Live" class="w-full h-48 object-cover rounded-lg border border-slate-800">
<p class="text-xs text-center text-slate-300 mt-3 font-medium">Manajemen Tugas & Jadwal Live[cite: 6]</p>
</div>
<div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg p-3">
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGSqEUCSGLy-oezaWxvI0GZas1jd6x8i47Xz1wQiW_RqYFkWenviAvLJ2TcbXRJfTa20xSlxxPSI40eOSP24S7ajMyA-VTWTWPCfN_77FaOuM7azHX6rYKdEq1-Gs-n3lS45uWZXN1sRvsmQ6Vk7J-uxfkzSAyYtsGc7b9BvZypT0F2Lv_SXX0QAVr3Tg/s400/Screenshot_23.png" alt="Admin Monitoring" class="w-full h-48 object-cover rounded-lg border border-slate-800">
<p class="text-xs text-center text-slate-300 mt-3 font-medium">Admin Panel: Server & RAM Monitoring[cite: 3]</p>
</div>
<div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg p-3">
<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKT5ndSBR7xz8tu28A9ZzvhEqDD08ez4h7cxFRcipKFDFErAfZa_7AzGsvrHt46j-A7zPhoppxZnpFN9F-fz7ef81F7bJtKDNHAjlvJN_oiSzd1PVSTrt4v6Ac3w5xZj2tBdCBevIXJFcmo2hO9AdA_OVpSZOWGphPvEYT9Qas5xQK2MrzPILZHGQI8pM/s400/Screenshot_24.png" alt="Admin Customer" class="w-full h-48 object-cover rounded-lg border border-slate-800">
<p class="text-xs text-center text-slate-300 mt-3 font-medium">Admin Panel: Manajemen Customer[cite: 4]</p>
</div>
</div>
</section>
</main>

<footer class="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
<p>&copy; 2026 Tubyu Live Panel. by irfanywz</p>
</footer>

<!-- Script Sinkronisasi Mengambil Target Waktu Langsung dari GAS -->
<script>
const scriptURL = "https://script.google.com/macros/s/AKfycbxJwq5R6KaSQF8UY2KW__lXgsSAaOC3KGihNp-jHSGMfzhb8X0ioyepZdaKiz-bw2Mc0Q/exec";

let targetReleaseTime = null;
let timerInterval = null;

async function syncWithServer() {
try {
const response = await fetch(scriptURL);
const data = await response.json();

if (data.status === 'success') {
targetReleaseTime = new Date(data.waktu_mulai).getTime();

if (!timerInterval) {
startCountdown();
}

if (data.is_open) {
const countdownEl = document.getElementById("countdown");
if (countdownEl) {
countdownEl.innerHTML = "TELAH DIBUKA";
countdownEl.classList.remove("text-amber-400");
countdownEl.classList.add("text-emerald-400");
}
}

const badge = document.getElementById('badgeKuota');
if (data.is_full) {
if (badge) badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-rose-500"></span> Kuota Penuh (0/10)`;
ubahCardJadiPenuh("Mohon Maaf, Kuota 10 Slot Unduhan Sudah Habis!");
} else {
if (badge) badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400"></span> Sisa Kuota: ${data.quota_left}/10 Slot`;
}
}
} catch (err) {
console.error("Gagal sinkronisasi server:", err);
}
}

function startCountdown() {
timerInterval = setInterval(function() {
if (!targetReleaseTime) return;

const countdownEl = document.getElementById("countdown");
if (!countdownEl) return;

const now = new Date().getTime();
const distance = targetReleaseTime - now;

if (distance < 0) {
countdownEl.innerHTML = "TELAH DIBUKA";
countdownEl.classList.remove("text-amber-400");
countdownEl.classList.add("text-emerald-400");
clearInterval(timerInterval);
return;
}

const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

countdownEl.innerHTML = 
String(hours).padStart(2, '0') + ":" + 
String(minutes).padStart(2, '0') + ":" + 
String(seconds).padStart(2, '0');
}, 1000);
}

function ubahCardJadiPenuh(pesan) {
const container = document.getElementById('cardContainer');
if(!container) return;
container.innerHTML = `
<div class="text-center py-8 space-y-4">
<div class="w-14 h-14 bg-rose-500/20 text-rose-400 rounded-full flex items-center justify-center mx-auto">
<svg class="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
</div>
<h3 class="text-xl font-bold text-white">Kuota Telah Habis</h3>
<p class="text-xs text-slate-400">${pesan}</p>
<div class="bg-rose-500/10 border border-rose-500/30 p-3 rounded-xl text-rose-300 text-xs font-medium">
Nantikan event pembagian akses berikutnya!
</div>
</div>
`;
}

syncWithServer();
setInterval(syncWithServer, 10000);

async function klaimLink() {
const namaInput = document.getElementById('nama');
if (!namaInput) return;
const nama = namaInput.value.trim();
const resultEl = document.getElementById('result');
const btn = document.getElementById('btnKlaim');

if (!nama) {
alert('Mohon masukkan nama Anda terlebih dahulu.');
return;
}

btn.innerText = "Memproses...";
btn.setAttribute("disabled", "true");
resultEl.innerHTML = '<span class="text-slate-400">Menghubungkan ke server...</span>';

try {
const response = await fetch(scriptURL, {
method: 'POST',
body: new URLSearchParams({ 'nama': nama })
});

const data = await response.json();

if (data.status === 'success') {
resultEl.innerHTML = `
<div class="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl text-emerald-300 text-left space-y-2">
<div class="font-bold text-emerald-400">Akses Berhasil Diberikan!</div>
<p class="text-xs text-slate-300">${data.message}</p>
<a href="${data.download_link}" target="_blank" class="inline-flex items-center justify-center w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-lg transition text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/20">
Unduh File Sekarang
</a>
</div>
`;
btn.innerText = "Akses Telah Diberikan";
syncWithServer();
} else if (data.status === 'full') {
ubahCardJadiPenuh(data.message);
} else {
resultEl.innerHTML = `
<div class="bg-rose-500/10 border border-rose-500/30 p-3 rounded-xl text-rose-300 text-xs font-medium">
${data.message}
</div>
`;
btn.removeAttribute("disabled");
btn.innerText = "Coba Lagi";
}
} catch (error) {
resultEl.innerHTML = `
<div class="bg-rose-500/10 border border-rose-500/30 p-3 rounded-xl text-rose-300 text-xs">
Gagal terhubung ke server.
</div>
`;
btn.removeAttribute("disabled");
btn.innerText = "Dapatkan Link Download";
console.error(error);
}
}
</script>
</body>
</html>