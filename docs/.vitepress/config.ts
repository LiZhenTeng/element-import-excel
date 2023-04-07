import { defineConfig } from 'vitepress'
import type { UserConfig, DefaultTheme } from 'vitepress'
import { mdPlugin } from './config/plugins'

export const config: UserConfig<DefaultTheme.Config> = {
    base: '/element-import-excel/',
    title: 'Element Import Excel',
    lastUpdated: true,
    cleanUrls: true,
    themeConfig: {
        nav: [{
            text: 'Guide',
            link: '/guide/getting-started',
            activeMatch: '/guide/'
        }, {
            text: 'Examples',
            link: '/examples/basic',
            activeMatch: '/examples/'
        }],
        sidebar: {
            '/guide/': [{
                text: 'Getting Started',
                link: '/guide/getting-started'
            }, {
                text: 'Attributes',
                link: '/guide/attributes'
            }, {
                text: 'Events',
                link: '/guide/events'
            }],
            '/examples/':[{
                text:'Basic',
                link:'/examples/basic'
            }]
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/LiZhenTeng/element-import-excel' }
        ],
    },
    markdown:{
        config:(md)=>mdPlugin(md)
    }
}

export default defineConfig(config)