import React from 'react';
import Helmet from 'react-helmet';

export default function Template ({ data }) {
    const post=data.markdownRemark;
    return (
        <div>
            <Helmet title={`Bowles Ski Racing Club - ${post.frontmatter.title}`} />
            <div>
                <h2>{post.frontmatter.title}</h2>
                <h5>{post.frontmatter.date}</h5>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </div>
    );
}

export const newsQuery = graphql`
    query newsPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "D MMMM YYYY, HH:mm")
                path
                title
            }
        }
    }
`