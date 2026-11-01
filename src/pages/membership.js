import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Layout from '../components/Layout.jsx';
import img01 from '../images/gallery/2018/180602_LSERSA_2_brentwood/medallists.jpg';

const IndexPage = ({location}) => (
    <Layout location={location}>
        <h2>Membership Information</h2>
        <p>We hold training sessions at <a href="http://www.bowles.ac/" rel="noopener noreferrer" 
            target="_blank" >Bowles Outdoor Centre</a> every Friday evening from 5:30 to 7:30, and
            Tuesday evenings (which are limited to eight racers) from 6-7. Training is held
            year-round except for Christmas Day and New Year!</p>
        <p>A typical session starts with a short period of warm-up exercises, and for this reason we
            ask everyone to arrive as early as possible. This is followed by progressive instruction
            and we normally end with evening with informal slalom or dual slalom. We also hold timed
            training sessions approximately once a month, and hold two club &quot;fun races&quot;
            a year.</p>
        <img src={img01} alt="Bowles members" />
        <p>Bowles ski team is represented by its members at as many regional and club races as
            possible, and we encourage new and current members to participate regularly (although
            this is <strong>not</strong> a requirement of membership). Our team has seen some
            impressive results over the past few years, and with a growing club we hope to achieve
            even better in the years to come.</p>
        <p>New members (both children and adults) are always welcome - our only requirements are
            that participants be able to ski with linked snow-plough turns from the top of the slope
            and have motivation to improve.</p>
        <p>If you are interested we{"'"}d love to hear from you &mdash; please <Link
            to="/about">get in touch</Link>, we look forward to meeting you.</p>
        
        <hr />
        <p>For 2026/7 membership, we are using ClubPal as our membership system. Please{" "}
            <a href="https://bowles-ski-racing.clubpal.app/" target="_club_pal" >use this link </a>.
            You should initially  set up an account in the name of the parent/guardian, which will
            give you access to manage your children, or if you are an adult ski racer, yourself.</p>

        <p>Then you will need to add the details of additional people you will be managing. Go to
            the top right and click on your profile, and then click add profile. You should use your
            e-mail address, but put your children{"'"}s details in.</p>

        <p>You can then switch between membership profile. In order to pay for membership, go to
            profile who you want to pay membership for, click on the membership menu. Select the
            annual membership and continue to make payment, either by card or by Google or Apple
            Pay. If you have a second family member, then proceed to make payment for them, but add
            in the discount code “Family4” to get the &pound;16 membership. Membership will then be
            approved by an administrator.</p>

        <p>There is also an app which you can download from the store (search for ClubPal, download
            and then select Bowles). For training sessions in December 2026 and onwards, booking for
            training sessions will be via this system.</p>

        <hr />
        <p>Annual membership charges are &pound;20 for an individual, with a reduced charge of
            &pound;16 for extra family members. Individual sessions are then paid for as attended,
            directly to Bowles Outdoor Centre, at a cost of &pound;15 per person for Friday sessions
            and &pound;13 per person for Tuesday sessions.</p>
        <p>Bowles Ski Racing Club is affiliated with Snowsport England, which requires members of
            clubs to also be individual members of Snowsport England. All racers taking part in
            training need to have at least a Blue membership &mdash; you can find more information
            {" "}
            <a href="https://www.snowsportengland.org.uk/membership-details/" target="sse">here</a>.
            Under Snowsport England guidance, potential new members are allowed a maximum of three
            {"'"}taster{"'"} sessions before having to sign up to SSE membership.
        </p>
        
    </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
    location: PropTypes.object
};
