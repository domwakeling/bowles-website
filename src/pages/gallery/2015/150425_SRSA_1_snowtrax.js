import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2015/150425_SRSA_1_snowtrax/F_15-16.jpg';
import img02 from '../../../images/gallery/2015/150425_SRSA_1_snowtrax/M_50.jpg';

const images = [img01, img02];
const alts = [
    'Female 15-16',
    'Male 50+'
]
const title = 'Medallists from SRSA 1 at Snowtrax on 25th April 2015';
const link = '/news/2015/may/SRSA_Snowtrax/';

const Fade = ({ location }) => {
    const data = {
        images,
        alts,
        title,
        link
    }
    return (
        <div>
            <GalleryPage location={location} data={data} />
        </div>
    );
}

export default Fade;

Fade.propTypes = {
    location: PropTypes.object
}