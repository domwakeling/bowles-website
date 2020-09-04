import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2013/130505_LSERSA_bowles/racing_4F.jpg';
import img02 from '../../../images/gallery/2013/130505_LSERSA_bowles/racing_4M.jpg';
import img03 from '../../../images/gallery/2013/130505_LSERSA_bowles/racing_6M.jpg';
import img04 from '../../../images/gallery/2013/130505_LSERSA_bowles/racing_9M_1.jpg';
import img05 from '../../../images/gallery/2013/130505_LSERSA_bowles/racing_9M_2.jpg';
import img06 from '../../../images/gallery/2013/130505_LSERSA_bowles/racing_9M_3.jpg';
import img07 from '../../../images/gallery/2013/130505_LSERSA_bowles/medal_1M.jpg';
import img08 from '../../../images/gallery/2013/130505_LSERSA_bowles/medal_4F.jpg';
import img09 from '../../../images/gallery/2013/130505_LSERSA_bowles/medal_6M.jpg';
import img10 from '../../../images/gallery/2013/130505_LSERSA_bowles/medal_8M.jpg';
import img11 from '../../../images/gallery/2013/130505_LSERSA_bowles/medal_9M.jpg';
import img12 from '../../../images/gallery/2013/130505_LSERSA_bowles/Bowles_team.jpg';
import img13 from '../../../images/gallery/2013/130505_LSERSA_bowles/Scratch_1st.jpg';
import img14 from '../../../images/gallery/2013/130505_LSERSA_bowles/Scratch_3rd.jpg';
import img15 from '../../../images/gallery/2013/130505_LSERSA_bowles/Bowles_medalists.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10,
                img11, img12, img13, img14, img15];
const alts = [
 'Racing in 4F',
 'Racing in 4M',
 'Racing in 6M',
 'Racing in 9M (1)',
 'Racing in 9M (2)',
 'Racing in 9M (3)',
 '1M medals',
 '4F medals',
 '6M medals',
 '8M medals',
 '9M medals',
 'Bowles team',
 'Scratch 1st=place',
 'Scratch 3rd-place',
 'Bowles_medalists'
];
const title = 'Photos from LSERSA 1 at Bowles on 5th May 2013';
const link = '/news/2013/may/LSERSA_1/';

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