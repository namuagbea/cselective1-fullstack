import React, { useState } from 'react';
import { Link } from 'react-scroll';
import DentalLogo from './DentalLogo';


const MenuBar = () => {

  return (
    <nav>
      <div className="h-10vh z-50 flex justify-between px-6 lg:py-5">
        <div className="flex items-center flex-1 m-3">
          <DentalLogo />
          <span className="text-3xl font-bold ml-2 mt-1">Smile Prime</span>
          <div className="lg:flex md:flex lg:flex-1 items-center justify-end hidden">
            <div className="flex-10 ">
              <ul className="text-lg font-normal flex gap-8 text-[18px]">
                <Link to="Home">
                  <li className='cursor-pointer'>Home</li>
                </Link>
                <Link to="About">
                  <li className='cursor-pointer'>About</li>
                </Link>
                <Link to="Services">
                  <li className='cursor-pointer'>Services</li>
                </Link>
                <Link to=" Contact">
                  <li className='cursor-pointer'>Contacts</li>
                </Link>
              </ul>
            </div>
            <Link>
              <button className="bg-[#1E456A] text-[#F1F9FC] px-9 py-2 ml-8 text-[18px] rounded-2xl">
                Login
              </button>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default MenuBar;
