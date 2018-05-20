import React from 'react';
import Link from 'gatsby-link';

import menuData from '../layouts/menu-data';

const MenuRight = () => (
    <div id="right-nav">
        {menuData.map(item => (
            <Link key={item.idx} to={item.path} className={item.classes}>{item.text}</Link>
        ))}
    </div>
)

export default MenuRight;