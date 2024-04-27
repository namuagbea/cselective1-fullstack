import React, { useState } from 'react'
import MenuBarV2 from '../../GeneralComponents/MenubarV2.jsx';
import { IoMdCalendar } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { GrLocationPin } from "react-icons/gr";
import Dropdown from './Components/Dropdown.jsx';

const EditMyappoinments = () => {
  return (
    <div>
      <div className='h-full w-full'>
        <div className='bg-[#1E456A]'>
          <MenuBarV2 />
        </div>
        <div className='p-10'>
          <h2 className='font-semibold text-[31px]'>Edit Booking (<span>1</span>)</h2>
        </div>

        {/* Appoinment information container */}


        <div className='bg-[#FFFFFF] border-2 flex flex-col justify-center mx-36 rounded-lg shadow-md'>
          <div className='flex'>
            <div className='w-full'>
              <h3 className='font-bold text-[28px] text-[#353535] text-center mt-8'>Appointment Details</h3>

            </div>
          </div>

          {/* contents */}
          <div className='flex flex-row justify-evenly gap-2 mx-20 my-10 '>
            <div className='w-full flex mr-5 gap-y-5 flex-col'>
              <div>
                <h5 className='font-medium text-[16px]'>Type of Service: </h5>
                <select className="w-full rounded-lg border p-2 mt-1 text-gray-400">
                  <option value="">Metal & Ceramic Braces</option>
                  <option value="">Teeth Whitening</option>
                  <option value="">Anterior Fixed Bridge & Veneers</option>
                  <option value="">Tooth/Molar Extraction</option>
                  <option value="">Oral Prophylaxis</option>
                  <option value="">Tooth Restoration</option>
                  <option value="">Diastema Closure</option>
                  <option value="">Orthodontic Treatment</option>
                </select>
              </div>

              <div>
                <h5 className='font-medium text-[16px]'>Dentist: </h5>
                <span className='font-bold text-[22px]'>Dr. Karl Nigel Subido RD.</span>
              </div>
            </div>

            <div className='flex w-full flex-col'>
              <h3 className='font-medium text-[16px]'>Date and Time</h3>
              <input
                type="datetime-local"
                className="w-full rounded-lg border p-2 mt-1 text-gray-400"
              />
            </div>

            

          </div>
          <div className='flex gap-2 justify-end mb-9 mr-6'>
            <button className='bg-[#B10000] text-white rounded-2xl p-2 w-20'>Cancel</button>
            <button className='bg-[#1E456A] text-white rounded-2xl p-2 w-20'>Save</button>
          </div>
        </div>

      </div></div>
  )
}

export default EditMyappoinments