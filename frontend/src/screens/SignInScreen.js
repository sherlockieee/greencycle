import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import MessageBox from "../components/MessageBox";
import LoadingScreen from "./LoadingScreen";
import "./SignInScreen.css";

function SignInScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo, isLoading, error } = userSignIn;

  useEffect(() => {
    console.log(props.history);
    console.log(props);
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [userInfo, redirect, props.history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <form className="signInForm" onSubmit={handleSubmit}>
      <h1>Sign In </h1>
      {isLoading && <LoadingScreen />}
      {error && <MessageBox variant="danger" message={error}></MessageBox>}
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
        <button className="btn btn--primary signInForm-button" type="submit">
          Sign in
        </button>
      </div>
      <div>
        <p>
          New to Green Cycle?
          <span>
            <Link to={`/signup?redirect=${redirect}`}> Sign up here. </Link>
          </span>
        </p>
      </div>
    </form>
  );
}

export default SignInScreen;
