import React from 'react';
import PropTypes from 'prop-types';
import RacePage from '../../components/RacePage.jsx';

import raceData2021 from '../../data/races-2021-data';

const ThisPage = ({ location }) => (
    <RacePage location={location} data={raceData2021} title="2021 Race Results" />
);

export default ThisPage;

ThisPage.propTypes = {
    location: PropTypes.object
};
