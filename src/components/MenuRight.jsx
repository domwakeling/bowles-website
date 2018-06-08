import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import menuData from '../data/menu-data';
import MenuNews from './MenuNews.jsx';
import Calendar from './Calendar.jsx';

import img01 from '../images/logos/bowles_colour_120.png';

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
            <img src={img01} style={{float: 'right', width: '120px'}} />
            {
                menuData.map((item, idx) => (
                    <div key={idx} className='a-wrapper'>
                        <Link
                            to={item.path}
                            className={classForMenuPath(item.path)}           
                        >
                            {item.text}
                        </Link>
                    </div>
                ))
            }
            <br />
            <Calendar date={new Date()} />
            {
                /^\/news/.test(location.pathname) ? (
                    <div>
                        <br />
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