import React from "react";
import DoctorIMG from "./DoctorIMG";

const Home = () => {
    return (
        <div>
            <div className="row flex overflow-visible">
                <div className="col w-full">
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
                <div className="w-full h-full object-cover float-right">
                    <DoctorIMG />
                </div>
            </div>
        </div>
    );
};

export default Home;
