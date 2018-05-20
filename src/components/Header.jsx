import React from 'react';
import Link from 'gatsby-link';

import menuData from '../data/menu-data';

export default class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    burgerClickHandler(e) {
        e.preventDefault();
        this.setState({ menuOpen : !this.state.menuOpen });
        e.target.blur();
    }

    render() {
        const { siteTitle } = this.props;
        this.burgerClickHandler = this.burgerClickHandler.bind(this);
        const menuClass = this.state.menuOpen ? "menu-show" : "";
        console.log(menuClass);
        return (
            <div id="navbar">
                <div className="container">
                    <Link className="brand" to="/" >{siteTitle}</Link>
                    <button
                        className="icon"
                        onClick={this.burgerClickHandler}
                    >
                        <div className="icon-bar" />
                        <div className="icon-bar" />
                        <div className="icon-bar" />
                    </button>
                    <div id="menu-responsive" className={menuClass}>
                        {
                            menuData.map(item => (
                                <Link key={item.idx} to={item.path}>{item.text}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
};
