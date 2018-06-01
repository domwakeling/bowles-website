import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2018/180506_kent/rose_hill.jpg';
import img02 from '../../../images/gallery/2018/180506_kent/sec_jun_boys_team.jpg';
import img03 from '../../../images/gallery/2018/180506_kent/sec_sen_boys_team.jpg';
import img04 from '../../../images/gallery/2018/180506_kent/sec_sen_boys.jpg';
import img05 from '../../../images/gallery/2018/180506_kent/skinners.jpg';

const images = [img01, img02, img03, img04, img05];
const alts = [
    'Rose Hill',
    'Secondary (Junior) Boys Team',
    'Secondary (Senior) Boys Team',
    'Secondary (Senior) Boys',
    `Skinners'`
]
const title = 'Medallists from the Kent School Championships on 6th May 2018';
const link = '../../../../news/2018/TODO';

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