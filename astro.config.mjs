import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Tauri',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/tauri-apps/tauri',
        discord: 'https://github.com/tauri-apps/tauri',
        mastodon: 'https://github.com/tauri-apps/tauri',
        twitter: 'https://github.com/tauri-apps/tauri',
      },
      editLink: {
        baseUrl: 'https://github.com/tauri-apps/tauri-docs/edit/dev',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Quick Start',
          items: [
            { label: 'Why Tauri?', link: '/2/guide/' },
            { label: 'Prerequisites', link: '/2/guide/prerequisites' },
            {
              label: 'Create a Project',
              link: '/2/guide/create/',
            },
            {
              label: 'Plugins',
              link: '/2/plugin/',
            },
            { label: 'Blog (temporary)', link: '/blog/' },
          ],
        },
        {
          label: 'Guides',
          items: [
            {
              label: 'Build & Distribute',
              link: '/2/guide/build-distribute',
            },
            { label: 'Customize', link: '/2/guide/customize/' },
            {
              label: 'Inter-Process Communication',
              link: '#',
            },
            {
              label: 'Create a Plugin',
              link: '/2/guide/create-plugin',
            },
            {
              label: 'Troubleshoot',
              link: '/2/guide/troubleshoot',
            },
            {
              label: 'More Guides',
              link: '/2/guide/list',
            },
          ],
        },
        {
          label: 'Reference',
          items: [
            {
              label: 'Project Structure',
              link: '#',
            },
            {
              label: 'Command Line Interface (CLI)',
              link: '#',
            },
            {
              label: 'Tauri Config',
              link: '#',
            },
            {
              label: 'JavaScript API',
              link: '#',
            },
            {
              label: 'Rust API',
              link: '#',
            },
          ],
        },
        {
          label: 'Tauri v1',
          autogenerate: { directory: '1', collapsed: true },
        },
      ],
    }),
  ],
  markdown: {
    shikiConfig: {
      langs: ['powershell'],
    },
  },
  experimental: {
    assets: true,
  },
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
