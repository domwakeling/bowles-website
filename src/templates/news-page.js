import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import NewsItem from '../components/NewsItem.jsx';
import Layout from '../components/Layout.jsx';

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const NewsPageTemplate = ({ pageContext, location }) => {
    const { group, index, first, last } = pageContext;
    const previousUrl = index - 1 === 1 ? "/news" : `/news/${(index - 1).toString()}`;
    const nextUrl = `/news/${(index + 1).toString()}`;
    return (
        <Layout location={location} key={index}>
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
        </Layout>
    );
};

NavLink.propTypes = {
    test: PropTypes.any,
    text: PropTypes.string,
    url: PropTypes.string
};

NewsPageTemplate.propTypes = {
    pageContext: PropTypes.shape(),
    location: PropTypes.object
};

export default NewsPageTemplate;
