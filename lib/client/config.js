import { defineClientConfig } from '@vuepress/client';
import { usePlausibleAnalytics } from './composables/index.js';
const options = __PLAUSIBLE_OPTIONS__;
export default defineClientConfig({
    enhance() {
        if (__VUEPRESS_SSR__)
            return;
        usePlausibleAnalytics(options);
    },
});
