export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60f4c5138f140b79ef9d0e18",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-x23v494s",
                  apiId: "a213d452-d168-482e-9cb9-6f612937cbf8",
                },
                {
                  buildHookId: "60f4c513f4d13b6cfd77f37d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-zrotnx62",
                  apiId: "ee419df5-1733-4815-bbd4-02cfd04e017e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/codybarr/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-zrotnx62.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
