import React from "react";
import GalleryPage from '../../components/GalleryPage.jsx'

import img01 from '../../images/gallery/2012/120928_handicap/Under_10_Sept12.jpg';
import img02 from '../../images/gallery/2012/120928_handicap/Under_14_Sept12.jpg';
import img03 from '../../images/gallery/2012/120928_handicap/Ladies_Sept12.jpg';
import img04 from '../../images/gallery/2012/120928_handicap/Overall_Sept12.jpg';
import img05 from '../../images/gallery/2012/120928_handicap/Handicap_Sept12.jpg';
import img06 from '../../images/gallery/2012/120928_handicap/Coaches_Sept12.jpg';
import img07 from '../../images/gallery/2012/120928_handicap/Special_Thanks_Sept12.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07];
const alts = [
    'Under-10s',
    'Under-14s',
    'Ladies',
    'Overall',
    'Handicap',
    'Coaches',
    'Special thanks'
]
const title = 'Pictures from the medal ceremony for the Handicap Fun Race on 11th May 2012';
const link = '../../../news/2012/september/agm-race/';

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
                <GalleryPage data={data}/>
            </div>
        );
    }
}