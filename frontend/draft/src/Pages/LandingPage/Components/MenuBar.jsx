import React, { useState } from 'react';
import { Link } from 'react-scroll';
import DentalLogo from '../Components/DentalLogo';
import {FaTimes} from 'react-icons/fa';
import {CiMenuFries} from 'react-icons/ci';

const MenuBar = ({ onLoginClick }) => {
  const[click, setClick] = useState(false)
  const MenuCLick = () =>{
    setClick(!click)
  }
  const closeMenu = () => setClick(false)

  //navigation reponsive 
  const NavbarContents = 
    <div className='lg:hidden block absolute top-28 w-full left-0 right-0 bg-slate-700 transition'>
      <ul className='text-center text-lg p-20'>
        <Link spy smooth to = "home" >
          <li className='cursor-pointer my-4 py-4 border-b border-slate-500 hover:bg-slate-200 hover:rounded'>Home</li>
        </Link>
        <Link spy smooth to="about">
          <li className='cursor-pointer my-4 py-4 border-b border-slate-500 hover:bg-slate-200 hover:rounded'>About</li>
        </Link>
        <Link spy smooth to="services">
          <li className='cursor-pointer my-4 py-4 border-b border-slate-500 hover:bg-slate-200 hover:rounded'>Services</li>
        </Link>
        <Link spy smooth to="contact">
          <li className='cursor-pointer my-4 py-4 border-b border-slate-500 hover:bg-slate-200 hover:rounded'>Contacts</li>
        </Link>

      </ul>
    </div>
     
  


  return (
    <div>
      <nav>
        <div className="h-10vh z-50 min-h-min flex justify-between px-6 lg:py-5 py-4 bg-[#F1F9FC]">
          <div className="flex items-center flex-1 m-3">
            <DentalLogo />
            <span className="text-3xl font-bold ml-2 mt-1">Smile Prime</span>
            <div className="lg:flex md:flex lg:flex-1 items-center justify-end hidden">
              <div className="flex-10 ">
                <ul className="text-lg font-normal flex gap-8 text-[18px]">
                  <Link smooth to="home">
                    <li className='cursor-pointer hover:text-cyan-950 transition border-b-2 hover:border-fuchsia-100 ' onClick={closeMenu}>Home</li>
                  </Link>
                  <Link smooth to="about">
                    <li className='cursor-pointer' onClick={closeMenu} >About</li>
                  </Link>
                  <Link smooth to="services">
                    <li className='cursor-pointer' onClick={closeMenu}>Services</li>
                  </Link>
                  <Link smooth to="contact">
                    <li className='cursor-pointer' onClick={closeMenu}>Contacts</li>
                  </Link>
                </ul>
              </div>
              <button onClick={onLoginClick} className="bg-[#1E456A] text-[#F1F9FC] px-9 py-2 ml-8 text-[18px] rounded-2xl">
                Login
              </button>
            </div>
          </div>
          <div>
            {click && NavbarContents}

          </div>
          <button className='block sm:hidden transition' onClick={MenuCLick}>
            {click ? <FaTimes/> : <CiMenuFries/>}
          </button>

        </div>
      </nav>
    </div>
  );
};

export default MenuBar;
