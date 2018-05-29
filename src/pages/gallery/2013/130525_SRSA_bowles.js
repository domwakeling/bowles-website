import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_F_U7.jpg';
import img02 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_F_7-8.jpg';
import img03 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_M_7-8.jpg';
import img04 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_F_9-10.jpg';
import img05 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_M_9-10.jpg';
import img06 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_F_11-12.jpg';
import img07 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_M_11-12.jpg';
import img08 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_F_13-14.jpg';
import img09 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_M_13-14.jpg';
import img10 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_F_15-16.jpg';
import img11 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_M_15-16.jpg';
import img12 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_M_17-19.jpg';
import img13 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_F_31-49.jpg';
import img14 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_M_31-49.jpg';
import img15 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_F_50.jpg';
import img16 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_M_50.jpg';
import img17 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_Team.jpg';
import img18 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_Fun_2nd.jpg';
import img19 from '../../../images/gallery/2013/130525_SRSA_bowles/SRSA_Bowles_13_Fun_1st.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10,
                img11, img12, img13, img14, img15, img16, img17, img18, img19];
const alts = [
    'Female under-7s',
    'Female age 7-8',
    'Male age 7-8',
    'Female age 9-10',
    'Male age 9-10',
    'Female age 11-12',
    'Male age 11-12',
    'Female age 13-14',
    'Male age 13-14',
    'Female age 15-16',
    'Male age 15-16', 
    'Male age 17-19',
    'Female age 31-49',
    'Male age 31-49',
    'Female age 50+',
    'Male age 50+',
    'Bowles club team',
    'Fun teams silver',
    'Fun teams gold'
]
const title = 'Medallists from SRSA Race 2 at Bowles on 25th May 2013';
const link = '../../../../news/2013/may/SRSA_2/';

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