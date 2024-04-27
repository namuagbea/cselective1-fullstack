import React from 'react'
import { PiEyeFill } from "react-icons/pi";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Dropdown = () => {
    
  return (
    <div className='flex flex-col pl-3 py-2 w-32 rounded-lg border-2 '>
        <div className='flex flex-col gap-2'>
              <a href="/MyAppointments/ViewAppointment" className='inline-flex'><PiEyeFill fontSize={22}/> <span className='pl-1'>View</span> </a>
              <a href="" className='inline-flex'><MdModeEditOutline fontSize={22} /> <span className='pl-1'>Edit</span></a>
              <a href="" className='inline-flex'><MdDelete fontSize={22} /><span className='pl-1'>Delete</span></a>
        </div>
    </div>
  )
}

export default Dropdown