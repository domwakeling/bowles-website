import React from 'react';
import PropTypes from 'prop-types';
import RacePage from '../../components/RacePage.jsx';

import raceData2016 from '../../data/races-2016-data';

const ThisPage = ({ location }) => (
    <RacePage location={location} data={raceData2016} title="2016 Race Results" />
);

export default ThisPage;

ThisPage.propTypes = {
    location: PropTypes.object
}