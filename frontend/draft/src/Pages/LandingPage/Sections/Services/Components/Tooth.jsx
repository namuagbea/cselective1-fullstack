import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const Tooth = () => {
  return (
    <div className='bg-[#52CCB6] lg:w-[270px] md:w-[200px] lg:h-[350px] md:h-[260px] sm:w-[240px] sm:h-[320px] place-content-end rounded-[30px] shadow-xl'>
      <div className='font-bold px-4'>
        <h2 className='lg:text-[27px] md:text-[15px] sm:text-[17px] lg:leading-7 md:leading-4 sm:leading-4 '>Tooth/Molar extraction</h2>
      </div>
      <div className='flex flex-row'>
        <p className='pl-4 lg:pb-8 md:pb-8 sm:pb-7 lg:text-[18px] md:text-[12px] sm:text-[14px] lg:leading-6 md:leading-4 sm:leading-4 lg:mt-2 md:mt-2 sm:mt-1'>Removal of a tooth from its socket.</p>
        <div className=' place-content-end lg:pb-6 md:pb-6 sm:pb-6 pr-3'>
          <MdKeyboardArrowRight className='lg:h-7 md:h-6 sm:h-6'/>

        </div>
      </div>


    </div>
  )
}

export default Tooth