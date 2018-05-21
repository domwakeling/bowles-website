import React from 'react';
import NewsItem from '../../../components/NewsItem.jsx';

const MonthPage = ({ data }) => (
    <div>
        <h2>May 2012</h2>
        {data.allMarkdownRemark.edges.map(({ node }, index) =>
            <NewsItem key={index}
                path={node.fields.slug}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                html={node.html}
            />
        )}
    </div>
)

export default MonthPage;

export const query = graphql`
    query NewsMay2018 {
        allMarkdownRemark (
            filter: { fields: { slug: { regex: "^/news/2012/may/"} } }
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 10
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
