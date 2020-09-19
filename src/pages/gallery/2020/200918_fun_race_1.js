import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2020/200918_fun_race_1/u11_ladies.jpeg';
import img02 from '../../../images/gallery/2020/200918_fun_race_1/u11_mens.jpeg';
import img03 from '../../../images/gallery/2020/200918_fun_race_1/u11_handicap.jpeg';

const images = [img01, img02, img03];
const alts = [
    '11-and-Under Ladies',
    '11-and-Under Mens',
    '11-and-Under Handicap',
];
const title = 'Medallists from the 11-and-Under Fun Race on 18th September 2020';
const link = '/news/2020/september/fun-race-1';

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