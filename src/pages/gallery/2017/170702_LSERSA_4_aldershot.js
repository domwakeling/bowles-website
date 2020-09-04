import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2017/170702_LSERSA_4_aldershot/m_u8.jpg';
import img02 from '../../../images/gallery/2017/170702_LSERSA_4_aldershot/m_u10.jpg';
import img03 from '../../../images/gallery/2017/170702_LSERSA_4_aldershot/m_u16.jpg';
import img04 from '../../../images/gallery/2017/170702_LSERSA_4_aldershot/f_u18.jpg';
import img05 from '../../../images/gallery/2017/170702_LSERSA_4_aldershot/f_sen.jpg';
import img06 from '../../../images/gallery/2017/170702_LSERSA_4_aldershot/m_sen.jpg';
import img07 from '../../../images/gallery/2017/170702_LSERSA_4_aldershot/m_masters2.jpg';
import img08 from '../../../images/gallery/2017/170702_LSERSA_4_aldershot/club_teams.jpg';
import img09 from '../../../images/gallery/2017/170702_LSERSA_4_aldershot/fun_teams.jpg';
import img10 from '../../../images/gallery/2017/170702_LSERSA_4_aldershot/medallists.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10];
const alts = [
    'Mens Under-8s',
    'Mens Under-10s',
    'Mens Under-16s',
    'Ladies Under-18s',
    'Ladies Seniors',
    'Mens Seniors',
    'Mens Masters 2',
    'Club Teams',
    'Fun Teams',
    'Bowles Medallists'
];
const title = 'Medallists from LSERSA 4 at Aldershot on 2nd July 2017';
const link = '/news/2017/july/LSERSA_aldershot';

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