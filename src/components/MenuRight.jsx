import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import menuData from '../data/menu-data';
import MenuNews from './MenuNews.jsx';

const MenuRight = (props) => {
    const { location } = props;
    const classForMenuPath = path => {
        if (path === '/') {
            return location.pathname === path ? 'highlighted' : 'not-highlighted';
        }
        const regEx = new RegExp(path);
        return regEx.test(location.pathname) ? 'highlighted' : 'not-highlighted';
    }
    return (
        <div id="right-nav">
            {
                menuData.map(item => (
                    <div key={item.idx} className='a-wrapper'>
                        <Link
                            to={item.path}
                            className={classForMenuPath(item.path)}           
                        >
                            {item.text}
                        </Link>
                    </div>
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