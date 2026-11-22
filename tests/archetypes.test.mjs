// Memeriksa semua archetype (themes/hugo-ywz/archetypes/*.md) tanpa Hugo:
// action template yang dikenal diganti nilai contoh, lalu front matter harus rapi (YAML tanpa tab, ditutup ---).
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('../themes/hugo-ywz/archetypes/', import.meta.url));
const RENDER = [
    [/\{\{-?\s*\$title\s*:=.*?-?\}\}\n?/g, ''],
    [/\{\{\s*\$title\s*\|\s*urlize\s*\}\}/g, 'contoh-judul'],
    [/\{\{\s*\$title\s*\}\}/g, 'Contoh Judul'],
    [/\{\{\s*\.Date\s*\}\}/g, '2026-01-01T00:00:00+07:00'],
    [/\{\{\s*\.File\.ContentBaseName\s*\}\}/g, 'Contoh'],
    [/\{\{\s*now\.Format "2006-01-02"\s*\}\}/g, '2026-01-01'],
];
const LINE = /^(\s*#.*|\s*-(\s.*)?|\s*[A-Za-z_][\w-]*:.*|\s*)$/;

for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.md'))) {
    test(`archetype ${file}: front matter rapi setelah dirender`, () => {
        let text = fs.readFileSync(dir + file, 'utf8').replace(/\r\n/g, '\n');
        for (const [rx, value] of RENDER) text = text.replace(rx, value);
        assert.ok(!text.includes('{{'), 'masih ada action template yang tidak dikenal tes: ' + (text.match(/\{\{.*?\}\}/) || [''])[0]);
        const m = text.match(/^---\n([\s\S]*?)\n---\n/);
        assert.ok(m, 'front matter harus diawali --- di baris pertama dan ditutup ---');
        const lines = m[1].split('\n');
        lines.forEach((l, i) => {
            assert.ok(!l.includes('\t'), `baris ${i + 1} mengandung tab (YAML tidak boleh)`);
            assert.match(l, LINE, `baris ${i + 1} bukan "kunci: nilai", daftar, atau komentar: ${l}`);
        });
        assert.ok(lines.some(l => /^(title|slug|description|variables_config|outputs|build|qr_image|resources):/.test(l)), 'tidak ada kunci utama');
    });
}
