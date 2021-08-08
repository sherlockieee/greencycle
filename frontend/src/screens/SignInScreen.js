import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="signInForm" onSubmit={handleSubmit}>
        <div>
          <h1>Sign In </h1>
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
            placeholder="have a wonderful day"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button className="btn btn--primary" type="submit">
            Sign in
          </button>
        </div>
        <div>
          New to Green Cycle? <Link to="/signup"> Sign up here. </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInScreen;
