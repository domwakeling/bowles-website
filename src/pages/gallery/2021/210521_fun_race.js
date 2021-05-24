import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2021/210521_fun_race/u11.jpg';
import img02 from '../../../images/gallery/2021/210521_fun_race/u14.jpg';
import img03 from '../../../images/gallery/2021/210521_fun_race/ladies.jpg';
import img04 from '../../../images/gallery/2021/210521_fun_race/overall.jpg';
import img05 from '../../../images/gallery/2021/210521_fun_race/handicap.jpg';
import img06 from '../../../images/gallery/2021/210521_fun_race/tiger.jpg';

const images = [img01, img02, img03, img04, img05, img06];
const alts = [
    'Under-11s',
    'Under-14s',
    'Ladies',
    'Overall',
    'Handicap',
    'Coaches'
];
const title = 'Medallists from the Handicap Fun Race on 21st May 2021';
const link = '/news/2021/may/fun_race';

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