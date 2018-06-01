import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2017/170715_SRSA_4_aldershot/f_u16.jpg';
import img02 from '../../../images/gallery/2017/170715_SRSA_4_aldershot/f_u18.jpg';
import img03 from '../../../images/gallery/2017/170715_SRSA_4_aldershot/f_sen.jpg';
import img04 from '../../../images/gallery/2017/170715_SRSA_4_aldershot/m_masters2.jpg';
import img05 from '../../../images/gallery/2017/170715_SRSA_4_aldershot/fun_teams.jpg';

const images = [img01, img02, img03, img04, img05];
const alts = [
    'Ladies Under-16s',
    'Ladies Under-18s',
    'Ladies Seniors',
    'Mens Masters 2',
    'Fun Teams'
]
const title = 'Medallists from SRSA 4 at Aldershot on 15th July 2017';
const link = '../../../../news/2017/TODO';

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