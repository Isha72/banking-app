import React from "react";
import logo from "../assets/images/socgen-logo1.webp";
import { Link } from "react-router-dom";
import { User, UserCircle } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between items-center ">
      <div className=" flex gap-5 items-center">
        <img
          src={logo}
          alt=""
          height={150}
          width={150}
          //   className=" h-10 w-10"
        />

        <Link to="/home" className="text-white">
          About Us
        </Link>
        <Link to="/home" className="text-white">
          Contact Us
        </Link>
      </div>

      <div className=" flex items-center px-4 gap-3">
        <UserCircle size={28} fill="white" />

        <span className="text-white text-lg">Welcome, User</span>
      </div>
    </div>
  );
};

export default Navbar;
