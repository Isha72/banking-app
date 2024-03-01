import React, { useState } from "react";
import { Users } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import socgen from "../assets/images/socgen-bg3.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/home");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${socgen})`,
        backdropFilter: "blur(10px)",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" flex justify-end"
    >
      <form
        onSubmit={handleSubmit}
        className=" bg-gray-400 flex flex-col p-8 mr-28 rounded-lg h-1/2 w-3/12 mt-10 "
      >
        <h1 className="text-3xl font-bold text-black mb-8">
          Sign in to your account
        </h1>

        <label className=" mb-2 font-semibold">Your Email</label>
        <input
          type="email"
          placeholder="Email ID"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-black rounded-md w-full mb-2"
        />
        {emailError && (
          <p className="text-red-600 text-sm mb-2 ml-1">{emailError}</p>
        )}

        <label className=" mt-4 mb-4 font-semibold">
          Your Password
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            className="p-2 border border-black rounded-md w-full mt-2"
          />
          {passwordError && (
            <p className="text-red-600 text-sm mt-2 ml-1 font-normal">
              {passwordError}
            </p>
          )}
        </label>

        <button
          type="submit"
          className="p-2 bg-gray-900 text-white rounded-md font-bold mb-4 mt-4"
        >
          Login
        </button>

        <p className="mt-2 font-bold">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-700 underline">
            Register
          </Link>
        </p>
      </form>
      {/* </div> */}
    </div>
  );
};

export default Login;
