// Logika pencarian artikel: murni, tanpa DOM (dites di tests/search.test.mjs).
import { escapeHtml, escapeRegExp } from '../../lib/html.js';

const HIGHLIGHT_CLASS = 'bg-yellow-200 dark:bg-yellow-900/50 text-gray-900 dark:text-white px-0.5 rounded';

const joinIfArray = (value) => Array.isArray(value) ? value.join(' ') : (value || '');

/** Hanya artikel (`section === 'posts'`) yang bisa dicari. */
export function onlyPosts(data) {
    return data.filter(item => item.section === 'posts');
}

/** Teks gabungan yang dicocokkan dengan query (lowercase). */
export function searchableText(item) {
    const contentStr = item.content || item.summary || '';
    return `${item.title || ''} ${joinIfArray(item.topics)} ${joinIfArray(item.tags)} ${contentStr}`.toLowerCase();
}

/** Cari `query` (sudah di-trim, tidak kosong) di `posts`; hasil unik per permalink. */
export function searchPosts(posts, query) {
    const needle = query.toLowerCase();
    const results = posts.filter(item => searchableText(item).includes(needle));
    return Array.from(new Map(results.map(item => [item.permalink, item])).values());
}

/** Bungkus kemunculan `query` dengan <span> sorot; seluruh teks di-escape. */
export function highlightText(text, query) {
    const source = String(text);
    if (!query) return escapeHtml(source);

    let html = '';
    let last = 0;
    for (const match of source.matchAll(new RegExp(escapeRegExp(query), 'gi'))) {
        html += escapeHtml(source.slice(last, match.index))
            + `<span class="${HIGHLIGHT_CLASS}">${escapeHtml(match[0])}</span>`;
        last = match.index + match[0].length;
    }
    return html + escapeHtml(source.slice(last));
}

function renderImage(item) {
    if (!item.image) return '';

    let crownBadgeHTML = '';
    if (item.premium || item.isPremium) {
        crownBadgeHTML = `
                        <div class="absolute top-2 right-2 bg-amber-500/90 dark:bg-amber-600/90 text-white p-1.5 rounded-full shadow-md backdrop-blur-sm flex items-center justify-center">
                            <span class="icon-[lucide--crown] w-4 h-4"></span>
                        </div>
                    `;
    }

    return `
                    <div class="w-full sm:w-36 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title || '')}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
                        ${crownBadgeHTML}
                    </div>
                `;
}

function renderTags(item, query) {
    const rawTags = item.topics || item.tags;
    if (!rawTags) return '';

    const tagsList = Array.isArray(rawTags) ? rawTags : rawTags.split(',').map(t => t.trim());
    return tagsList.map(tag =>
        `<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800">${highlightText(tag, query)}</span>`
    ).join('');
}

function renderReadingTime(item) {
    if (!item.readingTime) return '';
    return `
                    <div class="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-2">
                        <span class="icon-[lucide--clock] w-3.5 h-3.5"></span>
                        ${escapeHtml(item.readingTime)} menit baca
                    </div>
                `;
}

/** HTML satu kartu hasil pencarian. */
export function renderResult(item, query) {
    return `
                <div class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 group relative flex flex-col sm:flex-row gap-5 items-start">
                    ${renderImage(item)}
                    <div class="flex-grow min-w-0 flex flex-col justify-between h-full w-full">
                        <div>
                            ${renderReadingTime(item)}
                            <h3 class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug mb-2">
                                <a href="${escapeHtml(item.permalink || '')}" class="focus:outline-none">
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    ${highlightText(item.title || '', query)}
                                </a>
                            </h3>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-gray-100 dark:border-gray-700/50">
                            <div class="flex flex-wrap gap-1.5 relative z-10">
                                ${renderTags(item, query)}
                            </div>
                            <span class="inline-flex items-center gap-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform pointer-events-none">
                                Baca
                                <span class="icon-[lucide--arrow-right] w-3.5 h-3.5"></span>
                            </span>
                        </div>
                    </div>
                </div>
            `;
}

export function renderResults(results, query) {
    return results.map(item => renderResult(item, query)).join('');
}
