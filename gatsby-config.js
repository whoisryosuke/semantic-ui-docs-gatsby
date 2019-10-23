module.exports = {
  siteMetadata: {
    title: `Semantic UI Documentation`,
    description: `The style guide and component library for Semantic UI`,
    author: `@whoisryosuke`,
    sidebar: {
      pages: [
        {
          slug: "/getting-started",
          title: "Getting Started",
        },
        {
          slug: "/guidelines/overview",
          title: "Guidelines",
          pages: [
            {
              slug: "/guidelines/overview",
              title: "Overview",
            },
            {
              slug: "/guidelines/design-principles",
              title: "Design Principles",
            },
          ],
        },
        {
          slug: "/styles/overview",
          title: "Styles",
          pages: [
            {
              slug: "/styles/overview",
              title: "Overview",
            },
            {
              slug: "/styles/design-tokens",
              title: "Design tokens",
            },
            {
              slug: "/styles/color",
              title: "Color",
            },
            {
              slug: "/styles/typography",
              title: "Typography",
            },
            {
              slug: "/styles/iconography",
              title: "Iconography",
            },
            // For Design Systems:
            // {
            //   slug: "/styles/imagery",
            //   title: "Imagery",
            // },
            // {
            //   slug: "/styles/motion",
            //   title: "Motion",
            // },
            // {
            //   slug: "/styles/voice-and-tone",
            //   title: "Voice and tone",
            // },
          ],
        },
        {
          slug: "/components/button",
          title: "Components",
          pages: [
            {
              slug: "/components/button",
              title: "Button",
            },
            {
              slug: "/components/container",
              title: "Container",
            },
            {
              slug: "/components/card",
              title: "Card",
            },
            {
              slug: "/components/divider",
              title: "Divider",
            },
            {
              slug: "/components/input",
              title: "Input",
            },
            {
              slug: "/components/grid",
              title: "Grid",
            },
            {
              slug: "/components/list",
              title: "List",
            },
          ],
        },
        {
          slug: "/support",
          title: "Support",
        },
      ],
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `component-docs`,
        path: `${__dirname}/content/definitions`,
        // ignore: [`**/.stories.js`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `page-docs`,
        path: `${__dirname}/content/pages`,
        ignore: [`**/.js`], // ignore React page files, only MDX needed
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
