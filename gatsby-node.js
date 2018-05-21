const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;
    if (node.internal.type === 'MarkdownRemark') {
        let slug = createFilePath({ node, getNode, basePath: `pages` });
        const regexp = new RegExp("src/news");
        if (regexp.test(node.fileAbsolutePath)) {
            slug = "/news" + slug;
        }
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
};

exports.createPages = ({ boundActionCreators, graphql}) => {
    const { createPage } = boundActionCreators;

    const newsPostTemplate = path.resolve('src/templates/news-post.js');
    const racePageTemplate = path.resolve('src/templates/race-template.js');

    return graphql(`{
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        contentType
                    }
                }
            }
        }
    }`).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            let templateType;
            switch (node.frontmatter.contentType) {
                case 'race':
                    templateType = racePageTemplate;
                    break;
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