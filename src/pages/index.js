import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import NewsItem from '../components/NewsItem.jsx';
import Layout from '../components/Layout.jsx';

const IndexPage = ({data, location}) => (
    <Layout location={location}>
        <div className="videoWrapper">
            <iframe
                title="Introductory video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/fApQcD9yu4w"
                frameBorder="0"
                allowFullScreen
            />
        </div>
        <br />
        <p>Welcome to Bowles Ski Racing Club&apos;s website, the home of Bowles Ski Team. Please
            look at the <Link to='/news'>News page</Link> to see what&apos;s going on.</p>
        <h2>Bowles Ski Racing Club</h2>
        <p>The club is based at Bowles Residential Outdoor Centre in Eridge Green, Kent, and meets
            every Friday evening for two hours of slalom ski race training starting at 5:30pm.</p>
        <p>We are affiliated to the London &amp; South East Regional Snowsports Assocation (LSERSA)
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
}

export default IndexPage;

export const query = graphql`
    query IndexPageQuery {
        allMarkdownRemark (
            filter: { frontmatter:  { contentType: { eq:"news"}}}
            sort: { order: DESC, fields: [frontmatter___date] }
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
    }
`;
