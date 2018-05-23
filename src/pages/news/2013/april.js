import React from 'react';
import PropTypes from 'prop-types';
import MonthPage from '../../../components/MonthPage.jsx';

const Page = ({ data }) => (
    <MonthPage data={data} title="April 2013" />
);

Page.propTypes = {
    data: PropTypes.func
}

export default Page;

export const query = graphql`
    query NewsApril2013 {
        allMarkdownRemark (
            filter: { fields: { slug: { regex: "^/news/2013/april/"} } }
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
                        date(formatString: "D MMMM YYYY, HH:mm")
                    }
                    html
                }
            }
        }
    }
`;
