import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2018/180602_LSERSA_2_brentwood/f_u10.jpg';
import img02 from '../../../images/gallery/2018/180602_LSERSA_2_brentwood/m_u10.jpg';
import img03 from '../../../images/gallery/2018/180602_LSERSA_2_brentwood/m_u16.jpg';
import img04 from '../../../images/gallery/2018/180602_LSERSA_2_brentwood/m_u18.jpg';
import img05 from '../../../images/gallery/2018/180602_LSERSA_2_brentwood/f_u21.jpg';
import img06 from '../../../images/gallery/2018/180602_LSERSA_2_brentwood/m_masters2.jpg';
import img07 from '../../../images/gallery/2018/180602_LSERSA_2_brentwood/funs.jpg';
import img08 from '../../../images/gallery/2018/180602_LSERSA_2_brentwood/medallists.jpg';

const images = [img01, img02, img03, img04, img05, img06, img07, img08];
const alts = [
    'Ladies Under-10s',
    'Mens Under-10s',
    'Mens Under-16s',
    'Mens Under-18s',
    'Ladies Under-21s',
    'Mens Masters 2',
    'Fun Teams',
    'Bowles Medallists'
]
const title = 'Medallists from LSERSA 2 at Brentwood on 2nd June 2018';
const link = '../../../../news/2018/june/LSERSA_2';

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