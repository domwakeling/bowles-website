import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout.jsx';
import { toast } from '../components/booking/Toast.jsx';
import AddRacer from '../components/booking/AddRacer';
import Bookings from '../components/booking/Bookings';
import BookingHeader from '../components/booking/BookingHeader';
import SignInUp from '../components/booking/SignInUp';
import UserRacers from '../components/booking/UsersRacers';
import Welcome from '../components/booking/Welcome';

import modes from "../lib/modes";

const BookingPage = ({ location }) => {
    const [user, setUser] = useState(null);
    const [loggingOut, setLoggingOut] = useState(false);
    const [mode, setMode] = useState(modes.WELCOME);
    const [racers, setRacers] = useState(null);

    useEffect(() => {
        // hooks require that async function is defined before being called; this checks for a token
        async function fetchData() {
            const res = await fetch("/.netlify/functions/polltoken");
            if (res.status == 200) {
                const data = await res.json();
                setUser(data.id);
                setRacers(data.racers);
                setMode(modes.FRIDAY);
            }
        }
        if (!user && !loggingOut) {
            // send to an endpoint to see whether there's a token embedded ...
            fetchData();
        }
    }, [user]);

    const changeToSignUp = e => {
        e.preventDefault();
        setMode(modes.SIGNING_UP);
        setLoggingOut(false);
    }

    const changeToLogIn = e => {
        e.preventDefault();
        setMode(modes.LOGGING_IN);
        setLoggingOut(false);
    }

    const changeToAddRacer = e => {
        e.preventDefault();
        setMode(modes.ADDING_RACER);
    }

    const changeToSignedIn = e => {
        e.preventDefault();
        setMode(modes.FRIDAY);
        setLoggingOut(false);
    }

    const setSignedIn = (id, userracers) => {
        setUser(id)
        setMode(modes.FRIDAY)
        setRacers(userracers)
    }

    const handleLogout = async e => {
        e.preventDefault();
        setLoggingOut(true);
        const res = await fetch("/.netlify/functions/logout");
        setUser(null);
        setMode(modes.WELCOME);
        setRacers(null);
        if (res.status == 200) {
            toast.notify("You have been logged out", {
                type: "success",
                title: "Success",
                duration: 2,
            });
        }
    }

    return (
        <Layout location={location}>
            <BookingHeader mode={mode} setMode={setMode} />
            {mode == modes.WELCOME ? (
                <Welcome clickSignUp={changeToSignUp} clickLogin={changeToLogIn} />
            ) : (
                    ""
                )}
            {!user && mode != modes.WELCOME ? (
                <SignInUp
                    mode={mode}
                    changeToLogIn={changeToLogIn}
                    changeToSignUp={changeToSignUp}
                    setSignedIn={setSignedIn}
                />
            ) : (
                    ""
                )}
            {user ? (
                <>
                    {racers && racers.length > 0 ? (
                        <UserRacers
                            racers={racers}
                            mode={mode}
                            user={user}
                            changeToAddRacer={changeToAddRacer}
                        />
                    ) : (
                        <p>
                            Please{" "}
                            <a href="#" onClick={changeToAddRacer}>
                                add a racer
                            </a>
                .
                        </p>
                    )}
                    {mode == modes.ADDING_RACER ? (
                        <AddRacer
                            user={user}
                            racers={racers}
                            setRacers={setRacers}
                            changeToSignedIn={changeToSignedIn}
                        />
                    ) : (
                        ""
                        )}
                    {mode == modes.FRIDAY || mode == modes.TUESDAY ? (
                        <Bookings mode={mode} user={user} />
                    ) : (
                        ""
                    )}
                    <button onClick={handleLogout}>Log out</button>
                </>
            ) : (
                ""
            )}
            <hr />
            <p id="disclaimer">
                This booking system uses cookies for user-account authentication
            </p>
        </Layout>
    )
};

BookingPage.propTypes = {
    location: PropTypes.object
}

export default BookingPage;
