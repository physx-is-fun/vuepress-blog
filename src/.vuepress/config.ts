import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { path } from '@vuepress/utils'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

export default defineUserConfig({
  base: "/",
  port: 8081,
  dest: 'docs',
  lang: "en-US",
  title: "Balázs Tari",
  description: "A blog using vuepress-theme-hope",
  theme,
  plugins: [
    // https://v2.vuepress.vuejs.org/reference/plugin/register-components.html
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),

    // https://v2.vuepress.vuejs.org/reference/plugin/search.html#search
    searchPlugin({
      // getExtraFields: (page) => page.frontmatter.tags,
      maxSuggestions: 15,
      hotKeys: ['s', '/'],
      locales: {
        '/': {
          placeholder: 'Search',
        }
      }
    })
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
