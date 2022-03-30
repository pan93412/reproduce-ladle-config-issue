import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default {
    vitePlugins: [
        createSvgIconsPlugin({
            iconDirs: [new URL('../icons', import.meta.url).pathname],
            symbolId: 'icon-[name]',
        }),
    ],
};
