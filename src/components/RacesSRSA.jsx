import React from 'react';
import PropTypes from 'prop-types';

import logoSRSA from '../images/logos/SRSA_logo.jpg';
import Races from './Races.jsx';

const RacesLSERSA = (props) => {
    const { data } = props;
    return (
        <div style={{ clear: 'both' }}>
            <img src={logoSRSA} style={{ float: 'right' }} />
            <Races data={data} />
        </div>
    )
};

RacesLSERSA.propTypes = {
    data: PropTypes.shape(),
}

export default RacesLSERSA;