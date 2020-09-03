import React from 'react';
import PropTypes from 'prop-types';

import '../styles/about-blob.scss';

// export default class AboutPerson extends React.Component {
const AboutPerson = ({ name, email, image, blurb }) => (
    <div className="about-blob">
        <div className="image-wrapper">
            <img src={image} alt={name} />
        </div>
        <div className="blurb-wrapper">
            <h4>{name}</h4>
            <div className="contact">
                <div className="contact-label">Contact: </div>
                <a className="contact-link" href={`mailto:${email}`}>{email}</a>
            </div>
            <p className="blurb">
                {blurb ? `"${blurb}"` : ''}
            </p>
        </div>
    </div>
);

AboutPerson.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
    blurb: PropTypes.string
};

export default AboutPerson;
