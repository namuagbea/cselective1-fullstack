import React, { useState } from 'react';
import loginPhoto from '../../media/login-photo.png';
import SignUp from '../Components/SignUp.jsx';

const Login = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);

    onClose();
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center col">
      <div className="flex w-full shadow-lg sm:w-3/4 lg:w-2/3 rounded-[2vh] overflow-hidden">
        <div className="w-3/5 h-[80vh] bg-white">
          <img src={loginPhoto} alt="Login" className="object-cover min-w-full min-h-min mt-16" />
        </div>
        <div className="w-2/3 flex-col bg-[#30689E]">
          <div className='float-right pr-3 pt-3'>
            <button onClick={onClose} className=" text-white hover:text-sky-200 p-2 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className='pt-14'>
            <h2 className="text-[2rem] font-semibold text-center mt-12 text-white">Welcome!</h2>
            <div className='px-14 mt-2'>
              <div className="">  
                <label className="text-base text-white font-normal " htmlFor="username">
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 mt-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  
                />
                
                <div className="mb-4 mt-2">
                  <label className="text-base font-normal text-white" htmlFor="password">
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
                <div className='my-3'>
                  <span className="text-sm text-white cursor-pointer">Forgot password?</span>

                </div>

                <button onClick={handleLogin} className="text-white bg-sky-900 hover:bg-sky-800 px-4 py-2 rounded-md mb-4 w-full">Login</button>
                <div className="text-sm text-center flex items-center justify-center opacity-85 ">
                  <hr className="flex-grow border-gray-300 border-t mr-2" />
                  <p className=" text-white flex-grow-0 ">Don't have an account yet?</p>
                  <hr className="flex-grow border-gray-300 border-t ml-2" />
                </div>
                <div className="text-center">
                  <span className="text-sm opacity-85 mt-2 text-white cursor-pointer" onClick={handleSignUpClick}>Sign Up</span>
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
