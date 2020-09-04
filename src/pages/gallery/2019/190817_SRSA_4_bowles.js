import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2019/190817_SRSA_4_bowles/F8.jpg';
import img02 from '../../../images/gallery/2019/190817_SRSA_4_bowles/M10.jpg';
import img03 from '../../../images/gallery/2019/190817_SRSA_4_bowles/F12.jpg';
import img04 from '../../../images/gallery/2019/190817_SRSA_4_bowles/M12.jpg';
import img05 from '../../../images/gallery/2019/190817_SRSA_4_bowles/M18.jpg';
import img06 from '../../../images/gallery/2019/190817_SRSA_4_bowles/FSen.jpg';
import img07 from '../../../images/gallery/2019/190817_SRSA_4_bowles/MM1.jpg';
import img08 from '../../../images/gallery/2019/190817_SRSA_4_bowles/MM2.jpg';
import img09 from '../../../images/gallery/2019/190817_SRSA_4_bowles/funs.jpg';
import img10 from '../../../images/gallery/2019/190817_SRSA_4_bowles/clubs.jpg';
import img11 from '../../../images/gallery/2019/190817_SRSA_4_bowles/Bowles.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11];
const alts = [
    'Ladies Under-8s',
    'Mens Under-10s', 
    'Ladies Under-12s',
    'Mens Under-12s',
    'Mens Under-18s',
    'Ladies Seniors',
    'Mens Masters-1',
    'Mens Masters-2',
    'Fun Teams',
    'Club Teams',
    'Bowles Medallists'
];
const title = 'Medallists from SRSA 4 at Bowles on 17th August 2019';
const link = '/news/2019/august/SRSA_4';

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