import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout.jsx';

const NotFoundPage = ({location}) => (
    <Layout location={location}>
        <h2>Not found</h2>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
);

NotFoundPage.propTypes = {
    location: PropTypes.object
};

export default NotFoundPage;
