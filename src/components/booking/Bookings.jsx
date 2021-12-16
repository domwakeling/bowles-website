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

    const maxRacers = mode == modes.FRIDAY ? (nextFri[0] == '01102021' ? nums.RACE : nums.FRIDAY) : nums.TUESDAY;

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
            {nextFri[0] == "18092020" && mode == modes.FRIDAY ? (
                <p className="alert-text">
                    The club fun-race for 11s-&amp;-Under (anyone born between 2009-2014 inclusive)
                    is being held this Friday, 18 September. Please only book in for racers in those
                    age groups. If you wish to race but bookings are full, please contact Nigel.
                </p>
            ) : '' }
            {nextFri[0] == "25092020" && mode == modes.FRIDAY ? (
                <p className="alert-text">
                    The club fun-race for 14s-&amp;-Under or older (anyone born 2008 or earlier)
                    is being held this Friday, 25 September. Please only book in for racers in those
                    age groups. If you wish to race but bookings are full, please contact Nigel.
                </p>
            ) : ''}

            {(nextFri[0] == "24122021" && mode == modes.FRIDAY) || (nextFri[0] == "31122021" && mode == modes.FRIDAY) || (nextTue[0] == "28122021" && mode == modes.TUESDAY) ? (
                <p className="alert-text">
                    There is no race club from Friday 24th &amp; Friday 31st December (inclusive).
                    Training will resume in January!
                </p>
            ) : (
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
            )}
        </div>
    );
};

Bookings.propTypes = {
    mode: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
};

export default Bookings;
