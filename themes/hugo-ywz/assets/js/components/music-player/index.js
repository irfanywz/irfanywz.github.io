// Music player di halaman jurnal (Alpine component "musicPlayerApp").
// Dibuild lewat layouts/_partials/components/inline-bundle.html; params.playlistUrl = URL playlist-music/index.json.
import * as params from '@params';
import { nextIndex, prevIndex } from '../../lib/cycle.js';
import { fetchJson } from '../../lib/http.js';
import {
    LOOP, filterTracks, flattenCategories, formatTime, indexAfterReorder,
    loopIconClass, shuffled, volumeIconClass,
} from './playlist.js';
import { readSettings, writeSettings } from './settings.js';
import { ensureYouTubeApi } from './youtube.js';

const CONFIG = Object.freeze({
    playlistUrl: params.playlistUrl,
    storageKey: 'musicPlayerSettings',
    youtubeApiSrc: 'https://www.youtube.com/iframe_api',
    youtubeScriptId: 'yt-api-script',
    playerElementId: 'youtube-player',
    defaultVolume: 80,
    progressIntervalMs: 500,
});

/** Dipakai bila pengaturan tersimpan ada tapi sebagian kunci hilang. */
const SETTING_DEFAULTS = Object.freeze({
    volume: CONFIG.defaultVolume,
    isMuted: false,
    loopMode: LOOP.OFF,
    isShuffled: false,
});

