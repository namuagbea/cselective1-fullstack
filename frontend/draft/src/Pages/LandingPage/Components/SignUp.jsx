import React, { useState } from "react";
import Login from "../Components/Login.jsx";
import signupPhoto from "../../../../media/signup-photo.png";

const SignUp = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypepass, setRetypePass] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async (event) => {
    try {
      if (password !== retypepass) {
        event.preventDefault();
        console.error("Passwords do not match");

        return;
      }
      console.log("went thru");
      const response = await fetch("http://127.0.0.1:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (!username || !email || !password || !retypepass) {
        setErrorMessage("Please fill up all fields.");
        return;
      }

      if (response.ok) {
        onClose();
      } else {
        // Signup failed
        const errorData = await response.json();
        console.error("Signup failed:", errorData);
        // Handle error, show message to user, etc.
      }
    } catch (error) {
      console.error("Error during signup:", error);
      // Handle network errors, etc.
    }
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  if (showLogin) {
    return <Login onClose={() => setShowLogin(false)} />;
  }

  return (
    <div className="fixed inset-0 flex items-center sm:px-7 justify-center ">
      <div className="flex lg:h-[80vh] md:h-[60vh] sm:h-[55vh] shadow-lg  rounded-[2vh] overflow-hidden">
        {/* 1st col */}
        <div className=" bg-white">
          <img src={signupPhoto} alt="SignUp" className="w-full h-full" />
        </div>

        {/* 2nd */}
        <div className=" bg-[#30689E]">
          {/* close button */}
          <div className="float-right pr-3 pt-3">
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

          {/* Form start */}
          <form className="" onSubmit={handleSignUp}>
            <div className="flex w-full flex-col">
              <h2 className="lg:text-[2rem] md:text-[30px] sm:text-[25px] mt-5 sm:mt-1 lg:mt-12 font-semibold text-center text-white">
                Sign up
              </h2>
              <div className="lg:px-14 md:px-10 sm:px-8">
                <div className="my-1 lg:mt-5 flex flex-col sm:gap-1 md:gap-2 lg:gap-2">
                  <div>
                    <label
                      className="lg:text-base md:text-[15px] sm:text-[13px] text-white font-normal"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className="shadow lg:h-[4vh] lg:p-2 appearance-none border rounded w-full  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>

                  <div className="">
                    <label
                      className="lg:text-base md:text-[15px] sm:text-[13px] text-white font-normal"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow lg:h-[4vh] lg:p-2 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="lg:text-base md:text-[15px] sm:text-[13px] text-white font-normal"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="shadow lg:h-[4vh] lg:p-2 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="">
                    <label
                      className="lg:text-base md:text-[15px] sm:text-[13px] text-white font-normal"
                      htmlFor="retypepass"
                    >
                      Re-type Password
                    </label>
                    <input
                      className="shadow lg:h-[4vh] lg:p-2 appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="retypepass"
                      type="password"
                      value={retypepass}
                      onChange={(e) => setRetypePass(e.target.value)}
                      required
                    />
                  </div>

                  {errorMessage && (
                  <div className="text-sm text-red-500 mb-3">
                    {errorMessage}
                  </div>
                )}

                </div>

                {/* Sign up button */}

                <button
                  className="text-white lg:text-[18px] md:text-[15px] sm:mt-[5px] md:mt-3 lg:mt-7 sm:text-[12px] bg-sky-900 hover:bg-sky-800 lg:py-2 md:py-1 sm:py-1 rounded-md mb-4 w-full"
                  type="submit"
                >
                  Sign up
                </button>

                {/* Already have an account section */}

                <div className="lg:text-sm md:text-[12px] sm:text-[10px] md:mt-4 text-center flex opacity-90 items-center justify-center">
                  <hr className="flex-grow border-gray-300 border-t mr-2" />
                  <p className="mx-1 text-white font-normal ">
                    Already have an account?
                  </p>
                  <hr className="flex-grow border-gray-300 border-t ml-2" />
                </div>

                {/* Login */}
                <div className="text-center">
                  <span
                    className="lg:text-sm sm:text-[10px] md:text-[12px] text-white cursor-pointer"
                    onClick={handleLoginClick}
                  >
                    Log In
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
