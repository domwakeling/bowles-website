import React from 'react';
import PropTypes from 'prop-types';

import RacesLSERSA from './RacesLSERSA.jsx';
import RacesSRSA from './RacesSRSA.jsx';
import Race from './Race.jsx';

const RacePage = (props) => {
    const { data, title } = props;
    return (
        <div>
            <h2>{title}</h2>
            {
                data.LSERSA ? (
                    <RacesLSERSA data={data.LSERSA} />
                ) : ''
            }
            {
                data.SRSA ? (
                    <RacesSRSA data={data.SRSA} />
                ) : ''
            }
            {
                data.Kent ? (
                    <Race data={data.Kent} />
                ) : ''
            }
        </div>
    )
};

RacePage.propTypes = {
    data: PropTypes.shape(),
    title: PropTypes.string
}

export default RacePage;
