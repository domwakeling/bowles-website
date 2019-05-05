import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2018/181013_LSERSA_5_chatham/l_u10.jpg';
import img02 from '../../../images/gallery/2018/181013_LSERSA_5_chatham/m_u10.jpg';
import img03 from '../../../images/gallery/2018/181013_LSERSA_5_chatham/m_u14.jpg';
import img04 from '../../../images/gallery/2018/181013_LSERSA_5_chatham/m_u18.jpg';
import img05 from '../../../images/gallery/2018/181013_LSERSA_5_chatham/m_mas2.jpg';
import img06 from '../../../images/gallery/2018/181013_LSERSA_5_chatham/funs.jpg';
import img07 from '../../../images/gallery/2018/181013_LSERSA_5_chatham/2018_f10.jpg';
import img08 from '../../../images/gallery/2018/181013_LSERSA_5_chatham/2018_m10.jpg';
import img09 from '../../../images/gallery/2018/181013_LSERSA_5_chatham/2018_m16.jpg';
import img10 from '../../../images/gallery/2018/181013_LSERSA_5_chatham/2018_m18.jpg';
import img11 from '../../../images/gallery/2018/181013_LSERSA_5_chatham/2018_mas2.jpg';
import img12 from '../../../images/gallery/2018/181013_LSERSA_5_chatham/improved.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12];
const alts = [
    'Ladies Under-10s',
    'Mens Under-10s',
    'Mens Under-14s',
    'Mens Under-18s',
    'Mens Masters-2',
    'Fun Teams',
    'Ladies Under-10s (Season)',
    'Mens Under-10s (Season)',
    'Mens Under-16s (Season)',
    'Mens Under-18s (Season)',
    'Mens Masters-2 (Season)',
    'Most Improved (Season)'
]
const title = 'Medallists from LSERSA 5 at Aldershot on 13th October 2018';
const link = '../../../../news/2018/october/LSERSA_5';

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