import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import raceData from '../data/race-data';

export default class RaceYearPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            open: false
        }
        this.buttonHandler = this.buttonHandler.bind(this);
    }

    buttonHandler(e) {
        e.preventDefault();
        this.setState({
            open: !this.state.open
        });
        e.target.blur();
    }

    render() {
        return (
            <div>
                <button
                    className="dropdown"
                    onClick={this.buttonHandler}
                >
                    {this.state.title}
                </button>
                {
                    this.state.open ? (
                        <ul className="dropdown-content">
                            {
                                raceData.map((year, idx) => (
                                    <li key={idx}><Link to={year.link}>{year.title}</Link></li>
                                ))
                            }
                        </ul>
                    ) : ''
                }
            </div>
        );
    }
}

RaceYearPicker.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
}