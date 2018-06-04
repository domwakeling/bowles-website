import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import NewsItem from '../components/NewsItem.jsx';

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const NewsPageTemplate = ({ pathContext }) => {
    const { group, index, first, last } = pathContext;
    const previousUrl = index - 1 === 1 ? "/news" : `/news/${(index - 1).toString()}`;
    const nextUrl = `/news/${(index + 1).toString()}`;
    return (
        <div key={index}>
            <h2>News</h2>
            {group.map(({ node }, idx) => (
                <div key={idx}>
                    <NewsItem
                        path={node.fields.slug}
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        html={node.html}
                    />
                    <hr />
                </div>
            ))}
            <div style={{float: "left"}}>
                {
                    !first ? (
                        <NavLink test={first} url={previousUrl} text="&lArr; Previous Page" />
                    ) : ''
                }
            </div>
            <div style={{float: "right"}}>
                {
                    !last ? (
                        <NavLink test={last} url={nextUrl} text="Next Page &rArr;" />
                    ) : ''
                }
            </div>
            <div style={{clear: "both"}} />
            <br />
            <hr />
        </div>
    );
};

NewsPageTemplate.propTypes = {
    pathContext: PropTypes.shape()
}

export default NewsPageTemplate;
