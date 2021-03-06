module.exports = {
  siteMetadata: {
    title: `Cheatsheet by Truxxu`,
    name: `Cheatsheet`,
    siteUrl: `https://gatsby-theme-document.netlify.com`,
    description: `My go-to place to find all those useful tips and tricks needed when seting up a new machine`,
    social: [
      {
        name: `github`,
        url: `https://github.com/truxxu/cheatsheet`
      },
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/dev"],
      ignoreIndex: true
    }
  },
  pathPrefix: '/cheatsheet',
  plugins: [{ resolve: `gatsby-theme-document` }]
};
