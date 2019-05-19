import React from 'react';
import PropTypes from 'prop-types';
import MonthPage from '../components/MonthPage.jsx';
import { graphql } from "gatsby";

const Page = ({ location, pageContext, data }) => {
    const { date } = pageContext;
    // const { edges, totalCount } = data.allMarkdownRemark
    // const tagHeader = `${totalCount} post${
    //     totalCount === 1 ? "" : "s"
    //     } tagged with "${tag}"`

    return (
        <MonthPage location={location} data={data} title={date} />
    )
}

Page.propTypes = {
    pageContext: PropTypes.shape({
        date: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape(),
    location: PropTypes.object
}

export default Page;

export const query = graphql`
    query ($slug: String) {
        allMarkdownRemark (
            filter: { fields: { slug: { regex: $slug} } }
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
