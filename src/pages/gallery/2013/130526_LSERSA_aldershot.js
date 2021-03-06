import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2013/130526_LSERSA_aldershot/Group_8M.jpg';
import img02 from '../../../images/gallery/2013/130526_LSERSA_aldershot/Group_9M.jpg';
import img03 from '../../../images/gallery/2013/130526_LSERSA_aldershot/special_award.jpg';

const images = [img01, img02, img03];
const alts = [
    'Group 8M',
    'Group 9M',
    'Special Award'
];
const title = 'Medallists from LSERSA 2 at Aldershot on 26th May 2013';
const link = '/news/2013/may/LSERSA_2/';

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