import React from 'react';
import PropTypes from 'prop-types';

import AboutPerson from '../components/AboutPerson.jsx';
import aboutData from '../data/about-data';
import Layout from '../components/Layout.jsx';

import img0 from '../images/about/John_M.jpg';
import img1 from '../images/about/Tom.jpg';
import img2 from '../images/about/Ben.jpg';
import img3 from '../images/about/Nigel.jpg';
import img4 from '../images/about/Simon.jpg';
import img5 from '../images/about/Marna2.jpg';
import img6 from '../images/about/Joshua.jpg';

const images = [img0, img1, img2, img3, img4, img5, img6];

const AboutPage = ({location}) => (
    <Layout location={location}>
        <h2>About Us</h2>
        <p>Please feel free to contact any of the committee members below if you have any
            questions.</p>
        {aboutData.map(person => (
            <AboutPerson
                key={person.idx}
                name={person.name}
                email={person.email}
                image={images[person.idx]}
                blurb={person.blurb}
            />
        ))}
        <hr />
    </Layout>
);

export default AboutPage;

AboutPage.propTypes = {
    location: PropTypes.object
};
