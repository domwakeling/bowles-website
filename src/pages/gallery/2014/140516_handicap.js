import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2014/140516_handicap/10andunder1405.jpg';
import img02 from '../../../images/gallery/2014/140516_handicap/13andunder1405.jpg';
import img03 from '../../../images/gallery/2014/140516_handicap/ladies1405.jpg';
import img04 from '../../../images/gallery/2014/140516_handicap/overall1405.jpg';
import img05 from '../../../images/gallery/2014/140516_handicap/handicap1405.jpg';
import img06 from '../../../images/gallery/2014/140516_handicap/coachesaward1405.jpg';

const images = [img01, img02, img03, img04, img05, img06];
const alts = [
    'Under-10s',
    'Under-14s',
    'Ladies',
    'Overall',
    'Handicap',
    'Coaches'
]
const title = 'Medallists from the Handicap Fun Race on 16th May 2014';
const link = '/news/2014/may/bowles-handicap/';

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