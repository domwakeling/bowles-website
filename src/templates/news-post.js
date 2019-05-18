import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout.jsx';

export default function Template ({ data, location }) {
    const post=data.markdownRemark;
    return (
        <Layout location={location}>
            <Helmet title={`Bowles Ski Racing Club - ${post.frontmatter.title}`} />
            <div>
                <h2>{post.frontmatter.title}</h2>
                <h5>{post.frontmatter.date}</h5>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <hr />
            </div>
        </Layout>
    );
}

Template.propTypes = {
    data: PropTypes.shape(),
    location: PropTypes.shape()
}

export const newsQuery = graphql`
    query newsPostByPath($path: String!) {
        markdownRemark(fields: { slug: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "D MMMM YYYY")
                title
            }
        }
    }
`