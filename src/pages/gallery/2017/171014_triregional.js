import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2017/171014_triregional/plate_3.jpg';
import img02 from '../../../images/gallery/2017/171014_triregional/shield_3.jpg';
import img03 from '../../../images/gallery/2017/171014_triregional/bowles.jpg';

const images = [img01, img02, img03];
const alts = [
    '3rd place in Plate',
    '3rd place in Shield',
    'Bowles skiers'
];
const title = 'Medallists from Tri-Regional at Welwyn on 14 October 2017';
const link = '/news/2017/october/tri-region';

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