import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2022/220611_lsersa_2/u10_l.jpg';
import img02 from '../../../images/gallery/2022/220611_lsersa_2/u12_l.jpg';
import img03 from '../../../images/gallery/2022/220611_lsersa_2/mas2_m.jpg';
import img04 from '../../../images/gallery/2022/220611_lsersa_2/mini_club.jpg';

const images = [img01, img02, img03, img04];
const alts = [
    'Ladies Under-10s',
    'Ladies Under-12s',
    'Mens Masters-2',
    'Mini Club Teams'
];
const title = 'Medallists from LSERSA 2 at Welwyn on 11th June 2022';
const link = '/news/2022/june/lsersa_2';

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