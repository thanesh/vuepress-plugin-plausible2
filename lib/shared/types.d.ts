/**
 * Options for @vuepress/plugin-google-analytics
 */
export interface PlausibleAnalyticsPluginOptions {
    /**
     * The Measurement ID of Google Analytics 4, which should start with `'G-'`.
     */
    id: string;
    /**
     * Enable debug mode.
     */
    debug?: boolean;
}
