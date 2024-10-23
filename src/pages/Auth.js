import React, { useState } from "react";
import registerImg from "../images/register.svg";
import loginImg from "../images/log.svg";
import PasswordInput from "../components/inputs/passwordInput";
import TextInput from "../components/inputs/textInput";
import EmailInputs from "../components/inputs/emailInputs";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import FormHeader from "../components/Typography/FormHeader";
import PanelContent from "../components/Typography/PanelContent";
import ButtonLoader from "../components/Button/ButtonLoader";
import { loginSchema, signUpSchema } from "../Schema";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import "./auth.css";
import { signIn, signup } from "../redux/actions";
import DateInput from "../components/inputs/dateInput";
import SelectInput from "../components/inputs/selectInput";
import { errorToast, successToast } from "../Utils/Toast";

const Auth = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const loginInitialState = {
    email: "",
    password: "",
  };
  const registerInitialState = {
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    dateOfBirth: "",
    gender: "",
    institute: "City University of Science & Information Technology",
  };
  function toggleForm() {
    setIsSignIn(!isSignIn);
    setLoading(false);
  }

  const signInForm = useFormik({
    initialValues: loginInitialState,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setLoading(true);
      dispatch(signIn(values)).then((res) => {
        setLoading(false);
      });
    },
  });

  const signUpForm = useFormik({
    initialValues: registerInitialState,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      setLoading(true);
      signup(values)
        .then((res) => {
          setLoading(false);
          successToast("Registered successfully");
          toggleForm();
        })
        .catch((err) => {
          errorToast(err?.response?.data?.message);
          setLoading(false);
        });
    },
  });

  return (
    <div className={`container ${isSignIn ? "" : "sign-up-mode"}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={signInForm.handleSubmit}>
            <FormHeader
              header="Sign In"
              description="Login to MindWell Check"
            />
            <EmailInputs
              placeHolder="Email Address"
              name="email"
              value={signInForm.values.email}
              error={signInForm?.errors?.email}
              touch={signInForm?.touched?.email}
              onChange={signInForm.handleChange}
              onBlur={signInForm.handleBlur}
            />
            <PasswordInput
              placeHolder="Enter Password"
              name="password"
              value={signInForm.values.password}
              error={signInForm?.errors?.password}
              touch={signInForm?.touched?.password}
              onChange={signInForm.handleChange}
              onBlur={signInForm.handleBlur}
            />
            {loading ? <ButtonLoader /> : <ButtonPrimary text="Sign In" />}
          </form>
          <form
            className="sign-up-form w-full"
            onSubmit={signUpForm.handleSubmit}
          >
            <FormHeader
              header="Sign Up"
              description="Create your free account"
            />
            <TextInput
              placeHolder="FullName"
              name="fullName"
              value={signUpForm.values.fullName}
              error={signUpForm?.errors?.fullName}
              touch={signUpForm?.touched?.fullName}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}
            />
            <EmailInputs
              placeHolder="Email Address"
              name="email"
              value={signUpForm.values.email}
              error={signUpForm?.errors?.email}
              touch={signUpForm?.touched?.email}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}
            />
            <PasswordInput
              placeHolder="Enter Password"
              name="password"
              value={signUpForm.values.password}
              error={signUpForm?.errors?.password}
              touch={signUpForm?.touched?.password}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}
            />
            <PasswordInput
              placeHolder="Confirm Password"
              name="confirmPassword"
              value={signUpForm.values.confirmPassword}
              error={signUpForm?.errors?.confirmPassword}
              touch={signUpForm?.touched?.confirmPassword}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}
            />
            <DateInput
              name="dateOfBirth"
              value={signUpForm.values.dateOfBirth}
              touch={signUpForm?.touched?.dateOfBirth}
              error={signUpForm?.errors?.dateOfBirth}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}
            />
            <SelectInput
              name="gender"
              options={[
                { label: "Gender", value: "", disabled: true },
                { label: "Male", value: "Male", disabled: false },
                { label: "Female", value: "Female", disabled: false },
              ]}
              onChange={signUpForm.handleChange}
              touch={signUpForm?.touched?.gender}
              error={signUpForm?.errors?.gender}
              value={signUpForm?.values?.gender}
            />
            {loading ? <ButtonLoader /> : <ButtonPrimary text="Sign Up" />}
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <PanelContent
            header="Come join us!"
            description="We are so excited to have you here. If you haven't already account, create an account to get access to MindWell Check."
            onclick={toggleForm}
            disabled={loading}
            btnText="Don't have account? Sign Up"
          />
          <img src={registerImg} className="image" />
        </div>
        <div className="panel right-panel">
          <PanelContent
            header="One of us ?"
            description="We're excited to see you again. If you already have an account, please log in to continue your journey with us."
            onclick={toggleForm}
            disabled={loading}
            btnText="Already have account? Sign In"
          />
          <img src={loginImg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
