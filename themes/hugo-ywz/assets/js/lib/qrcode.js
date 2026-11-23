// Generator QR Code kecil tanpa dependensi (mode byte, versi 1-40, koreksi L/M/Q/H).
// Algoritma mengikuti spesifikasi ISO/IEC 18004 (struktur mirip Nayuki QR Code generator, MIT).
// Dipakai: qrToSvg(text) -> string <svg>, atau encodeQr(text) -> { size, modules }.

const ECC_PER_BLOCK = {
    L: [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    M: [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    Q: [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    H: [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
};
const NUM_BLOCKS = {
    L: [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    M: [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    Q: [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    H: [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81],
};
const FORMAT_BITS = { L: 1, M: 0, Q: 3, H: 2 };

const bit = (x, i) => ((x >>> i) & 1) !== 0;

function rawDataModules(ver) {
    let r = (16 * ver + 128) * ver + 64;
    if (ver >= 2) {
        const n = Math.floor(ver / 7) + 2;
        r -= (25 * n - 10) * n - 55;
        if (ver >= 7) r -= 36;
    }
    return r;
}

function dataCodewords(ver, ecl) {
    return Math.floor(rawDataModules(ver) / 8) - ECC_PER_BLOCK[ecl][ver] * NUM_BLOCKS[ecl][ver];
}

// ---- Reed-Solomon (GF(256), polinomial 0x11D) ----
function gfMul(x, y) {
    let z = 0;
    for (let i = 7; i >= 0; i--) {
        z = (z << 1) ^ ((z >>> 7) * 0x11d);
        z ^= ((y >>> i) & 1) * x;
    }
    return z;
}
function rsDivisor(degree) {
    const result = new Array(degree).fill(0);
    result[degree - 1] = 1;
    let root = 1;
    for (let i = 0; i < degree; i++) {
        for (let j = 0; j < result.length; j++) {
            result[j] = gfMul(result[j], root);
            if (j + 1 < result.length) result[j] ^= result[j + 1];
        }
        root = gfMul(root, 2);
    }
    return result;
}
function rsRemainder(data, divisor) {
    const result = divisor.map(() => 0);
    for (const b of data) {
        const factor = b ^ result.shift();
        result.push(0);
        divisor.forEach((coef, i) => { result[i] ^= gfMul(coef, factor); });
    }
    return result;
}

function addEccAndInterleave(data, ver, ecl) {
    const numBlocks = NUM_BLOCKS[ecl][ver];
    const blockEcc = ECC_PER_BLOCK[ecl][ver];
    const raw = Math.floor(rawDataModules(ver) / 8);
    const numShort = numBlocks - (raw % numBlocks);
    const shortLen = Math.floor(raw / numBlocks);
    const divisor = rsDivisor(blockEcc);
    const blocks = [];
    for (let i = 0, k = 0; i < numBlocks; i++) {
        const dat = data.slice(k, k + shortLen - blockEcc + (i < numShort ? 0 : 1));
        k += dat.length;
        const ecc = rsRemainder(dat, divisor);
        if (i < numShort) dat.push(0);
        blocks.push(dat.concat(ecc));
    }
    const out = [];
    for (let i = 0; i < blocks[0].length; i++) {
        blocks.forEach((block, j) => {
            if (i !== shortLen - blockEcc || j >= numShort) out.push(block[i]);
        });
    }
    return out;
}

// ---- Matriks ----
function alignPositions(ver, size) {
    if (ver === 1) return [];
    const n = Math.floor(ver / 7) + 2;
    const step = ver === 32 ? 26 : Math.ceil((ver * 4 + 4) / (n * 2 - 2)) * 2;
    const r = [6];
    for (let pos = size - 7; r.length < n; pos -= step) r.splice(1, 0, pos);
    return r;
}

function buildMatrix(codewords, ver, ecl) {
    const size = ver * 4 + 17;
    const mod = Array.from({ length: size }, () => new Array(size).fill(false));
    const fn = Array.from({ length: size }, () => new Array(size).fill(false));
    const set = (x, y, dark) => { mod[y][x] = dark; fn[y][x] = true; };

    for (let i = 0; i < size; i++) { set(6, i, i % 2 === 0); set(i, 6, i % 2 === 0); }
    const finder = (cx, cy) => {
        for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) {
            const d = Math.max(Math.abs(dx), Math.abs(dy));
            const x = cx + dx, y = cy + dy;
            if (x >= 0 && x < size && y >= 0 && y < size) set(x, y, d !== 2 && d !== 4);
        }
    };
    finder(3, 3); finder(size - 4, 3); finder(3, size - 4);

    const pos = alignPositions(ver, size);
    pos.forEach((px, i) => pos.forEach((py, j) => {
        if ((i === 0 && j === 0) || (i === 0 && j === pos.length - 1) || (i === pos.length - 1 && j === 0)) return;
        for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) {
            set(px + dx, py + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
        }
    }));

    const drawFormat = (mask) => {
        const data = (FORMAT_BITS[ecl] << 3) | mask;
        let rem = data;
        for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
        const bits = ((data << 10) | rem) ^ 0x5412;
        for (let i = 0; i <= 5; i++) set(8, i, bit(bits, i));
        set(8, 7, bit(bits, 6)); set(8, 8, bit(bits, 7)); set(7, 8, bit(bits, 8));
        for (let i = 9; i < 15; i++) set(14 - i, 8, bit(bits, i));
        for (let i = 0; i < 8; i++) set(size - 1 - i, 8, bit(bits, i));
        for (let i = 8; i < 15; i++) set(8, size - 15 + i, bit(bits, i));
        set(8, size - 8, true);
    };
    drawFormat(0); // cadangan tempat; ditimpa setelah mask dipilih

    if (ver >= 7) {
        let rem = ver;
        for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) * 0x1f25);
        const bits = (ver << 12) | rem;
        for (let i = 0; i < 18; i++) {
            const a = size - 11 + (i % 3), b = Math.floor(i / 3);
            set(a, b, bit(bits, i)); set(b, a, bit(bits, i));
        }
    }

    // Tempatkan codeword (zigzag)
    let k = 0;
    for (let right = size - 1; right >= 1; right -= 2) {
        if (right === 6) right = 5;
        for (let vert = 0; vert < size; vert++) {
            for (let j = 0; j < 2; j++) {
                const x = right - j;
                const upward = ((right + 1) & 2) === 0;
                const y = upward ? size - 1 - vert : vert;
                if (!fn[y][x] && k < codewords.length * 8) {
                    mod[y][x] = bit(codewords[k >>> 3], 7 - (k & 7));
                    k++;
                }
            }
        }
    }

    const applyMask = (mask) => {
        for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
            let inv;
            switch (mask) {
                case 0: inv = (x + y) % 2 === 0; break;
                case 1: inv = y % 2 === 0; break;
                case 2: inv = x % 3 === 0; break;
                case 3: inv = (x + y) % 3 === 0; break;
                case 4: inv = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0; break;
                case 5: inv = ((x * y) % 2) + ((x * y) % 3) === 0; break;
                case 6: inv = (((x * y) % 2) + ((x * y) % 3)) % 2 === 0; break;
                default: inv = (((x + y) % 2) + ((x * y) % 3)) % 2 === 0;
            }
            if (!fn[y][x] && inv) mod[y][x] = !mod[y][x];
        }
    };

    let best = 0, bestScore = Infinity;
    for (let m = 0; m < 8; m++) {
        applyMask(m); drawFormat(m);
        const s = penalty(mod, size);
        if (s < bestScore) { bestScore = s; best = m; }
        applyMask(m); // XOR lagi = batalkan
    }
    applyMask(best); drawFormat(best);
    return { size, modules: mod };
}

function penalty(mod, size) {
    let score = 0;
    const lines = [];
    for (let i = 0; i < size; i++) {
        lines.push(mod[i]);
        lines.push(mod.map(row => row[i]));
    }
    const pat = [true, false, true, true, true, false, true, false, false, false, false];
    const rpat = [...pat].reverse();
    for (const line of lines) {
        // N1: deret >= 5 warna sama
        let run = 1;
        for (let i = 1; i <= size; i++) {
            if (i < size && line[i] === line[i - 1]) run++;
            else { if (run >= 5) score += 3 + (run - 5); run = 1; }
        }
        // N3: pola mirip finder
        for (let i = 0; i + 11 <= size; i++) {
            let a = true, b = true;
            for (let j = 0; j < 11; j++) {
                if (line[i + j] !== pat[j]) a = false;
                if (line[i + j] !== rpat[j]) b = false;
            }
            if (a) score += 40;
            if (b) score += 40;
        }
    }
    // N2: blok 2x2
    let dark = 0;
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
        if (mod[y][x]) dark++;
        if (x + 1 < size && y + 1 < size) {
            const c = mod[y][x];
            if (c === mod[y][x + 1] && c === mod[y + 1][x] && c === mod[y + 1][x + 1]) score += 3;
        }
    }
    // N4: proporsi gelap
    const total = size * size;
    score += (Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1) * 10;
    return score;
}

/** Encode teks (UTF-8, mode byte). ecl: 'L' | 'M' | 'Q' | 'H'. */
export function encodeQr(text, ecl = 'M') {
    if (!FORMAT_BITS.hasOwnProperty(ecl)) throw new Error('ECL tidak dikenal');
    const bytes = Array.from(new TextEncoder().encode(text));

    let ver = 1;
    for (; ; ver++) {
        if (ver > 40) throw new Error('Data terlalu panjang untuk QR');
        const countBits = ver <= 9 ? 8 : 16;
        if (4 + countBits + bytes.length * 8 <= dataCodewords(ver, ecl) * 8) break;
    }

    const bits = [];
    const push = (val, n) => { for (let i = n - 1; i >= 0; i--) bits.push((val >>> i) & 1); };
    push(0b0100, 4);
    push(bytes.length, ver <= 9 ? 8 : 16);
    bytes.forEach(b => push(b, 8));

    const capBits = dataCodewords(ver, ecl) * 8;
    push(0, Math.min(4, capBits - bits.length));
    push(0, (8 - (bits.length % 8)) % 8);
    for (let pad = 0xec; bits.length < capBits; pad ^= 0xec ^ 0x11) push(pad, 8);

    const data = [];
    for (let i = 0; i < bits.length; i += 8) {
        data.push(bits.slice(i, i + 8).reduce((a, b) => (a << 1) | b, 0));
    }
    return { version: ver, ...buildMatrix(addEccAndInterleave(data, ver, ecl), ver, ecl) };
}

/** Hasilkan string SVG (hitam di atas putih, quiet zone `border` modul). `scale` = piksel per modul (opsional). */
export function qrToSvg(text, { ecl = 'M', border = 2, scale = 0 } = {}) {
    const { size, modules } = encodeQr(text, ecl);
    const parts = [];
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
        if (modules[y][x]) parts.push(`M${x + border},${y + border}h1v1h-1z`);
    }
    const dim = size + border * 2;
    const px = scale > 0 ? ` width="${dim * scale}" height="${dim * scale}"` : '';
    return `<svg xmlns="http://www.w3.org/2000/svg"${px} viewBox="0 0 ${dim} ${dim}" shape-rendering="crispEdges">`
        + `<rect width="100%" height="100%" fill="#fff"/><path d="${parts.join('')}" fill="#000"/></svg>`;
}
