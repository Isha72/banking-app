import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      navigate("/");
    }
  };

  return (
<div className="bg-beige-200 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center">
        <h1 className="text-2xl font-bold">Register</h1>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-400 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-400 rounded-md"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="p-2 border border-gray-400 rounded-md"
        />

        <button type="submit" className="p-2 bg-blue-700 text-white rounded-md">
          Register
        </button>

        <p className="text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-red-700 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
