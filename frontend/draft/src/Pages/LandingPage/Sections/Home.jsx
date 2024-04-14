import React from "react";
import DoctorIMG from "../Components/DoctorIMG";
import { Link } from "react-router-dom";
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
        <>
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

            <div className="h-[690px] w-full bg-[#F1F9FC]">
                <div className="flex h-full flex-row" id="home">
                    <div className="">
                        <div className="mx-24 mt-44">
                            <h2 className="text-3xl font-bold ">
                                Your
                                <span className="text-sky-500"> SMILE </span>
                                <span className="text-gray-800">is your</span>
                            </h2>
                            <h2 className="text-3xl font-bold">
                                <span className="text-gray-800"> most valuable asset.</span>
                            </h2>
                            <h3 className="text-lg mt-4">
                                <span className="">
                                    Experience top-notch quality and personalized care to
                                </span>
                                <span> achieve a crown-worthy smile of your dreams!</span>
                            </h3>
                        </div>

                        <div className="mb-5 mt-5 ml-[90px]">
                            <Link to="/MyBooking">
                                <button className="heartbeat transition delay-150 hover:-translate-y-1 text-white bg-sky-900 hover:bg-cyan-800 px-4 py-2 rounded-full text-lg font-semibold">
                                    Make Appointment
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="puff-in-center">
                        <DoctorIMG />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
