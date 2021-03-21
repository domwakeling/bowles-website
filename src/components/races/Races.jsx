import React from 'react';
import PropTypes from 'prop-types';
import Race from './Race.jsx';
import RaceSeries from './RaceSeries.jsx';

import '../../styles/races.scss';

const Races = ({ data }) => { 
    return (
        <div>
            <h3 className="series-title">{data.title}</h3>
            {
                data.message && <p className="race-message">{data.message}</p>
            }
            {
                data.races.map(race => <Race key={race.descriptor} data={race} />)
            }
            {
                data.season ? <RaceSeries data={data.season} /> : ''
            }
            <hr />
        </div>
    );
};

Races.propTypes = {
    data: PropTypes.shape(),
};

export default Races;
