import React from "react";

const Login = () => {
  return (
    <div>
      <div className=" text-8xl font-bold mt-10 ">ALL</div>

      <div className=" border-2 border-red-300  w-full shadow-lg rounded-md h-1/2">
        <h2>Login</h2>

        <form action="">
          <div>
            <input type="text" placeholder="username" />
          </div>

          <div>
            <input type="text" placeholder="password" />
          </div>

          <div>
            <button>Login</button>
            <span></span>
          </div>

          <div>
            <button>Login with demo ID</button>
            <span></span>
          </div>
        </form>

        <p>
          This site is protected by reCAPTCHA and the Google{" "}
          <span>Privacy Policy</span> andTerms of Service apply.
        </p>
      </div>

      <div>
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
