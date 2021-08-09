import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../actions/userActions";
import MessageBox from "../components/MessageBox";
import LoadingScreen from "./LoadingScreen";
import "./SignUpScreen.css";

function SignUpScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignUp = useSelector((state) => state.userSignUp);
  const { userInfo, isLoading, error } = userSignUp;

  useEffect(() => {
    if (userInfo && redirect !== "/") {
      props.history.push(redirect);
    }
  }, [userInfo, redirect, props.history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordErrorMessage("Please make sure your password match");
      return;
    }
    dispatch(signup(name, email, password));
  };

  return (
    <form className="signInForm" onSubmit={handleSubmit}>
      <h1>Sign Up </h1>
      {isLoading && <LoadingScreen />}
      {error && <MessageBox variant="danger" message={error}></MessageBox>}
      {passwordErrorMessage && (
        <MessageBox
          variant="danger"
          message={passwordErrorMessage}
        ></MessageBox>
      )}
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          required
          placeholder="a cute-cumber"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="email">Email address: </label>
        <input
          type="email"
          id="email"
          required
          placeholder="hellobeautiful@greencycle.com"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          required
          placeholder="youareacutie;)"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm password: </label>
        <input
          type="password"
          id="confirm-password"
          required
          placeholder="youareacutie;)"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <button className="btn btn--primary signInForm-button" type="submit">
          Sign up
        </button>
      </div>
      <div>
        <p>
          Already a planet hero?
          <span>
            <Link to={`/signin?redirect=${redirect}`}> Sign in here. </Link>
          </span>
        </p>
      </div>
    </form>
  );
}

export default SignUpScreen;
