const path = require('path');
const _ = require("lodash");
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
        // deal with errors
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        // create paginated news pages for the overall ...
        createPaginatedPages({
            edges: result.data.allMarkdownRemark.edges,
            createPage: createPage,
            pageTemplate: "src/templates/news-page.js",
            pageLength: 5, // This is optional and defaults to 10 if not used
            pathPrefix: "news", // This is optional and defaults to an empty string if not used
        });

        // create individual news pages
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

        // look for month/year combinations; start wth an empty array
        let monthYears = [];
        // then push all date combos in
        result.data.allMarkdownRemark.edges.forEach(({ node}) => {
            monthYears.push(node.frontmatter.date);
        });
        // then format them to month/year combos and get unique list
        monthYears = monthYears.map(d => d.match(/^\d+ (\w+ \d+)$/)[1]);
        monthYears = _.uniq(monthYears);
        // create pages
        const newsMonthTemplate = path.resolve('src/templates/news-month-page.js');
        monthYears.forEach(d => {
            let splitMY = d.split(" ");
            createPage({
                path: `/news/${splitMY[1]}/${splitMY[0].toLowerCase()}`,
                component: newsMonthTemplate,
                context: {
                    date: d,
                    slug: `^/news/${splitMY[1]}/${splitMY[0].toLowerCase()}/`
                }
            });
        });
    });
};