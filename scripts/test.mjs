// Menjalankan semua tes JS:  npm test
// Hanya butuh Node (tanpa Hugo, tanpa paket tambahan).
import { spawnSync } from 'node:child_process';
import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const testsDir = path.join(root, 'tests');
const files = readdirSync(testsDir).filter(f => f.endsWith('.test.mjs')).sort().map(f => path.join('tests', f));
const register = pathToFileURL(path.join(testsDir, '_setup', 'register.mjs')).href;

const result = spawnSync(process.execPath, ['--test', ...files], {
    cwd: root,
    stdio: 'inherit',
    env: {
        ...process.env,
        NODE_OPTIONS: `${process.env.NODE_OPTIONS || ''} --import ${register}`.trim(),
        NODE_NO_WARNINGS: '1',
    },
});

if (result.status === 0) {
    console.log('\n✅ Semua tes JS lolos.');
} else {
    console.log('\n❌ Ada tes yang gagal (lihat bagian "not ok" di atas).');
}
process.exit(result.status ?? 1);
