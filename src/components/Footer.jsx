import React from 'react';
import PropTypes from 'prop-types';
import img01 from '../images/logos/dolwen_solutions_small.png';

// export default class Copyright extends React.Component {
const Footer = ({ from, who }) => (
    <div className="footer">
        <hr />
        <div className="dolwen">
            website by&nbsp;
            <a className="brand" href="https://www.dolwensolutions.com/" >
                <img alt="Dolwen Solutions logo" src={img01} width="90" height="30" style={{ width: "90px", height: "auto" }} />
            </a>
        </div>
        <h5 className="copyright">
            &copy;{from} {who}
        </h5>
    </div>
);

Footer.propTypes = {
    from: PropTypes.string,
    who: PropTypes.string
};

Footer.defaultProps = {
    from: new Date().getFullYear().toString(),
    who: ''
};

export default Footer;
