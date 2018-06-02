import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2017/170826_SRSA_5_bowles/f_u8.jpg';
import img02 from '../../../images/gallery/2017/170826_SRSA_5_bowles/f_u10.jpg';
import img03 from '../../../images/gallery/2017/170826_SRSA_5_bowles/m_u16.jpg';
import img04 from '../../../images/gallery/2017/170826_SRSA_5_bowles/f_sen.jpg';
import img05 from '../../../images/gallery/2017/170826_SRSA_5_bowles/m_sen.jpg';
import img06 from '../../../images/gallery/2017/170826_SRSA_5_bowles/m_masters2.jpg';
import img07 from '../../../images/gallery/2017/170826_SRSA_5_bowles/club_teams.jpg';
import img08 from '../../../images/gallery/2017/170826_SRSA_5_bowles/fun_teams_3.jpg';
import img09 from '../../../images/gallery/2017/170826_SRSA_5_bowles/fun_teams_2.jpg';
import img10 from '../../../images/gallery/2017/170826_SRSA_5_bowles/fun_teams_1.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10];
const alts = [
    'Ladies Under-8s',
    'Ladies Under-10s',
    'Mens Under-16s',
    'Ladies Seniors',
    'Mens Seniors',
    'Mens Masters 2',
    'Club Teams',
    'Fun Teams 3rd-place',
    'Fun Teams 2nd-place',
    'Fun Teams 1st-place'
]
const title = 'Medallists from SRSA 5 at Bowles on 26th August 2017';
const link = '../../../../news/2017/august/SRSA_5';

export default class Fade extends React.Component {
    render() {
        const data = {
            images,
            alts,
            title,
            link
        }
        return (
            <div>
                <GalleryPage data={data} />
            </div>
        );
    }
}