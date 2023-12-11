import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import locales from './locales.json';
import configGenerator from './src/plugins/configGenerator';
import starlightLinksValidator from 'starlight-links-validator';
import starlightBlog from 'starlight-blog';

await configGenerator();

const authors = {
	nothingismagick: {
		name: 'Daniel Thompson-Yvetot',
		title: 'Tauri Co-Founder',
		picture: '/authors/nothingismagick.jpeg',
	},
	lucasfernog: {
		name: 'Lucas Nogueira',
		title: 'Tauri Co-Founder',
		picture: '/authors/lucasfernog.jpeg',
	},
	beanow: {
		name: 'Robin van Boven',
		title: 'Tauri Board Director',
		picture: '/authors/Beanow.png',
	},
	jbolda: {
		name: 'Jacob Bolda',
		title: 'Tauri Board Director',
		picture: '/authors/jbolda.jpeg',
	},
	lorenzolewis: {
		name: 'Lorenzo Lewis',
		title: 'Tauri Community Lead',
		picture: '/authors/lorenzolewis.png',
	},
	tweidinger: {
		name: 'Tillmann Weidinger',
		title: 'Tauri Security',
		picture: '/authors/tweidinger.png',
	},
	amrbashir: {
		name: 'Amr Bashir',
		title: 'Tauri Development',
		picture: '/authors/amrbashir.png',
	},
	wusyong: {
		name: 'Wu Yu Wei',
		title: 'Tauri Development Lead',
		picture: '/authors/wusyong.png',
	},
};

