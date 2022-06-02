const guides = [
  {
    type: 'autogenerated',
    dirName: 'guides',
  },
]

const api = [
  'api/config',
  'api/cli',
  {
    type: 'link',
    label: 'Rust (via Docs.rs)',
    href: 'https://docs.rs/tauri/1.0.0-rc/',
  },
  {
    type: 'category',
    label: 'JavaScript / TypeScript',
    link: {
      type: 'doc',
      id: 'api/js/README',
    },
    items: [
      {
        type: 'autogenerated',
        dirName: 'api/js/modules',
      },
    ],
  },
]

module.exports = {
  guides,
  api,
}
