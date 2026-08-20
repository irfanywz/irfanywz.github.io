// assets/js/main.js
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

Alpine.plugin(collapse)

// Impor file pendukung Anda di sini
import './alpine-store.js'
import './code.js'

window.Alpine = Alpine

Alpine.start()