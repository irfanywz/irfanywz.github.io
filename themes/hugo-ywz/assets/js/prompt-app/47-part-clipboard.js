/* ==========================================================================
   Component part: clipboard
   Copy feedback flags, copy() and reading from the clipboard.
   ========================================================================== */
const clipboardPart = () => ({
    // --- Copy feedback ---
    copiedMaster: false,
    copiedSub: false,
    copiedBatch: false,
    copiedBatchIndex: false, // id of the batch item just copied
    copiedAi: false,
    copiedAiItem: false,

    /** Read trimmed text from the clipboard; returns '' (after warning the user) when blocked. */
    async readClipboard() {
        try {
            return (await navigator.clipboard.readText()).trim();
        } catch (err) {
            console.error('Gagal melakukan paste dari clipboard:', err);
            alert('Tidak dapat mengakses clipboard. Pastikan browser mengizinkan akses clipboard atau gunakan shortcut Ctrl+V.');
            return '';
        }
    },

    async pasteClipboard() {
        const text = await this.readClipboard();
        if (text) this.builderInput = text;
    },

    async pasteBatch() {
        const text = await this.readClipboard();
        if (text) this.batchInput = text;
    },

    /* ------------------------------------------------------------------
       Clipboard
       ------------------------------------------------------------------ */
    /** Readable size of a text (characters, words, estimated tokens). */
    formatStats(text) { return formatTextStats(text); },

    /**
     * Copy text and flash a feedback flag for a moment.
     * `token` is the value the flag is set to: true, or an item id when several buttons share one flag.
     */
    async copy(text, flag, token = true) {
        try {
            await navigator.clipboard.writeText(text);
            this[flag] = token;
            setTimeout(() => { if (this[flag] === token) this[flag] = false; }, COPY_FEEDBACK_MS);
        } catch (err) {
            console.error('Gagal menyalin ke clipboard:', err);
        }
    },
});
