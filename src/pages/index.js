import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import NewsItem from '../components/NewsItem.jsx';
import Layout from '../components/Layout.jsx';
import { Helmet } from 'react-helmet';

const IndexPage = ({data, location}) => (
    <Layout location={location}>
        <Helmet>
          <script type="module" src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1.5.0/lite-youtube.js"></script>
        </Helmet>
        <div className="videoWrapper">
            <lite-youtube
                videotitle="Bowles Ski Race Club 2016"
                videoid="fApQcD9yu4w"
                posterquality="maxresdefault"
                posterloading="eager"
            ></lite-youtube>
        </div>
        <br />
        <p>Welcome to Bowles Ski Racing Club&apos;s website, the home of Bowles Ski Team. Please
            look at the <Link to='/news'>News page</Link> to see what&apos;s going on.</p>
        <h2>Bowles Ski Racing Club</h2>
        <p>The club is based at Bowles Residential Outdoor Centre in Eridge Green, Kent, and meets
            every Friday evening for two hours of slalom ski race training starting at 5:30pm.</p>
        <p>We are affiliated to the London &amp; South East Regional Snowsports Association (LSERSA)
            and Snowsports South (SRSA), and members of the club compete regularly in the summer
            race series of both organisations.</p>
        <p>Our club is open to racers of all ages, but not all members compete. The most important
            thing is to have fun!</p>
        <p>If you can ski confidently and use the lift unaided, you are welcome to join us - please
            look at the <Link to='/membership'>membership page</Link> for more details, or <Link
            to="/about">get in touch</Link> if you have any questions.</p>
        <hr />
        <p><em>Latest news (see the <Link to='/news'>News page</Link> for more)</em></p>
        {data.allMarkdownRemark.edges.map(({ node }, index) =>
            <div key={index}>
                <NewsItem
                    path={node.fields.slug}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    html={node.html}
                />
                <hr />
            </div>
        )}
    </Layout>
);

IndexPage.propTypes = {
    data: PropTypes.shape(),
    location: PropTypes.object
};

export default IndexPage;

export const query = graphql`query IndexPageQuery {
    allMarkdownRemark(
        filter: {frontmatter: {contentType: {eq: "news"}}}
        sort: {frontmatter: {date: DESC}}
        limit: 1
    ) {
        edges {
            node {
                fields {
                    slug
                }
                frontmatter {
                    title
                    contentType
                    date(formatString: "D MMMM YYYY")
                }
                html
            }
        }
    }
}`;
