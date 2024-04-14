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
    <div className="bg-[#F1F9FC] h-full w-full sm:h-full" id='services' >
      <div className='lg:flex-row flex md:flex-row  '>

        {/* SERVICES CARDS */}

        {/* 1st row */}
        <div className='flex lg:flex-col md:flex-col sm:flex-col lg:pl-16 md:pl-12 sm:pl-7 lg:py-16 md:py-10 sm:py-6 lg:gap-y-8 md:gap-y-5 sm:gap-y-2'>
          <div className='flex md:flex-row sm:flex-col lg:h-[400px] md:h-[300px] sm:h-[650px] lg:flex-row lg:gap-10 md:gap-6 sm:gap-3'>
            <div>
              <Braces />
            </div>
            <div className='place-content-end'>
              <Whitening />
            </div>
          </div>

          {/* 2nd row */}

          <div className='flex md:flex-row sm:flex-col lg:h-[400px] md:h-[300px] sm:h-[650px] lg:flex-row lg:gap-10 md:gap-6 sm:gap-3'>
            <div>
              <Anterior />
            </div>
            <div className='place-content-end'>
              <Tooth />
            </div>
          </div>

          {/* 3rd row */}

          <div className='flex md:flex-row sm:flex-col lg:h-[400px] md:h-[300px] sm:h-[650px] lg:flex-row lg:gap-10 md:gap-6 sm:gap-3'>
            <div>
              <Prophylaxis />
            </div>
            <div className='place-content-end'>
              <Restoration />
            </div>
          </div>

          {/* 4th row */}

          <div className='flex md:flex-row  sm:flex-col lg:h-[400px] md:h-[300px] sm:h-[650px] lg:flex-row lg:gap-10 md:gap-6 sm:gap-2'>
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
            <img className='lg:w-96 md:w-60 sm:w-full pl-24 float-end' src={Illustration} alt="illustration" />
          </div>
          {/* Wordings */}
          <div className=' text-center lg:p-28  sm:py-20 sm:pl-[80px] sm:pr-[20px]'>
            <div>
              <h1 className='lg:text-[54px] md:text-[54px] sm:text-[49px] md:leading-[60px] font-bold text-[#00B3DE]'>Our <span className='text-[#1E456A]'>Services</span></h1>
            </div>
            <div>
              <p className='lg:text-[23px] sm:text-[20px] text-left font-medium lg:leading-7 sm:leading-6 lg:pl-3 md:mt-3'>From routine cleanings and preventive care to advanced procedures such as dental implants and orthodontics, we offer a comprehensive range of services to address all your dental needs under one roof. Using the latest technology and techniques, we ensure that you receive the highest standard of care with minimal discomfort and downtime.</p>
            </div>
            
          </div>
          {/* Illustration */}
          <div className='align-bottom'>
            <img className='lg:w-96 md:w-60 sm:w-full pl-24   float-end' src={Illustration} alt="illustration" />

          </div>

        </div>
      </div>

      
    </div>)
}

export default Services