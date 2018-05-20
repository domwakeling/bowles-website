import React from 'react';

import '../styles/about-blob.scss';

export default class AboutPerson extends React.Component {
    render() {
        const { name, email, image, blurb } = this.props;
        const link = `mailto:${email}`
        const blurbText = blurb ? `"${blurb}"` : '';
        return (
            <div className="about-blob">
                <div className="image-wrapper">
                    <img src={image} alt={name} />
                </div>
                <div className="blurb-wrapper">
                    <h4>{name}</h4>
                    <div className="contact">
                        <div className="contact-label">Contact: </div>
                        <a className="contact-link" href={link}>{email}</a>
                    </div>
                    {/* <p className="blurb">&ldquo;{blurb}&rdquo;</p> */}
                    <p className="blurb">{blurbText}</p>
                </div>
            </div>
        )
    }
}