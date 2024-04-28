import React from "react";
import MenubarV2 from "../../GeneralComponents/MenubarV2.jsx";
import ClinicPictureDark from "../../../media/ClinicPictureDark.png";
import Footer from "../../GeneralComponents/Footer.jsx";
import './Mybooking.css';

const MyBooking = () => {
  return (
    <div className=" relative min-h-screen">
          {/* <Headroom className="MenubarV2"> */}
          {/* </Headroom> */}
      <div
        className="bg-cover bg-center relative"
        style={{ backgroundImage: `url(${ClinicPictureDark})` }}
      >
        <div className="bg-[#224F79]">
          <MenubarV2 />


        </div>

        <div className="relative top-0 left-0 p-8 text-white">
          <h1 className="text-4xl font-bold">Welcome to Smile Prime Online</h1>
          <h1 className="text-4xl font-bold">Booking System</h1>
          <p className="mt-2 text-lg">
            Please fill up necessary information below and
          </p>
          <p className="text-lg">confirm your appointment!</p>
        </div>

        {/* Form container */}

        <div className="relative top-full left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 rounded-lg p-8 w-3/4">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Book Appointment
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="mx-5">
              <h3 className="font-bold mb-2">Type of Service</h3>
              <select className="w-full rounded-lg border p-2 text-gray-400">
                <option value="">Metal & Ceramic Braces</option>
                <option value="">Teeth Whitening</option>
                <option value="">Anterior Fixed Bridge & Veneers</option>
                <option value="">Tooth/Molar Extraction</option>
                <option value="">Oral Prophylaxis</option>
                <option value="">Tooth Restoration</option>
                <option value="">Diastema Closure</option>
                <option value="">Orthodontic Treatment</option>
              </select>

              <h3 className="font-bold mt-4 mb-2 ">Dentist</h3>
              <select className="w-full rounded-lg border p-2 text-gray-400">
                <option value="">Dr. Karl Nigel Subido</option>
                <option value="">Dr. Kristinna Uy</option>
                <option value="">Dr. Robert Johnson Jr.</option>
                <option value="">Dr. Victoria Ashworth</option>
              </select>

              <h3 className="font-bold mt-4 mb-2">Date</h3>
              <input
                type="datetime-local"
                className="w-full rounded-lg border p-2 text-gray-400"
              />
            </div>

            {/* Right Column */}
            <div className="mx-5">
              <h3 className="font-bold mb-2">Personal Information</h3>
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-lg border p-2 mb-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-lg border p-2 mb-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border p-2 mb-2"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full rounded-lg border p-2 mb-2"
              />
              <textarea
                placeholder="Address"
                className="w-full rounded-lg border p-2 mb-2"
              ></textarea>
              <textarea
                placeholder="Other"
                className="w-full rounded-lg border p-2 mb-2"
              ></textarea>

              <div className="flex justify-end mt-6">
                <button className="bg-red-500 text-white px-6 py-2 rounded-2xl mr-4">
                  Cancel
                </button>
                <button className="bg-[#00B3DE] text-white px-6 py-2 rounded-2xl">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
