import React from 'react';

import img from "../images/start-racing/ben_w-racing.jpg"

const IndexPage = () => (
    <div>
        <h2>Introduction to Racing</h2>
        <p>Any new members training at Bowles wondering how to try a spot of racing?</p>
        <p>There are 9 more regional races taking place in various dry ski slopes
            in the South East over the Summer. Its easy to enter the races and
            there is no minimum skill requirement. If you can ski down a slalom
            run (even fairly slowly) you can take part!</p>
        <p>The race days generally involve a relatively early start , about 8am
            and run till about 3-4pm</p>
        <p>There&apos;ll be an open practice at the start, then 3 individual timed
            runs for everyone. After that there&apos;s a dual parallel slalom,
            (a head to head) where you win extra points for the summer season trophy,
            or just enjoy racing against someone (rather than a clock). </p>
        <p>If you still want more racing then after a picnic lunch the Fun Races
            start. This is a team relay dual slalom event, and these teams are
            chosen from that mornings individual timings which are evenly distributed
            so each team should have a roughly equal chance of winning. This gives
            even absolute beginners a very realistic chance of winning a medal
            (Rufus Wontner won several fun race medals in his first season racing). </p>
        <p>The last race is often a club team race made up of the fastest members
            from each club. Then at the end of the afternoon there is a prize giving,
            1st, 2nd,3rd for all the individual races, in age and gender categories,
            and then medals for all winning members 1st, 2nd, & 3rd, of the fun teams
            and the club teams. </p>
        <p>These race days generally move on fairly quickly and they are all self
            contained, so you can do just 1, or 2, or any number up to all 9. The
            cost of entry is from about &pound;14- &apound;17 per race. You will
            need ski kit, most people bring their own, but if you have none then
            all the race venues have rental kit available. </p>
        <p>To book, go to skiresults.co.uk and create a membership from the Tab at
            the top right, then select upcoming events. Once your membership is created
            you can book and pay for any race at any time up to the closing day a few
            days before the races. Make sure you list Bowles as your club! </p>
        <p>Its easy to take part, and very flexible, and as each entry is individual
            there&apos;s generally less pressure than at a team event. If you can&apos;t
            go last minute, you&apos;re listed as DNS (did not start), you don&apos;t get
            your race entry refunded, but you wont have let anyone else down, so
            its not a major issue. </p>
        <p>There are lots of other ski races taking place throughout the Summer
            listed on GBski.com, but the regional races with LSERSA and Snowsport
            South, and are an easy and gentle introduction and hopefully not too
            far to drive! </p>
        <img src={img} style={{ float: 'right' }} />
    </div>
);

export default IndexPage;
