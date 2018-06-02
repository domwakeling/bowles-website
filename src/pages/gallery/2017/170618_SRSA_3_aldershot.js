import React from "react";
import GalleryPage from '../../../components/GalleryPage.jsx';

import img01 from '../../../images/gallery/2017/170618_SRSA_3_aldershot/f_u16.jpg';
import img02 from '../../../images/gallery/2017/170618_SRSA_3_aldershot/funs.jpg';

const images = [img01, img02];
const alts = [
    'Ladies Under-16s',
    'Fun Teams'
]
const title = 'Medallists from SRSA 3 at Aldershot on 18th June 2017';
const link = '../../../../news/2017/june/SRSA_3';

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