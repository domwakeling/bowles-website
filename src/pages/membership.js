import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
    <div>
        <h2>Membership Information</h2>
        <p>We hold training sessions at <a href="http://www.bowles.ac/" rel="noopener noreferrer" 
            target="_blank" >Bowles Outdoor Centre</a> every Friday evening (except for Christmas
            Day and New Year!) from 5:30 to 7:30.</p>
        <p>A typical session starts with a short period of warm-up exercises, and for this reason we
            ask everyone to arrive as early as possible. This is followed by progressive isntruction
            and we normally end with evening with informal slalom or dual slalom. We also hold timed
            training sessions approximately once a month, and hold two club &quot;fun races&quot;
            a year.</p>
        <p>Bowles ski team is represented by its members at as many regional and club races as
            possible, and we encourage new and current members to participate regularly (although
            this is <strong>not</strong> a requirement of membership). Our team has seen some
            impressive results over the past few years, and with a growing club we hope to achieve
            even better in the years to come.</p>
        <p>New members (both children and adults) are always welcome - our only requirements are
            that participants be able to ski with linked snow-plough turns from the top of the slope
            and have motivation to improve.</p>
        <p>If you are interested please come along and try a session out one Friday, or <Link
            to="/about">get in touch</Link> - we look forward to meeting you.</p>
        <hr />
        <p>Annual membership charges are &pound;35 for an individual, with a reduced charge of
            &pound;16 for extra family members. There is also a charge of &pound;8 per person for
            each Friday night training session.</p>
    </div>
);

export default IndexPage;
