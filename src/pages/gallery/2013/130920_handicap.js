import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2013/130920_handicap/10andunder1309.jpg';
import img02 from '../../../images/gallery/2013/130920_handicap/14andunder1309.jpg';
import img03 from '../../../images/gallery/2013/130920_handicap/ladies1309.jpg';
import img04 from '../../../images/gallery/2013/130920_handicap/overall1309.jpg';
import img05 from '../../../images/gallery/2013/130920_handicap/handicap1309.jpg';
import img06 from '../../../images/gallery/2013/130920_handicap/coachesaward1309.jpg';

const images = [img01, img02, img03, img04, img05, img06];
const alts = [
    'Under-10s',
    'Under-14s',
    'Ladies',
    'Overall',
    'Handicap',
    'Coaches'
];
const title = 'Medallists from the Handicap Fun Race on 20th September 2013';
const link = '/news/2013/september/fun-race/';

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