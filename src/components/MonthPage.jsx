import React from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem.jsx';

const MonthPage = (props) => {
    const{ data, title } = props;
    return (
        <div>
            <h2>{title}</h2>
            {data.allMarkdownRemark.edges.map(({ node }, index) =>
                <div key={index}>
                    <hr />
                    <NewsItem
                        path={node.fields.slug}
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        html={node.html}
                    />
                </div>
            )}
        </div>
    )
};

MonthPage.propTypes= {
    data: PropTypes.shape(),
    title: PropTypes.string
}

export default MonthPage;
