import React from "react";
import PropTypes from "prop-types";

const Racer = ({ name, status, clickHandler, userid, tabNum, club }) => {
    const handleClick = e => {
        e.preventDefault();
        e.target.blur();
        clickHandler(userid, name, club);
    };

    return (
        <>
            {userid ? (
                <div
                    className={`lozenge clickable ${status}`}
                    role="menuitem"
                    tabIndex={tabNum}
                    onClick={handleClick}
                    // status={status}
                >
                    {name}
                </div>
            ) : (
                <div className={`lozenge ${status}`}>{name}</div>
            )}
        </>
    );
};

Racer.defaultProps = {
    status: "normal",
    clickHandler: () => {},
    userid: "",
    tabNum: -1,
    club: "Bowles"
};

Racer.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string,
    clickHandler: PropTypes.func,
    userid: PropTypes.string,
    tabNum: PropTypes.number,
    club: PropTypes.string
};

export default Racer;
