import React, { useState } from 'react';
import MenuBar from './MenuBar';
import Login from './Login'; // Update import statement
import ellipse from './media/ellipse-main.png';

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <div>
      <MenuBar onLoginClick={handleOpenLogin}/>
      {isLoginOpen && <Login onClose={handleCloseLogin} />} {/* Changed PopupCard to Login */}
      <div className="flex flex-col justify-center h-screen">
        <div className="mx-20">
          <h2 className="text-3xl font-bold"> Your
            <span className="text-sky-500"> SMILE </span>
            <span className="text-gray-800">is your</span>
          </h2>
          <h2 className="text-3xl font-bold">
            <span className="text-gray-800"> most valuable asset.</span>
          </h2>
          <h3 className="text-lg mt-4">
            Experience top-notch quality and personalized care to
          </h3>
          <h3 className="text-lg mb-4">
            achieve a crown-worthy smile of your dreams!
          </h3>
          <button className="text-white bg-sky-900 hover:bg-white hover:text-sky-900 px-6 py-2 rounded-full text-lg font-semibold mb-5">Make Appointment</button>
        </div>
      </div>
      <div>
        {/*<img className="h-912 w-824" src={ellipse} alt="Bg-Ellipse" />
        figuring out how to align image according to design*/}
      </div>
    </div>
  );
}
