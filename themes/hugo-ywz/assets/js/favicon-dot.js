const originalIconUrl = '/favicon-96x96.png'; 

// Daftar pilihan warna yang mau di-acak (hijau, merah, biru, ungu, oranye, dll)
const randomColors = [
    '#ef4444', // Merah
    '#10b981', // Hijau
    '#3b82f6', // Biru
    '#8b5cf6', // Ungu
    '#f59e0b', // Oranye / Kuning
    '#ec4899'  // Pink
];

// Fungsi untuk ambil warna random dari array di atas
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * randomColors.length);
    return randomColors[randomIndex];
}

function setFaviconWithDot(hasDot, dotRadius = 25, dotColor = null) {
    const icons = document.querySelectorAll("link[rel*='icon'], link[rel='apple-touch-icon']");
    if (icons.length === 0) return;

    const canvas = document.createElement('canvas');
    canvas.width = 96;
    canvas.height = 96;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = originalIconUrl;

    img.onload = function() {
        ctx.drawImage(img, 0, 0, 96, 96);

        if (hasDot) {
            ctx.beginPath();
            ctx.arc(25, 25, dotRadius, 0, 2 * Math.PI); 
            
            // Kalau dotColor tidak diisi, ambil warna random!
            ctx.fillStyle = dotColor || getRandomColor(); 
            
            ctx.fill();
            ctx.lineWidth = 6;
            ctx.strokeStyle = '#FFFFFF'; 
            ctx.stroke();
        }

        const newFaviconData = canvas.toDataURL('image/png');

        icons.forEach(icon => {
            icon.href = newFaviconData;
        });
    };
}

// Cara manggilnya di event listener:
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Kosongkan parameter warna (atau biarkan null) biar dia milih secara random tiap pindah tab!
        setFaviconWithDot(true, 15); 
    } else {
        setFaviconWithDot(false);
        document.title = "irfanywz";
    }
});