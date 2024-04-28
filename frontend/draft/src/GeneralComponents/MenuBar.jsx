import React, { useState } from "react";
import { Link } from "react-scroll";
import DentalLogo from "../Pages/LandingPage/Components/DentalLogo.jsx";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const MenuBar = ({ onLoginClick, isLoggedIn }) => {
  const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const MenuCLick = () => {
    setClick(!click);
  };

  const closeMenu = () => setClick(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    // Call the parent function to update the isLoggedIn state
    window.location.reload();
  };

  // Navigation responsive
  const NavbarContents = (
    <div className="lg:hidden block absolute top-28 w-full left-0 right-0 bg-slate-700 transition">
      <ul className="text-center text-lg p-20">
        <Link spy smooth to="home">
          <li className="cursor-pointer my-4 py-4 border-b border-slate-500 hover:bg-slate-200 hover:rounded">
            Home
          </li>
        </Link>
        <Link spy smooth to="about">
          <li className="cursor-pointer my-4 py-4 border-b border-slate-500 hover:bg-slate-200 hover:rounded">
            About
          </li>
        </Link>
        <Link spy smooth to="services">
          <li className="cursor-pointer my-4 py-4 border-b border-slate-500 hover:bg-slate-200 hover:rounded">
            Services
          </li>
        </Link>
        <Link spy smooth to="contact">
          <li className="cursor-pointer my-4 py-4 border-b border-slate-500 hover:bg-slate-200 hover:rounded">
            Contacts
          </li>
        </Link>
        {/* Conditional rendering for My Bookings */}
        {isLoggedIn && (
          <li className="cursor-pointer my-4 py-4 border-b border-slate-500 hover:bg-slate-200 hover:rounded">
            My Bookings
          </li>
        )}
        {/* Conditional rendering for Logout */}
        {isLoggedIn && (
          <li
            className="cursor-pointer my-4 py-4 border-b border-slate-500 hover:bg-slate-200 hover:rounded"
            onClick={handleLogout}
          >
            Logout
          </li>
        )}
      </ul>
    </div>
  );

  return (
    <div className="lg:z-50 flex justify-between md:justify-between lg:px-6 lg:h-24 lg:py-5  lg:w-full ">
      <div className="flex items-center flex-1 ">
        <DentalLogo />
        <span className="lg:text-3xl font-bold mt-1 md:text-xl ">
          Smile Prime
        </span>
        <div className="lg:flex md:flex md:flex-1 lg:flex-1 items-center justify-end hidden">
          <div className="flex-10 ">
            <ul className="font-normal flex lg:gap-8 md:gap-6 lg:text-[18px] md:text-[14px]">
              <Link smooth to="home">
                <li
                  className="cursor-pointer hover:text-cyan-950 transition border-b-2 hover:border-fuchsia-100 "
                  onClick={closeMenu}
                >
                  Home
                </li>
              </Link>
              <Link smooth to="about">
                <li className="cursor-pointer" onClick={closeMenu}>
                  About
                </li>
              </Link>
              <Link smooth to="services">
                <li className="cursor-pointer" onClick={closeMenu}>
                  Services
                </li>
              </Link>
              <Link smooth to="contact">
                <li className="cursor-pointer" onClick={closeMenu}>
                  Contacts
                </li>
              </Link>
              {/* conditional rendering for My Bookings */}
              {isLoggedIn && <li>My Bookings</li>}
            </ul>
          </div>
          <div className="ml-8 md:mr-3 text-[18px] ">
            {/* Conditional rendering for Login button */}
            {!isLoggedIn && (
              <div>
                <button
                  onClick={onLoginClick}
                  className="bg-[#1E456A] text-[#F1F9FC] rounded-2xl px-9 py-2"
                >
                  Login
                </button>
              </div>
            )}
            {/* Conditional rendering for User dropdown */}
            {isLoggedIn && (
              <div
                className="ml-4 -translate-y-0"
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <a className="hover:cursor-pointer">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="2x"
                    className="text-sm md:text-base"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    size="2x"
                    className="ml-1 text-xs md:text-sm"
                  ></FontAwesomeIcon>
                </a>
                {/* Dropdown menu */}
                {dropdownOpen && (
                  <div className="absolute bg-white text-sm w-16 text-left py-2 px-2 rounded-lg shadow-md hover:cursor-pointer font-bold">
                    <ul>
                      <li onClick={handleLogout}>Logout</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div>{click && NavbarContents}</div>
      <button className="block md:hidden transition mr-4" onClick={MenuCLick}>
        {click ? <FaTimes /> : <CiMenuFries />}
      </button>
    </div>
  );
};

export default MenuBar;
