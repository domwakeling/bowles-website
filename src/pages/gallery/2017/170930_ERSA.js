import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2017/171001_ERSA/b_u8.jpg';
import img02 from '../../../images/gallery/2017/171001_ERSA/b_u10.jpg';

const images = [img01, img02];
const alts = [
    'Boys Under-8s',
    'Boys Under-10s',
];
const title = 'Medallists from ERSA Championships on 30th September 2017';
const link = '/news/2017/september/ERSA_champs';

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