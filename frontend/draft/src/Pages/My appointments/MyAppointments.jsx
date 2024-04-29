import React, { useState } from 'react'
import MenuBarV2 from '../../GeneralComponents/MenubarV2.jsx'
import Dropdown from './Components/Dropdown.jsx';
import {Link} from 'react-router-dom';

const MyAppointments = () => {
  const [openDropDown, setOpenDropdown] = useState(false);
  return (
    <div>
      <div className='bg-[#1E456A]'>
        <MenuBarV2/>
      </div>
      <div className='p-10'>
        <h2 className='font-semibold text-[31px]'>Bookings (<span>1</span>)</h2>

        {/* Booking conatiner list */}
        <Link to="/MyAppointments/ViewAppointment" className='hover:bg-zinc-100 border-solid border-[0.2px] rounded-[16px] flex justify-between flex-row shadow-md mt-4'>
          <div className='px-6 py-3'>
            <h3 className='font-bold text-[32px] text-[#404040]'>Metal & Braces</h3>
            <h6 className='text-[10px] mt-[-6px]'>Created: <span>09/14/2025</span></h6>
          </div>

          {/* Dropdown */}
          <div className='justify-end place-items-center flex pr-3'>
            <button onClick={() => setOpenDropdown((prev) => !prev)}>
              <svg className="flex-none size-5 text-gray-600 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
            </button>
          </div>
        </Link>
      
        
      </div>

      {openDropDown &&
        <div className='absolute bg-[#FFFFFF] right-14 top-[16rem]'>
          <Dropdown />
        </div>
      }
    </div>
  )
}

export default MyAppointments