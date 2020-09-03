import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import menuData from '../data/menu-data';
import img01 from '../images/logos/bowles_logo_mini.png';

const Header = ({ siteTitle }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [handlerSet, setHandlerSet] = useState(false);
    const [wrapperRef, setWrapperRef] = useState(null);

    useEffect(() => {
        if (!handlerSet) {
            document.addEventListener('mousedown', handleClickOutside);
            setHandlerSet(true);
        }
        return function cleanup() {
            if (handlerSet) {
                document.removeEventListener('mousedown', handleClickOutside);
                setHandlerSet(false);
            }
        };
    });

    const handleClickOutside = (e) => {
        if (wrapperRef && !wrapperRef.contains(e.target) && menuOpen) {
            toggleMenuHandler();
        }
    };

    const setMenuWrapperRef = (node) => {
        setWrapperRef(node);
    };

    const burgerClickHandler = (e) => {
        e.preventDefault();
        toggleMenuHandler();
        e.target.blur();
    };

    const toggleMenuHandler = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div id="navbar">
            <div className="container" ref={setMenuWrapperRef}>
                <button
                    className="icon"
                    aria-label="Menu"
                    onClick={burgerClickHandler}
                >
                    <div className="icon-bar" />
                    <div className="icon-bar" />
                    <div className="icon-bar" />
                </button>
                <Link className="brand" to="/" >
                    <img alt="Bowles logo" src={img01} />&nbsp;<h3>{siteTitle}</h3>
                </Link>
                <div id="menu-responsive" className={menuOpen ? "menu-show" : ""}>
                    {
                        menuData.map((item, idx) => (
                            <Link
                                key={idx}
                                to={item.path}
                                onClick={toggleMenuHandler}
                            >
                                {item.text}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    siteTitle: PropTypes.string
};

export default Header;
