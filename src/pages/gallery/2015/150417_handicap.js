import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2015/150417_handicap/under10.jpg';
import img02 from '../../../images/gallery/2015/150417_handicap/under13.jpg';
import img03 from '../../../images/gallery/2015/150417_handicap/ladies.jpg';
import img04 from '../../../images/gallery/2015/150417_handicap/overall.jpg';
import img05 from '../../../images/gallery/2015/150417_handicap/handicap.jpg';
import img06 from '../../../images/gallery/2015/150417_handicap/tiger.jpg';

const images = [img01, img02, img03, img04, img05, img06];
const alts = [
    'Under-10s',
    'Under-14s',
    'Ladies',
    'Overall',
    'Handicap',
    'Coaches'
]
const title = 'Medallists from the Handicap Fun Race on 17th April 2015';
const link = '../../../../news/2015/april/fun-race-results';

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