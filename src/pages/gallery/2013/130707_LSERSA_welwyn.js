import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2013/130707_LSERSA_welwyn/LSERSA_Welwyn_13_1M.jpg';
import img02 from '../../../images/gallery/2013/130707_LSERSA_welwyn/LSERSA_Welwyn_13_2M.jpg';
import img03 from '../../../images/gallery/2013/130707_LSERSA_welwyn/LSERSA_Welwyn_13_6M.jpg';
import img04 from '../../../images/gallery/2013/130707_LSERSA_welwyn/LSERSA_Welwyn_13_8M.jpg';
import img05 from '../../../images/gallery/2013/130707_LSERSA_welwyn/LSERSA_Welwyn_13_Fun_3rd.jpg';
import img06 from '../../../images/gallery/2013/130707_LSERSA_welwyn/LSERSA_Welwyn_13_Fun_2nd.jpg';
import img07 from '../../../images/gallery/2013/130707_LSERSA_welwyn/LSERSA_Welwyn_13_Fun_1st.jpg';


const images = [img01, img02, img03, img04, img05, img06, img07];
const alts = [
    'Group 1M',
    'Group 2M',
    'Group 6M',
    'Group 8M',
    'Fun teams 3rd-place',
    'Fun teams 2nd-place',
    'Fun teams 1st-place'
]
const title = 'Medallists from LSERSA 4 at Welwyn on 7th June 2013';
const link = '../../../../news/2013/july/LSERSA_4/';

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