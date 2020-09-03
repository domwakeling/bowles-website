import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_female_under_7.jpg';
import img02 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_male_7_8.jpg';
import img03 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_female_9_10.jpg';
import img04 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_male_9_10.jpg';
import img05 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_female_11_12.jpg';
import img06 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_male_11_12.jpg';
import img07 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_female_13_14.jpg';
import img08 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_male_13_14.jpg';
import img09 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_female_15_16.jpg';
import img10 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_male_15_16.jpg';
import img11 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_female_17_19.jpg';
import img12 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_male_17_19.jpg';
import img13 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_female_31_49.jpg';
import img14 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_male_31_49.jpg';
import img15 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_male_50.jpg';
import img16 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_under_11.jpg';
import img17 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_under_16.jpg';
import img18 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_open.jpg';
import img19 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_fun_silver.jpg';
import img20 from '../../../images/gallery/2012/120610_SRSA_bowles/SRSA_Bowles_fun_gold.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10,
                img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];
const alts = [
    'Female under-7s',
    'Male age 7-8',
    'Female age 9-10',
    'Male age 9-10',
    'Female age 11-12',
    'Male age 11-12',
    'Female age 13-14',
    'Male age 13-14',
    'Female age 15-16',
    'Male age 15-16',
    'Female age 17-19',
    'Male age 17-19',
    'Female age 31-49',
    'Male age 31-49',
    'Male age 50+',
    'Club teams under-11',
    'Club teams under-16',
    'Club teams (open)',
    'Fun teams silver',
    'Fun teams gold'
];
const title = 'Medallists from SRSA Race 3 at Bowles on 10th June 2012';
const link = '/news/2012/june/srsa-summer-series-3/';

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