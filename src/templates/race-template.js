import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

export default function Template({ data }) {
    const post = data.markdownRemark;
    return (
        <div>
            <Helmet title={`Bowles Ski Racing Club - ${post.frontmatter.title}`} />
            <div style={{ color: 'red' }}>
                <h2>{post.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </div>
    );
}

Template.propTypes = {
    data: PropTypes.object
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