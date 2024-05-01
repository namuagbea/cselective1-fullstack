import React, { useState } from 'react'
import MenuBarV2 from '../../GeneralComponents/MenubarV2.jsx'
import {Link} from 'react-router-dom';
import { FaTrash } from "react-icons/fa";


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

          {/* Trashcan */}
          <div className=' flex justify-center place-items-center pr-6'>
            <FaTrash color='#AD0202' fontSize={20} />
          </div>
        </Link>
      
        
      </div>

      {openDropDown &&
        <div className='absolute bg-[#FFFFFF] right-14 top-[16rem]'>
        </div>
      }
    </div>
  )
}

export default MyAppointments