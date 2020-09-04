import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2019/190427_LSERSA_1_chatham/l_u8.jpg';
import img02 from '../../../images/gallery/2019/190427_LSERSA_1_chatham/m_u10.jpg';
import img03 from '../../../images/gallery/2019/190427_LSERSA_1_chatham/m_u12.jpg';
import img04 from '../../../images/gallery/2019/190427_LSERSA_1_chatham/m_u18.jpg';
import img05 from '../../../images/gallery/2019/190427_LSERSA_1_chatham/m_mas2.jpg';

const images = [img01, img02, img03, img04, img05];
const alts = [
    'Ladies Under-8s',
    'Mens Under-10s',
    'Mens Under-12s',
    'Mens Under-18s',
    'Mens Masters-2'
];
const title = 'Medallists from LSERSA 1 at Chatham on 27th April 2019';
const link = '/news/2019/may/LSERSA_1';

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