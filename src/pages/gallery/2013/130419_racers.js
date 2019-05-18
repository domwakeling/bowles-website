import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2013/130419_racers/_DSC6484.jpg';
import img02 from '../../../images/gallery/2013/130419_racers/_DSC6488.jpg';
import img03 from '../../../images/gallery/2013/130419_racers/_DSC6495.jpg';
import img04 from '../../../images/gallery/2013/130419_racers/_DSC6497.jpg';
import img05 from '../../../images/gallery/2013/130419_racers/_DSC6508.jpg';
import img06 from '../../../images/gallery/2013/130419_racers/_DSC6510.jpg';
import img07 from '../../../images/gallery/2013/130419_racers/_DSC6516.jpg';
import img08 from '../../../images/gallery/2013/130419_racers/_DSC6517.jpg';
import img09 from '../../../images/gallery/2013/130419_racers/_DSC6519.jpg';
import img10 from '../../../images/gallery/2013/130419_racers/_DSC6523.jpg';
import img11 from '../../../images/gallery/2013/130419_racers/_DSC6532.jpg';
import img12 from '../../../images/gallery/2013/130419_racers/_DSC6560.jpg';
import img13 from '../../../images/gallery/2013/130419_racers/_DSC6564.jpg';
import img14 from '../../../images/gallery/2013/130419_racers/_DSC6584.jpg';
import img15 from '../../../images/gallery/2013/130419_racers/_DSC6586.jpg';
import img16 from '../../../images/gallery/2013/130419_racers/_DSC6592.jpg';
import img17 from '../../../images/gallery/2013/130419_racers/_DSC6594.jpg';
import img18 from '../../../images/gallery/2013/130419_racers/_DSC6609.jpg';
import img19 from '../../../images/gallery/2013/130419_racers/_DSC6620.jpg';
import img20 from '../../../images/gallery/2013/130419_racers/_DSC6629.jpg';
import img21 from '../../../images/gallery/2013/130419_racers/_DSC6667.jpg';
import img22 from '../../../images/gallery/2013/130419_racers/_DSC6672.jpg';
import img23 from '../../../images/gallery/2013/130419_racers/_DSC6682.jpg';
import img24 from '../../../images/gallery/2013/130419_racers/_DSC6700.jpg';
import img25 from '../../../images/gallery/2013/130419_racers/_DSC6707.jpg';
import img26 from '../../../images/gallery/2013/130419_racers/_DSC6711.jpg';
import img27 from '../../../images/gallery/2013/130419_racers/_DSC6727.jpg';
import img28 from '../../../images/gallery/2013/130419_racers/_DSC6776.jpg';
import img29 from '../../../images/gallery/2013/130419_racers/_DSC6782.jpg';
import img30 from '../../../images/gallery/2013/130419_racers/_DSC6786.jpg';
import img31 from '../../../images/gallery/2013/130419_racers/_DSC6806.jpg';
import img32 from '../../../images/gallery/2013/130419_racers/_DSC6812.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10,
                img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
                img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
                img31, img32];
const alts = [];
for (let i = 0; i < 32; i++) {alts.push('Fun race 19 April 2013')}

const title = 'Racers at the Handicap Fun Race on 19th April 2013';
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