import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2012/120928_handicap/Under_10_Sept12.jpg';
import img02 from '../../../images/gallery/2012/120928_handicap/Under_14_Sept12.jpg';
import img03 from '../../../images/gallery/2012/120928_handicap/Ladies_Sept12.jpg';
import img04 from '../../../images/gallery/2012/120928_handicap/Overall_Sept12.jpg';
import img05 from '../../../images/gallery/2012/120928_handicap/Handicap_Sept12.jpg';
import img06 from '../../../images/gallery/2012/120928_handicap/Coaches_Sept12.jpg';
import img07 from '../../../images/gallery/2012/120928_handicap/Special_Thanks_Sept12.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07];
const alts = [
    'Under-10s',
    'Under-14s',
    'Ladies',
    'Overall',
    'Handicap',
    'Coaches',
    'Special thanks'
]
const title = 'Medallists from the Handicap Fun Race on 28th September 2012';
const link = '/news/2012/september/agm-race/';

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