import React from 'react';
import PropTypes from 'prop-types';
import RacePage from '../../components/RacePage.jsx';

import raceData2013 from '../../data/races-2013-data';

const ThisPage = ({ location }) => (
    <RacePage location={location} data={raceData2013} title="2013 Race Results" />
);

export default ThisPage;

ThisPage.propTypes = {
    location: PropTypes.object
};
