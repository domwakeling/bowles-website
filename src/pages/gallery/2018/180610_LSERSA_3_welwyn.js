import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2018/180610_LSERSA_3_welwyn/f_u10.jpg';
import img02 from '../../../images/gallery/2018/180610_LSERSA_3_welwyn/m_u10.jpg';
import img03 from '../../../images/gallery/2018/180610_LSERSA_3_welwyn/m_u12.jpg';
import img04 from '../../../images/gallery/2018/180610_LSERSA_3_welwyn/m_u16.jpg';
import img05 from '../../../images/gallery/2018/180610_LSERSA_3_welwyn/m_u18.jpg';
import img06 from '../../../images/gallery/2018/180610_LSERSA_3_welwyn/m_masters2.jpg';
import img07 from '../../../images/gallery/2018/180610_LSERSA_3_welwyn/funs.jpg';
import img08 from '../../../images/gallery/2018/180610_LSERSA_3_welwyn/clubs.jpg';
import img09 from '../../../images/gallery/2018/180610_LSERSA_3_welwyn/clubs_2.jpg';
import img10 from '../../../images/gallery/2018/180610_LSERSA_3_welwyn/medallists.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10];
const alts = [
    'Ladies Under-10s',
    'Mens Under-10s',
    'Mens Under-12s',
    'Mens Under-16s',
    'Mens Under-18s',
    'Mens Masters 2',
    'Fun Teams',
    'Cub Teams',
    'Bowles Club Team',
    'Bowles Medallists'
]
const title = 'Medallists from LSERSA 3 at Welwyn on 10th June 2018';
const link = '../../../../news/2018/june/LSERSA_3';

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