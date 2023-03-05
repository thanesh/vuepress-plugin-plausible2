import type { PlausibleAnalyticsPluginOptions } from '../../shared/index.js';
declare const dataLayer: any[];
declare const gtag: (...args: any[]) => void;
declare global {
    interface Window {
        dataLayer?: typeof dataLayer;
        ptag?: typeof ptag;
    }
}
/**
 */
export declare const usePlausibleAnalytics: (options: PlausibleAnalyticsPluginOptions) => void;
export {};
