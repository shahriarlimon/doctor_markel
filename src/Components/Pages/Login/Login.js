import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialAuth from "./SocialAuth/SocialAuth";
import { BiErrorCircle } from "react-icons/bi";
import { auth } from "../../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Loading from "../../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({ emailError: "", passwordError: "" });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleInputEmail = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, emailError: "" });
    } else {
      setUserInfo({ ...userInfo, email: "" });
      setErrors({ ...errors, emailError: "Invalid Email" });
    }
  };
  const handleInputPassword = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setUserInfo({ ...userInfo, password: "" });
      setErrors({ ...errors, passwordError: "Minimum 6 characters" });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };
  const handlePasswordReset =  () => {
    if (userInfo.email) {
      sendPasswordResetEmail(userInfo.email);
      toast("Reset password email has been sent");
    } else {
      alert("Please enter your email");
    }
  };
  if (loading || sending) {
    return <Loading />;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
      <div
        className="hidden bg-cover lg:block lg:w-1/2"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`,
        }}
      ></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <p className="text-xl text-center text-gray-600 dark:text-gray-200">
          Welcome Back!
        </p>
        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white mb-3">
          Login
        </h2>

        <div>
          <SocialAuth />
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

          <a
            href="/"
            className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or login with email
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              for="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              onBlur={handleInputEmail}
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
            />
            {errors?.emailError && (
              <p className="text-red-500 text-xs flex items-center ">
                <BiErrorCircle className="mr-1" />{" "}
                <span>{errors?.emailError}</span>
              </p>
            )}
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="loggingPassword"
              >
                Password
              </label>
              <button
                onClick={handlePasswordReset}
                className="text-xs text-gray-500 dark:text-gray-300"
              >
                Forget Password? <span className="text-blue-600">Reset Now</span>
              </button>
            </div>
            <ToastContainer />

            <input
              onBlur={handleInputPassword}
              id="loggingPassword"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
            />
            {errors?.passwordError && (
              <p className="text-red-500 text-xs flex items-center ">
                <BiErrorCircle className="mr-1" />{" "}
                <span>{errors?.passwordError}</span>
              </p>
            )}
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          <Link
            to="/register"
            className="text-sm text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or Register
          </Link>

          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
