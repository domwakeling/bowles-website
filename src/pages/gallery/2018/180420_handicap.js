import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2018/180420_handicap/u10.jpg';
import img02 from '../../../images/gallery/2018/180420_handicap/u14.jpg';
import img03 from '../../../images/gallery/2018/180420_handicap/ladies.jpg';
import img04 from '../../../images/gallery/2018/180420_handicap/overall.jpg';
import img05 from '../../../images/gallery/2018/180420_handicap/handicap.jpg';
import img06 from '../../../images/gallery/2018/180420_handicap/tiger.jpg';

const images = [img01, img02, img03, img04, img05, img06];
const alts = [
    'Under-10s',
    'Under-14s',
    'Ladies',
    'Overall',
    'Handicap',
    'Coaches'
];
const title = 'Medallists from the Handicap Fun Race on 20th April 2018';
const link = '/news/2018/april/handicap';

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