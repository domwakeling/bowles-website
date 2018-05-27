import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2012/120511_handicap/Under_10.jpg';
import img02 from '../../../images/gallery/2012/120511_handicap/Under_14.jpg';
import img03 from '../../../images/gallery/2012/120511_handicap/Ladies.jpg';
import img04 from '../../../images/gallery/2012/120511_handicap/Overall.jpg';
import img05 from '../../../images/gallery/2012/120511_handicap/Handicap.jpg';
import img06 from '../../../images/gallery/2012/120511_handicap/Coaches_Award.jpg';

const images = [img01, img02, img03, img04, img05, img06];
const alts = [
    'Under 10s',
    'Under 14s',
    'Ladies',
    'Overall',
    'Handicap',
    'Coaches Award'
]
const title = 'Medallists from the Handicap Fun Race on 11th May 2012';
const link = '../../../../news/2012/may/handicap/';

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