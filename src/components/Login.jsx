import React, { useState } from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIN = (event) => {
    event.preventDefault();
  };
  const registerAccount = (event) => {
    event.preventDefault(); // this line will prevent from reloading the page whenever we click on the btn 
  };
  return (
    <div className="login">
      <Link to="/">
        {/* <h2>this is going to be login page</h2> */}
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIN} className="login__signInBtn">
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's clone Conditions of Use and
          Privacy Notice.
        </p>
        <h6>New to amazon?</h6>
        <button onclick={registerAccount} className="login__newRegistrationBtn">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
