import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout.jsx';
import img01 from '../images/safeguarding/bowles-team-lsersa-3-2023.jpeg';

const SafeguardingPage = ({ location }) => {
    return (
        <Layout location={location}>
            <h2>Safeguarding &amp; Welfare</h2>
            <img src={img01} alt="Bowles racers" />
            <p>Bowles Ski Racing Club is committed to safeguarding all our members and has adopted
                SnowSport England&apos;s SnowSafe Children and Young People and SnowSafe Adults
                safeguarding policies and is committed to adopting any future versions of these
                policies.</p>
            <p>Our club has a Club Welfare Officer &mdash; please contact them if you have any
                worries or concerns.</p>
            <p>Name: Jenni Watts</p>
            <p>Contact Details: <a href="mailto:cwo@bowlesskiracingclub.org.uk">cwo@bowlesskiracingclub.org.uk</a></p>
            <p><b>Safeguarding Is Everyone&apos;s Concern</b> &mdash; together we can ensure members of our
                club have a positive and happy time with us.</p>
            <h4>Policies</h4>
            <ul>
                <li><a href="/bsrc-anti-bullying-policy.pdf">Club Anti-Bullying Policy</a></li>
                <li><a href="/bsrc-social-media-policy.pdf">Club Social Media Policy</a></li>
                <li><a href="/snowsafe-adults-policy.pdf">Snowsafe Adults Policy</a></li>
                <li><a href="/snowsafe-children-policy.pdf">Snowsafe Children Policy</a></li>
                <li><a href="/bsrc-safeguarding-poster.pdf">Safeguarding Poster</a></li>
            </ul>
            <p>See <a href="https://www.snowsportengland.org.uk/safeguarding/">SnowSport
                England&apos;s website</a> for more safeguarding info.</p>
            <hr />
        </Layout>
    );
};

export default SafeguardingPage;

SafeguardingPage.propTypes = {
    location: PropTypes.object
};
