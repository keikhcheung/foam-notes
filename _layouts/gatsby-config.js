module.exports = {
  pathPrefix: ``,
  siteMetadata: {
    title: `kei’s notes`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        rootNote: "/readme",
        contentPath: `${__dirname}/..`,
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
