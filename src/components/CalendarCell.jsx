import React from 'react';
import PropTypes from 'prop-types';
import calendarData from '../data/calendar-data';

export default class CalendarCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popupDisplay: 'none'
        }
    }
    dayOfMonth() {
        const { row, col, firstDay, lastDate} = this.props;
        const cellNum = row * 7 + col + 1;
        if (cellNum < firstDay) return 0;
        if (cellNum >= firstDay + lastDate) return -1;
        return cellNum - firstDay + 1;
    }

    fridayTraining() {
        const dayOfMonth = this.dayOfMonth();        
        if(this.props.col !== 4 || dayOfMonth <= 0) return false;
        if(this.props.month === 11 && dayOfMonth === 25) return false;
        if(this.props.month === 0 && dayOfMonth === 1) return false;
        return true;
    }

    mouseEnterHandler() {
        this.setState({popupDisplay: 'inline'});
    }

    mouseLeaveHandler() {
        this.setState({popupDisplay: 'none'});
    }

    cellStylingClass(date) {
        let classNames = "cell";
        classNames = classNames + (date > 0 ? " date-cell" : "blank-cell");
        if (date > 0 && this.props.col >= 5 && this.props.col <= 6) {
            classNames = classNames + " weekend";
        }
        return classNames;
    }

    cellInfoHandler(date) {
        const { month, year } = this.props;
        let info = { labels: "", details: [], class: "circle" };

        const races = calendarData.filter(e => (
            e.year === year && e.month === (month + 1) && e.date === date && e.type === 'race'
        ));
        if(races.length > 0) {
            info.labels = info.labels + "R";
            info.class = info.class + " race";
            races.forEach(race => {
                info.details.push(race.label);
            })
        }

        const training = calendarData.filter(e => (
            e.year === year && e.month === (month + 1) && e.date === date && e.type === 'training'
        ));

        if(training.length > 0) {
            info.labels = info.labels + "T";
            info.class = /race/.test(info.class) ? "circle race-training" : "circle training";
            training.forEach(session => {
                info.details.push(session.label);
            })
        }
        if (this.fridayTraining()) {
            if (!/T/.test(info.labels)) info.labels = info.labels + "T";
            if (!/training/.test(info.class)) info.class = info.class + " training";
            if(/R/.test(info.labels)) {
                info.class = "circle race-training";
            }
            info.details.push("Club training");
        }
        return info;
    }

    render() {
        this.fridayTraining = this.fridayTraining.bind(this);
        this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
        this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
        this.dayOfMonth = this.dayOfMonth.bind(this);
        const cellDate = this.dayOfMonth();
        let cellClassName = this.cellStylingClass(cellDate);
        const info = this.cellInfoHandler(cellDate);
        // if (cellDate === this.props.todayDate && this.props.thisMonth) {
        //     cellClassName = cellClassName + " today";
        // }
        return (
            <div className="cell-wrapper">
                {
                    cellDate === 0 ? (
                        <div className={cellClassName}>&nbsp;</div>
                    ) : ''
                }
                {
                    cellDate > 0 ?(
                        <div className={cellClassName}>
                            {cellDate}
                            {
                                info.labels ? (
                                    <div>
                                        <div
                                            className={info.class}
                                            onMouseEnter={this.mouseEnterHandler}
                                            onMouseLeave={this.mouseLeaveHandler}
                                        >
                                            <div className="circle-text">{info.labels}</div>
                                        </div>
                                        <div
                                            style={{ display: this.state.popupDisplay }}
                                            className="popup"
                                        >
                                            {info.details.map((detail, idx) => (
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