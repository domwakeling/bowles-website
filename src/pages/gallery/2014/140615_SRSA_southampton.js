import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2014/140615_SRSA_southampton/Male_50.jpg';
import img02 from '../../../images/gallery/2014/140615_SRSA_southampton/Fun_team_2nd.jpg';

const images = [img01, img02];
const alts = [
    'Male 50+',
    'Fun team 2nd-place'
];
const title = 'Medallists from SRSA 3 at Southampton on 15th June 2014';
const link = '/news/2014/june/SRSA_3/';

const Fade = ({ location }) => {
    const data = {
        images,
        alts,
        title,
        link
    };
    return (
        <div>
            <GalleryPage location={location} data={data} />
        </div>
    );
};

export default Fade;

Fade.propTypes = {
    location: PropTypes.object
};