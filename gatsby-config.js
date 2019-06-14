module.exports = {
  siteMetadata: {
    title: `Voice Works`,
    description: `All the latest in voice technology news`,
    author: `Big Tent`,
  },
  plugins: [
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
        name: `Voice Works`,
        short_name: `Voice Works`,
        start_url: `/`,
        background_color: `#161616`,
        theme_color: `#161616`,
        display: `standalone`,
        icon: `src/images/voiceworks-logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us3.list-manage.com/subscribe/post?u=515d397ea1ed1af680c99acb5&amp;id=6e4d9d0961",
      },
    },
  ],
}
