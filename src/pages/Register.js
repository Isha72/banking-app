import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import socgen from "../assets/images/socgen-bg3.jpg";
import { register } from "../services/user-service";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    setData({...data, [property]: event.target.value})
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (password !== confirmPassword) {
  //     alert("Passwords do not match");
  //   } else {
  //     const response = await fetch("http://localhost:8085/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: name,
  //         email: email,
  //         password: password,
  //         confirmPassword: confirmPassword,
  //       }),
  //     });

  //     const responseData = await response.json();

  //     if (response.ok) {
  //       setIsModalOpen(true);
  //     } else {
  //       console.error(`Error: ${responseData}`);
  //       alert("An error occurred while submitting the form");
  //     }
  //   }
  // };

  const handleSubmit = (event) =>{
    event.preventDefault();

    console.log(data);

    register(data).then((resp)=> {
      console.log(resp);
      console.log("success log");
    }).catch((error) => {
      console.log(error);
      console.log("error log");
    })
  }

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
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
        className=" bg-gray-400 flex flex-col p-8 mr-20 rounded-lg h-fit w-3/12 mt-10 "
      >
        <h1 className="text-3xl mb-6 font-bold">Register</h1>

        <label className=" mb-1 font-semibold"> Full Name</label>

        <input
          type="text"
          id="username"
          value={data.username}
          placeholder="Enter your Full Name"
          onChange={(e) => handleChange(e, "username")}
          className="p-2 border border-black rounded-md mb-2"
          required
        />

        <label className=" mb-2 font-semibold"> Email</label>

        <input
          type="email"
          id="email"
          value={data.email}
          placeholder="Enter your Email"
          onChange={(e) => handleChange(e, "email")}
          className="p-2 border border-black rounded-md mb-2"
          required
        />

        <label className=" mb-2 font-semibold"> Password</label>

        <input
          type="password"
          placeholder="Enter your Password"
          onChange={(e) => handleChange(e, "password")}
          id="password"
          value={data.password}
          className="p-2 border border-black rounded-md mb-2"
          required
        />

        <label className=" mb-2 font-semibold">Confirm Password</label>

        <input
          type="password"
          placeholder="Confirm Password"
          value={data.confirmPassword}
          id="confirmPassword"
          onChange={(e) => handleChange(e, "confirmPassword")}
          className="p-2 border border-black rounded-md mb-6"
          required
        />

        <button
          type="submit"
          className="p-2 bg-gray-900 text-white rounded-md mb-4 font-bold"
        >
          Register
        </button>

        <p className="font-bold">
          Already have an account?{" "}
          <Link to="/" className="text-red-700 underline">
            Login
          </Link>
        </p>

        {isModalOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md text-center">
              <p className="text-green-600 font-semibold text-2xl mb-4">
                Registration successful!
              </p>
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
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
