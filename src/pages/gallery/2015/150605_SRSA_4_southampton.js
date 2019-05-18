import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2015/150605_SRSA_4_southampton/F_15-16.jpg';
import img02 from '../../../images/gallery/2015/150605_SRSA_4_southampton/M_50.jpg';
import img03 from '../../../images/gallery/2015/150605_SRSA_4_southampton/fun_teams.jpg';

const images = [img01, img02, img03];
const alts = [
    'Female 15-16',
    'Male 50+',
    'Fun Teams'
]
const title = 'Medallists from SRSA 4 at Southampton on 5th June 2015';
const link = '/news/2015/june/SRSA_4/';

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