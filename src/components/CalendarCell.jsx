import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import calendarData from '../data/calendar-data';

const CalendarCell = ({ row, col, firstDay, lastDate, month, year, todayDate, thisMonth}) => {
    const [popupDisplay, setPopupDisplay] = useState('none')
    const [dayOfMonth, setDayOfMonth] = useState(0)
    const [classNames, setClassNames] = useState('')
    const [cellInfo, setCellInfo] = useState({ labels: "", details: [], class: "circle" })
    
    // if we change the calendar, we know "month" will change, so trigger changes from that
    useEffect(() => {
        // set the dayOfMonth state hook
        let cellDate = row * 7 + col + 1;
        if (cellDate < firstDay) {
            cellDate = 0;
        } else if (cellDate >= firstDay + lastDate) {
            cellDate = -1;
        } else cellDate = cellDate - firstDay + 1
        setDayOfMonth(cellDate)

        // set class with formatting for cell, weekends and "today" highlighted
        let cellClass = "cell";
        cellClass = cellClass + (cellDate > 0 ? " date-cell" : " blank-cell");
        if (cellDate > 0 && col >= 5 && col <= 6) {
            cellClass = cellClass + " weekend";
        }
        if (cellDate === todayDate && thisMonth) {
            cellClass = cellClass + " today";
        }
        setClassNames(cellClass);

        // set the info for the cell
        // STEP 1 - set up the "standard" info
        let info = { labels: "", details: [], class: "circle" };
        // STEP 2 - check if there are any racers and amend
        const races = calendarData.filter(e => (
            e.year === year && e.month === (month + 1) && e.date === cellDate && e.type === 'race'
        ));
        if (races.length > 0) {
            info.labels = info.labels + "R";
            info.class = info.class + " race";
            races.forEach(race => {
                info.details.push(race.label);
            })
        }
        // STEP 3 - check if there's any calendar-based training and amend
        const training = calendarData.filter(e => (
            e.year === year && e.month === (month + 1) && e.date === cellDate && e.type === 'training'
        ));
        if (training.length > 0) {
            info.labels = info.labels + "T";
            info.class = /race/.test(info.class) ? "circle race-training" : "circle training";
            training.forEach(session => {
                info.details.push(session.label);
            })
        }
        // STEP 4 - cheeck if there's any tuesday/friday-based training and amend
        if (fridayTraining(cellDate) || tuesdayTraining(cellDate)) {
            if (!/T/.test(info.labels)) info.labels = info.labels + "T";
            if (!/training/.test(info.class)) info.class = info.class + " training";
            if (/R/.test(info.labels)) {
                info.class = "circle race-training";
            }
        }
        if (fridayTraining(cellDate)) info.details.push("Club training");
        if (tuesdayTraining(cellDate)) info.details.push("Club training (6-7)");
        // STEP 5 - set
        setCellInfo(info)

    }, [month])

    const fridayTraining = (cellDate) => {
        // only Fridays
        if(col !== 4 || cellDate <= 0) return false;
        // not 25th December or 1st January
        if(month === 11 && cellDate === 25) return false;
        if(month === 0 && cellDate === 1) return false;
        // coronavirus periods - after 17.03.20 ...
        if(month === 2 && year == 2020 && cellDate >17) return false;
        // ... all of April -> July'20
        if(month >= 3 && month <= 6 && year == 2020) return false;
        // ... through to 14 August
        if(month == 7 && year ==2020 && cellDate < 14) return false;
        return true;
    }

    const tuesdayTraining = (cellDate) => {
        // only Tuesdays
        if (col !== 1 || cellDate <= 0) return false;
        // not 25th December or 1st January
        if (month === 11 && cellDate === 25) return false;
        if (month === 0 && cellDate === 1) return false;
        // only starts (say) September '20
        if (year < 2020) return false;
        if (month < 8 && year == 2020) return false;
        return true;
    }

    const mouseEnterHandler = () => {
        setPopupDisplay('inline');
    }

    const mouseLeaveHandler = () => {
        setPopupDisplay('none');
    }

    return (
        <div className="cell-wrapper">
            {
                dayOfMonth === 0 ? (
                    <div className={classNames}>&nbsp;</div>
                ) : ''
            }
            {
                dayOfMonth > 0 ?(
                    <div className={classNames}>
                        {dayOfMonth}
                        {
                            cellInfo.labels ? (
                                <div>
                                    <div
                                        className={cellInfo.class}
                                        onMouseEnter={mouseEnterHandler}
                                        onMouseLeave={mouseLeaveHandler}
                                    >
                                        <div className="circle-text">{cellInfo.labels}</div>
                                    </div>
                                    <div
                                        style={{ display: popupDisplay }}
                                        className="popup"
                                    >
                                        {cellInfo.details.map((detail, idx) => (
                                            <p key={idx}>{`${detail}`}</p>
                                        ))}
                                    </div>
                                </div>
                            ) : ''
                        }
                        
                    </div>
                ) : ''
            }
        </div>
    )
}

CalendarCell.propTypes = {
    row: PropTypes.number,
    col: PropTypes.number,
    firstDay: PropTypes.number,
    lastDate: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
    todayDate: PropTypes.number,
    thisMonth: PropTypes.bool
}

export default CalendarCell
