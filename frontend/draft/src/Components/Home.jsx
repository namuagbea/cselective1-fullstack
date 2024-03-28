import React from "react";
import DoctorIMG from "./DoctorIMG";
import MenuBar from "./MenuBar.jsx";
import Login from "./Login.jsx";
import { useState } from 'react';



const Home = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleOpenLogin = () => {

        setIsLoginOpen(true);

    };

    const handleCloseLogin = () => {
        setIsLoginOpen(false);
    };

   
    return (
        <div className="">
            <div>
                <MenuBar onLoginClick={handleOpenLogin} />
                {isLoginOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-white opacity-50"></div>
                        <div className="bg-white z-50 p-4 rounded shadow-lg">
                            <Login onClose={handleCloseLogin} />
                        </div>
                    </div>
                )}
            </div>
            
            <div className="row flex">
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
                        <button className="text-white bg-sky-900 hover:bg-cyan-800 px-4 py-2 rounded-full text-lg font-semibold">
                            Make Appointment
                        </button>
                    </div>
                </div>
                <div className="w-full pt-10 right-2">
                    <DoctorIMG />
                </div>
            </div>
        </div>
    );
};

export default Home;
