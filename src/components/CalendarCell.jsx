import React from 'react';
import PropTypes from 'prop-types';

export default class CalendarCell extends React.Component {
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

    render() {
        this.fridayTraining = this.fridayTraining.bind(this);
        const cellDate = this.dayOfMonth();
        let classNames = "cell ";
        classNames = classNames + (cellDate > 0 ? " date-cell" : "blank-cell");
        return (
            <div className="cell-wrapper">
                {
                    cellDate === 0 ? (
                        <div className={classNames}>&nbsp;</div>
                    ) : ''
                }
                {
                    cellDate > 0 ?(
                        <div className={classNames}>
                            {cellDate}
                            {
                                this.fridayTraining() ? (
                                    <div className="circle training">
                                        <div className="circle-text">T</div>
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
}