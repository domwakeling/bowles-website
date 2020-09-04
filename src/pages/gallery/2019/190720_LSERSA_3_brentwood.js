import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2019/190720_LSERSA_3_brentwood/l_u8.jpg';
import img02 from '../../../images/gallery/2019/190720_LSERSA_3_brentwood/l_u12.jpg';
import img03 from '../../../images/gallery/2019/190720_LSERSA_3_brentwood/m_u18.jpg';
import img04 from '../../../images/gallery/2019/190720_LSERSA_3_brentwood/m_mas2.jpg';
import img05 from '../../../images/gallery/2019/190720_LSERSA_3_brentwood/funs.jpg';

const images = [img01, img02, img03, img04, img05];
const alts = [
    'Ladies Under-8s',
    'Ladies Under-12s',
    'Mens Under-18s',
    'Mens Masters-2',
    'Fun Teams'
];
const title = 'Medallists from LSERSA 3 at Brentwood on 20th July 2019';
const link = '/news/2019/july/LSERSA_3';

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