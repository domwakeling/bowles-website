import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import newsData from '../data/news-data';

export default class MenuNews extends React.Component {
    yearClickHandler(e) {
        e.preventDefault();
        const yearMatch = /\/(\d{4})/;
        const match = e.target.toString().match(yearMatch);
        if (match && match.length > 1) {
            const openDivId = match[1];
            const divs = document.getElementsByClassName("year");
            for (let i = 0; i < divs.length; i++) {
                if (divs[i].id === openDivId) {
                    if(divs[i].classList.contains('open')) {
                        divs[i].classList.remove('open');
                    } else {
                        divs[i].classList.add('open');
                    }
                } else {
                    divs[i].classList.remove('open');
                }
            }
        }
    }

    render() {
        const { location } = this.props;
        const splitLocation = location.pathname.split('/');
        const pathYear = splitLocation.length > 2 ? splitLocation[2] : '';
        this.yearClickHandler = this.yearClickHandler.bind(this);
        return (
            <div>
                <h4>News Archive</h4>
                {newsData.map(year => {
                    const classes = (year.year === pathYear) ? "year open" : "year";
                    return (
                        <div key={year.year} ref={year.year}>
                            <h3 className="year-header">
                                <Link
                                    className="bold-link"
                                    to={`/news/${year.year}`}
                                    onClick={this.yearClickHandler}
                                    ref={year.year}
                                >
                                    {year.year}
                                </Link>
                            </h3>
                            <div className={classes} id={year.year}>
                                {year.months.map(month => {
                                    const path = `/news/${year.year}/${month}`;
                                    return (
                                        <Link key={month} to={path}>{month}</Link>
                                    )}
                                )}
                            </div>
                        </div>
                    )}
                )}
            </div>
        )
    }

}

MenuNews.propTypes = {
    location: PropTypes.object
}