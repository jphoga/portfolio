module.exports = {
  siteMetadata: {
    title: `Jan's Portfolio`,
    author: `Jan Paul Hoga`,
    description: `Hi, I am Jan. A German full-stack programmer and consultant living in Japan. 
                  Follow me on my coding journey and see what life is like as a programmer in Tokyo.`,
    siteUrl: `https://google.com/`,
    social: {
      github: {
        link: `https://github.com/jphoga`,
        icon: `fab fa-github-square`
      },
      linkedin: {
       link: `https://www.linkedin.com/in/jan-paul-hoga`,
       icon: `fab fa-linkedin` 
      },
      email: {
       link: `mailto:janpaulhoga@gmail.com`,
       icon: `fas fa-at`
      },
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/project`,
        name: `project`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/about`,
        name: `about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-plugin-styled-components`,
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jan's Portfolio`,
        short_name: `Jan's Portfolio`,
        start_url: `/`,
        background_color: `#78F2E3`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/circle-cropped.png`,
        // icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
