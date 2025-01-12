import React from 'react';
import PropTypes from 'prop-types';
import RacePage from '../../components/RacePage.jsx';

import raceData2024 from '../../data/races-2024-data';

const ThisPage = ({ location }) => (
    <RacePage location={location} data={raceData2024} title="2024 Race Results" />
);

export default ThisPage;

ThisPage.propTypes = {
    location: PropTypes.object
};
