// Script pihak ketiga yang dimuat malas (setelah load + interaksi pertama pengguna).
// Params dikirim dari layouts/_partials/baseof/js-bottom.html (js.Build params):
//   gaId, adsenseId : dari config/site-ids.html
//   fallbackMs      : params.thirdPartyFallbackMs di hugo.toml (0 = hanya menunggu interaksi)
import * as params from '@params';
import { runAfterInteraction } from '../lib/defer.js';
import { loadAdSense } from './adsense.js';
import { loadGoogleAnalytics } from './analytics.js';

runAfterInteraction(() => loadGoogleAnalytics(params.gaId), params.fallbackMs);
runAfterInteraction(() => loadAdSense(params.adsenseId), params.fallbackMs);
