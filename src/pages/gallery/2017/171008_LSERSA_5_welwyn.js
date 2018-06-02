import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/m_u8.jpg';
import img02 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/m_u14.jpg';
import img03 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/f_u16.jpg';
import img04 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/m_u16.jpg';
import img05 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/f_sen.jpg';
import img06 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/m_sen.jpg';
import img07 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/m_masters2.jpg';
import img08 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/funs.jpg';
import img09 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/m_u8_2017.jpg';
import img10 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/m_u10_2017.jpg';
import img11 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/m_u14_2017.jpg';
import img12 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/f_u16_2017.jpg';
import img13 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/m_u16_2017.jpg';
import img14 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/f_sen_2017.jpg';
import img15 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/m_sen_2017.jpg';
import img16 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/m_masters2_2017.jpg';
import img17 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/best.jpg';
import img18 from '../../../images/gallery/2017/171008_LSERSA_5_welwyn/medallists.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10,
                img11, img12, img13, img14, img15, img16, img17, img18];
const alts = [
    'Mens Under-8s',
    'Mens Under-14s',
    'Ladies Under-16s',
    'Mens Under-16s',
    'Ladies Seniors',
    'Mens Seniors',
    'Mens Masters 2',
    'Fun Teams',
    'Mens Under-8s - Season',
    'Mens Under-10s - Season',
    'Mens Under-14s - Season',
    'Ladies Under-16s - Season',
    'Mens Under-16s - Season',
    'Ladies Seniors - Season',
    'Mens Seniors - Season',
    'Mens Masters 2 - Season',
    'Best Female Newcomer',
    'Bowles Medallists'
]
const title = 'Medallists from LSERSA 5 at Welwyn on 8 October 2017';
const link = '../../../../news/2017/october/LSERSA_welwyn2';

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