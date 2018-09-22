import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header.jsx';
import Copyright from '../components/Copyright.jsx';
import MenuRight from '../components/MenuRight.jsx';
import '../styles/layout.scss';
import fav from '../favicon.png';

const Layout = (props) => {
    const { children, data, location } = props;
    return (
    <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: 'Bowles ski racing club' },
                { name: 'keywords', content: 'bowles, ski, skiing, racing' },
                { name: 'viewport', content: 'width=device-width, intial-scale=1, viewport-fit=cover'}
            ]}
        >
            <link rel="icon" href={fav} sizes="32x32" type="image/png" />
            <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Object.assign"></script>

        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container">
            <div id="content">
                {children()}
                <Copyright who="Bowles Ski Racing Club" />
            </div>
            <div id="right-column">
                <MenuRight location={location} />
            </div>
        </div>
    </div>
)};

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape(),
  location: PropTypes.object
};

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
