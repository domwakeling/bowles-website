import React from 'react';
import PropTypes from 'prop-types';

import RaceEvent from './RaceEvent.jsx';

const RaceSeries = (props) => {
    const { data } = props;
    return (
        <div className="race">
            <h4 className="race-title">Overall Season Results</h4>
            {
                data.individual ? (
                    <RaceEvent
                        title="Bowles racers receiving series awards"
                        data={data.individual}
                    />
                ) : ''
            }
            {
                data.special ? (
                    <RaceEvent title="Special Cups" data={data.special} />
                ) : ''
            }
            {
                data.honorable ? (
                    <RaceEvent title="Honorable Mention" data={data.honorable} />
                ) : ''
            }
            {
                data.link ? (
                    <p><a href={data.link} target="_blank">Full results</a>.</p>
                ) : ''
            }
        </div>
    )
};

RaceSeries.propTypes = {
    data: PropTypes.shape(),
}

export default RaceSeries;