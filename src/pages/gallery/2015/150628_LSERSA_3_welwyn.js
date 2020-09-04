import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2015/150628_LSERSA_3_welwyn/male_masters_2.jpg';
import img02 from '../../../images/gallery/2015/150628_LSERSA_3_welwyn/fun_teams_1.jpg';

const images = [img01, img02];
const alts = [
    'Mens Masters 2',
    'Fun Teams 1st-place'
];
const title = 'Medallists from LSERSA 3 at Welwyn on 28th June 2015';
const link = '/news/2015/june/LSERSA_3';

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