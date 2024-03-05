import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;

    // Use a regular expression to allow only alphabets
    if (/^[a-zA-Z\s]*$/.test(inputValue)) {
      setName(inputValue);
    }
  };

  return (
    <div className="bg-beige-200 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center">
        <h1 className="text-2xl font-bold">Register</h1>

        <input
          type="text"
          placeholder="Enter Your full name"
          onChange={handleNameChange}
          value={name}
          className="p-2 border border-gray-400 rounded-md"
          required
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-400 rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-400 rounded-md"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="p-2 border border-gray-400 rounded-md"
          required
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

        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md text-center">
              <p className="text-green-600 font-semibold text-2xl mb-4">Registration successful!</p>
              <button onClick={closeModal} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                Close
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;
