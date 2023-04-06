const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
    siteMetadata: {
        title: 'Bowles Ski Racing Club',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-catch-links',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/news`,
                name: 'news'
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                 // Footnotes mode (default: true)
                footnotes: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 580,
                        }
                    }
                ],
                // Enable JS for https://github.com/jonschlinkert/gray-matter#optionsengines (default: false)
                // It's not advised to set this to "true" and this option will likely be removed in the future
                jsFrontmatterEngine: false
            }
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography'
            }
        }
    ],
    developMiddleware: app => {
        app.use(
            "/.netlify/functions/",
            createProxyMiddleware({
                target: "http://localhost:9000",
                pathRewrite: {
                    "/.netlify/functions/": "",
                },
            })
        );
    },
};
