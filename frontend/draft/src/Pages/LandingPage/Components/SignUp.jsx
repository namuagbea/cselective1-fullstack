import React, { useState } from "react";
import Login from "../Components/Login.jsx";

const SignUp = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypepass, setRetypePass] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const handleSignUp = async (event) => {
    try {
      if (password !== retypepass) {
        event.preventDefault();
        console.error("Passwords do not match");

        return;
      }
      console.log("went thru");
      const response = await fetch(".", {
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

      if (response.ok) {
        // Signup successful
        onClose(); // Close the signup modal or navigate to another page
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
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="flex min-h-min shadow-lg sm:w-3/4 lg:w-2/3 rounded-[2vh] overflow-hidden">
        <div className="w-3/5 bg-white">
          <img
            src="../../../../media/signup-photo.png"
            alt="SignUp"
            className="w-full h-full"
          />
        </div>

        <div className=" bg-[#30689E]">
          <div className="float-right pr-3 pt-3">
            <button
              onClick={onClose}
              className=" text-white hover:text-sky-200 p-2 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              <h2 className="text-[2rem] font-semibold text-center mb-2 text-white">
                Sign up
              </h2>
              <div className="px-14 mt-2">
                <div>
                  <label
                    className="text-base text-white font-normal"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 mt-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4 mt-2">
                  <label
                    className="text-base text-white font-normal"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 mt-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    className="text-base text-white font-normal"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 mt-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-4 mt-2">
                  <label
                    className="text-base text-white font-normal"
                    htmlFor="retypepass"
                  >
                    Re-type Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 mt-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="retypepass"
                    type="password"
                    value={retypepass}
                    onChange={(e) => setRetypePass(e.target.value)}
                  />
                </div>

                <button
                  className="text-white bg-sky-900 hover:bg-sky-800 px-4 py-2 mt-2 rounded-md mb-4 w-full"
                  type="submit"
                >
                  Sign up
                </button>

                <div className="text-base text-center flex opacity-90 items-center justify-center mt-1">
                  <hr className="flex-grow border-gray-300 border-t mr-2" />
                  <p className="text-sm text-white font-normal ">
                    Already have an account?
                  </p>
                  <hr className="flex-grow border-gray-300 border-t ml-2" />
                </div>

                <div className="text-center">
                  <span
                    className="text-sm text-white cursor-pointer"
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
