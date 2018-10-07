import React from 'react';

import img1 from '../images/start-racing/ben_w-racing.jpg';
import img2 from '../images/gallery/2017/171014_triregional/bowles.jpg';

const IndexPage = () => (
    <div>
        <h2>Introduction to Racing</h2>
        <p>Any new members training at Bowles wondering how to try a spot of racing?</p>
        <p>There are a number of regional races taking place at various dry ski slopes
            in the South East each Summer, in particular those run by the LSERSA and Snowsports
            South regions. It&apos;s easy to enter the races and there is no
            minimum skill requirement. If you can ski down a slalom run (even fairly slowly) you
            can take part!</p>
        <img src={img2} />
        <p>The race days generally involve a relatively early start, about 8am, and run until
            about 3-4pm.</p>
        <p>There&apos;ll be an open practice at the start, then 3 individual timed
            runs for everyone. After that there&apos;s a dual parallel slalom
            (a head-to-head) where you win extra points for the summer season trophy,
            or just enjoy competing against another racer (rather than the clock).</p>
        <p>If you still want more racing then after a picnic lunch the Fun Races
            start. This is a team relay dual slalom event, and these teams are
            chosen from that mornings individual timings which are evenly distributed
            so each team should have a roughly equal chance of winning. This gives
            even absolute beginners a very realistic chance of winning a medal
            (Rufus Wontner won several fun race medals in his first season racing).</p>
        <p>The last race is often a club team race made up of the fastest members
            from each club. Then at the end of the afternoon there is a prize giving -
            1st, 2nd &amp; 3rd for all the individual races, in age and gender categories,
            and then medals for all members of the 1st, 2nd, &amp; 3rd-placed fun teams
            and club teams.</p>
        <p>These race days generally move on fairly quickly and they are all self-contained,
            so you can do just one or two if the whole season is too much! The cost of entry
            usually ranges from about &pound;14-&pound;17 per race. You will need ski kit - most
            people bring their own, but if you have none then all the race venues have rental kit
            available.</p>
        <p>To book in LSERSA or Snowsports South races, go to skiresults.co.uk and create a
            membership via the tab at the top right, then select upcoming events. Once your
            membership is created you can book and pay for any race at any time up to the closing 
            day, which is typically a few days before the actual race. Make sure you list Bowles as
            your club!</p>
        <p>It&apos;s easy to take part, and very flexible, and as each entry is individual
            there&apos;s generally less pressure than at a sports-club event. If you can&apos;t
            go last minute, you&apos;re listed as DNS (did not start); you don&apos;t get
            your race entry refunded, but you wont have let anyone else down, so it&apos;s really
            not an issue.</p>
        <img src={img1} />
        <p>There are lots of other ski races taking place throughout the summer which are listed on
            GBski.com, but the regional races with LSERSA and Snowsport South are an easy and gentle
            introduction and hopefully not too far to drive!</p>
        <p><em>With thanks to Tom Wontner</em></p>
        <hr />
    </div>
);

export default IndexPage;
