import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CalendarCell from './CalendarCell.jsx';

// export default class Calendar extends React.Component {
const Calendar = ({ date }) => {
    const [month, setMonth] = useState(date.getMonth())
    const [year, setYear] = useState(date.getFullYear())
    
    const firstDay = () => {
        const firstDayNew = new Date(year, month, 1);
        return firstDayNew.getDay() || 7
    }

    const lastDate = () => {
        return new Date( new Date(year, month + 1, 1) -1).getDate()
    }

    const monthDown =(e) => {
        e.preventDefault();
        e.target.blur();
        const newMonth = month - 1;
        const currYear = year;
        if (newMonth >= 0) {
            setMonth(newMonth)
        } else {
            setYear(currYear - 1)
            setMonth(newMonth + 2)
        }
    }

    const monthUp = (e) => {
        e.preventDefault();
        e.target.blur();
        const newMonth = month + 1;
        const currYear = year;
        if (newMonth <= 11) {
            setMonth(newMonth)
        } else {
            setYear(currYear + 1)
            setMonth(newMonth - 12)
        }
    }

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
        'Nov', 'Dec'];

    return (
        <div id="calendar">
            <div>
                <button
                    className="back-button"
                    aria-label="Previous Month"
                    onClick={monthDown}
                />
                <button
                    className="fwd-button" 
                    aria-label="Next Month"
                    onClick={monthUp}
                />
                <div className="date">
                    {`${months[month]} ${year}`}
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
                                    month={month}
                                    year={year}
                                    firstDay={firstDay()}
                                    lastDate={lastDate()}
                                    todayDate={date.getDate()}
                                    thisMonth={date.getMonth() == month && date.getFullYear() == year}
                                    key={`${row}_${col}`}
                                />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

Calendar.propTypes = {
    date: PropTypes.shape()
}

export default Calendar;
