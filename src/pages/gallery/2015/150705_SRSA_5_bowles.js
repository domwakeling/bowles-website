import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2015/150705_SRSA_5_bowles/M_U7.jpg';
import img02 from '../../../images/gallery/2015/150705_SRSA_5_bowles/F_7-8.jpg';
import img03 from '../../../images/gallery/2015/150705_SRSA_5_bowles/M_7-8.jpg';
import img04 from '../../../images/gallery/2015/150705_SRSA_5_bowles/F_9-10.jpg';
import img05 from '../../../images/gallery/2015/150705_SRSA_5_bowles/M_9-10.jpg';
import img06 from '../../../images/gallery/2015/150705_SRSA_5_bowles/F_11-12.jpg';
import img07 from '../../../images/gallery/2015/150705_SRSA_5_bowles/M_11-12.jpg';
import img08 from '../../../images/gallery/2015/150705_SRSA_5_bowles/F_13-14.jpg';
import img09 from '../../../images/gallery/2015/150705_SRSA_5_bowles/F_15-16.jpg';
import img10 from '../../../images/gallery/2015/150705_SRSA_5_bowles/F_20-30.jpg';
import img11 from '../../../images/gallery/2015/150705_SRSA_5_bowles/F_31-49.jpg';
import img12 from '../../../images/gallery/2015/150705_SRSA_5_bowles/M_31-49.jpg';
import img13 from '../../../images/gallery/2015/150705_SRSA_5_bowles/M_50.jpg';
import img14 from '../../../images/gallery/2015/150705_SRSA_5_bowles/fun_teams_3.jpg';
import img15 from '../../../images/gallery/2015/150705_SRSA_5_bowles/fun_teams_2.jpg';
import img16 from '../../../images/gallery/2015/150705_SRSA_5_bowles/fun_teams_1.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10,
                img11, img12, img13, img14, img15, img16];
const alts = [
    'Male Under-7s',
    'Female 7-8',
    'Male 7-8',
    'Female 9-10',
    'Male 9-10',
    'Female 11-12',
    'Male 11-12',
    'Female 13-14',
    'Female 15-16',
    'Female 20-30',
    'Female 31-49',
    'Male 31-49',
    'Male 50+',
    'Fun Teams 3rd-place',
    'Fun Teams 2nd-place',
    'Fun Teams 1st-place'
]
const title = 'Medallists from SRSA 5 at Bowles on 5th July 2015';
const link = '../../../../news/2015/TODO/';

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