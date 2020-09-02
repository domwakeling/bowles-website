import React from "react"
import PropTypes from "prop-types"

const Racer = ({ name, status, clickhandler, userid, tabNum }) => {
  const handleClick = e => {
    e.preventDefault()
    e.target.blur()
    clickhandler(userid, name)
  }

  return (
    <>
      {userid ? (
        <div
          className={`lozenge clickable ${status}`}
          role="menuitem"
          tabIndex={tabNum}
          onClick={handleClick}
          status={status}
        >
          {name}
        </div>
      ) : (
        <div className={`lozenge ${status}`}>{name}</div>
      )}
    </>
  )
}

Racer.defaultProps = {
  status: "normal",
  clickhandler: () => {},
  userid: "",
  tabNum: -1,
}

Racer.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string,
  clickhandler: PropTypes.func,
  userid: PropTypes.string,
  tabNum: PropTypes.number,
}

export default Racer
