import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2018/180902_LSERSA_4_aldershot/l_u10.jpg';
import img02 from '../../../images/gallery/2018/180902_LSERSA_4_aldershot/m_u10.jpg';
import img03 from '../../../images/gallery/2018/180902_LSERSA_4_aldershot/m_u18.jpg';
import img04 from '../../../images/gallery/2018/180902_LSERSA_4_aldershot/funs.jpg';

const images = [img01, img02, img03, img04];
const alts = [
    'Ladies Under-10s',
    'Mens Under-10s',
    'Mens Under-18s',
    'Fun Teams'
];
const title = 'Medallists from LSERSA 4 at Aldershot on 2nd September 2018';
const link = '/news/2018/september/LSERSA_4';

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