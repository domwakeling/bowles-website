import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2017/170429_LSERSA_1_welwyn/male_u16.jpg';
import img02 from '../../../images/gallery/2017/170429_LSERSA_1_welwyn/male_sen.jpg';
import img03 from '../../../images/gallery/2017/170429_LSERSA_1_welwyn/male_mas2.jpg';
import img04 from '../../../images/gallery/2017/170429_LSERSA_1_welwyn/fun_teams.jpg';

const images = [img01, img02, img03, img04];
const alts = [
    'Mens Under-16',
    'Mens Seniors',
    'Mens Masters 2',
    'Fun Teams'
]
const title = 'Medallists from LSERSA 1 at Welwyn on 29th April 2017';
const link = '/news/2017/april/LSERSA_1';

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