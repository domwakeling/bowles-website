import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const NewsItem = (props) => {
    const { path, title, date, html } = props;
    return (
        <div>
            <Link to={path}>
                <h3 className="news-headline">{title}</h3>
            </Link>
            <h4 className="news-date">{date}</h4>
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
