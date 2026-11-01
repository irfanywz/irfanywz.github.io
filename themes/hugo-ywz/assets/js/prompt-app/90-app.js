/* ==========================================================================
   Alpine component "promptApp"
   Composed from the *Part factories defined in the other files of this bundle.
   Never spread the parts into one literal ({...a, ...b}): that would evaluate every getter once
   and lose reactivity. Property descriptors are copied instead, so getters stay getters.
   ========================================================================== */

/** Merge part objects into one, keeping getters and methods intact. */
function composeParts(...parts) {
    const app = {};
    for (const part of parts) {
        for (const [key, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(part))) {
            if (Object.prototype.hasOwnProperty.call(app, key)) console.warn(`promptApp: "${key}" is defined by more than one part; the later one wins.`);
            Object.defineProperty(app, key, descriptor);
        }
    }
    return app;
}

/** Page start-up: load index.json, open the prompt from the URL, then register the watchers of each part. */
const lifecyclePart = () => ({
    async init() {
        const params = new URLSearchParams(window.location.search);
        this.globalSearchQuery = params.get('search') || '';

        try {
            this.pageData = await fetchJson(INDEX_URL);
            this.choiceDbs = normalizeChoiceDbs(this.pageData.choice_databases);
            this.allPrompts = this.flattenPrompts(this.pageData.categories);
            this.selectedCategory = this.resolveCategoryParam(params.get('category'));

            const target = this.findPromptByParam(params.get('prompt'));
            if (target) this.openPromptDetail(target.json_url);
            this.updateUrlParams(); // rewrites old or invalid links to the clean slug form
        } catch (err) {
            console.error('Gagal memuat index prompt:', err);
        } finally {
            this.isLoadingList = false;
        }

        this.watchUrlParams();
        this.watchFormValues();
        this.watchAiSettings();
    },
});

document.addEventListener('alpine:init', () => {
    Alpine.data('promptApp', () => composeParts(
        listPart(),
        detailPart(),
        formPart(),
        choiceDbPart(),
        builderPart(),
        batchPart(),
        subPromptPart(),
        clipboardPart(),
        resourcesPart(),
        paneResizePart(),
        aiConfigPart(),
        aiRunPart(),
        aiHistoryPart(),
        aiGeminiPart(),
        aiOpenAiPart(),
        aiBackupPart(),
        lifecyclePart(),
    ));
});
