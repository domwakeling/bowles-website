import React from 'react';
import PropTypes from 'prop-types';
import RacePage from '../../components/RacePage.jsx';

import raceData2012 from '../../data/races-2012-data';

const ThisPage = ({ location }) => (
    <RacePage location={location} data={raceData2012} title="2012 Race Results" />
);

export default ThisPage;

ThisPage.propTypes = {
    location: PropTypes.object
}