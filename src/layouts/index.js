import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header.jsx';
import MenuRight from '../components/MenuRight.jsx';
import '../styles/Layout.scss';

const Layout = (props) => {
    const { children, data, location } = props;
    return (
    <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: 'Bowles ski racing club' },
                { name: 'keywords', content: 'bowles, ski, skiing, racing' },
            ]}
        />
        <Header
            siteTitle={data.site.siteMetadata.title} />
        <div className="container">
            <div id="content">
                {children()}
            </div>
            <div id="right-column">
                <MenuRight location={location} />
            </div>
        </div>
    </div>
)};

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
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
