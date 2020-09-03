import React from 'react';
import PropTypes from 'prop-types';

import CalendarCell from './CalendarCell.jsx';

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month: props.date.getMonth(),
            year: props.date.getFullYear()
        };
    }

    monthDown(e) {
        e.preventDefault();
        e.target.blur();
        const newMonth = this.state.month - 1;
        const currYear = this.state.year;
        if (newMonth >= 0) {
            this.setState({month: newMonth});
        } else {
            this.setState({month: newMonth + 12, year: currYear - 1});
        }
    }

    monthUp(e) {
        e.preventDefault();
        e.target.blur();
        const newMonth = this.state.month + 1;
        const currYear = this.state.year;
        if (newMonth <= 11) {
            this.setState({ month: newMonth });
        } else {
            this.setState({ month: newMonth - 12, year: currYear + 1 });
        }
    }

    monthInfo(year, month) {
        let firstDay = new Date(year, month, 1);
        const lastDay = new Date (new Date(year, month + 1, 1) - 1 );
        return {
            firstDayIndex: firstDay.getDay() ? firstDay.getDay() : 7,
            lastDate: lastDay.getDate()
        };
    }

    render() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
                        'Nov', 'Dec'];
        this.monthDown = this.monthDown.bind(this);
        this.monthUp = this.monthUp.bind(this);
        this.monthInfo = this.monthInfo.bind(this);
        const { firstDayIndex, lastDate } = this.monthInfo(this.state.year, this.state.month);
        const todayDate = this.props.date.getDate();
        const todayMonth = this.props.date.getMonth();
        const todayYear = this.props.date.getFullYear();
        const thisMonth = (todayMonth === this.state.month && todayYear === this.state.year);
        return (
            <div id="calendar">
                <div>
                    <button
                        className="back-button"
                        aria-label="Previous Month"
                        onClick={this.monthDown}
                    />
                    <button
                        className="fwd-button" 
                        aria-label="Next Month"
                        onClick={this.monthUp}
                    />
                    <div className="date">
                        {`${months[this.state.month]} ${this.state.year}`}
                    </div>
                </div>
                <div style={{clear: "both"}} />
                <div>
                    {
                        ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day =>(
                            <div key={day} className="calendar-days">
                                {day}
                            </div>
                        ))
                    }
                </div>
                {
                    [0,1,2,3,4,5].map(row => (
                        <div key={row} className="calendar-row">
                            {
                                [0, 1, 2, 3, 4, 5, 6].map(col => (
                                    <CalendarCell
                                        row={row}
                                        col={col}
                                        month={this.state.month}
                                        year={this.state.year}
                                        firstDay={firstDayIndex}
                                        lastDate={lastDate}
                                        todayDate={todayDate}
                                        thisMonth={thisMonth}
                                        key={`${row}_${col}`}
                                    />
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}

Calendar.propTypes = {
    date: PropTypes.shape()
};