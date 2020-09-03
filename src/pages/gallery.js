import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import galleryData from '../data/gallery-data';
import Layout from '../components/Layout.jsx';

const GalleryPage = ({ location }) => (
    <Layout location={location}>
        <h2>Gallery</h2>
        {
            galleryData.map(year => (
                <div key={year.year}>
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
                    <hr />
                </div>
            ))
        }
    </Layout>
);

export default GalleryPage;

GalleryPage.propTypes = {
    location: PropTypes.object
};