/* ==========================================================================
   Component part: resizable panes
   Drag the divider between the form pane and the result pane (large screens). Keyboard: arrow keys,
   Home resets. The width is remembered in localStorage and always clamped so the result pane keeps room.
   ========================================================================== */
const PANE_STORAGE = 'prompt_pane_width';
const PANE_DEFAULT = 380;
const PANE_MIN = 280;
const PANE_MAX = 720;
const PANE_RIGHT_MIN = 340; // the result pane never gets narrower than this
const PANE_STEP = 24;

function loadPaneWidth() {
    const n = Number(storage.get(PANE_STORAGE));
    return Number.isFinite(n) && n >= PANE_MIN && n <= PANE_MAX ? Math.round(n) : PANE_DEFAULT;
}

const paneResizePart = () => ({
    formPaneWidth: loadPaneWidth(),
    paneDragging: false,
    paneDrag: null, // { startX, startWidth } while dragging

    paneBounds() {
        const total = this.$refs.aiSplit?.getBoundingClientRect().width || 0;
        return { min: PANE_MIN, max: Math.max(PANE_MIN, Math.min(PANE_MAX, total - PANE_RIGHT_MIN)) };
    },

    setPaneWidth(px) {
        const { min, max } = this.paneBounds();
        this.formPaneWidth = Math.round(Math.min(max, Math.max(min, px)));
    },

    savePaneWidth() { storage.set(PANE_STORAGE, String(this.formPaneWidth)); },

    startPaneResize(event) {
        if (event.button !== undefined && event.button !== 0) return;
        event.currentTarget.setPointerCapture?.(event.pointerId); // keep receiving moves outside the divider
        this.paneDrag = { startX: event.clientX, startWidth: this.formPaneWidth };
        this.paneDragging = true;
    },

    movePaneResize(event) {
        if (!this.paneDragging) return;
        this.setPaneWidth(this.paneDrag.startWidth + event.clientX - this.paneDrag.startX);
    },

    endPaneResize(event) {
        if (!this.paneDragging) return;
        this.paneDragging = false;
        this.paneDrag = null;
        try { event?.currentTarget?.releasePointerCapture?.(event.pointerId); } catch { /* already released */ }
        this.savePaneWidth();
    },

    resizePaneBy(delta) { this.setPaneWidth(this.formPaneWidth + delta); this.savePaneWidth(); },

    resetPaneWidth() { this.formPaneWidth = PANE_DEFAULT; this.savePaneWidth(); },
});
