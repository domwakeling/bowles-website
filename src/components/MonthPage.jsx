import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem.jsx';
import Layout from './Layout.jsx';

const MonthPage = (props) => {
    const{ data, title } = props;
    return (
        <Layout location={props.location}>
            <h2>{title}</h2>
            {data.allMarkdownRemark.edges.map(({ node }, index) =>
                <div key={index}>
                    <NewsItem
                        path={node.fields.slug}
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        html={node.html}
                    />
                    <hr />
                </div>
            )}
        </Layout>
    )
};

MonthPage.propTypes= {
    data: PropTypes.shape(),
    title: PropTypes.string,
    location: PropTypes.object
}

export default MonthPage;
