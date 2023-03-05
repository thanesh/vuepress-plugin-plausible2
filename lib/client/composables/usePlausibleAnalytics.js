/**
 *
 */
export const usePlausibleAnalytics = (options) => {
    // avoid duplicated import
    if (window.dataLayer && window.gtag) {
        return;
    }
    // insert gtag `<script>` tag
    const ptagScript = document.createElement('script');
    ptagScript.src = `https://analytics.sunthar.com/js/plausible.js`;
    ptagScript.async = true;
    document.head.appendChild(ptagScript);
    // insert gtag snippet
    window.dataLayer = window.dataLayer || [];
    // the ptag function must use `arguments` object to forward parameters
    window.ptag = function () {
        // eslint-disable-next-line prefer-rest-params
        dataLayer.push(arguments);
    };
    ptag('js', new Date());
    if (options.debug) {
        ptag('config', options.id, { debug_mode: true });
    }
    else {
        ptag('config', options.id);
    }
};
