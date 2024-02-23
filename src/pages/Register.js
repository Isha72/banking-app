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
    <div className=" bg-blue-400">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 items-center my-20"
      >
        <h1 className=" ">Register</h1>
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
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit" className="p-2 bg-blue-700 text-white rounded-md">
          Register
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/" className="pl-1 text-red-700 underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
