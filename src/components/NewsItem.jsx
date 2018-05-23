import React from 'react';
import PropTypes from 'prop-types';
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

NewsItem.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    html: PropTypes.string
}

export default NewsItem;
