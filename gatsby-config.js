const eyeglass = require('eyeglass');

module.exports = {
  siteMetadata: {
    title: `Cycle 7`,
    description: `A rapid innovation process guaranteed to deliver`,
    author: `@buildit_tech`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markdown-pages`,
    //     path: `${__dirname}/src/markdown-pages`,
    //   },
    // },
    // `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-T4M7Q68",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        gtmAuth: "asSE5ymiFEeLCYtPpk60Ig",
        gtmPreview: "env-2",
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `Cycle 7`,
        short_name: `C7`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#008d7c`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: eyeglass()
    }
  ],
}
