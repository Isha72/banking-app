import React, { useState } from "react";
import { Users } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/home");

  };

  return (
<div className="bg-beige-200 min-h-screen flex items-center justify-center">
  <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center">
    <h1 className="text-2xl font-bold">Login</h1>
    {/* <Users size={50} /> */}

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
