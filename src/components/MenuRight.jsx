import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import menuData from '../data/menu-data';
import MenuNews from './MenuNews.jsx';

const MenuRight = (props) => {
    const { location } = props;
    return (
        <div id="right-nav">
            {
                menuData.map(item => (
                    <Link key={item.idx} to={item.path} className={item.classes}>{item.text}</Link>
                ))
            }
            {
                /^\/news/.test(location.pathname) ? (
                    <div>
                        <br />
                        <hr />
                        <MenuNews location={location} />
                    </div>
                ) : ''
            }
        </div>
    )
}

MenuRight.propTypes = {
    location: PropTypes.object
}

export default MenuRight;