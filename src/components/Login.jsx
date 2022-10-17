import React from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
const Login = () => {
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
            <h5><strong>E-mail</strong></h5>
            <input type="text" /> 
            <h5><strong>Password</strong></h5>
            <input type="password" />
            <button>Sign in</button>
        </form>
        <p>
        By continuing, you agree to Amazon's clone Conditions of Use and Privacy Notice.
        </p>
        <h6>New to amazon?</h6>
        <button>Create your Amazon account</button>
      </div>
    </div> 
  );
};

export default Login;
