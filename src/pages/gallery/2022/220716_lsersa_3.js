import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2022/220716_lsersa_3/u10_l.jpg';
import img02 from '../../../images/gallery/2022/220716_lsersa_3/u12_l.jpg';
import img03 from '../../../images/gallery/2022/220716_lsersa_3/u14_l.jpg';
import img04 from '../../../images/gallery/2022/220716_lsersa_3/sen_l.jpg';
import img05 from '../../../images/gallery/2022/220716_lsersa_3/mas2_m.jpg';
import img06 from '../../../images/gallery/2022/220716_lsersa_3/funs.jpg';

const images = [img01, img02, img03, img04, img05, img06];
const alts = [
    'Ladies Under-10s',
    'Ladies Under-12s',
    'Ladies Under-14s',
    'Ladies Seniors',
    'Mens Masters-2',
    'Fun Teams'
];
const title = 'Medallists from LSERSA 3 at Brentwood on 16th July 2022';
const link = '/news/2022/july/lsersa_3';

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