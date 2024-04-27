import React from 'react'
import MenuBarV2 from '../../GeneralComponents/MenubarV2.jsx';
import { IoMdCalendar } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { GrLocationPin } from "react-icons/gr";

const ViewMyAppointments = () => {
  return (
    <div className='bg-[#F1F9F]'>
      <div className='bg-[#1E456A]'>
        <MenuBarV2 />
      </div>
      <div className='p-10'>
        <h2 className='font-semibold text-[31px]'>View Booking (<span>1</span>)</h2>
      </div>

      {/* Appoinment information list */}

      <div className='bg-[#FFFFFF] border-2 flex flex-col justify-center mx-36 rounded-lg shadow-md'>
        <div>
          <h3 className='font-bold text-[28px] text-[#353535] text-center mt-8'>Appointment Details</h3>

        </div>

        <div className='flex flex-row justify-evenly mx-20 my-10 '>
          <div className='w-full flex gap-y-5 flex-col'>
            <div>
              <h5 className='font-medium text-[16px]'>Type of Service: </h5>
              <span className='font-bold text-[22px]'>Metal & Ceramic Braces</span>
            </div>

            <div>
              <h5 className='font-medium text-[16px]'>Dentist: </h5>
              <span className='font-bold text-[22px]'>Dr. Karl Nigel Subido RD.</span>
            </div>
          </div>

          <div className='flex w-full justify-center flex-col gap-y-3'>
            <div className='inline-flex'>
              <IoMdCalendar color="#118948" fontSize="2.5em" /> 
              <span className='font-medium text-[22px] ml-2'>March 30, 2024</span>
            </div>
            <div className='inline-flex'>
              <FaRegClock color="#52CCB6" fontSize="2.5em" />
              <span className='font-medium text-[22px] ml-2 '>9:00 A.M.</span>
            </div>
            <div className='inline-flex'>
              <GrLocationPin color="#C91D1D" fontSize="3.9em" />
              <span className='font-normal text-[16px] ml-2'>Door 3, D&E Prime Building, Robredo Avenue, 3rd Blk., Purok Yellowbell, Brgy. Sta. Cruz, Koronadal Proper, Philippines.</span>
            </div>
          </div>

        </div>

        <div className='text-center mt-2 mb-8'>
          <h6 className='text-[10px] text-[#767676] mt-[-6px]'>Created: <span>09/14/2025</span></h6>
        </div>

      </div>
    </div>
  )
}

export default ViewMyAppointments