const path = require('path');

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
                    excerpt(pruneLength: 250)
                    html
                    id
                    frontmatter {
                        date
                        path
                        title
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
                    templateType= newsPostTemplate;
            }
            createPage({
                path: node.frontmatter.path,
                component: templateType,
                context: {}
            });
        });
    });
}