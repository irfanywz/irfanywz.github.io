// Helper tes: jalankan modul "entry" (yang memakai `import ... from '@params'` dan import relatif)
// di dalam konteks vm dengan global buatan. Bundler mini ini hanya untuk tes; build asli memakai js.Build.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

export function bundleEntry(entry, params = {}) {
    const seen = new Set();
    const out = [];
    const visit = (file) => {
        if (seen.has(file)) return;
        seen.add(file);
        let src = fs.readFileSync(file, 'utf8');
        src = src.replace(/import \* as params from '@params';/, 'const params = ' + JSON.stringify(params) + ';');
        src = src.replace(/import\s*\{[^}]*\}\s*from\s*'([^']+)';\n?/g, (m, rel) => {
            visit(path.resolve(path.dirname(file), rel));
            return '';
        });
        out.push(src.replace(/^export /gm, ''));
    };
    visit(path.resolve(entry));
    return '(function(){' + out.join('\n') + '})();';
}

/** @returns {object} konteks vm (globals buatan + hasil eksekusi yang ditulis ke globals) */
export function runEntry(entry, { params = {}, globals = {} } = {}) {
    const ctx = vm.createContext({ Math, JSON, String, Number, Array, Object, Promise, Date, ...globals });
    vm.runInContext(bundleEntry(entry, params), ctx);
    return ctx;
}
