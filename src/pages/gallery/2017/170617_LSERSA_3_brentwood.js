import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2017/170617_LSERSA_3_brentwood/m_u10.jpg';
import img02 from '../../../images/gallery/2017/170617_LSERSA_3_brentwood/m_u14.jpg';
import img03 from '../../../images/gallery/2017/170617_LSERSA_3_brentwood/f_u16.jpg';
import img04 from '../../../images/gallery/2017/170617_LSERSA_3_brentwood/m_u16.jpg';
import img05 from '../../../images/gallery/2017/170617_LSERSA_3_brentwood/f_sen.jpg';
import img06 from '../../../images/gallery/2017/170617_LSERSA_3_brentwood/funs.jpg';

const images = [img01, img02, img03, img04, img05, img06];
const alts = [
    'Mens Under-10s',
    'Mens Under-14s',
    'Ladies Under-16s',
    'Mens Under-16s',
    'Ladies Seniors',
    'Fun Teams'
]
const title = 'Medallists from LSERSA 3 at Brentwood on 17th June 2017';
const link = '../../../../news/2017/june/LSERSA_3';

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