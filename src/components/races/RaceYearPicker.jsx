import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import raceData from '../../data/race-data';

const RaceYearPicker = ({ title }) => {
    const [open, setOpen] = useState(false);
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
        if (wrapperRef && !wrapperRef.contains(e.target) && open) {
            setOpen(!open);
        }
    };

    const setPickerWrapperRef = (node) => {
        setWrapperRef(node);
    };

    const buttonHandler = (e) => {
        e.preventDefault();
        e.target.blur();
        setOpen(!open);
    };

    return (
        <div className="yearPickerWrapper" ref={setPickerWrapperRef}>
            <button
                className="dropdown"
                onClick={buttonHandler}
            >
                {title}
            </button>
            {
                open ? (
                    <ul className="dropdown-content">
                        {
                            raceData.map((year, idx) => (
                                <li key={idx}><Link to={year.link}>{year.title}</Link></li>
                            ))
                        }
                    </ul>
                ) : ''
            }
        </div>
    );
};

RaceYearPicker.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
};

export default RaceYearPicker;
