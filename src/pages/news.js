import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from '../components/NewsItem.jsx';

const NewsPage = ({ data }) => (
    <div>
        <h2>News</h2>
        {data.allMarkdownRemark.edges.map(({ node }, index) =>
            <NewsItem
                key={index}
                path={node.fields.slug}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                html={node.html}
            />
        )}
    </div>
)

NewsPage.propTypes = {
    data: PropTypes.shape()
}

export default NewsPage;

export const query = graphql`
    query NewsPageQuery {
        allMarkdownRemark (
            filter: { frontmatter:  { contentType: { eq:"news"}}}
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
                        date(formatString: "D MMMM YYYY")
                    }
                    html
                }
            }
        }
    }
`;
