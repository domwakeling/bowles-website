import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2022/220904_lsersa_4/u10_l.jpg';
import img02 from '../../../images/gallery/2022/220904_lsersa_4/u12_l.jpg';
import img03 from '../../../images/gallery/2022/220904_lsersa_4/mas2_m.jpg';

const images = [img01, img02, img03];
const alts = [
    'Ladies Under-10s',
    'Ladies Under-12s',
    'Mens Masters-2'
];
const title = 'Medallists from LSERSA 4 at Aldershot on 4th September 2022';
const link = '/news/2022/september/lsersa_4';

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