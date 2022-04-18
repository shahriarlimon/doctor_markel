import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialAuth from "../SocialAuth/SocialAuth";
import { BiErrorCircle } from "react-icons/bi";
import { auth } from "../../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../../../Loading/Loading";
const Register = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({ emailError: "", passwordError: "" });
  const [createUserWithEmailAndPassword, createUser, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();

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

  const handleInputConfirmPassword = (e) => {
    if (e.target.value === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setUserInfo({ ...userInfo, confirmPassword: "" });
      setErrors({ ...errors, passwordError: "Passwords didn't match" });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  };
  if (loading) {
    return <Loading />;
  }
  if (createUser) {
    navigate("/");
  }
  return (
    <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl min-h-screen">
      <div
        className="hidden bg-cover lg:block lg:w-1/2"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`,
        }}
      ></div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <p className="text-xl text-center text-gray-600 dark:text-gray-200">
          Welcome!
        </p>
        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white mb-2">
          Register
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
            or Register with email
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
              required
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
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                for="loggingPassword"
              >
                Password
              </label>
            </div>

            <input
            required
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
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Confirm Password
            </label>
            <input
            required
              onBlur={handleInputConfirmPassword}
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
            />
          </div>

          <div className="mt-8">
            {hookError && (
              <p className="text-red-500 text-sm flex items-center justify-center mb-2 ">
                <BiErrorCircle className="mr-1" />{" "}
                <span>{hookError?.message}</span>
              </p>
            )}
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Register
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          <Link
            to="/login"
            className="text-sm text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            <span className="text-purple-500"> or Login</span>
          </Link>

          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};

export default Register;
