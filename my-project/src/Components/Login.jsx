import React from "react";
import { FaHandPointDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import logo from "../assets/all-logo.png";

const Login = () => {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className="font-bold text-white sm:pt-8 pt-2 pb-5 ">
        <img
          src={logo}
          className="w-auto max-w-[150px] sm:max-w-[200px] "
          alt="logo"
        />
      </div>

      {/* login div */}
      <div className=" flex flex-col px-3 items-center justify-between border-2 border-transparent sm:w-[350px] w-[90%] max-w-[350px] h-auto  shadow-lg rounded-md  bg-white shadow-transparent">
        <div className=" flex  justify-center  items-center gap-1 pt-3 pb-2">
          <h2 className=" text-[22px]  font-normal text-center text-[#0088cc]">
            Login{" "}
          </h2>
          <span className="text-[#0088cc] w-8 h-10 items-center pt-3">
            <FaHandPointDown className=" text-2xl" />
          </span>
        </div>

        <form className="w-full">
          <div className="flex mb-5 w-full items-center relative">
            <input
              type="text"
              placeholder="Username"
              className="w-full text-lg font-normal text-[#000000] border border-[#ced4da] rounded-[4px] p-1 focus:outline-none"
            />
            <div
              className="absolute right-0 top-0 h-full bg-[#e9ecef] flex items-center px-3 border-r border-[#ced4da] "
              style={{
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
              }}
            >
              <FaUser className="text-xl rounded-sm text-[#212529]" />
            </div>
          </div>

          <div className="flex mb-5 w-full items-center relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full text-lg font-normal text-[#000000] border border-[#ced4da] rounded-[4px] p-1 focus:outline-none"
            />
            <div
              className="absolute right-0 top-0 h-full bg-[#e9ecef] flex items-center px-3 border-r border-[#ced4da] "
              style={{
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
              }}
            >
              <FaKey className="text-xl rounded-sm text-[#212529]" />
            </div>
          </div>

          <div className="flex justify-between items-center p-1 text-white text-lg rounded-[4px] bg-[#0088CC] mb-3 hover:bg-[#0088cce6]">
            <button className=" flex-grow text-center ">Login</button>
            <FaSignInAlt className=" mr-2" />
          </div>

          <div className="flex justify-between items-center p-1 text-white text-lg rounded-[4px] bg-[#0088CC]  hover:bg-[#0088cce6]">
            <button className=" flex-grow text-center">
              Login with demo ID
            </button>
            <FaSignInAlt className=" mr-2" />
          </div>
        </form>

        <p className=" text-[10px] font-normal mt-1 mb-5 text-center">
          This site is protected by reCAPTCHA and the Google
          <a href="#" className=" text-[#0d6efd]">
            Privacy Policy
          </a>{" "}
          and
          <a href="#" className="text-[#0d6efd]">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>

      {/* footer */}
      <div className="fixed flex flex-col sm:flex-row md:flex-row items-center justify-center text-center bottom-0 w-full h-auto sm:h-16 bg-[#0088cc] sm:px-3 px-7 sm:pb-3 pb-5  sm:pt-3 pt-4">
        {/* Link container */}
        <div className="sm:absolute sm:left-0 flex  flex-row sm:flex-row items-center justify-start  sm:gap-4 gap-12  sm:text-base text-[12px]  font-bold text-white sm:ml-3 mb-3 sm:mb-0 flex-wrap">
          <a href="#" className=" sm:no-underline underline whitespace-nowrap">
            Terms and Conditions
          </a>
          <a href="#" className="sm:no-underline underline whitespace-nowrap">
            Responsible Gaming
          </a>
        </div>

        <h2 className="sm:text-2xl text-xl font-bold text-white">
          24X7 Support
        </h2>
      </div>
    </div>
  );
};

export default Login;
