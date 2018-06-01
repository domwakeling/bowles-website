import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2016/160508_LSERSA_1_brentwood/u14.jpg';
import img02 from '../../../images/gallery/2016/160508_LSERSA_1_brentwood/ladies_u18.jpg';
import img03 from '../../../images/gallery/2016/160508_LSERSA_1_brentwood/ladies_sen.jpg';
import img04 from '../../../images/gallery/2016/160508_LSERSA_1_brentwood/seniors.jpg';
import img05 from '../../../images/gallery/2016/160508_LSERSA_1_brentwood/ladies_masters.jpg';
import img06 from '../../../images/gallery/2016/160508_LSERSA_1_brentwood/masters2.jpg';
import img07 from '../../../images/gallery/2016/160508_LSERSA_1_brentwood/club_teams.jpg';
import img08 from '../../../images/gallery/2016/160508_LSERSA_1_brentwood/fun_teams.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08];
const alts = [
    'Mens Under-14',
    'Ladies Under-18',
    'Ladies Seniors',
    'Mens Seniors',
    'Ladies Masters',
    'Mens Masters 2',
    'Club Teams',
    'Fun Teams'
]
const title = 'Medallists from LSERSA 1 at Brentwood on 8th May 2016';
const link = '../../../../news/2016/TODO';

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