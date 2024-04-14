import React from 'react';
import PropTypes from 'prop-types';

import logoSSE from '../../images/logos/snowsport_logo.jpg';
import Races from './Races.jsx';

const RacesClubNational = ({ data }) => {
    return (
        <div style={{ clear: 'both' }}>
            <hr />
            <img src={logoSSE} style={{ float: 'right' }} alt="Snowsport England logo" />
            <Races data={data} />
        </div>
    );
};

RacesClubNational.propTypes = {
    data: PropTypes.shape()
};

export default RacesClubNational;
