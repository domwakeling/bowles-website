import React from 'react';

import AboutPerson from '../components/AboutPerson.jsx';
import aboutData from '../data/about-data';

import img0 from '../images/000_about_us/John_M.jpg';
import img1 from '../images/000_about_us/Paul.jpg';
import img2 from '../images/000_about_us/Ben.jpg';
import img3 from '../images/000_about_us/Nigel.jpg';
import img4 from '../images/000_about_us/Simon.jpg';
import img5 from '../images/000_about_us/Marna.jpg';
import img6 from '../images/000_about_us/placeholder.jpg';

const images = [img0, img1, img2, img3, img4, img5, img6];

const AboutPage = () => (
    <div>
        <h2>About Us</h2>
        <p>Please feel free to contact any of the club members below if you have any questions.</p>
        {aboutData.map(person => (
            <AboutPerson
                key={person.idx}
                name={person.name}
                email={person.email}
                image={images[person.idx]}
                blurb={person.blurb}
            />
        ))}
    </div>
);

export default AboutPage;
