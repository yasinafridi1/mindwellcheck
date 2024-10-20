import React, { useState } from "react";
import registerImg from "../images/register.svg";
import loginImg from "../images/log.svg";
import "./auth.css";
import PasswordInput from "../components/inputs/passwordInput";
import TextInput from "../components/inputs/textInput";
import EmailInputs from "../components/inputs/emailInputs";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import FormHeader from "../components/Typography/FormHeader";
import PanelContent from "../components/Typography/PanelContent";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  function toggleForm() {
    setIsSignIn(!isSignIn);
  }
  return (
    <div className={`container ${isSignIn ? "" : "sign-up-mode"}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <FormHeader
              header="Sign In"
              description="Login to MindWell Check"
            />
            <EmailInputs placeholder="Email Address" name="email" />

            <PasswordInput placeholder="Enter Password" name="password" />

            <ButtonPrimary text="Sign In" />
          </form>
          <form className="sign-up-form w-full ">
            <FormHeader
              header="Sign Up"
              description="Create your free account"
            />
            <TextInput placeholder="Fullname" name="fullname" />
            <EmailInputs placeholder="Email Address" name="email" />
            <PasswordInput placeholder="Enter Password" name="password" />
            <PasswordInput
              placeholder="Confirm Password"
              name="confirmPassword"
            />
            <ButtonPrimary text="Sign Up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <PanelContent
            header="Come join us!"
            description="We are so excited to have you here. If you haven't already account, create an account to get access to MindWell Check."
            onclick={toggleForm}
            btnText="Don't have account? Sign Up"
          />
          <img src={registerImg} className="image" />
        </div>
        <div className="panel right-panel">
          <PanelContent
            header="One of us ?"
            description="We're excited to see you again. If you already have an account, please log in to continue your journey with us."
            onclick={toggleForm}
            btnText="Already have account? Sign In"
          />
          <img src={loginImg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
