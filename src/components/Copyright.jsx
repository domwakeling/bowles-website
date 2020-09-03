import React from 'react';
import PropTypes from 'prop-types';

// export default class Copyright extends React.Component {
const Copyright = ({ from, who }) => (
    <h5 className="copyright">
        &copy;{from} {who}
    </h5>
);

Copyright.propTypes = {
    from: PropTypes.string,
    who: PropTypes.string
};

Copyright.defaultProps = {
    from: new Date().getFullYear().toString(),
    who: ''
};

export default Copyright;
