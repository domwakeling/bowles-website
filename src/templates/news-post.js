import React from 'react';
import PropTypes from 'prop-types';
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

Template.propTypes = {
    data: PropTypes.object
}

export const newsQuery = graphql`
    query newsPostByPath($path: String!) {
        markdownRemark(fields: { slug: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "D MMMM YYYY, HH:mm")
                title
            }
        }
    }
`