// package.json repo ini bertipe "commonjs", sedangkan file JS theme memakai `import`/`export` (ES module).
// Saat tes berjalan, loader ini memaksa file di themes/hugo-ywz/assets/js dibaca sebagai ES module.
// Hanya berlaku untuk tes: build Hugo/esbuild tidak terpengaruh.
const THEME_JS = '/themes/hugo-ywz/assets/js/';

export async function load(url, context, nextLoad) {
    if (url.startsWith('file:') && url.includes(THEME_JS) && url.endsWith('.js')) {
        return nextLoad(url, { ...context, format: 'module' });
    }
    return nextLoad(url, context);
}
