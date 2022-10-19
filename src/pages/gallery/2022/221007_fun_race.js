import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2022/221007_fun_race/u11_l.jpg';
import img02 from '../../../images/gallery/2022/221007_fun_race/u11_m.jpg';
import img03 from '../../../images/gallery/2022/221007_fun_race/u14.jpg';
import img04 from '../../../images/gallery/2022/221007_fun_race/ladies.jpg';
import img05 from '../../../images/gallery/2022/221007_fun_race/mens.jpg';
import img06 from '../../../images/gallery/2022/221007_fun_race/handicap.jpg';
import img07 from '../../../images/gallery/2022/221007_fun_race/tiger.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07];
const alts = [
    'Under-11 Ladies',
    'Under-11 Men',
    'Under-14s',
    'Ladies',
    'Men',
    'Handicap',
    'Coaches'
];
const title = 'Medallists from the Handicap Fun Race on 7th October 2022';
const link = '/news/2022/october/fun_race';

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