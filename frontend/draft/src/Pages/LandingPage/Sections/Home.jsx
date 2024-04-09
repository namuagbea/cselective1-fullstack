import React from "react";
import DoctorIMG from "../Components/DoctorIMG";
import { useState } from "react";
import MenuBar from "../Components/MenuBar";
import Login from "../Components/Login";
import Headroom from "react-headroom";
import './Home.css';

const Home = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleOpenLogin = () => {
        setIsLoginOpen(true);
    };

    const handleCloseLogin = () => {
        setIsLoginOpen(false);
    };

    return (
        <div className="h-full w-full">


            <div className="bg-[#F1F9FC] w-full">
                <Headroom className="headroom">
                    <MenuBar onLoginClick={handleOpenLogin} />

                </Headroom>
            </div>
            {/* Login modal */}
            {isLoginOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-white opacity-50"></div>
                    <div className="bg-white z-50 p-4 rounded shadow-lg">
                        <Login onClose={handleCloseLogin} />
                    </div>
                </div>
            )}


            <div className="flex w-full lg:h-full md:h-full flex-row bg-[#F1F9FC]" id="home">
                <div className="">
                    <div className="lg:mx-24 lg:mt-44 md:mx-16 md:mt-20 sm:mx-10 sm:mt-14">
                        <div className="lg:text-3xl md:text-lg sm:text-[12px] font-bold ">
                            <h2 className="">
                                Your
                                <span className="text-sky-500"> SMILE </span>
                                <span className="text-gray-800">is your</span>
                            </h2>
                            <h2 className="md:my-[-6px] sm:my-[-6px]">
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

                    <div className="lg:mb-5 :my-5 lg:ml-[90px] md:mb-3 md:my-3 md:ml-14 sm:mb-1 sm:my-1 sm:ml-9 ">
                        <button className="heartbeat transition delay-150 hover:-translate-y-1 text-white bg-sky-900 hover:bg-cyan-800 px-4 py-2 rounded-full lg:text-lg md:text-[15px] sm:[9px] font-semibold">
                            Make Appointment
                        </button>
                    </div>
                </div>
                <div className="puff-in-center">
                    <DoctorIMG />
                </div>
            </div>

        </div>
    );
};

export default Home;
