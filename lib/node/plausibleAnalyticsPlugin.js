import { getDirname, logger, path } from '@vuepress/utils';
const __dirname = getDirname(import.meta.url);
export const plausibleAnalyticsPlugin = (options) => (app) => {
    const plugin = {
        name: '@vuepress/plugin-plausible-analytics',
    };
    if (!options.id) {
        logger.warn(`[${plugin.name}] 'id' is required`);
        return plugin;
    }
    // returns an empty plugin in dev mode when debug mode is not enabled
    if (app.env.isDev && !options.debug) {
        return plugin;
    }
    return {
        ...plugin,
        clientConfigFile: path.resolve(__dirname, '../client/config.js'),
        define: {
            __PLAUSIBLE_OPTIONS__: options,
        },
    };
};
