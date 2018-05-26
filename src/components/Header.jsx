import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import menuData from '../data/menu-data';

export default class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menuOpen: false
        }
        this.burgerClickHandler = this.burgerClickHandler.bind(this);
        this.toggleMenuHandler = this.toggleMenuHandler.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(e) {
        if (this.wrapperRef && !this.wrapperRef.contains(e.target) && this.state.menuOpen) {
            this.toggleMenuHandler();
            // console.log('click');
        }
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    burgerClickHandler(e) {
        e.preventDefault();
        this.toggleMenuHandler();
        e.target.blur();
    }

    toggleMenuHandler() {
        this.setState({ menuOpen: !this.state.menuOpen });
    }

    render() {
        const { siteTitle } = this.props;
        const menuClass = this.state.menuOpen ? "menu-show" : "";
        return (
            <div id="navbar">
                <div className="container" ref={this.setWrapperRef}>
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
                                <Link
                                    key={item.idx}
                                    to={item.path}
                                    onClick={this.toggleMenuHandler}
                                >
                                    {item.text}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    siteTitle: PropTypes.string
}