document.addEventListener('alpine:init', () => {
    Alpine.data('musicPlayerApp', () => ({
        LOOP,

        // --- UI state ---
        musicModalOpen: false,
        musicSearch: '',
        isLoadingAPI: false,

        // --- Playlist state ---
        originalPlaylist: [],   // canonical order
        playlist: [],           // current play order (may be shuffled)
        currentTrackIndex: 0,

        // --- Playback settings (persisted) ---
        volume: CONFIG.defaultVolume,
        previousVolume: CONFIG.defaultVolume,
        isMuted: false,
        loopMode: LOOP.OFF,
        isShuffled: false,

        // --- Playback state ---
        player: null,
        playerReady: false,
        autoPlayOnReady: false,
        isPlaying: false,
        duration: 0,
        currentTime: 0,
        progress: 0,
        progressTimer: null,
        consecutiveErrors: 0,

        // ==============================================================
        // Lifecycle
        // ==============================================================
        async init() {
            this.loadSettings();
            await this.loadPlaylist();
            if (this.isShuffled) this.playlist = shuffled(this.originalPlaylist);
        },

        destroy() {
            this.stopProgressTimer();
            if (this.player && typeof this.player.destroy === 'function') this.player.destroy();
        },

        async loadPlaylist() {
            try {
                const data = await fetchJson(CONFIG.playlistUrl);
                this.originalPlaylist = flattenCategories(data?.categories || []);
                this.playlist = [...this.originalPlaylist];
            } catch (e) {
                console.error('Gagal memuat playlist:', e);
            }
        },

        // ==============================================================
        // Derived state
        // ==============================================================
        get hasTracks() {
            return this.playlist.length > 0;
        },

        get currentTrack() {
            return this.playlist[this.currentTrackIndex] || {};
        },

        get filteredPlaylist() {
            return filterTracks(this.playlist, this.musicSearch);
        },

        get volumeIconClass() {
            return volumeIconClass(this);
        },

        get loopIconClass() {
            return loopIconClass(this.loopMode);
        },

        isCurrent(track) {
            return this.currentTrack.youtubeId === track.youtubeId;
        },

        formatTime,

        // ==============================================================
        // YouTube engine
        // ==============================================================
        initYoutube() {
            ensureYouTubeApi({
                scriptId: CONFIG.youtubeScriptId,
                src: CONFIG.youtubeApiSrc,
                onReady: () => this.setupPlayer(),
            });
        },

        setupPlayer() {
            if (!this.hasTracks || this.player) return;
            this.player = new YT.Player(CONFIG.playerElementId, {
                height: '0',
                width: '0',
                playerVars: { playsinline: 1 },
                events: {
                    onReady: () => this.onPlayerReady(),
                    onStateChange: (e) => this.onPlayerStateChange(e),
                    onError: () => this.onPlayerError(),
                },
            });
        },

        onPlayerReady() {
            this.playerReady = true;
            this.isLoadingAPI = false;
            this.applyVolume();
            if (this.autoPlayOnReady) {
                this.autoPlayOnReady = false;
                // Load whichever track is selected *now*, not when the player was created.
                this.loadCurrentTrack();
            }
        },

        onPlayerStateChange({ data }) {
            if (data === YT.PlayerState.PLAYING) {
                this.isPlaying = true;
                this.consecutiveErrors = 0;
                this.duration = this.player.getDuration();
                this.startProgressTimer();
            } else {
                this.isPlaying = false;
                this.stopProgressTimer();
            }

            if (data === YT.PlayerState.ENDED) this.onTrackEnded();
        },

        onTrackEnded() {
            const isLastTrack = this.currentTrackIndex >= this.playlist.length - 1;

            if (this.loopMode === LOOP.ONE) {
                this.player.seekTo(0);
                this.player.playVideo();
            } else if (this.loopMode === LOOP.ALL || !isLastTrack) {
                this.nextTrack();
            }
        },

        /** Skip unavailable videos, but stop if every track keeps failing. */
        onPlayerError() {
            this.consecutiveErrors++;
            if (this.consecutiveErrors >= this.playlist.length) {
                this.isPlaying = false;
                return;
            }
            this.nextTrack();
        },

        /** Returns true when the player can be used right now; otherwise starts loading it. */
        ensurePlayer() {
            if (this.playerReady) return true;
            if (!this.hasTracks) return false;

            this.autoPlayOnReady = true;
            this.isLoadingAPI = true;
            this.initYoutube();
            return false;
        },

        loadCurrentTrack() {
            this.player.loadVideoById(this.currentTrack.youtubeId);
        },

        // ==============================================================
        // Playback controls
        // ==============================================================
        playTrackById(youtubeId) {
            const index = this.playlist.findIndex(t => t.youtubeId === youtubeId);
            if (index === -1) return;

            if (index === this.currentTrackIndex && this.playerReady) {
                this.togglePlay();
                return;
            }
            this.selectTrack(index);
        },

        selectTrack(index) {
            this.currentTrackIndex = index;
            this.resetProgress();
            if (this.ensurePlayer()) this.loadCurrentTrack();
        },

        togglePlay() {
            if (!this.ensurePlayer()) return;
            if (this.isPlaying) this.player.pauseVideo();
            else this.player.playVideo();
        },

        nextTrack() {
            if (!this.hasTracks) return;
            this.selectTrack(nextIndex(this.currentTrackIndex, this.playlist.length));
        },

        prevTrack() {
            if (!this.hasTracks) return;
            this.selectTrack(prevIndex(this.currentTrackIndex, this.playlist.length));
        },

        toggleLoop() {
            this.loopMode = (this.loopMode + 1) % 3;
            this.saveSettings();
        },

        toggleShuffle() {
            this.isShuffled = !this.isShuffled;

            const currentId = this.currentTrack.youtubeId;
            this.playlist = this.isShuffled ? shuffled(this.originalPlaylist) : [...this.originalPlaylist];

            // Keep pointing at the same song after reordering.
            this.currentTrackIndex = indexAfterReorder(this.playlist, currentId);

            this.saveSettings();
        },

        // ==============================================================
        // Volume
        // ==============================================================
        applyVolume() {
            if (this.playerReady && typeof this.player?.setVolume === 'function') {
                this.player.setVolume(this.isMuted ? 0 : this.volume);
            }
        },

        setVolume(value) {
            this.volume = value;
            if (value > 0) this.isMuted = false;
            this.applyVolume();
            this.saveSettings();
        },

        toggleMute() {
            this.isMuted = !this.isMuted;
            if (this.isMuted) {
                this.previousVolume = this.volume;
                this.volume = 0;
            } else {
                this.volume = this.previousVolume > 0 ? this.previousVolume : CONFIG.defaultVolume;
            }
            this.applyVolume();
            this.saveSettings();
        },

        // ==============================================================
        // Progress
        // ==============================================================
        startProgressTimer() {
            this.stopProgressTimer();
            this.progressTimer = setInterval(() => {
                if (typeof this.player?.getCurrentTime !== 'function') return;
                this.currentTime = this.player.getCurrentTime();
                this.duration = this.player.getDuration();
                this.progress = (this.currentTime / this.duration) * 100 || 0;
            }, CONFIG.progressIntervalMs);
        },

        stopProgressTimer() {
            clearInterval(this.progressTimer);
            this.progressTimer = null;
        },

        resetProgress() {
            this.currentTime = 0;
            this.duration = 0;
            this.progress = 0;
        },

        seek(event) {
            if (!this.playerReady || !this.duration) return;
            const bar = event.currentTarget;
            const ratio = (event.clientX - bar.getBoundingClientRect().left) / bar.offsetWidth;
            const newTime = ratio * this.duration;

            this.player.seekTo(newTime, true);
            this.currentTime = newTime;
            this.progress = ratio * 100;
        },

        // ==============================================================
        // Persistence
        // ==============================================================
        loadSettings() {
            const saved = readSettings(CONFIG.storageKey, SETTING_DEFAULTS);
            if (saved) Object.assign(this, saved);
        },

        saveSettings() {
            writeSettings(CONFIG.storageKey, {
                volume: this.volume,
                isMuted: this.isMuted,
                loopMode: this.loopMode,
                isShuffled: this.isShuffled,
            });
        },
    }));
});
