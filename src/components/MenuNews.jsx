import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import newsData from '../data/news-data';

export default class MenuNews extends React.Component {
    yearClickHandler(e) {
        e.preventDefault();
        const yearMatch = />(\d{4})<\/a/;
        console.log(String(e.target));
        // const match = e.target.match(yearMatch);
        
        // if (match.length > 1) {
        //     const divs = document.getElementsByClassName("year");
        //     console.log(divs);
        //     console.log(match[1]);
        //     console.log(document.getElementById(match[1]));
        //     for (let i = 0; i < divs.length; i++) {
        //         divs[i].className = "year"
        //     }
        //     document.getElementById(match[1]).className="year open";
        // }
    }

    render() {
        const { location } = this.props;
        const splitLocation = location.pathname.split('/');
        const pathYear = splitLocation.length > 2 ? splitLocation[2] : '';
        this.yearClickHandler = this.yearClickHandler.bind(this);
        return (
            <div>
                {newsData.map(year => {
                    const classes = (year.year === pathYear) ? "year open" : "year";
                    return (
                        <div key={year.year} ref={year.year}>
                            <Link
                                className="bold-link"
                                to='#'
                                onClick={this.yearClickHandler}
                                ref={year.year}
                            >
                                {year.year}
                            </Link>
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