import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2016/160528_SRSA_2_snowtrax/Charlotte.jpg';
import img02 from '../../../images/gallery/2016/160528_SRSA_2_snowtrax/Claudette.jpg';
import img03 from '../../../images/gallery/2016/160528_SRSA_2_snowtrax/Lindsay.jpg';
import img04 from '../../../images/gallery/2016/160528_SRSA_2_snowtrax/Nigel.jpg';
import img05 from '../../../images/gallery/2016/160528_SRSA_2_snowtrax/Team.jpg';
import img06 from '../../../images/gallery/2016/160528_SRSA_2_snowtrax/Funs.jpg';

const images = [img01, img02, img03, img04, img05, img06];
const alts = [
    'Ladies Under-18',
    'Ladies Seniors',
    'Ladies Masters',
    'Mens Masters 2',
    'Club Teams',
    'Fun Teams'
]
const title = 'Medallists from SRSA 2 at Snowtrax on 28th May 2016';
const link = '/news/2016/may/SRSA_Snowtrax';

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