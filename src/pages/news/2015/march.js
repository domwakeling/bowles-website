import React from 'react';
import PropTypes from 'prop-types';
import MonthPage from '../../../components/MonthPage.jsx';

const Page = ({ data }) => (
    <MonthPage data={data} title="March 2015" />
);

Page.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object
    ])
}

export default Page;

export const query = graphql`
    query NewsMarch2015 {
        allMarkdownRemark (
            filter: { fields: { slug: { regex: "^/news/2015/march/"} } }
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