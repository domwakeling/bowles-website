import React from 'react';
import PropTypes from 'prop-types';
import RacePage from '../../components/RacePage.jsx';

import raceData2015 from '../../data/races-2015-data';

const ThisPage = ({ location }) => (
    <RacePage location={location} data={raceData2015} title="2015 Race Results" />
);

export default ThisPage;

ThisPage.propTypes = {
    location: PropTypes.object
}