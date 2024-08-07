import React from "react";
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { Link } from 'gatsby';
import Layout from '../components/Layout.jsx';
import '../styles/slick.scss';
import '../styles/slick-theme.scss';

const GalleryPage = ({location, data}) => {
    const settings = {
        centerMode: true,
        dots: false,
        fade: true,
        infinite: true,
        speed: 750,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    const { images, alts, title, link } = data;

    const imageData = images.map((url, idx) => {
        return {
            url,
            alt: alts[idx]
        };
    });

    return (
        <Layout location={location}>
            <h3>{title}</h3>
            <div style={{ marginLeft: '25px', marginRight: '25px' }}>
                <Slider {...settings}>
                    { 
                        imageData.map((image, idx) => (
                            <div key={idx}>
                                <img  style={{margin: 'auto'}} src={image.url} alt={image.alt} />
                                <div className='slider-label'>{image.alt}</div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <br />
            <br />
            <p>See <Link to={link}>the news</Link> for full details.</p>
        </Layout>
    );
};

export default GalleryPage;

GalleryPage.propTypes = {
    data: PropTypes.shape({
        images: PropTypes.array,
        alts: PropTypes.array,
        title: PropTypes.string,
        link: PropTypes.string
    }),
    location: PropTypes.object
};
