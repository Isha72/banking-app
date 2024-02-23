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
    <div className=" bg-blue-400">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 items-center my-20"
      >
        <h1 className=" ">Login</h1>
        {/* <Users size={50} /> */}

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="p-2 bg-blue-700 text-white rounded-md">
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/register" className="pl-1 text-red-700 underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
