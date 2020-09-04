import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2015/150516_LSERSA_2_brentwood/m_u12.jpg';
import img02 from '../../../images/gallery/2015/150516_LSERSA_2_brentwood/f_u18.jpg';
import img03 from '../../../images/gallery/2015/150516_LSERSA_2_brentwood/m_masters.jpg';
import img04 from '../../../images/gallery/2015/150516_LSERSA_2_brentwood/fun_teams_2.jpg';

const images = [img01, img02, img03, img04];
const alts = [
    'Mens Under-12',
    'Ladies Under-18',
    'Mens Masters',
    'Fun Teams 2nd-place'
];
const title = 'Medallists from LSERSA 2 at Brentwood on 16th May 2015';
const link = '/news/2015/may/LSERSA_Brentwood/';

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