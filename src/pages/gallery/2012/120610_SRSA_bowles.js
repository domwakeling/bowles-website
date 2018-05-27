import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2012/120428_LSERSA_bowles/JH_LSERSA_Bowles.jpg';
import img02 from '../../../images/gallery/2012/120428_LSERSA_bowles/MO_LSERSA_Bowles.jpg';

const images = [img01, img02];
const alts = [
    'Group 5M',
    'Group 9M'
]
const title = 'Medallists from LSERSA Race 1 at Bowles on 28th April 2012';
const link = '../../../../news/2012/may/LSERSA_1/';

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