import React from 'react';
import PropTypes from 'prop-types';
import RacePage from '../components/RacePage.jsx';

import raceData2023 from '../data/races-2023-data';

const ThisPage = ({location}) => (
    <RacePage location={location} data={raceData2023} title="2023 Race Results" />
);

export default ThisPage;

ThisPage.propTypes = {
    location: PropTypes.object
};
