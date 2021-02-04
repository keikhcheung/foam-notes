module.exports = {
  pathPrefix: ``,
  siteMetadata: {
    title: `kei’s notes`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/notes/about",
        contentPath: `${__dirname}/../notes`,
        ignore: [
          "**/_layouts/**",
          "**/.git/**",
          "**/.github/**",
          "**/.vscode/**",
        ],
      },
    },
    `gatsby-plugin-favicon`
  ],
};
