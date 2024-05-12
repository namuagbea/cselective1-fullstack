import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as LinkTo } from "react-router-dom";
import DentalLogo from "../Pages/LandingPage/Components/DentalLogo.jsx";
import { FiLogOut } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MenuBar = ({ onLoginClick, isLoggedIn, username }) => {
  // const [click, setClick] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    // Call the parent function to update the isLoggedIn state
    window.location.reload();
  };


  return (
    <div className="lg:z-50 flex justify-between md:justify-between sm:w-full lg:px-6 lg:h-24 lg:py-5 lg:w-full ">
      <div className="flex items-center flex-1 ">
        <DentalLogo />
        <span className="lg:text-3xl font-bold mt-1 md:text-xl ">
          Smile Prime
        </span>
        <div className="flex flex-1 items-center justify-end ">
          <div className="flex-10 ">
            <ul className="font-normal p-1 flex lg:gap-8 md:gap-6 sm:gap-3 lg:text-[18px] md:text-[14px] sm:text-[13px]">
              <Link smooth to="home">
                <li
                  className="cursor-pointer"
                >
                  <span className=" hover:text-cyan-950 hover:border-b hover:border-b-cyan-950 ">Home</span>
                </li>
              </Link>
              <Link smooth to="about">
                <li className="cursor-pointer ">
                  <span className=" hover:text-cyan-950 hover:border-b hover:border-b-cyan-950 ">About</span>
                </li>
              </Link>
              <Link smooth to="services">
                <li className="cursor-pointer ">
                  <span className=" hover:text-cyan-950 hover:border-b hover:border-b-cyan-950 ">Services</span>
                </li>
              </Link>
              <Link smooth to="contact">
                <li className="cursor-pointer ">
                  <span className=" hover:text-cyan-950 hover:border-b hover:border-b-cyan-950 ">Contact</span>
                </li>
              </Link>
              {/* conditional rendering for My Bookings */}
              <LinkTo to="/MyAppointments">
                {isLoggedIn && <li className="cursor-pointer">
                  <span className=" hover:text-cyan-950 hover:border-b hover:border-b-cyan-950 ">My Bookings</span>
                </li>}
              </LinkTo>
            </ul>
          </div>
          <div className="ml-1 lg:mr-1 md:mr-3 sm:mr-2 ">
            {/* Conditional rendering for Login button */}
            {!isLoggedIn && (
              <div>
                <button
                  onClick={onLoginClick}
                  className="bg-[#1E456A] text-[#F1F9FC] rounded-2xl lg:px-9 lg:py-2 md:px-9 md:py-2 sm:px-6 sm:py-2 sm:text-[13px] lg:text-[18px] md:text-[14px] hover:bg-cyan-800"
                >
                  Login
                </button>
              </div>
            )}
            {/* Conditional rendering for User dropdown */}
            {isLoggedIn && (
              <div
                className="bg-[#1E456A] text-[#F1F9FC] ml-4 rounded-2xl lg:px-7 lg:py-2 md:px-6 md:py-2 sm:px-4 sm:py-2 sm:text-[13px] lg:text-[18px] md:text-[14px]"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <a className="hover:cursor-pointer">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="20"
                    className="text-sm md:text-base"
                  ></FontAwesomeIcon>
                  <span className="ml-2">{username}</span>
                </a>

                {/* Dropdown menu  */}

                {dropdownOpen && (
                  <div className="absolute text-[#c41a1a] mt-4 right-7 bg-white text-sm text-center py-2 px-2 rounded-lg shadow-md hover:cursor-pointer font-bold">
                    <ul className="flex flex-row p-1">
                      <FiLogOut fontSize={20} />
                      <li className="pl-1" onClick={handleLogout}>
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
