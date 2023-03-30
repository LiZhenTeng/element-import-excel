import { defineConfig } from 'vitepress'
import type { UserConfig, DefaultTheme } from 'vitepress'

export const config: UserConfig<DefaultTheme.Config> = {
    base: '/element-import-excel/',
    title: 'Element Import Excel',
    lastUpdated: true,
    cleanUrls: true,
    themeConfig: {
        sidebar: [{
            text: 'Getting Started',
            link: '/guide/getting-started'
        }, {
            text: 'Attributes',
            link: '/guide/attributes'
        }, {
            text: 'Events',
            link: '/guide/events'
        }],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/LiZhenTeng/element-import-excel' }
        ],
    },
}

export default defineConfig(config)