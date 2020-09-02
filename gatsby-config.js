const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = {
    siteMetadata: {
        title: 'Bowles Ski Racing Club',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-catch-links',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
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
                ]
            }
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography'
            }
        },
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
        )
    },
}
