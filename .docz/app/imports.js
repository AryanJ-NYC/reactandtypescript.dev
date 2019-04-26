export const imports = {
  'src/pages/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-index" */ 'src/pages/index.mdx'
    ),
  'src/pages/examples/functional-components.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-examples-functional-components" */ 'src/pages/examples/functional-components.mdx'
    ),
  'src/pages/installation/create-react-app.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-installation-create-react-app" */ 'src/pages/installation/create-react-app.mdx'
    ),
}
