import React from 'react';
import PropTypes from 'prop-types';
import RacePage from '../components/RacePage.jsx';

import raceData2026 from '../data/races-2026-data';

const ThisPage = ({location}) => (
    <RacePage location={location} data={raceData2026} title="2026 Race Results" />
);

export default ThisPage;

ThisPage.propTypes = {
    location: PropTypes.object
};
