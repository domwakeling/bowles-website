import React from 'react';
import PropTypes from 'prop-types';
import Race from './Race.jsx';

import '../styles/races.scss';

const Races = (props) => {
    const { data } = props;
    return (
        <div>
            <h3>{data.title}</h3>
            {
                data.races.map(race => <Race key={race.descriptor} data={race} />)
            }
            <hr />
        </div>
    )
};

Races.propTypes = {
    data: PropTypes.shape(),
}

export default Races;