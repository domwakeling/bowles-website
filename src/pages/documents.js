import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout.jsx';

const DocumentsPage = ({ location }) => (
    <Layout location={location}>
        <h2>Documents</h2>
        <p>Club constitution and meeting minutes.</p>

        <h4>Constitution</h4>
        <ul>
            <li><a href="/constitution.pdf" target="_other">Club Constitution (updated 2024)</a></li>
        </ul>

        <h4>Meeting minutes</h4>
        <ul>
            <li><a href="/meetings/agm_2023.pdf" target="_other">2023 AGM</a></li>
            <li><a href="/meetings/agm_2022.pdf" target="_other">2022 AGM</a></li>
        </ul>
        <hr />
    </Layout>
);

export default DocumentsPage;

DocumentsPage.propTypes = {
    location: PropTypes.object
};
