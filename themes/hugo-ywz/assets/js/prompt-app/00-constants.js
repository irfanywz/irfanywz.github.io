/* ==========================================================================
   Constants
   Shared by every file of the prompt app bundle (one script, one scope).
   ========================================================================== */

const INDEX_URL = './index.json';
const COPY_FEEDBACK_MS = 2000;
const FORM_STORAGE_PREFIX = 'prompt_form:';
const MARKDOWN_HINT = /^(#{1,6}\s|\s*[-*+]\s|\s*\d+\.\s|>\s)|\*\*|```/m;
const TOKEN_CHARS_RATIO = 4; // rough average; real tokenizers vary by model and language
const HIGHLIGHT_CLASS = 'text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-950 px-1 rounded';
const HUMAN_INPUT_PATTERN = /\[(?:\{humanInput\}|humanInput)\]/g;
const PLACEHOLDER_PATTERN = /\[(.*?)\]/g;
const BASE_RESERVED_KEYS = ['character', 'title', 'description', 'input', 'target', 'direction'];
/** Placeholders owned by the master prompt, so the customization form must ignore them. */
const BUILDER_RESERVED_KEYS = ['humaninput', '{humaninput}'];
/** Softer style for the whole input when its [VAR] values are highlighted individually. */
const HUMAN_INPUT_CLASS = 'text-indigo-600 dark:text-indigo-400 font-bold';

/** Config for the two generators that share the sub-modal. */
const SUB_PROMPTS = {
    desc: {
        title: 'Custom Description Generator',
        field: 'desc_prompt',
        prefix: 'desc_',
        emptyMessage: 'Template desc_prompt belum diatur.',
        reserved: BASE_RESERVED_KEYS,
    },
    image: {
        title: 'Custom Image Prompt Generator',
        field: 'image_prompt',
        prefix: 'img_',
        emptyMessage: 'Template image_prompt belum diatur.',
        reserved: [...BASE_RESERVED_KEYS, 'imageprompt'],
    },
};

const SUB_MODAL_BUTTONS = [
    { type: 'desc', label: 'Deskripsi Generator', icon: 'icon-[ri--file-text-line]' },
    { type: 'image', label: 'Referensi Gambar', icon: 'icon-[ri--image-line]' },
];

/** How the batch results are joined into one copyable block. */
const BATCH_FORMATS = [
    { id: 'blank', label: 'Dipisah baris kosong', join: (prompts) => prompts.join('\n\n') },
    { id: 'divider', label: 'Dipisah garis (---)', join: (prompts) => prompts.join('\n\n---\n\n') },
    { id: 'oneline', label: 'Satu baris per prompt', join: (prompts) => prompts.map((p) => p.replace(/\s*\n\s*/g, ' ')).join('\n') },
];
