import type { PlausibleAnalyticsPluginOptions } from '../../shared/index.js';
declare const dataLayer: any[];
declare const gtag: (...args: any[]) => void;
declare global {
    interface Window {
        dataLayer?: typeof dataLayer;
        gtag?: typeof gtag;
    }
}
/**
 */
export declare const usePlausibleAnalytics: (options: PlausibleAnalyticsPluginOptions) => void;
export {};
