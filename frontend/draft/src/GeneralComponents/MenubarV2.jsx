import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import "react-router-dom";

const MenuBarV2 = ({ onLoginClick, username }) => {
  const [click, setClick] = useState(false);
  const MenuCLick = () => {
    setClick(!click);
  };
  const closeMenu = () => setClick(false);

  return (
    <div className="lg:z-50 flex justify-between md:justify-between lg:px-6 lg:h-24 lg:py-5 lg:w-full text-white ">
      <div className="flex items-center flex-1 ">
        <Link to="/" className="flex-row">
          <span className="lg:text-3xl font-bold mt-1 md:text-xl ">
            Smile Prime
          </span>
        </Link>

        <div className="lg:flex md:flex md:flex-1 lg:flex-1 items-center justify-end hidden">
          <div className="flex-10 ">
            <ul className="font-normal flex lg:gap-8 md:gap-6 lg:text-[18px] md:text-[14px]">
              <Link
                to={{
                  pathname: "/MyAppointments",
                  state: { username: username },
                }}
              >
                <li className="cursor-pointer" onClick={closeMenu}>
                  My Appointments
                </li>
              </Link>
            </ul>
          </div>
          <button
            onClick={onLoginClick}
            className="bg-[#00B3DE] text-[#F1F9FC] px-9 py-2 ml-8 md:mr-3 text-[18px] rounded-2xl"
          >
            {username}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuBarV2;