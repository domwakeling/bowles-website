import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2018/181005_handicap/u10.jpg';
import img02 from '../../../images/gallery/2018/181005_handicap/u14.jpg';
import img03 from '../../../images/gallery/2018/181005_handicap/ladies.jpg';
import img04 from '../../../images/gallery/2018/181005_handicap/overall.jpg';
import img05 from '../../../images/gallery/2018/181005_handicap/handicap.jpg';
import img06 from '../../../images/gallery/2018/181005_handicap/tiger.jpg';

const images = [img01, img02, img03, img04, img05, img06];
const alts = [
    'Under-10s',
    'Under-14s',
    'Ladies',
    'Overall',
    'Handicap',
    'Coaches'
]
const title = 'Medallists from the Handicap Fun Race on 5th October 2018';
const link = '../../../../news/2018/october/handicap';

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