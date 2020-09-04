import React from 'react';
import PropTypes from 'prop-types';
import RacePage from '../../components/RacePage.jsx';

import raceData2018 from '../../data/races-2018-data';

const ThisPage = ({location}) => (
    <RacePage location={location} data={raceData2018} title="2018 Race Results" />
);

export default ThisPage;

ThisPage.propTypes = {
    location: PropTypes.object
};
