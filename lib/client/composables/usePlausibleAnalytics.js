/**
 *
 */
export const usePlausibleAnalytics = (options) => {
    // avoid duplicated import
    if (window.dataLayer && window.gtag) {
        return;
    }
    // insert gtag `<script>` tag
    const gtagScript = document.createElement('script');
    gtagScript.src = `https://analytics.sunthar.com/js/plausible.js`;
    gtagScript.async = true;
    document.head.appendChild(gtagScript);
    // insert gtag snippet
    window.dataLayer = window.dataLayer || [];
    // the gtag function must use `arguments` object to forward parameters
    window.gtag = function () {
        // eslint-disable-next-line prefer-rest-params
        dataLayer.push(arguments);
    };
    gtag('js', new Date());
    if (options.debug) {
        gtag('config', options.id, { debug_mode: true });
    }
    else {
        gtag('config', options.id);
    }
};
