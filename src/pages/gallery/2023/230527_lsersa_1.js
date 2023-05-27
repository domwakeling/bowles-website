import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2023/230527_lsersa_1/l_u12.png';
import img02 from '../../../images/gallery/2023/230527_lsersa_1/l_u16.png';
import img03 from '../../../images/gallery/2023/230527_lsersa_1/m_sen.png';
import img04 from '../../../images/gallery/2023/230527_lsersa_1/l_mas.png';
import img05 from '../../../images/gallery/2023/230527_lsersa_1/m_mas.png';
import img06 from '../../../images/gallery/2023/230527_lsersa_1/m_mas2.png';

const images = [img01, img02, img03, img04, img05, img06];
const alts = [
    'Ladies Under-12s',
    'Ladies Under-16s',
    'Mens Seniors',
    'Ladies Masters',
    'Mens Masters',
    'Mens Masters-2'
];
const title = 'Medallists from LSERSA 1 at Chatham on 27th May 2023';
const link = '/news/2023/may/lsersa_1';

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