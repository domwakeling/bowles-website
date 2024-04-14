import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import MenuRight from './MenuRight.jsx';
import { ToastContainer } from './booking/Toast.jsx';
import '../styles/layout.scss';
import fav from '../favicon.png';

const Layout = ({children, location}) => {

    const data = useStaticQuery(graphql`
        query TitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
            }
    `);

    return (
        <div>
            <Helmet
                title={`${data.site.siteMetadata.title}`}
                meta={[
                    { name: 'description', content: 'Bowles ski racing club' },
                    { name: 'keywords', content: 'bowles, ski, skiing, racing' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover'}
                ]}
                htmlAttributes={{
                    lang: 'en',
                }}
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
                </div>
                <div id="right-column">
                    <MenuRight location={location} />
                </div>
                <Footer who="Bowles Ski Racing Club" />
            </div>
        </div>
    );
};

Layout.propTypes = {
  children: PropTypes.array,
  data: PropTypes.shape(),
  location: PropTypes.object
};

export default Layout;
