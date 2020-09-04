import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2015/151010_LSERSA_5_brentwood/M_U12.jpg';
import img02 from '../../../images/gallery/2015/151010_LSERSA_5_brentwood/M_U14.jpg';
import img03 from '../../../images/gallery/2015/151010_LSERSA_5_brentwood/F_U18.jpg';
import img04 from '../../../images/gallery/2015/151010_LSERSA_5_brentwood/F_senior.jpg';
import img05 from '../../../images/gallery/2015/151010_LSERSA_5_brentwood/M_senior.jpg';
import img06 from '../../../images/gallery/2015/151010_LSERSA_5_brentwood/fun_teams.jpg';
import img07 from '../../../images/gallery/2015/151010_LSERSA_5_brentwood/M_U12_2015.jpg';
import img08 from '../../../images/gallery/2015/151010_LSERSA_5_brentwood/M_U14_2015.jpg';
import img09 from '../../../images/gallery/2015/151010_LSERSA_5_brentwood/F_U18_2015.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09];
const alts = [
    'Mens Under-12',
    'Mens Under-14',
    'Ladies Under-18',
    'Ladies Seniors',
    'Mens Seniors',
    'Fun teams',
    'Mens Under-12 for Season',
    'Mens Under-14 for Season',
    'Ladies Under-18 for Season'
];
const title = 'Medallists from LSERSA 5 at Brentwood on 10th October 2015';
const link = '/news/2015/october/LSERSA_5';

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