import React, { useState } from "react";
import PropTypes from "prop-types";

import modes from "../../lib/modes";
import { toast } from "./Toast";

const SignInUp = ({
  mode,
  changeToLogIn,
  changeToSignUp,
  setSignedIn
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");

  const handleEmail = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePassword = e => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSecret = e => {
    e.preventDefault();
    setSecret(e.target.value);
  };

  // capture <enter> key and react accordingly
  const keyDown = e => {
    if (e.keyCode == 13) {
      e.preventDefault();
      const fakeE = { preventDefault: () => {} };
      if (mode == modes.LOGGING_IN) {
        submitLogin(fakeE);
      } else {
        submitSignUp(fakeE);
      }
    }
  };

  const submitLogin = async e => {
    e.preventDefault();
    // check a password has been provided
    if (!password) {
      toast.notify("You must enter a password", {
        type: "error",
        title: "Error",
        duration: 2,
      });
      return;
    }
    // create the request body
    const body = {
      email,
      password,
    };
    // try to log in
    const res = await fetch("/.netlify/functions/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const status = res.status;
    const data = await res.json();
    // if successfui ...
    if (status === 200) {
      toast.notify("Welcome back", {
        type: "success",
        title: "Success",
        duration: 2,
      });
      setEmail("");
      setPassword("");
      setSecret("");
      setSignedIn(data.user_id, data.racers);
    } else {
      // not successful, notify using information from API
      toast.notify(data.message, {
        type: "error",
        title: "Error",
      });
    }
  };

  const submitSignUp = async e => {
    e.preventDefault();
    // check secret is correct
    if (secret !== process.env.GATSBY_CLUB_SECRET) {
      toast.notify("The secret you have entered is incorrect", {
        type: "error",
        title: "Error",
        duration: 2,
      });
      return;
    }
    // check a password has been provided
    if (!password) {
      toast.notify("You must enter a password", {
        type: "error",
        title: "Error",
        duration: 2,
      });
      return;
    }
    // create the request body
    const body = {
      email,
      password,
    };
    // try to create an account
    const res = await fetch("/.netlify/functions/newuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const status = res.status;
    const data = await res.json();
    // if successful ...
    if (status === 201) {
      toast.notify("Your account is being set up", {
        type: "success",
        title: "Success",
        duration: 2,
      });
      setEmail("");
      setPassword("");
      setSecret("");
      setSignedIn(data.user_id, []);
    } else {
      // not successful, notify using information from API
      toast.notify(data.message, {
        type: "error",
        title: "Error",
      });
    }
  };

  return (
    <>
      <form>
        <div className="input-row">
          <label className="circle-label" htmlFor="email">e</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleEmail}
            onKeyDown={keyDown}
            value={email}
            placeholder="email"
          />
        </div>
        <div className="input-row">
          <label className="circle-label" htmlFor="password">p</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handlePassword}
            onKeyDown={keyDown}
            value={password}
            placeholder="password"
          />
        </div>
        {mode == modes.SIGNING_UP ? (
          <div className="input-row">
            <label className="circle-label" htmlFor="secret">s</label>
            <input
              type="secret"
              id="secret"
              name="secret"
              onChange={handleSecret}
              onKeyDown={keyDown}
              value={secret}
              placerholder="secret"
            />
          </div>
        ) : (
          ""
        )}
      </form>
      {mode == modes.LOGGING_IN ? (
        <>
          <button onClick={submitLogin}>Log In</button>
          <p>
            Or do you want to{" "}
            <a href="#" onClick={changeToSignUp}>
              create a new account?
            </a>
          </p>
        </>
      ) : (
        <>
          <button onClick={submitSignUp}>Sign Up</button>
          <p>
            Or do you want to{" "}
            <a href="#" onClick={changeToLogIn}>
              log in to an existing account?
            </a>
          </p>
        </>
      )}
    </>
  );
};

SignInUp.propTypes = {
  mode: PropTypes.number.isRequired,
  changeToLogIn: PropTypes.func.isRequired,
  changeToSignUp: PropTypes.func.isRequired,
  setSignedIn: PropTypes.func.isRequired
};

export default SignInUp;
