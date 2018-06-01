import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2018/180526_SRSA_2_chatham/f_u10.jpg';
import img02 from '../../../images/gallery/2018/180526_SRSA_2_chatham/m_u10.jpg';
import img03 from '../../../images/gallery/2018/180526_SRSA_2_chatham/m_u14.jpg';
import img04 from '../../../images/gallery/2018/180526_SRSA_2_chatham/m_masters2.jpg';
import img05 from '../../../images/gallery/2018/180526_SRSA_2_chatham/funs.jpg';
import img06 from '../../../images/gallery/2018/180526_SRSA_2_chatham/medallists.jpg';

const images = [img01, img02, img03, img04, img05, img06];
const alts = [
    'Ladies Under-10s',
    'Mens Under-10s',
    'Male Under-14s',
    'Male Masters 2',
    'Fun Teams',
    'Bowles Medallists'
]
const title = 'Medallists from SRSA 2 at Chatham on 26th May 2018';
const link = '../../../../news/2018/may/SRSA_2';

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