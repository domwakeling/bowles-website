import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2013/130721_LSERSA_bromley/LSERSA_Bromley_2M.jpg';
import img02 from '../../../images/gallery/2013/130721_LSERSA_bromley/LSERSA_Bromley_6M.jpg';
import img03 from '../../../images/gallery/2013/130721_LSERSA_bromley/LSERSA_Bromley_8M.jpg';
import img04 from '../../../images/gallery/2013/130721_LSERSA_bromley/LSERSA_Bromley_9M.jpg';
import img05 from '../../../images/gallery/2013/130721_LSERSA_bromley/LSERSA_Bromley_Fun_3rd.jpg';
import img06 from '../../../images/gallery/2013/130721_LSERSA_bromley/LSERSA_Bromley_Fun_2nd.jpg';
import img07 from '../../../images/gallery/2013/130721_LSERSA_bromley/LSERSA_Bromley_Fun_1st.jpg';
import img08 from '../../../images/gallery/2013/130721_LSERSA_bromley/LSERSA_2013_1M.jpg';
import img09 from '../../../images/gallery/2013/130721_LSERSA_bromley/LSERSA_2013_2M.jpg';
import img10 from '../../../images/gallery/2013/130721_LSERSA_bromley/LSERSA_2013_8M.jpg';
import img11 from '../../../images/gallery/2013/130721_LSERSA_bromley/LSERSA_2013_Effort.jpg';
import img12 from '../../../images/gallery/2013/130721_LSERSA_bromley/LSERSA_2013_Resource.jpg';


const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12];
const alts = [
    'Group 2M',
    'Group 6M',
    'Group 8M',
    'Group 9M',
    'Fun teams 3rd-place',
    'Fun teams 2nd-place',
    'Fun teams 1st-place',
    'Season Group 1M',
    'Season Group 2M',
    'Season Group 8M',
    'Good Effort Cup',
    'UK Resource Cup'
]
const title = 'Medallists from LSERSA 5 at Bromley on 21st June 2013';
const link = '../../../../news/2013/july/LSERSA_5/';

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