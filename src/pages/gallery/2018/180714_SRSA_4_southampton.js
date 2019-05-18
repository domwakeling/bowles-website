import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2018/180714_SRSA_4_southampton/l_u21.jpg';
import img02 from '../../../images/gallery/2018/180714_SRSA_4_southampton/l_senior.jpg';
import img03 from '../../../images/gallery/2018/180714_SRSA_4_southampton/m_senior.jpg';
import img04 from '../../../images/gallery/2018/180714_SRSA_4_southampton/m_masters2.jpg';
import img05 from '../../../images/gallery/2018/180714_SRSA_4_southampton/funs.jpg';
import img06 from '../../../images/gallery/2018/180714_SRSA_4_southampton/clubs.jpg';

const images = [img01, img02, img03, img04, img05, img06];
const alts = [
    'Ladies Under-21s',
    'Ladies Seniors',
    'Mens Seniors',
    'Mens Masters 2',
    'Fun Teams',
    'Club Teams'
]
const title = 'Medallists from SRSA 4 at Southampton on 14th July 2018';
const link = '/news/2018/july/SRSA_4';

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