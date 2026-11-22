// Jam, tanggal, dan sapaan untuk widget navigasi. Murni (dites di tests/nav-widget.test.mjs).

/** Sapaan menurut jam (0-23): PAGI 05-10, SIANG 11-14, SORE 15-18, selain itu MALAM. */
export function greetingFor(hours) {
    if (hours >= 5 && hours < 11) return 'PAGI';
    if (hours >= 11 && hours < 15) return 'SIANG';
    if (hours >= 15 && hours < 19) return 'SORE';
    return 'MALAM';
}

/** @returns {{time:string, date:string, greeting:string}} mis. { time: '14:05', date: 'Sel, 7 Januari 2026', greeting: 'SIANG' } */
export function formatNavClock(now) {
    return {
        time: now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', hour12: false }).replace(/\./g, ':'),
        date: now.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' }),
        greeting: greetingFor(now.getHours()),
    };
}
