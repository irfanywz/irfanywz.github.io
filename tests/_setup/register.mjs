// Dimuat otomatis oleh scripts/test.mjs (lewat NODE_OPTIONS=--import). Jangan dijalankan manual.
import { register } from 'node:module';

register('./loader.mjs', import.meta.url);
