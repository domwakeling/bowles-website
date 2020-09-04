import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2017/170507_LSERSA_2_brentwood/m_u8.jpg';
import img02 from '../../../images/gallery/2017/170507_LSERSA_2_brentwood/m_u10.jpg';
import img03 from '../../../images/gallery/2017/170507_LSERSA_2_brentwood/m_u14.jpg';
import img04 from '../../../images/gallery/2017/170507_LSERSA_2_brentwood/f_u16.jpg';
import img05 from '../../../images/gallery/2017/170507_LSERSA_2_brentwood/m_u16.jpg';
import img06 from '../../../images/gallery/2017/170507_LSERSA_2_brentwood/f_u18.jpg';
import img07 from '../../../images/gallery/2017/170507_LSERSA_2_brentwood/f_sen.jpg';
import img08 from '../../../images/gallery/2017/170507_LSERSA_2_brentwood/m_sen.jpg';
import img09 from '../../../images/gallery/2017/170507_LSERSA_2_brentwood/fun.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09];
const alts = [
    'Mens Under-8s',
    'Mens Under-10s',
    'Mens Under-14s',
    'Ladies Under-16s',
    'Mens Under-16s',
    'Ladies Under-18s',
    'Ladies Seniors',
    'Mens Seniors',
    'Fun Teams'
];
const title = 'Medallists from LSERSA 2 at Brentwood on 7th May 2017';
const link = '/news/2017/may/LSERSA_brentwood';

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