import React from 'react';
import PropTypes from 'prop-types';

import logoSRSA from '../../images/logos/SRSA_logo.jpg';
import Races from './Races.jsx';

const RacesLSERSA = ({ data }) => {
    return (
        <div style={{ clear: 'both' }}>
            <hr />
            <img src={logoSRSA} style={{ float: 'right' }} alt="Snowsport South logo" />
            <Races data={data} />
        </div>
    );
};

RacesLSERSA.propTypes = {
    data: PropTypes.shape(),
};

export default RacesLSERSA;
