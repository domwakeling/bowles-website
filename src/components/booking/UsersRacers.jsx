import React from "react";
import PropTypes from "prop-types";
import modes from "../../lib/modes";
import Racer from "./Racer";
import { getNextDay } from "./Bookings";
import { toast } from "./Toast";
import { mutate } from "swr";

const UserRacers = ({ racers, mode, user, changeToAddRacer }) => {
    const handleRacerClick = async (userid, name) => {
        if (mode == modes.FRIDAY || mode == modes.TUESDAY) {
            const bookingDay = getNextDay(
                mode == modes.FRIDAY ? modes.FRIDAY : modes.TUESDAY
            );
            const body = {
                day: bookingDay[0],
                userid,
                name,
                mode,
            };
            const res = await fetch("/.netlify/functions/addbooking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const status = res.status;
            const data = await res.json();
            // if successfui ...
            if (status === 200) {
                toast.notify(data.message, {
                    type: "success",
                    title: "Success",
                    duration: 2,
                });
                // call mutate to refresh screen
                const nextFri = getNextDay(modes.FRIDAY);
                const nextTue = getNextDay(modes.TUESDAY);
                mutate(
                    `/.netlify/functions/getbookings?fri=${nextFri[0]}&tue=${nextTue[0]}`
                );
            } else {
                // not successful, notify using information from API
                toast.notify(data.message, {
                    type: "error",
                    title: "Error",
                });
            }
        }
    };

    return (
        <div>
            <p>
                There {racers.length === 1 ? "is" : "are"} {racers.length}{" "}
                {racers.length === 1 ? "racer" : "racers"} on your account.
            </p>
            <div className="racerlist">
                {racers.map((racer, idx) => (
                    <Racer
                        // eslint-disable-next-line react/no-array-index-key
                        key={idx}
                        tabNum={idx}
                        name={racer}
                        status="normal"
                        clickhandler={handleRacerClick}
                        userid={user}
                    />
                ))}
            </div>
            {mode == modes.TUESDAY || mode == modes.FRIDAY ? (
                <p className="form-text">
                    Do you want to{" "}
                    <a href="#" onClick={changeToAddRacer}>
                        add another racer
                    </a>
                    ?
                </p>
            ) : (
                <>
                    <br />
                    <p className="form-text">Enter your new racer&apos;s name</p>
                </>
            )}
        </div>
    );
};

UserRacers.propTypes = {
    racers: PropTypes.array.isRequired,
    mode: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    changeToAddRacer: PropTypes.func.isRequired,
};

export default UserRacers;
