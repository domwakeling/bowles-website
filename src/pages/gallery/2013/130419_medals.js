import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2013/130419_medals/10andUnder_Apr13.jpg';
import img02 from '../../../images/gallery/2013/130419_medals/14andUnder_Apr13.jpg';
import img03 from '../../../images/gallery/2013/130419_medals/Ladies_Apr13.jpg';
import img04 from '../../../images/gallery/2013/130419_medals/All_Apr13.jpg';
import img05 from '../../../images/gallery/2013/130419_medals/Handicap_Apr13.jpg';
import img06 from '../../../images/gallery/2013/130419_medals/Coaches_Apr13.jpg';

const images = [img01, img02, img03, img04, img05, img06];
const alts = [
    'Under-10s',
    'Under-14s',
    'Ladies',
    'Overall',
    'Handicap',
    'Coaches'
]
const title = 'Medallists from the Handicap Fun Race on 19th April 2013';
const link = '/news/2013/april/fun-race-april/';

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