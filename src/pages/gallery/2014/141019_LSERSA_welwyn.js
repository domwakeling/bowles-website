import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2014/141019_LSERSA_welwyn/2M_Welwyn.jpg';
import img02 from '../../../images/gallery/2014/141019_LSERSA_welwyn/3M_Welwyn.jpg';
import img03 from '../../../images/gallery/2014/141019_LSERSA_welwyn/5F_Welwyn.jpg';
import img04 from '../../../images/gallery/2014/141019_LSERSA_welwyn/6M_Welwyn.jpg';
import img05 from '../../../images/gallery/2014/141019_LSERSA_welwyn/9M_Welwyn.jpg';
import img06 from '../../../images/gallery/2014/141019_LSERSA_welwyn/Fun_Welwyn_2.jpg';
import img07 from '../../../images/gallery/2014/141019_LSERSA_welwyn/Fun_Welwyn_1.jpg';
import img08 from '../../../images/gallery/2014/141019_LSERSA_welwyn/3M_2014.jpg';
import img09 from '../../../images/gallery/2014/141019_LSERSA_welwyn/5F_2014.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09];
const alts = [
    'Group 2M',
    'Group 3M',
    'Group 5F',
    'Group 6M',
    'Group 9M',
    'Fun teams 2nd-place',
    'Fun teams 1st-place',
    'Season Group 3M',
    'Season Group 5F'
]
const title = 'Medallists from LSERSA 5 at Welwyn on 19th October 2014';
const link = '../../../../news/2014/october/LSERSA_Welwyn2/';

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