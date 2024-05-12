import React, { useState } from "react";
import { IoMdCalendar } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { GrLocationPin } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FiLogOut } from "react-icons/fi";



const ViewMyAppointments = () => {
  const location = useLocation();
  const appointment = location.state && location.state.appointment;
  const username = location.state && location.state.username;
  const bookingCount = location.state && location.state.bookingCount;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    // Call the parent function to update the isLoggedIn state
    window.location.reload();
  };

  const formatField = (fieldName, fieldValue) => {
    switch (fieldName) {
      case 'dentist':
        return capitalizeNames(fieldValue);
      case 'service':
        return formatService(fieldValue);
      default:
        return fieldValue;
    }
  };

  const capitalizeNames = (name) => {
    return name
      .split(/(?=[A-Z])/)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  };

  const formatService = (service) => {
    switch (service) {
      case 'metalCeramicBraces':
        return 'Metal & Ceramic Braces';
      case 'teethWhitening':
        return 'Teeth Whitening';
      case 'anteriorFixedVeneers':
        return 'Anterior Fixed Bridge & Veneers';
      case 'toothMolarExtraction':
        return 'Tooth/Molar Extraction';
      case 'oralProphylaxis':
        return 'Oral Prophylaxis';
      case 'toothRestoration':
        return 'Tooth Restoration';
      case 'diastemaClosure':
        return 'Diastema Closure';
      case 'orthodonticTreatment':
        return 'Orthodontic Treatment';
      default:
        return service;
    }
  };

  const formatDateTime = (dateTime) => {
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const dateObject = new Date(dateTime);
    const date = dateObject.toLocaleDateString("en-US", options);
    const time = dateObject.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });
    return { date, time };
  };

  return (
    <div className='h-full w-full'>
      <div className='bg-[#1E456A] '>

        {/* Menubar */}
        <div className="lg:z-50 flex justify-between md:justify-between lg:px-6 lg:h-24 lg:py-5 lg:w-full text-white ">
          <div className="flex items-center flex-1 ">
            <Link to="/" className="flex-row">
              <span className="lg:text-3xl font-bold mt-1 md:text-xl ">
                Smile Prime
              </span>
            </Link>

            <div className="cursor-pointer lg:flex md:flex md:flex-1 lg:flex-1 items-center justify-end hidden"
              onClick={() => setDropdownOpen((prev) => !prev)}>


              <a
                className="bg-[#00B3DE] text-[#F1F9FC] px-3 py-2 ml-8 md:mr-3 text-[18px] rounded-2xl"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  size="20"
                  className="text-sm md:text-base"
                ></FontAwesomeIcon>
                <span className="ml-2">{username}</span>
              </a>

              {/* Dropdown menu  */}

              {dropdownOpen && (
                <div className="absolute text-[#c41a1a] mt-24 right-9 bg-white text-sm text-center py-2 px-2 rounded-lg shadow-md hover:cursor-pointer font-bold">
                  <ul className="flex flex-row p-1">
                    <FiLogOut fontSize={20} />
                    <li className="pl-1" onClick={handleLogout}>
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>


      <Link to='/MyAppointments' className='p-10 flex flex-row'>
        <div className='flex place-items-center justify-center mr-1 mt-1'>
          <IoIosArrowBack fontSize={25} />
        </div>
        <h2 className='font-semibold text-[31px]'>View Booking({bookingCount})</h2>
      </Link>

      {/* Appointment information container */}
      {appointment && (
        <div className='bg-[#FFFFFF] border-2 flex flex-col justify-center mx-36 rounded-lg shadow-md'>
          <div className='flex'>
            <div className='w-full'>
              <h3 className='font-bold text-[28px] text-[#353535] text-center mt-8'>Appointment Details</h3>
            </div>
          </div>
          
          {/* Contents */}
          <div className='flex flex-row justify-evenly mx-20 my-10 '>
            <div className='w-full flex gap-y-5 flex-col'>
              <div>
                <h5 className='font-medium text-[16px]'>Type of Service:</h5>
                <span className='font-bold text-[22px]'>{formatField('service', appointment.service)}</span>
              </div>
              <div>
                <h5 className='font-medium text-[16px]'>Dentist:</h5>
                <span className='font-bold text-[22px]'><span>Dr. </span>{formatField('dentist', appointment.dentist)}</span>
              </div>
            </div>

            <div className='flex w-full justify-center flex-col gap-y-3'>
              <div className='inline-flex'>
                <IoMdCalendar color="#118948" fontSize="2.5em" />
                <span className='font-medium text-[22px] ml-2'>{formatDateTime(appointment.date).date}</span>
              </div>
              <div className='inline-flex'>
                <FaRegClock color="#52CCB6" fontSize="2.5em" />
                <span className='font-medium text-[22px] ml-2'>{formatDateTime(appointment.date).time}</span>
              </div>
              <div className='inline-flex'>
                <GrLocationPin color="#C91D1D" fontSize="3em" />
                <span className='font-medium text-[22px] '>{appointment.address}</span>
              </div>
            </div>
          </div>

          <div className='text-center mt-2 mb-8'>
            <h6 className='text-[10px] text-[#767676] mt-[-6px]'>Created: <span>{formatDateTime(appointment.created_at).date}</span></h6>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewMyAppointments;
