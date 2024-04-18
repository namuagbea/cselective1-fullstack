import React from 'react'
import Footer from '../../../GeneralComponents/Footer.jsx';

const Contacts = () => {
  return (
    <div className="h-full w-full bg-[#224F79] text-[#F1F9FC] flex flex-col lg:place-items-center lg:justify-center" id='contact' >
      
      {/* container */}
      <div className='flex flex-row lg:w-[85vw] lg:h-[450px] md:h-[400px] sm:h-[350px] lg:my-44 md:my-[90px] sm:my-20'>


        <div className='text-right lg:pl-6 md:pl-6 sm:pl-3 pr-6 lg:text-[45px] md:text-[30px] sm:text-[20px] place-content-center'>
          <h1>Get in touch with us</h1>
        </div>

        {/* contact list */}

        <div className='flex flex-col border-l-2 lg:text-[20px] md:text-[15px] sm:text-[12px] justify-center lg:px-24 md:px-16 sm:px-10 border-[#F1F9FC] rounded-xl lg:gap-y-10 md:gap-y-8 sm:gap-y-6'>
          <div className='flex flex-row'>
            <div className='lg:w-80 md:w-60 sm:w-40'>
              <h4 className='text-[#F1E6D3]'>Email: </h4>
              <h5>contactme@dentist.com </h5>
            </div>

            <div className='lg:w-80 md:w-60 sm:w-60'>
              <h4 className='text-[#F1E6D3]'>Operational Hours</h4>
              <h5>Sundays: Closed</h5>
              <span>Monday to Saturday: 8:00 A.M. - 5:00 P.M.</span>
            </div>
          </div>

          <div className='flex flex-row w-full'>
            <div className='lg:w-80 md:w-60 sm:w-40'>
              <h4 className='text-[#F1E6D3]'>Clinic Number: </h4>
              <h5>0919 827 7799</h5>
            </div>

            <div className='lg:w-80 md:w-60 sm:w-60'>
              <h4 className='text-[#F1E6D3]'>Address</h4>
              <h5>Door 3, D&E Prime Building, Robredo Avenue , 3rd Blk., Purok Yellowbell, Brgy. Sta. Cruz, a Proper, Philippines.</h5>
            </div>
          </div>
  
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contacts