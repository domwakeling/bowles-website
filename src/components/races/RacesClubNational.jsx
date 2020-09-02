import React from 'react';
import PropTypes from 'prop-types';

import logoSSE from '../../images/logos/snowsport_logo.jpg';
import Races from './Races.jsx';

const RacesClubNational = (props) => {
    const { data } = props;
    return (
        <div style={{ clear: 'both' }}>
            <img src={logoSSE} style={{ float: 'right' }} alt="Snowsport England logo" />
            <Races data={data} />
        </div>
    )
};

RacesClubNational.propTypes = {
    data: PropTypes.shape()
}

export default RacesClubNational;