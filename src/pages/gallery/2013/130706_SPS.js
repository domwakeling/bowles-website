import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2013/130706_SPS/Lamberhurst_SPS_2013.jpg';
import img02 from '../../../images/gallery/2013/130706_SPS/Lily_SPS_2013.jpg';

const images = [img01, img02];
const alts = [
    'Lamberhurst',
    'Girls Under-9s'
];
const title = 'Medallists from SPS at Aldershot on 6th July 2013';
const link = '/news/2013/july/sps_championships/';

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