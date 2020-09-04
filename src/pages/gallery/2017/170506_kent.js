import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2017/170506_kent/BG_M_T.jpg';
import img02 from '../../../images/gallery/2017/170506_kent/BG_G.jpg';
import img03 from '../../../images/gallery/2017/170506_kent/MID_G_T.jpg';
import img04 from '../../../images/gallery/2017/170506_kent/MID_B_T.jpg';
import img05 from '../../../images/gallery/2017/170506_kent/MID_G.jpg';
import img06 from '../../../images/gallery/2017/170506_kent/MID_B.jpg';
import img07 from '../../../images/gallery/2017/170506_kent/SEN_B_T.jpg';
import img08 from '../../../images/gallery/2017/170506_kent/SEN_G.jpg';
import img09 from '../../../images/gallery/2017/170506_kent/SEN_B.jpg';
import img10 from '../../../images/gallery/2017/170506_kent/SEC_G_T.jpg';
import img11 from '../../../images/gallery/2017/170506_kent/SEC_G.jpg';
import img12 from '../../../images/gallery/2017/170506_kent/SEC_B.jpg';


const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12];
const alts = [
    'Boys&Girls Mixed Team',
    'Boys&Girls Girls Individual',
    'Mids Girls Team',
    'Mids Boys Team',
    'Mids Girls Individual',
    'Mids Boys Individual',
    'Senior Boys Team',
    'Senior Girls Individual',
    'Senior Boys Individual',
    'Secondary Girls Team',
    'Secondary Girls Individual', 
    'Secondary Boys Individual',

];
const title = 'Medallists from Kent Schools at Brentwood on 6th May 2017';
const link = '/news/2017/may/raks-2017';

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