import React from "react";
import PropTypes from "prop-types";
import useSWR from "swr";
import Racer from "./Racer";
import modes from "../../lib/modes";
import nums from "../../lib/racernums";

const fetcher = url => fetch(url).then(r => r.json());

export const getNextDay = mode => {
    const dayNum = mode == modes.TUESDAY ? 9 : 12;
    const date = new Date();
    date.setDate(date.getDate() + ((dayNum - date.getDay()) % 7));
    const ds0 =
        `0${date.getDate()}`.slice(-2) +
        `0${date.getMonth() + 1}`.slice(-2) +
        date.getFullYear();
    let ds1 = date.toDateString().split(" ");
    date.setDate(date.getDate() - 7);
    const ds2 =
        `0${date.getDate()}`.slice(-2) +
        `0${date.getMonth() + 1}`.slice(-2) +
        date.getFullYear();
    ds1 = `${ds1[2]} ${ds1[1]} ${ds1[3]}`;
    return [ds0, ds1, ds2];
};

const Bookings = ({ mode, user }) => {
    const nextFri = getNextDay(modes.FRIDAY);
    const nextTue = getNextDay(modes.TUESDAY);

    // update the booking data every minute; code elsewhere to trigger a refresh when user tries
    // to change their own booking data

    const {
        data,
        error,
    } = useSWR(
        `/.netlify/functions/getbookings?fri=${nextFri[0]}&tue=${nextTue[0]}`,
        fetcher,
        { refreshInterval: 60 * 1000 }
    );
    if (error) return <div>failed to load</div>;

    if (!data) {
        return (
            <div>
                <h2>Bookings for {mode == modes.FRIDAY ? nextFri[1] : nextTue[1]}</h2>
                <p>loading...</p>
                <br />
            </div>
        );
    }

    // also change in /netlify/functions/addbooking.js
    const maxRacers = mode == modes.FRIDAY ? (nextFri[0] == '11102024' ? nums.RACE : nums.FRIDAY) : nums.TUESDAY;

    const firstTues = parseInt(nextTue[0].substring(0,2)) <= 7 ? true : false;

    const idxs = Array.from(Array(maxRacers).keys());

    return (
        <div>
            <h2>Bookings for {mode == modes.FRIDAY ? nextFri[1] : nextTue[1]}</h2>
            { (nextFri[0] == "26032021" && mode == modes.FRIDAY) || (nextTue[0] == "23032021" && mode == modes.TUESDAY) ? '' : (
                <p>
                    Tap/click on a racer&apos;s name above to add or remove them from the
                    training list.
                </p>
            )}
            {nextFri[0] == "11102024" && mode == modes.FRIDAY ? (
                <p className="alert-text">
                    The club fun-race is being held this Friday, 11 October.
                </p>
            ) : '' }
            {nextFri[0] == "25092020" && mode == modes.FRIDAY ? (
                <p className="alert-text">
                    The club fun-race for 14s-&amp;-Under or older (anyone born 2008 or earlier)
                    is being held this Friday, 25 September. Please only book in for racers in those
                    age groups. If you wish to race but bookings are full, please contact Nigel.
                </p>
            ) : ''}

            {((nextFri[0] == "23082024" && mode == modes.FRIDAY) || (nextTue[0] == "20082024" && mode == modes.TUESDAY) ||
                (nextFri[0] == "30082024" && mode == modes.FRIDAY) || (nextTue[0] == "27082024" && mode == modes.TUESDAY)) ? (
                <p className="alert-text">
                    There slope is closed for maintenance from Monday 19th to Friday 30th August.
                    Training will resume as normal in September
                </p>
            ) : (
                <div>
                    {(mode == modes.TUESDAY && firstTues) ? (
                        <p className="alert-text">
                            The first Tuesday training each month is an Over The Hill session,
                            reserved for over-18s
                        </p>
                    ) : '' }
                    {(mode == modes.TUESDAY && (nextTue[0] == '05092023' || nextTue[0] == '12092023')) ? (
                        <p className="alert-text">
                            Please note that from the start of September, Tuesday training will be
                            from 6-7pm
                        </p>
                    ) : ''}
                    <div className="racerlist">
                        {idxs.map(i =>
                            data && data.racers && data.racers[mode].length > i ? (
                                <Racer
                                    key={i}
                                    tabNum={i}
                                    name={data.racers[mode][i].name}
                                    status={
                                        data.racers[mode][i].userid == user ? "highlight" : "normal"
                                    }
                                />
                            ) : (
                                <Racer key={i} name="free" status="unused" />
                            )
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

Bookings.propTypes = {
    mode: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
};

export default Bookings;
