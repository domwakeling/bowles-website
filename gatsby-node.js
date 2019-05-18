const path = require('path');
const createPaginatedPages = require('gatsby-paginate');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        let slug = createFilePath({ node, getNode, basePath: `pages` });
        if (/src\/news/.test(node.fileAbsolutePath)) {
            slug = "/news" + slug;
        }
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
};

exports.createPages = ({ actions, graphql}) => {
    const { createPage } = actions;

    const newsPostTemplate = path.resolve('src/templates/news-post.js');

    return graphql(`{
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    html
                    frontmatter {
                        contentType
                        title
                        date(formatString: "D MMMM YYYY")
                    }
                }
            }
        }
    }`).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }
        createPaginatedPages({
            edges: result.data.allMarkdownRemark.edges,
            createPage: createPage,
            pageTemplate: "src/templates/news-page.js",
            pageLength: 5, // This is optional and defaults to 10 if not used
            pathPrefix: "news", // This is optional and defaults to an empty string if not used
        });
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            let templateType;
            switch (node.frontmatter.contentType) {
                default:
                    templateType = newsPostTemplate;
            }
            createPage({
                path: node.fields.slug,
                component: templateType,
                context: {
                    slug: node.fields.slug
                }
            });
        });
    });
}