// import React from "react";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const history = useNavigate();
  // const history = unstable_HistoryRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history("/");
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // console.log(auth)
        if (auth) {
          history("/");
          // history.push("/");
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
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

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
      <hr
        style={{
          color: "blue",
          backgroundColor: "red",
          height: 5,
        }}
      />
      <div className="login__footer">
        <div>
          <a rel="noopener" href="#">
            Conditions of Use
          </a>

          <a rel="noopener" href="#">
            Privacy Notice
          </a>

          <a target="_blank" rel="noopener" href="#">
            Help
          </a>
          <span></span>
        </div>
        <div>
          <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