const site = 'https://beta.tauri.app';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		starlightLinksValidator(),
		starlightBlog({ authors }),
		starlight({
			title: 'Tauri',
			description: 'The cross-platform app building toolkit',
			logo: {
				dark: './src/assets/logo.svg',
				light: './src/assets/logo_light.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/tauri-apps/tauri',
				discord: 'https://discord.com/invite/tauri',
				twitter: 'https://twitter.com/TauriApps',
				mastodon: 'https://fosstodon.org/@TauriApps',
			},
			components: {
				SiteTitle: 'src/components/overrides/SiteTitle.astro',
				Footer: 'src/components/overrides/Footer.astro',
				MarkdownContent: 'starlight-blog/overrides/MarkdownContent.astro',
				Sidebar: 'starlight-blog/overrides/Sidebar.astro',
			},
			head: [
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: site + '/og.png?v=1' },
				},
				{
					tag: 'meta',
					attrs: { property: 'twitter:image', content: site + '/og.png?v=1' },
				},
			],
			// TODO: Be sure this is updated when the branch is switched
			editLink: {
				baseUrl: 'https://github.com/tauri-apps/tauri-docs/edit/next',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Quick Start',
					items: [
						{ label: 'What is Tauri?', link: 'guides' },
						{
							label: 'Prerequisites',
							translations: {
								es: 'Prerrequisitos',
							},
							link: 'guides/prerequisites',
						},
						{
							label: 'Create a Project',
							link: 'guides/create',
						},
						{
							label: 'Frontend Configuration',
							translations: {
								es: 'Configuración del Frontend',
							},
							link: 'guides/frontend',
						},
						{
							label: 'Upgrade & Migrate',
							link: 'guides/upgrade-migrate',
						},
						{
							label: 'Core Concepts',
							link: 'concepts',
						},
						{
							label: 'Troubleshooting',
							link: 'guides/troubleshoot',
						},
					],
				},
				{
					label: 'Guides',
					items: [
						{
							label: 'Develop',
							link: 'guides/develop/',
						},
						{
							label: 'Debug',
							link: 'guides/debug',
						},
						{
							label: 'Test',
							link: 'guides/test',
						},
						{
							label: 'Build',
							link: 'guides/build',
						},
						{
							label: 'Distribute',
							link: 'guides/distribute',
						},
						{
							label: 'Plugin Development',
							link: 'guides/plugins',
						},
					],
				},
				{
					label: 'References',
					items: [
						{
							label: 'Tauri Configuration',
							link: '2/reference/config',
						},
						{
							label: 'Command Line Interface (CLI)',
							link: '2/reference/cli',
						},
						{
							label: 'JavaScript API',
							link: '2/reference/js',
						},
						{
							label: 'Rust API (via Docs.rs)',
							// TODO: Is there a way to link this to the latest pre-released version?
							link: 'https://docs.rs/tauri/~2.0.0-alpha',
						},
					],
				},
				{
					label: 'Features & Recipes',
					autogenerate: { directory: 'features' },
				},
			],
			locales,
			lastUpdated: true,
		}),
	],
	markdown: {
		shikiConfig: {
			langs: ['powershell', 'ts', 'rust', 'bash', 'json', 'toml'],
		},
		rehypePlugins: [
			rehypeHeadingIds,
			[
				rehypeAutolinkHeadings,
				{
					behavior: 'wrap',
					properties: { ariaHidden: true, tabIndex: -1, class: 'heading-link' },
				},
			],
		],
	},
	redirects: {
		// Old blog url schema redirects
		'/blog/2022/06/19/tauri-1-0': '/blog/tauri-1-0',
		'/blog/tauri_1_0': '/blog/tauri-1-0',
		'/blog/2022/07/12/tauri-programme-turns-1-and-board-elections':
			'/blog/tauri-programme-turns-1-and-board-elections',
		'/blog/2022/09/15/tauri-1-1': '/blog/tauri-1-1',
		'/blog/2022/09/19/tauri-egui-0-1': '/blog/tauri-egui-0-1',
		'/blog/2022/11/18/tauri-1-2': '/blog/tauri-1-2',
		'/blog/2022/12/09/tauri-mobile-alpha': '/blog/tauri-mobile-alpha',
		'/blog/2023/02/03/tauri-2-0-0-alpha-3': '/blog/tauri-2-0-0-alpha-3',
		'/blog/2023/02/09/tauri-community-growth-and-feedback':
			'/blog/tauri-community-growth-and-feedback',
		'/blog/2023/03/01/create-tauri-app-version-3-released':
			'/blog/create-tauri-app-version-3-released',
		'/blog/2023/03/20/tauri-2-0-0-alpha-4': '/blog/tauri-2-0-0-alpha-4',
		'/blog/2023/05/03/tauri-1-3': '/blog/tauri-1-3',
		'/blog/2023/06/14/tauri-1-4': '/blog/tauri-1-4',
		'/blog/2023/06/15/tauri-board-elections-and-governance-updates':
			'/blog/tauri-board-elections-and-governance-updates',
		'about/intro': 'about/philosophy',
		// v1 /guides/development -> /guides/develop
		'/v1/guides/development/development-cycle': '/guides/develop/development-cycle',
		'/v1/guides/development/updating-dependencies': '/guides/develop/updating-dependencies',
		// i18n fr
		'/fr/v1/guides/development/development-cycle/': '/fr/guides/develop/development-cycle/',
		'/fr/v1/guides/development/updating-dependencies/': '/fr/guides/develop/updating-dependencies/',
		// i18n ko // redirect to root because locale "ko" is disabled
		'/ko/v1/guides/development/development-cycle/': '/guides/develop/development-cycle/',
		'/ko/v1/guides/development/updating-dependencies/': '/guides/develop/updating-dependencies/',
		// i18n zh-cn
		'/zh-cn/v1/guides/development/development-cycle/': '/zh-cn/guides/develop/development-cycle/',
		'/zh-cn/v1/guides/development/updating-dependencies/':
			'/zh-cn/guides/develop/updating-dependencies/',
		// i18n it // redirect to root because locale "it" is disabled
		'/it/v1/guides/development/development-cycle/': '/guides/develop/development-cycle/',
		'/it/v1/guides/development/updating-dependencies/': '/guides/develop/updating-dependencies/',
		//
		// v1 /guides/building -> /guides/build
		'/v1/guides/building': '/guides/build',
		'/v1/guides/building/windows': '/guides/build/windows',
		'/v1/guides/building/macos': '/guides/build/macos',
		'/v1/guides/building/linux': '/guides/build/linux',
		'/v1/guides/building/cross-platform': '/guides/build/cross-platform',
		'/v1/guides/building/app-size': '/guides/build/app-size',
		'/v1/guides/building/sidecar': '/guides/build/sidecar',
		'/v1/guides/building/resources': '/guides/build/resources',
		// i18n fr
		'/fr/v1/guides/building': '/fr/guides/build',
		'/fr/v1/guides/building/windows': '/fr/guides/build/windows',
		'/fr/v1/guides/building/macos': '/fr/guides/build/macos',
		'/fr/v1/guides/building/linux': '/fr/guides/build/linux',
		'/fr/v1/guides/building/cross-platform': '/fr/guides/build/cross-platform',
		'/fr/v1/guides/building/app-size': '/fr/guides/build/app-size',
		'/fr/v1/guides/building/sidecar': '/fr/guides/build/sidecar',
		'/fr/v1/guides/building/resources': '/fr/guides/build/resources',
		// i18n ko // redirect to root because locale "ko" is disabled
		'/ko/v1/guides/building': '/guides/build',
		'/ko/v1/guides/building/windows': '/guides/build/windows',
		'/ko/v1/guides/building/macos': '/guides/build/macos',
		'/ko/v1/guides/building/linux': '/guides/build/linux',
		'/ko/v1/guides/building/cross-platform': '/guides/build/cross-platform',
		'/ko/v1/guides/building/app-size': '/guides/build/app-size',
		'/ko/v1/guides/building/sidecar': '/guides/build/sidecar',
		'/ko/v1/guides/building/resources': '/guides/build/resources',
		// i18n zh-cn/
		'/zh-cn/v1/guides/building': '/zh-cn/guides/build',
		'/zh-cn/v1/guides/building/windows': '/zh-cn/guides/build/windows',
		'/zh-cn/v1/guides/building/macos': '/zh-cn/guides/build/macos',
		'/zh-cn/v1/guides/building/linux': '/zh-cn/guides/build/linux',
		'/zh-cn/v1/guides/building/cross-platform': '/zh-cn/guides/build/cross-platform',
		'/zh-cn/v1/guides/building/app-size': '/zh-cn/guides/build/app-size',
		'/zh-cn/v1/guides/building/sidecar': '/zh-cn/guides/build/sidecar',
		'/zh-cn/v1/guides/building/resources': '/zh-cn/guides/build/resources',
		// i18n it // redirect to root because locale "it" is disabled
		'/it/v1/guides/building': '/guides/build',
		'/it/v1/guides/building/windows': '/guides/build/windows',
		'/it/v1/guides/building/macos': '/guides/build/macos',
		'/it/v1/guides/building/linux': '/guides/build/linux',
		'/it/v1/guides/building/cross-platform': '/guides/build/cross-platform',
		'/it/v1/guides/building/app-size': '/guides/build/app-size',
		'/it/v1/guides/building/sidecar': '/guides/build/sidecar',
		'/it/v1/guides/building/resources': '/guides/build/resources',
	},
});
