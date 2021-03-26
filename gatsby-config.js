const { readdirSync } = require("fs");
const path = require("path");

function filesOf(dir) {
  return readdirSync(path.join("content", dir)).map((file) =>
    path.join(dir, file.split(".").shift())
  );
}

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        root: __dirname,
        //algoliaApiKey: "9bfd968ece86da2054ca34939340f716",
        //algoliaIndexName: "top-gg",
        siteName: "Tea Cup documentation",
        description: "Tea Cup documentation",
        githubRepo: "TheTeaCup/docs.theteacup.dev",
        baseUrl: "https://docs.theteacup.dev",
        // defaultVersion: "0",
        // versions: {
        //   1: "version-1",
        // },
        sidebarCategories: {
           null: ["getting-started"],
         // resources: filesOf("resources"),
         // libraries: filesOf("libraries"),
         // api: filesOf("api"),
        },
      },
    },
    "gatsby-plugin-styled-components",
  ],
};
