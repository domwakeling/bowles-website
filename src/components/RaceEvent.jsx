import React from 'react';
import PropTypes from 'prop-types';

const RaceEvent = (props) => {
    const { data, title } = props;
    return (
        <div>
            <h5 className="event-title">{title}</h5>
            {
                data.map((result, idx) => <p className="event-result" key={idx}>{result}</p>)
            }
        </div>
    )
};

RaceEvent.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string
}

export default RaceEvent;