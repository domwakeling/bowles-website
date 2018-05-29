import React from 'react';
import Link from 'gatsby-link';
import galleryData from '../data/gallery-data';

export default class GalleryPage extends React.Component {
    render() {
        return (
            <div>
                <h3>Galleries</h3>
                {
                    galleryData.map(year => (
                        <div  key={year.year}>
                            <h3>{year.year}</h3>
                            <div className="gallery-container">
                                {
                                    year.galleries.map(gallery => (
                                        <div key={gallery.date} className="gallery-item">
                                            <Link to={gallery.link}>
                                                <img src={gallery.img} alt={gallery.title} />
                                                <p>{gallery.title}</p>
                                                <p>{gallery.date}</p>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}