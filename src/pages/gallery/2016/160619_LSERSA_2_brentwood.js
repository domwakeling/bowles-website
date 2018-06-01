import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2016/160619_LSERSA_2_brentwood/MaleU14.jpg';
import img02 from '../../../images/gallery/2016/160619_LSERSA_2_brentwood/MaleU16.jpg';
import img03 from '../../../images/gallery/2016/160619_LSERSA_2_brentwood/FemaleU18.jpg';
import img04 from '../../../images/gallery/2016/160619_LSERSA_2_brentwood/FemaleSenior.jpg';
import img05 from '../../../images/gallery/2016/160619_LSERSA_2_brentwood/MaleSenior.jpg';

const images = [img01, img02, img03, img04, img05];
const alts = [
    'Mens Under-14',
    'Mens Under-16',
    'Ladies Under-18',
    'Ladies Seniors',
    'Mens Seniors'
]
const title = 'Medallists from LSERSA 2 at Brentwood on 19th June 2016';
const link = '../../../../news/2016/TODO';

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