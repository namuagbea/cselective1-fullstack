import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const Otrhodontic = () => {
  return (
    <div className='bg-[#52B9CC] w-[270px] h-[350px] opacity-[70%] place-content-end rounded-[30px] shadow-xl'>
      <div className='font-bold px-4'>
        <h2 className='text-[27px] leading-7'>Otrhodontic Treatment</h2>
      </div>
      <div className='flex flex-row'>
        <p className='pl-4 pb-8 leading-5 mt-2'>Diagnosis, prevention, and correction of misaligned teeth and jaws.</p>
        <div className=' place-content-end pb-6 pr-3'>
          <MdKeyboardArrowRight className='h-7'/>

        </div>
      </div>


    </div>
  )
}

export default Otrhodontic