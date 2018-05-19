import React from 'react';
import Link from 'gatsby-link';

const NewsPage = ({ data }) => (
    <div>
        <h1>News</h1>
        {data.allMarkdownRemark.edges.map(({ node }, index) =>
            <div key={index}>
                <Link to={node.frontmatter.path}>
                    <h3>{node.frontmatter.title}</h3>
                </Link>
                <h6>{node.frontmatter.date}</h6>
                <div dangerouslySetInnerHTML={{ __html: node.html}} />
            </div>
        )}
    </div>
)

export default NewsPage;

export const query = graphql`
    query NewsPageQuery {
        allMarkdownRemark (
            filter: { frontmatter:  { contentType: { eq:"news"}}}
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 10
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        contentType
                        date(formatString: "D MMMM YYYY, HH:mm")
                        path
                    }
                    html
                }
            }
        }
    }
`;
