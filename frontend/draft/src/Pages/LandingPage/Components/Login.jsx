import React, { useState } from "react";
import SignUp from "../Components/SignUp.jsx";
import loginPhoto from "../../../../media/login-photo.png";

const Login = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // for wrong credentials
  const [errorMessageLogin, setErrorMessageLogin] = useState(''); // for empty input feild

  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });


      if (!username || !password) {
        setErrorMessageLogin("Please fill in both fields.");
        return;
      }


      if (response.ok) {
        const data = await response.json();
        const { accessToken, refreshToken } = data; // Extract access token and refresh token from response
        sessionStorage.setItem("authToken", accessToken);
        sessionStorage.setItem("refreshToken", refreshToken);
        console.log("Token stored in sessionStorage:", sessionStorage.getItem("authToken"));
        console.log("Refresh token stored in sessionStorage:", sessionStorage.getItem("refreshToken"));

        onClose();
        window.location.reload();
      } else {
        const errorData = await response.json();
        setErrorMessage("Login failed:", errorData);
        return;
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  return (
    <div className="fixed inset-0 flex items-center sm:px-7 justify-center flex-col">
      <div className="flex lg:h-[80vh] md:h-[60vh] sm:h-[55vh] shadow-lg rounded-[2vh] overflow-hidden">
        {/* 1st col */}
        <div className=" bg-white">
          <img src={loginPhoto} alt="Login" className="w-full h-full" />
        </div>

        {/* 2nd col */}
        <div className=" bg-[#30689E]">
          {/* close button */}
          <div className="float-end pr-3 pt-3">
            <button
              onClick={onClose}
              className=" text-white hover:text-sky-200 p-2 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lg:h-6 md:h-5 sm:h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Form */}
          <div className="flex w-full flex-col">
            <h2 className="lg:text-[2rem] md:text-[30px] sm:text-[25px] mt-5 lg:mt-12 font-semibold text-center text-white">
              Welcome!
            </h2>

            <div className="lg:px-14 md:px-10 sm:px-8 mt-2">
              <div className="my-1 lg:mt-6 flex flex-col sm:gap-1 md:gap-2 lg:gap-3">
                <div>
                  <label
                    className="lg:text-base md:text-[15px] sm:text-[13px] text-white font-normal "
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="mt-1 lg:h-[4vh] lg:p-2 shadow appearance-none border w-full rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="">
                  <label
                    className="lg:text-base md:text-[15px] sm:text-[13px] font-normal text-white"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="mt-1 lg:h-[4vh] lg:p-2 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={()=>{setErrorMessageLogin(false)}}
                    required
                  />
                </div>

                <div className=" text-center">

                  {errorMessage && (
                    <span className="text-md text-red-500">
                      Invalid Credentials
                    </span>
                  )}

                  {errorMessageLogin && (
                    <span className="text-md text-red-500">
                      Please Input the Required Fields
                    </span>
                  )}


                </div>

                {/* Login button */}
                <button
                  onClick={handleLogin}
                  className="text-white lg:text-[18px] md:text-[15px] sm:mt-[5px] md:mt-3 lg:mt-1 sm:text-[12px] bg-sky-900 hover:bg-sky-800 lg:py-2 md:py-1 sm:py-1 rounded-md mb-4 w-full"
                >
                  Login
                </button>

                {/* Dont have an account yet */}
                <div className="lg:text-sm md:text-[12px] sm:text-[10px] sm:mt-2 md:mt-4 text-center flex items-center justify-center opacity-85 ">
                  <hr className="flex-grow border-gray-300 border-t" />
                  <p className=" text-white mx-1 ">
                    Don't have an account yet?
                  </p>
                  <hr className="flex-grow border-gray-300 border-t" />
                </div>

                {/* Signup */}
                <div className="text-center">
                  <span
                    className="lg:text-sm sm:text-[10px] md:text-[12px] opacity-85 text-white cursor-pointer"
                    onClick={handleSignUpClick}
                  >
                    Sign Up
                  </span>
                </div>
                {showSignUp && <SignUp onClose={onClose} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
