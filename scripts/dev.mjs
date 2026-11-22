// Mode kerja sehari-hari:  npm start
// Menjalankan Tailwind (watch, lewat `npm run dev`) dan `hugo server` sekaligus di satu terminal.
// Tekan Ctrl+C untuk menghentikan keduanya.
import { spawn, spawnSync } from 'node:child_process';

const isWindows = process.platform === 'win32';

function run(command, args) {
    // Di Linux/macOS dijalankan sebagai grup proses sendiri supaya seluruh turunannya bisa dimatikan sekaligus.
    return spawn(command, args, { stdio: 'inherit', shell: true, detached: !isWindows });
}

function kill(child) {
    if (!child.pid || child.exitCode !== null) return;
    try {
        if (isWindows) spawnSync('taskkill', ['/pid', String(child.pid), '/T', '/F'], { stdio: 'ignore' });
        else process.kill(-child.pid, 'SIGTERM');
    } catch (e) { /* sudah berhenti */ }
}

const children = [run('npm', ['run', 'dev']), run('hugo', ['server'])];

let stopping = false;
function stopAll(code = 0) {
    if (stopping) return;
    stopping = true;
    children.forEach(kill);
    setTimeout(() => process.exit(code), 300);
}

children.forEach(c => c.on('exit', (code) => stopAll(code ?? 0)));
process.on('SIGINT', () => stopAll(0));
process.on('SIGTERM', () => stopAll(0));
