import React from 'react';
import NewsItem from '../../../components/NewsItem.jsx';
import MonthPage from '../../../components/MonthPage.jsx';

export default ({ data }) => (
    <MonthPage data={data} title="July2012" />
);

export const query = graphql`
    query NewsJuly2012 {
        allMarkdownRemark (
            filter: { fields: { slug: { regex: "^/news/2012/july/"} } }
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
