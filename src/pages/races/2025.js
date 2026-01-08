import React from 'react';
import PropTypes from 'prop-types';
import RacePage from '../../components/RacePage.jsx';

import raceData2025 from '../../data/races-2025-data';

const ThisPage = ({ location }) => (
    <RacePage location={location} data={raceData2025} title="2025 Race Results" />
);

export default ThisPage;

ThisPage.propTypes = {
    location: PropTypes.object
};
