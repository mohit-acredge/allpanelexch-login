import React from "react";
import { FaHandPointDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className=" text-8xl font-bold text-white pt-10 pb-5">ALL</div>

      <div className=" flex flex-col px-2 items-center justify-between border-4 border-emerald-50 w-1/3 shadow-lg rounded-md h-1/2 bg-white ">
        <div className=" flex  justify-center  items-center gap-1">
          <h2 className=" text-xl font-normal text-center text-[#0088cc]">
            Login{" "}
          </h2>
          <span className="text-[#0088cc] w-8 h-10 items-center pt-3">
            <FaHandPointDown />
          </span>
        </div>

        <form className="w-full">
          <div className=" flex mb-5 w-full items-center relative">
            <input
              type="text"
              placeholder="Password"
              className=" w-full text-lg font-normal text-[#212529] border border-[#ced4da] rounded-[4px] p-2 "
            />
            <FaUser className=" absolute right-2 text-2xl bg-slate-400" />
          </div>

          <div className=" flex mb-5 w-full items-center relative">
            <input
              type="text"
              placeholder="Password"
              className=" w-full text-lg font-normal text-[#212529] border border-[#ced4da] rounded-[4px] p-2"
            />
            <FaKey className=" absolute right-2 text-2xl" />
          </div>

          <div className="flex justify-center items-center p-1 text-white text-lg rounded-[4px] bg-[#0088CC] mb-3">
            <button>Login</button>
            <FaSignInAlt />
          </div>

          <div className="flex justify-center items-center p-1 text-white text-lg rounded-[4px] bg-[#0088CC] ">
            <button>Login with demo ID</button>
            <FaSignInAlt />
          </div>
        </form>

        <p className=" text-xs font-normal mt-2">
          This site is protected by reCAPTCHA and the Google
          <a href="" className=" text-[#0d6efd]">
            Privacy Policy
          </a>{" "}
          and
          <a href="" className="text-[#0d6efd]">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>

      <div className="footer absolute bottom-0 w-full h-16   bg-[#0088cc]">
        <div>
          <a href="">Terms and Conditions</a>
          <a href="">Responsible Gaming</a>
        </div>
        <h2>24X7 Support</h2>
      </div>

    </div>
  );
};

export default Login;
