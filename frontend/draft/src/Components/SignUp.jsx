import React, { useState } from 'react';
import signupPhoto from '../../media/signup-photo.png';
import Login from '../Components/Login.jsx';
import axios from 'axios';

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
    <div className='fixed inset-0 flex items-center justify-center '>
      <div className='flex w-full shadow-lg sm:w-3/4 lg:w-2/3 rounded-[2vh] overflow-hidden'>
        <div className='w-3/5 h-[80vh] bg-white'>
          <img src={signupPhoto} alt="SignUp" className="object-cover min-w-full min-h-min" />
        </div>

        <div className='w-2/3 flex-col bg-[#30689E]'>
          <div className='float-right pr-3 pt-3'>
            <button onClick={onClose} className=" text-white hover:text-sky-200 p-2 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className='pt-14'>
            <h2 className="text-[2rem] font-semibold text-center mb-2 text-white">Sign up</h2>
            <div className='px-14 mt-2'>
              <div>
                <label className="text-base text-white font-normal" htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 mt-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className='mb-4 mt-2'>
                <label className="text-base text-white font-normal" htmlFor="email">
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
                <label className="text-base text-white font-normal" htmlFor="password">
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

              <div className='mb-4 mt-2'>
                <label className="text-base text-white font-normal" htmlFor="retypepass">
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

                <button className="text-white bg-sky-900 hover:bg-sky-800 px-4 py-2 mt-2 rounded-md mb-4 w-full" onClick={handleSignUp}>Sign up</button>

              
              <div className="text-base text-center flex opacity-90 items-center justify-center mt-1">
                <hr className="flex-grow border-gray-300 border-t mr-2" />
                <p className="text-sm text-white font-normal ">Already have an account?</p>
                <hr className="flex-grow border-gray-300 border-t ml-2" />
              </div>

              <div className='text-center'>
              <span className="text-sm text-white cursor-pointer" onClick={handleLoginClick}>Log In</span>
              </div>

            </div>


          </div>

        </div>

      </div>
    </div>
  );
};

export default SignUp;

