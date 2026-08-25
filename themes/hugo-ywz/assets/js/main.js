// assets/js/main.js
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

// Impor Swiper dan modul yang dibutuhkan (misal: FreeMode & Mousewheel)
import Swiper from 'swiper';
import { FreeMode, Mousewheel } from 'swiper/modules';

Alpine.plugin(collapse)

// Daftarkan Swiper secara global agar bisa dipanggil di Alpine component
window.Swiper = Swiper;
window.SwiperModules = [FreeMode, Mousewheel];

// Impor file pendukung Anda di sini
import './alpine-store.js'
import './code.js'

window.Alpine = Alpine

Alpine.start()