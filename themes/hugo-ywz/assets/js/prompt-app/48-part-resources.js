/* ==========================================================================
   Component part: resources
   One modal, two scopes: site-wide resources (`resources` in _index.md, delivered through index.json)
   and the open prompt's own resources (`resources` in that prompt's front matter, delivered in its JSON).
   ========================================================================== */
const resourcesPart = () => ({
    resourceModalOpen: false,
    resourceScope: 'global', // 'global' | 'prompt'

    get resources() { return normalizeResources(this.pageData.resources); },

    /** Only meaningful while the detail modal is open (activePrompt is not cleared on close). */
    get promptResources() { return this.modalOpen ? normalizeResources(this.activePrompt.resources) : []; },

    get shownResources() { return this.resourceScope === 'prompt' ? this.promptResources : this.resources; },

    openResources(scope = 'global') {
        this.resourceScope = scope === 'prompt' && this.promptResources.length ? 'prompt' : 'global';
        this.resourceModalOpen = true;
    },
});
