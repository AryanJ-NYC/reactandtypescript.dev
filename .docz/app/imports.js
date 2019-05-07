export const imports = {
  'src/pages/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-index" */ 'src/pages/index.mdx'
    ),
  'src/pages/installation/create-react-app.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-installation-create-react-app" */ 'src/pages/installation/create-react-app.mdx'
    ),
}
