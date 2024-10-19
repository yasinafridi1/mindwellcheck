import React, { useState } from "react";
import registerImg from "../images/register.svg";
import loginImg from "../images/log.svg";
import "./auth.css";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  function toggleForm() {
    setIsSignIn(!isSignIn);
  }
  return (
    <div class={`container ${isSignIn ? "" : "sign-up-mode"}`}>
      <div class="forms-container">
        <div class="signin-signup">
          <form class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
          </form>
          <form class="sign-up-form w-full">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btn" value="Sign up" />
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button
              onClick={toggleForm}
              class="btn transparent"
              id="sign-up-btn"
            >
              Sign up
            </button>
          </div>
          <img src={registerImg} class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button
              onClick={toggleForm}
              class="btn transparent"
              id="sign-in-btn"
            >
              Sign in
            </button>
          </div>
          <img src={loginImg} class="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
