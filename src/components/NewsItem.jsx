import React from 'react';
import Link from 'gatsby-link';

const NewsItem = (props) => {
    const { path, title, date, html } = props;
    return (
        <div>
            <Link to={path}>
                <h3>{title}</h3>
            </Link>
            <h5>{date}</h5>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <br />
        </div>
    );
};

export default NewsItem;
