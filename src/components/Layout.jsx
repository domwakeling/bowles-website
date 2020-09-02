import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './Header.jsx';
import Copyright from './Copyright.jsx';
import MenuRight from './MenuRight.jsx';
import { ToastContainer } from './booking/Toast.jsx';
import '../styles/layout.scss';
import fav from '../favicon.png';

const Layout = ({children, location}) => (

    <StaticQuery
        query={graphql`
            query TitleQuery {
                site {
                    siteMetadata {
                       title
                    }
                }
            }
        `}
        render={data => (
            <div>
                <Helmet
                    title={`${data.site.siteMetadata.title}`}
                    meta={[
                        { name: 'description', content: 'Bowles ski racing club' },
                        { name: 'keywords', content: 'bowles, ski, skiing, racing' },
                        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover'}
                    ]}
                >
                    <link rel="icon" href={fav} sizes="32x32" type="image/png" />
                    <script 
                        src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Object.assign">
                    </script>
                </Helmet>
                <Header
                    siteTitle={`${data.site.siteMetadata.title}`}
                />
                <ToastContainer align="right" position="top" />
                <div className="container">
                    <div id="content">
                        {children}
                        <Copyright who="Bowles Ski Racing Club" />
                    </div>
                    <div id="right-column">
                        <MenuRight location={location} />
                    </div>
                </div>
            </div>
        )}
    />
);

Layout.propTypes = {
  children: PropTypes.array,
  data: PropTypes.shape(),
  location: PropTypes.object
};

export default Layout
