import React from 'react';
import PropTypes from 'prop-types';
import RacePage from '../../components/RacePage.jsx';

import raceData2019 from '../../data/races-2019-data';

const ThisPage = ({ location }) => (
    <RacePage location={location} data={raceData2019} title="2019 Race Results" />
);

export default ThisPage;

ThisPage.propTypes = {
    location: PropTypes.object
};
