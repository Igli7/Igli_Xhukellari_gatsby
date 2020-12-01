/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()
module.exports = {
  /* Your site config here */

  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["CONTENTFUL_SPACE_ID", "CONTENTFUL_ACCESS_TOKEN"],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    "gatsby-remark-reading-time",
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "React go",
        short_name: "Reactgo",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/images/gatsby-icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
  ],
}
