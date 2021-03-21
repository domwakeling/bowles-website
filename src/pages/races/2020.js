import React from 'react';
import PropTypes from 'prop-types';
import RacePage from '../../components/RacePage.jsx';

import raceData2020 from '../../data/races-2020-data';

const ThisPage = ({ location }) => (
    <RacePage location={location} data={raceData2020} title="2020 Race Results" />
);

export default ThisPage;

ThisPage.propTypes = {
    location: PropTypes.object
};
