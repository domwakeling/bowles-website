import React from 'react';
import PropTypes from 'prop-types';
import MonthPage from '../../../components/MonthPage.jsx';
import { graphql } from 'gatsby';

const Page = ({ data, location }) => (
    <MonthPage location={location} data={data} title="May 2019" />
);

Page.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object
    ]),
    location: PropTypes.object
}

export default Page;

export const query = graphql`
    query NewsMay2019 {
        allMarkdownRemark (
            filter: { fields: { slug: { regex: "^/news/2019/may/"} } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        contentType
                        date(formatString: "D MMMM YYYY")
                    }
                    html
                }
            }
        }
    }
`;
