import React from 'react';
import logo from './media/logo.png';

const MenuBar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center flex-shrink-0 text-sky-900 mr-6">
      <img className="h-10 w-17" src={logo} alt="Logo" />
        <span className="font-bold text-2xl">Smile Prime</span>
      </div>

      <div className="hidden lg:block">
        <div className="flex space-x-4">
          <a href="#" className="text-sky-900 px-3 py-2 text-lg font-semibold">Home</a>
          <a href="#" className="text-sky-900 px-3 py-2 text-lg font-semibold">About</a>
          <a href="#" className="text-sky-900 px-3 py-2 text-lg font-semibold">Services</a>
          <a href="#" className="text-sky-900 px-3 py-2 text-lg font-semibold">Contact</a>
          <button className="text-white bg-sky-900 hover:bg-white hover:text-sky-900 px-6 py-2 rounded-full text-lg font-semibold">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
