import React from "react";
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Link from 'gatsby-link';
import '../styles/slick.scss';
import '../styles/slick-theme.scss';

export default class GalleryPage extends React.Component {
    render() {
        const settings = {
            centerMode: true,
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const { images, alts, title, link } = this.props.data;
        const imageData = images.map((url, idx) => {
            return {
                url,
                alt: alts[idx]
            }
        });
        return (
            <div>
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
            </div>
        );
    }
}

GalleryPage.propTypes = {
    data: PropTypes.shape({
        images: PropTypes.array,
        alts: PropTypes.array,
        title: PropTypes.string,
        link: PropTypes.string
    })
}
