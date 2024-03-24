import React from "react";
import DoctorIMG from "./DoctorIMG";

const Home = () => {
    return (
     <div className="flex justify-between">
      <div className="">
       <div className="col">
        <div className="row flex justify-between static">
         <div className="col mx-24 mt-44">
          <h2 className="text-3xl font-bold">
           Your
           <span className="text-sky-500"> SMILE </span>
           <span className="text-gray-800">is your</span>
          </h2>
          <h2 className="text-3xl font-bold">
           <span className="text-gray-800"> most valuable asset.</span>
          </h2>
          <h3 className="text-lg mt-4">
           Experience top-notch quality and personalized care to
          </h3>
          <h3 className="text-lg mb-4">
           achieve a crown-worthy smile of your dreams!
          </h3>
          <button className="text-white bg-sky-900 hover:bg-cyan-800 px-6 py-2 rounded-full text-lg font-semibold mb-5">
           Make Appointment
          </button>
         </div>
         <div className="col absolute bottom-0 right-0 ">
          <DoctorIMG />
         </div>
        </div>
       </div>
      </div>
     </div>
    );
};

export default Home;
