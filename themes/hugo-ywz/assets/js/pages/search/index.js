// Halaman pencarian. Dibuild lewat layouts/_partials/components/inline-bundle.html;
// params.indexUrl = URL index.json (absolut).
import * as params from '@params';
import { fetchJson } from '../../lib/http.js';
import { onlyPosts, renderResults, searchPosts } from './core.js';

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    const searchResults = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');
    const initialState = document.getElementById('initialState');
    const resultCount = document.getElementById('resultCount');
    const searchTime = document.getElementById('searchTime');

    let searchData = [];

    fetchJson(params.indexUrl)
        .then(data => {
            searchData = onlyPosts(data);

            const urlParams = new URLSearchParams(window.location.search);
            const queryFromUrl = urlParams.get('q');

            if (queryFromUrl) {
                searchInput.value = queryFromUrl;
                toggleClearButton(queryFromUrl);
                performSearch(queryFromUrl, false);
            }
        })
        .catch(error => {
            console.error('Error loading search index:', error);
        });

    function performSearch(query, updateHistory = true) {
        const trimmedQuery = query.trim();

        if (updateHistory) {
            const newUrl = trimmedQuery ? `${window.location.pathname}?q=${encodeURIComponent(trimmedQuery)}` : window.location.pathname;
            window.history.replaceState({}, '', newUrl);
        }

        if (!trimmedQuery) {
            searchResults.classList.add('hidden');
            noResults.classList.add('hidden');
            initialState.classList.remove('hidden');
            resultCount.textContent = '0 hasil';
            searchTime.textContent = '';
            return;
        }

        initialState.classList.add('hidden');
        const startTime = performance.now();

        const uniqueResults = searchPosts(searchData, trimmedQuery);

        const endTime = performance.now();
        const searchDuration = (endTime - startTime).toFixed(2);

        displayResults(uniqueResults, trimmedQuery, searchDuration);
    }

    function displayResults(results, query, duration) {
        if (results.length === 0) {
            searchResults.classList.add('hidden');
            noResults.classList.remove('hidden');
            resultCount.textContent = '0 hasil';
            searchTime.textContent = `${duration}ms`;
            return;
        }

        noResults.classList.add('hidden');
        searchResults.classList.remove('hidden');

        document.getElementById('searchResultsContainer').innerHTML = renderResults(results, query);
        resultCount.textContent = `${results.length} hasil`;
        searchTime.textContent = `${duration}ms`;
    }

    function toggleClearButton(query) {
        if (query && query.length > 0) {
            clearSearch.classList.remove('hidden');
        } else {
            clearSearch.classList.add('hidden');
        }
    }

    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') performSearch(this.value);
    });

    clearSearch.addEventListener('click', function() {
        searchInput.value = '';
        toggleClearButton('');
        searchInput.focus();
        performSearch('');
    });

    let debounceTimer;
    searchInput.addEventListener('input', function() {
        toggleClearButton(this.value);
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => performSearch(this.value), 300);
    });

    searchInput.focus();
});
