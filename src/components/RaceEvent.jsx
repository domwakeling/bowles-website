import React from 'react';
import PropTypes from 'prop-types';

const RaceEvent = (props) => {
    const { data, title } = props;
    return (
        <div>
            <h5>{title}</h5>
            {
                data.map((result, idx) => <p key={idx}>{result}</p>)
            }
        </div>
    )
};

RaceEvent.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string
}

export default RaceEvent;