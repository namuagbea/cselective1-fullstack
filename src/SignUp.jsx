import React, { useState } from 'react';
import signupPhoto from './media/signup-photo.png';
import Login from './Login';

const SignUp = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypepass, setRetypePass] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const handleSignUp = () => {
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Retype Password:", retypepass);

    onClose();
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  if (showLogin) {
    return <Login onClose={() => setShowLogin(false)} />;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-30">
      <div className="bg-white p-8 rounded-lg shadow-lg flex w-11/12 sm:w-3/4 lg:w-2/3 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 p-2 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="w-3/5 mr-4">
          <img src={signupPhoto} alt="SignUp" className="object-cover rounded-l-lg w-full h-full" />
        </div>
        <div className="w-2/3 flex flex-col justify-center bg-blue">
          <h2 className="text-2xl font-bold mb-7">Register</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="retypepass">
              Re-type Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="retypepass"
              type="password"
              value={retypepass}
              onChange={(e) => setRetypePass(e.target.value)}
            />
          </div>
          <button onClick={handleSignUp} className="text-white bg-sky-900 hover:bg-sky-800 px-4 py-2 rounded-md mb-4 w-full">Sign Up</button>
          <div className="text-sm text-center flex items-center justify-center">
            <hr className="flex-grow border-gray-300 border-t mr-2" />
            <p className="text-gray-500 flex-grow-0">Already have an account?</p>
            <hr className="flex-grow border-gray-300 border-t ml-2" />
          </div>
          <span className="text-sm text-center text-sky-900 cursor-pointer" onClick={handleLoginClick}>Log In</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
