import React from 'react'
import Braces from './Components/Braces.jsx';
import Illustration from '../../../../../media/BG1_services.png';
import Anterior from './Components/Anterior.jsx';
import Closure from './Components/Closure.jsx';
import Otrhodontic from './Components/Otrhodontic.jsx';
import Prophylaxis from './Components/Prophylaxis.jsx';
import Restoration from './Components/Restoration.jsx';
import Tooth from './Components/Tooth.jsx';
import Whitening from './Components/Whitening.jsx';
const Services = () => {
  return (
    <div className=" bg-[#F1F9FC] h-full w-full" id='services' >
      <div className='flex flex-row'>

        {/* SERVICES CARDS */}

        {/* 1st row */}
        <div className='flex flex-col pl-16 py-16 gap-y-8'>
          <div className='flex h-[400px] flex-row gap-10'>
            <div>
              <Braces />
            </div>
            <div className='place-content-end'>
              <Whitening />
            </div>
          </div>

          {/* 2nd row */}

          <div className='flex h-[400px] flex-row gap-10'>
            <div>
              <Anterior />
            </div>
            <div className='place-content-end'>
              <Tooth />
            </div>
          </div>

          {/* 3rd row */}

          <div className='flex h-[400px] flex-row gap-10'>
            <div>
              <Prophylaxis />
            </div>
            <div className='place-content-end'>
              <Restoration />
            </div>
          </div>

          {/* 4th row */}

          <div className='flex h-[400px] flex-row gap-10'>
            <div>
              <Closure />
            </div>
            <div className='place-content-end'>
              <Otrhodontic />
            </div>
          </div>
        </div>

        {/* iLLUSTRATIONS */}
        <div className='flex flex-col content-start h-auto w-full justify-content-center place-content-center'>
          <div className=''>
            <img className='w-96  float-end' src={Illustration} alt="illustration" />
          </div>
          {/* Wordings */}
          <div className='text-[54px] text-center p-28'>
            <div>
              <h1 className='font-bold text-[#00B3DE]'>Our <span className='text-[#1E456A]'>Services</span></h1>
            </div>
            <div>
              <p className='text-[23px] text-left font-medium leading-7 pl-3'>From routine cleanings and preventive care to advanced procedures such as dental implants and orthodontics, we offer a comprehensive range of services to address all your dental needs under one roof. Using the latest technology and techniques, we ensure that you receive the highest standard of care with minimal discomfort and downtime.</p>
            </div>
            
          </div>
          {/* Illustration */}
          <div className=' align-bottom'>
            <img className='w-96 float-end' src={Illustration} alt="illustration" />

          </div>

        </div>
      </div>

      
    </div>)
}

export default Services