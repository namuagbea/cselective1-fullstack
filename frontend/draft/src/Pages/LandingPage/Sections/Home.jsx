import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "../Components/Login";
import Headroom from "react-headroom";
import DoctorwithPage from "../../../../media/Doctor.png";
import "./Home.css";
import MenuBar from "../../../GeneralComponents/MenuBar";

const Home = ({ isLoggedIn, username }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  return (
    <div className="h-full">
      <div className="bg-[#F1F9FC]">
        <Headroom className="Menubar">
          <MenuBar onLoginClick={handleOpenLogin} isLoggedIn={isLoggedIn} username={username} />
        </Headroom>
      </div>
      <div className="h-full bg-[#F1F9FC] pt-24 w-full ">
        {/* Login modal */}
        {isLoginOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-white opacity-50"></div>
            <div className="bg-white z-50 p-4 rounded shadow-lg">
              <Login onClose={handleCloseLogin} />
            </div>
          </div>
        )}

        <div
          className="flex w-full lg:h-full md:h-full flex-row bg-[#F1F9FC]"
          id="home"
        >
          <div className="md:ml-6">
            <div className=" lg:mt-44  md:mt-10 sm:mx-9 sm:mt-5">
              <div className="lg:text-3xl md:text-lg sm:text-[12px] font-bold ">
                <h2 className="">
                  Your
                  <span className="text-sky-500"> SMILE </span>
                  <span className="text-gray-800">is your</span>
                </h2>
                <h2 className="my-[-6px]">
                  <span className="text-gray-800"> most valuable asset.</span>
                </h2>
              </div>
              <h3 className="lg:text-lg md:text-[12px] sm:text-[10px] lg:mt-4 md:mt-3 sm:mt-2">
                <span className="">
                  Experience top-notch quality and personalized care to
                </span>
                <span> achieve a crown-worthy smile of your dreams!</span>
              </h3>
            </div>
            <div className="lg:mb-5  md:mb-3 md:my-3 sm:mb-1 sm:my-1 sm:ml-9 ">
              {!isLoggedIn && (
                <button
                  onClick={handleOpenLogin}
                  className=" transition delay-150 hover:-translate-y-1 text-white bg-sky-900 hover:bg-cyan-800 px-4 py-2 sm:px-3 sm:py-1 rounded-full lg:text-lg md:text-[15px] sm:text-[9px] font-semibold"
                >
                  Make Appointment
                </button>
              )}
              {isLoggedIn && (
                <Link to="/MakeAppointment">
                  <button className="transition delay-150 hover:-translate-y-1 text-white bg-sky-900 hover:bg-cyan-800 px-4 py-2 sm:px-3 sm:py-1 rounded-full lg:text-lg md:text-[15px] sm:text-[9px] font-semibold">
                    Make Appointment
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className="puff-in-center">
            <div className="h-full w-full">
              <img className="overflow-hidden " src={DoctorwithPage} alt="Doctor with patient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
