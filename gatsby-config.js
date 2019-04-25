const proxy = require('http-proxy-middleware');

module.exports = {
  __experimentalThemes: ['gatsby-theme-docz'],
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:34567',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    );
  },
  siteMetadata: {
    title: `React and Typescript`,
    description: `React and TypeScript: The Unofficial Documentation`,
    author: `@aryanjabbari`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout.tsx'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `react-and-typescript`,
        short_name: `react-and-typescript`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
