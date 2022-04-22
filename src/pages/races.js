import React from 'react';
import PropTypes from 'prop-types';
import RacePage from '../components/RacePage.jsx';

import raceData2022 from '../data/races-2022-data';

const ThisPage = ({location}) => (
    <RacePage location={location} data={raceData2022} title="2022 Race Results" />
);

export default ThisPage;

ThisPage.propTypes = {
    location: PropTypes.object
};
