import React from 'react';
import Helmet from 'react-helmet';

export default function Template({ data }) {
    const post = data.markdownRemark;
    return (
        <div>
            <Helmet title={`Bowles Ski Racing Club - ${post.frontmatter.title}`} />
            <div style={{ color: 'red' }}>
                <h1>{post.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </div>
    );
}

export const raceQuery = graphql`
    query racePageByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`