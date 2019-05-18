import React from "react";
import PropTypes from 'prop-types';
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2019/190512_kent/fun_pri.jpg';
import img02 from '../../../images/gallery/2019/190512_kent/fun_sec.jpg';
import img03 from '../../../images/gallery/2019/190512_kent/pri_x_s_team.jpg';
import img04 from '../../../images/gallery/2019/190512_kent/sec_f_j_team.jpg';
import img05 from '../../../images/gallery/2019/190512_kent/sec_m_j_team.jpg';
import img06 from '../../../images/gallery/2019/190512_kent/sec_f_s_team.jpg';
import img07 from '../../../images/gallery/2019/190512_kent/sec_m_s_team.jpg';
import img08 from '../../../images/gallery/2019/190512_kent/pri_m_j_ind.jpg';
import img09 from '../../../images/gallery/2019/190512_kent/pri_f_s_ind.jpg';
import img10 from '../../../images/gallery/2019/190512_kent/pri_m_s_ind.jpg';
import img11 from '../../../images/gallery/2019/190512_kent/pri_x_o_team.jpg';
import img12 from '../../../images/gallery/2019/190512_kent/sec_f_o_team.jpg';
import img13 from '../../../images/gallery/2019/190512_kent/pri_o_ind.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10,
                img11, img12, img13];
const alts = [
    'Primary Fun Team',
    'Secondary Fun Team',
    'Mixed Primary Senior Team',
    'Female Secondary Junior Team',
    'Male Secondary Junior Team',
    'Female Secondary Senior Team',
    'Male Secondary Senior Team',
    'Primary Male Junior',
    'Primary Female Senior',
    'Primary Male Senior',
    'Mixed Primary Overall Team',
    'Female Secondary Overall Team',
    'Primary Overall Male and Female'
]
const title = 'Medallists from Kent Schools at Chatham on 12th May 2019';
const link = '/news/2019/may/kent';

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