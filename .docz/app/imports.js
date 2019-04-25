export const imports = {
  'src/pages/examples.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-examples" */ 'src/pages/examples.mdx'
    ),
  'src/pages/functional-components.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-functional-components" */ 'src/pages/functional-components.mdx'
    ),
}
