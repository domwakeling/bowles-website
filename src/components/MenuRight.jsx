import React from 'react';
import Link from 'gatsby-link';

import menuData from '../data/menu-data';

const MenuRight = (props) => {
    const { location } = props;
    return (
    <div id="right-nav">
        {menuData.map(item => (
            <Link key={item.idx} to={item.path} className={item.classes}>{item.text}</Link>
        ))}
    </div>
)}

export default MenuRight;