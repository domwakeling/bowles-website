import React from 'react';
import PropTypes from 'prop-types';
import MonthPage from '../../../components/MonthPage.jsx';

const Page = ({ data }) => (
    <MonthPage data={data} title="September 2012" />
);

Page.propTypes = {
    data: PropTypes.func
}

export default Page;

export const query = graphql`
    query NewsSeptember2012 {
        allMarkdownRemark (
            filter: { fields: { slug: { regex: "^/news/2012/september/"} } }
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
