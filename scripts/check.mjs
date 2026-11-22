// Cek sebelum publish:  npm run check
// 1) tes JS  2) build Hugo "kering" (di memori, tidak menulis folder public) dengan flag yang sama seperti GitHub Actions.
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let failed = false;

console.log('1/2  Tes JS\n');
const tests = spawnSync(process.execPath, [path.join(root, 'scripts', 'test.mjs')], { cwd: root, stdio: 'inherit' });
if (tests.status !== 0) failed = true;

console.log('\n2/2  Build Hugo (percobaan, tidak ada file yang ditulis)\n');
const hugoVersion = spawnSync('hugo', ['version'], { cwd: root, encoding: 'utf8' });
if (hugoVersion.error) {
    console.log('❌ Hugo tidak ditemukan di PATH. Pasang Hugo extended (versi di GitHub Actions: 0.164.0) lalu coba lagi.');
    failed = true;
} else {
    console.log(hugoVersion.stdout.trim());
    const build = spawnSync('hugo', ['--gc', '--minify', '--environment', 'production', '--renderToMemory'], { cwd: root, encoding: 'utf8' });
    const output = `${build.stdout || ''}${build.stderr || ''}`;
    const lines = output.split(/\r?\n/);
    const warnings = lines.filter(l => /\bWARN\b/.test(l));
    const errors = lines.filter(l => /\bERROR\b/.test(l));
    [...errors, ...warnings].forEach(l => console.log('  ' + l));
    if (build.status === 0) {
        console.log(`✅ Build Hugo sukses${warnings.length ? ` (${warnings.length} peringatan, lihat di atas)` : ' tanpa peringatan'}.`);
    } else {
        if (!errors.length) console.log(output);
        console.log('❌ Build Hugo gagal.');
        failed = true;
    }
}

console.log(failed ? '\n❌ Ada yang perlu diperbaiki sebelum publish.' : '\n✅ Aman untuk publish.');
process.exit(failed ? 1 : 0);
