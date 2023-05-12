import { defineConfig } from 'astro/config'
import prefetch from '@astrojs/prefetch'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import i18n from 'astro-i18n'
import Icons from 'unplugin-icons/vite'
import { extractImageClass } from './src/plugins/remark-extract-image-class'
import { rewriteMarkdownLinks } from './src/plugins/remark-rewrite-markdown-links'
import { nonDefaultLocales } from './astro.i18n.config'
import solidJs from '@astrojs/solid-js'
import mdx from '@astrojs/mdx'
import tauriCodeThemeDark from './src/styles/code-theme.json'

// https://astro.build/config
export default defineConfig({
  site: 'https://tauri-dev.netlify.app',
  // trailingSlash: 'always',
  integrations: [
    i18n(),
    prefetch(),
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ...nonDefaultLocales.reduce(
            (a, v) => ({
              ...a,
              [v]: v,
            }),
            {}
          ),
        },
      },
    }),
    solidJs(),
    mdx(),
  ],
  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
      }),
    ],
  },
  markdown: {
    remarkPlugins: [extractImageClass, rewriteMarkdownLinks],
    shikiConfig: { theme: tauriCodeThemeDark },
  },
})
