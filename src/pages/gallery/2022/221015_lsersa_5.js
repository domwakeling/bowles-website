import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2022/221015_lsersa_5/u8_l.jpg'; 
import img02 from '../../../images/gallery/2022/221015_lsersa_5/u8_m.jpg'; 
import img03 from '../../../images/gallery/2022/221015_lsersa_5/u10_l.jpg';
import img04 from '../../../images/gallery/2022/221015_lsersa_5/mas2_m.jpg';
import img05 from '../../../images/gallery/2022/221015_lsersa_5/funs.jpg';

const images = [img01, img02, img03, img04, img05];
const alts = [
    'Ladies Under-8s', 
    'Mens Under-8s', 
    'Ladies Under-10s',
    'Mens Masters-2',
    'Fun Teams'
];
const title = 'Medallists from LSERSA 5 at Chatham on 15th October 2022';
const link = '/news/2022/october/lsersa_5';

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