import React from 'react';
import PropTypes from 'prop-types';

import logoERSA from '../images/logos/ERSA_logo.jpg';
import Races from './Races.jsx';

const RacesERSA = (props) => {
    const { data } = props;
    return (
        <div style={{ clear: 'both' }}>
            <img src={logoERSA} style={{ float: 'right' }} alt="ERSA logo" />
            <Races data={data} />
        </div>
    )
};

RacesERSA.propTypes = {
    data: PropTypes.shape()
}

export default RacesERSA;