import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2017/171014_triregional/plate_3.jpg';
import img02 from '../../../images/gallery/2017/171014_triregional/shield_3.jpg';

const images = [img01, img02];
const alts = [
    '3rd place in Plate',
    '3rd place in Shield',
]
const title = 'Medallists from Tri-Regional at Welwyn on 14 October 2017';
const link = '../../../../news/2017/TODO';

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