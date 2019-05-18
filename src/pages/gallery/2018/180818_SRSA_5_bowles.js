import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2018/180818_SRSA_5_bowles/l_u10.jpg';
import img02 from '../../../images/gallery/2018/180818_SRSA_5_bowles/m_u10.jpg';
import img03 from '../../../images/gallery/2018/180818_SRSA_5_bowles/m_u14.jpg';
import img04 from '../../../images/gallery/2018/180818_SRSA_5_bowles/m_seniors.jpg';
import img05 from '../../../images/gallery/2018/180818_SRSA_5_bowles/m_masters2.jpg';
import img06 from '../../../images/gallery/2018/180818_SRSA_5_bowles/funs.jpg';
import img07 from '../../../images/gallery/2018/180818_SRSA_5_bowles/clubs.jpg';
import img08 from '../../../images/gallery/2018/180818_SRSA_5_bowles/medallists.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08];
const alts = [
    'Ladies Under-10s',
    'Mens Under-10s',
    'Mens Under-14s',
    'Mens Seniors',
    'Mens Masters 2',
    'Fun Teams',
    'Club Teams',
    'Medallists'
]
const title = 'Medallists from SRSA 5 at Bowles on 18th August 2018';
const link = '/news/2018/august/SRSA_5';

const Fade = ({ location }) => {
    const data = {
        images,
        alts,
        title,
        link
    }
    return (
        <div>
            <GalleryPage location={location} data={data} />
        </div>
    );
}

export default Fade;

Fade.propTypes = {
    location: PropTypes.object
}