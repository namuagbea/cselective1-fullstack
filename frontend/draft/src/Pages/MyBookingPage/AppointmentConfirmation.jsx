import React from 'react'
import check from '../../../media/check.png';
import { Link } from 'react-router-dom';
import './AppointmentConfirmation.css';
const AppointmentConfirmation = () => {
  return (
    <div className='bg-[#F6FBFD] w-full h-screen flex items-center justify-center'>
      <div className='shadow-drop-2-center border-[1px] w-full shadow-md flex flex-col rounded-2xl justify-center mx-72 py-28 items-center p-2'>
        <img className='scale-in-center' src={check} alt="check" width={100} />
        <h2 className='font-bold mt-6 text-2xl'>Appointment Confirmed!</h2>
        <p className='text-center mt-6 mx-20'>Ensure your dental appointment is confirmed with ease! Our simple confirmation process ensures your scheduled dental visit is locked in, giving you peace of mind and helping us provide the best care tailored to your needs.</p>
        <Link to='/MyAppointments'>
          <button className='mt-6 bg-[#58A863] w-max px-3 py-2 rounded-xl font-medium text-[#F1F9FC]'>View Appointments</button>
        </Link>
      </div>
    </div>
  )
}

export default AppointmentConfirmation