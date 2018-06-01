import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2017/171001_ERSA/b_u8.jpg';
import img02 from '../../../images/gallery/2017/171001_ERSA/b_u10.jpg';

const images = [img01, img02];
const alts = [
    'Boys Under-8s',
    'Boys Under-10s',
]
const title = 'Medallists from ERSA Championships on 1st October 2017';
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