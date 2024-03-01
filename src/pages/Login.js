import React, { useState } from "react";
import { Users } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="bg-beige-200 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center">
        <h1 className="text-2xl font-bold">Login</h1>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-400 rounded-md"
        />
        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-400 rounded-md"
        />
        {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}

        <button type="submit" className="p-2 bg-blue-700 text-white rounded-md">
          Login
        </button>

        <p className="text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-700 underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
