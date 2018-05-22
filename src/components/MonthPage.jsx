import React from 'react';
import NewsItem from './NewsItem.jsx';

const MonthPage = (props) => {
    const{ data, title } = props;
    return (
        <div>
            <h2>{title}</h2>
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
};

export default MonthPage;
