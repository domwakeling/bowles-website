import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2017/170428_handicap/u10.jpg';
import img02 from '../../../images/gallery/2017/170428_handicap/u13.jpg';
import img03 from '../../../images/gallery/2017/170428_handicap/ladies.jpg';
import img04 from '../../../images/gallery/2017/170428_handicap/overall.jpg';
import img05 from '../../../images/gallery/2017/170428_handicap/handicap.jpg';
import img06 from '../../../images/gallery/2017/170428_handicap/tiger.jpg';

const images = [img01, img02, img03, img04, img05, img06];
const alts = [
    'Under-10s',
    'Under-14s',
    'Ladies',
    'Overall',
    'Handicap',
    'Coaches'
];
const title = 'Medallists from the Handicap Fun Race on 28th April 2017';
const link = '/news/2017/april/fun-race';

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