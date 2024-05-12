import React from 'react'
import Illustration from '../../../../media/BG1_services.png';
import { MdKeyboardArrowRight } from "react-icons/md";
const Services = () => {
  return (
    <div className="bg-[#F1F9FC] h-full w-full sm:h-full" id='services' >
      <div className='lg:flex-row flex md:flex-row  '>

        {/* SERVICES CARDS */}

        {/* 1st row */}
        <div className='flex lg:flex-col md:flex-col sm:flex-col lg:pl-16 md:pl-12 sm:pl-7 lg:py-16 md:py-10 sm:py-6 lg:gap-y-8 md:gap-y-5 sm:gap-y-12 sm:mb-12'>
          <div className='flex md:flex-row sm:flex-col lg:h-[400px] md:h-[300px] sm:h-[650px] lg:flex-row lg:gap-10 md:gap-6 sm:gap-8'>
            {/* Braces */}
            <a href='https://askthedentist.com/ceramic-braces/'>
              <div className='hover:bg-[#34d4f0] hover:-translate-y-1 hover:scale-105 duration-300 bg-[#52B9CC] lg:w-[270px] md:w-[200px] lg:h-[350px] md:h-[260px] sm:w-[240px] sm:h-[320px] opacity-[70%] hover:opacity-100 place-content-end rounded-[30px] shadow-xl'>
                <div className='font-bold px-4'>
                  <h2 className='lg:text-[27px] md:text-[15px] sm:text-[17px] lg:leading-7 md:leading-4 sm:leading-4 '>Metal & Ceramic Braces</h2>
                </div>
                <div className='flex flex-row'>
                  <p className='pl-4 lg:pb-8 md:pb-8 sm:pb-7 lg:text-[18px] md:text-[12px] sm:text-[14px] lg:leading-6 md:leading-4 sm:leading-4 lg:mt-2 md:mt-2 sm:mt-1'>Straighten and align teeth, correct bite issues, and improve overall dental health.</p>
                  <div className=' place-content-end lg:pb-6 md:pb-6 sm:pb-6 pr-3'>
                    <MdKeyboardArrowRight className='lg:h-7 md:h-6 sm:h-6' />
                  </div>
                </div>
              </div>
            </a>
            {/* Whitening */}
            <a href='https://www.dentaly.org/us/teeth-whitening/' className='place-content-end'>
              <div className='hover:bg-[#66a6ff] hover:-translate-y-1 hover:scale-105 duration-300 bg-[#4E97FD] lg:w-[270px] md:w-[200px] lg:h-[350px] md:h-[260px] sm:w-[240px] sm:h-[320px] opacity-[70%] hover:opacity-100 place-content-end rounded-[30px] shadow-xl'>
                <div className='font-bold px-4'>
                  <h2 className='lg:text-[27px] md:text-[15px] sm:text-[17px] lg:leading-7 md:leading-4 sm:leading-4 '>Teeth Whitening</h2>
                </div>
                <div className='flex flex-row'>
                  <p className='pl-4 lg:pb-8 md:pb-8 sm:pb-7 lg:text-[18px] md:text-[12px] sm:text-[14px] lg:leading-6 md:leading-4 sm:leading-4 lg:mt-2 md:mt-2 sm:mt-1'>Lightening the color of your teeth and removing stains and discoloration.</p>
                  <div className=' place-content-end lg:pb-6 md:pb-6 sm:pb-6 pr-3'>
                    <MdKeyboardArrowRight className='lg:h-7 md:h-6 sm:h-6' />
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* 2nd row */}

          <div className='flex md:flex-row sm:flex-col lg:h-[400px] md:h-[300px] sm:h-[650px] lg:flex-row lg:gap-10 md:gap-6 sm:gap-8'>
            {/* Anterior */}
            <a href='https://www.verywellhealth.com/dental-bridge-4777662'>
              <div className='hover:bg-[#7277fc] hover:-translate-y-1 hover:scale-105 duration-300 bg-[#8D91FF] lg:h-[350px] lg:w-[270px] md:w-[200px] md:h-[260px] sm:w-[240px] sm:h-[320px] opacity-[70%] hover:opacity-100 place-content-end rounded-[30px] shadow-xl'>
                <div className='font-bold px-4'>
                  <h2 className='lg:text-[27px] md:text-[15px] sm:text-[17px] lg:leading-7 md:leading-4 sm:leading-4 '>Anterior Fixed Bridge & Veneers</h2>
                </div>
                <div className='flex flex-row'>
                  <p className='pl-4 lg:pb-8 md:pb-8 sm:pb-7 lg:text-[18px] md:text-[12px] sm:text-[14px] lg:leading-6 md:leading-4 sm:leading-4 lg:mt-2 md:mt-2 sm:mt-1'>Replace missing teeth by bridging the gap between two healthy teeth.</p>
                  <div className=' place-content-end lg:pb-6 md:pb-6 sm:pb-6 pr-3'>
                    <MdKeyboardArrowRight className='lg:h-7 md:h-6 sm:h-6' />
                  </div>
                </div>
              </div>
              {/* Extraction */}
            </a>
            <a href='https://askthedentist.com/tooth-extraction/' className='place-content-end'>
              <div className='hover:bg-[#33e5c4] hover:-translate-y-1 hover:scale-105 duration-300 bg-[#52CCB6] lg:w-[270px] md:w-[200px] lg:h-[350px] md:h-[260px] sm:w-[240px] sm:h-[320px] opacity-[70%] hover:opacity-100 place-content-end rounded-[30px] shadow-xl'>
                <div className='font-bold px-4'>
                  <h2 className='lg:text-[27px] md:text-[15px] sm:text-[17px] lg:leading-7 md:leading-4 sm:leading-4 '>Tooth/Molar extraction</h2>
                </div>
                <div className='flex flex-row'>
                  <p className='pl-4 lg:pb-8 md:pb-8 sm:pb-7 lg:text-[18px] md:text-[12px] sm:text-[14px] lg:leading-6 md:leading-4 sm:leading-4 lg:mt-2 md:mt-2 sm:mt-1'>Removal of a tooth from its socket.</p>
                  <div className=' place-content-end lg:pb-6 md:pb-6 sm:pb-6 pr-3'>
                    <MdKeyboardArrowRight className='lg:h-7 md:h-6 sm:h-6' />
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* 3rd row */}

          <div className='flex md:flex-row sm:flex-col lg:h-[400px] md:h-[300px] sm:h-[650px] lg:flex-row lg:gap-10 md:gap-6 sm:gap-8'>
            {/* Prophylaxis */}
            <a href='https://www.newmouth.com/oral-health/prophylaxis/'>
              <div className='hover:bg-[#3fc7df] hover:-translate-y-1 hover:scale-105 duration-300 bg-[#52B9CC] lg:w-[270px] md:w-[200px] lg:h-[350px] md:h-[260px] sm:w-[240px] sm:h-[320px] opacity-[70%] hover:opacity-100 place-content-end rounded-[30px] shadow-xl'>
                <div className='font-bold px-4'>
                  <h2 className='lg:text-[27px] md:text-[15px] sm:text-[17px] lg:leading-7 md:leading-4 sm:leading-4 '>Oral Prophylaxis</h2>
                </div>
                <div className='flex flex-row'>
                  <p className='pl-4 lg:pb-8 md:pb-8 sm:pb-7 lg:text-[18px] md:text-[12px] sm:text-[14px] lg:leading-6 md:leading-4 sm:leading-4 lg:mt-2 md:mt-2 sm:mt-1'>Removing of plaque, tartar, and stains from the teeth and gums.</p>
                  <div className=' place-content-end lg:pb-6 md:pb-6  sm:pb-4 pr-3'>
                    <MdKeyboardArrowRight className='lg:h-7 md:h-6 sm:h-6' />
                  </div>
                </div>
              </div>
            </a>

            {/* Restoration */}
            <a href='https://www.healthline.com/health/dental-and-oral-health/tooth-restoration' className='place-content-end'>
              <div className='hover:bg-[#73adff] hover:-translate-y-1 hover:scale-105 duration-300 bg-[#4E97FD] lg:w-[270px] md:w-[200px] lg:h-[350px] md:h-[260px] sm:w-[240px] sm:h-[320px] opacity-[70%] hover:opacity-100 place-content-end rounded-[30px] shadow-xl'>
                <div className='font-bold px-4'>
                  <h2 className='lg:text-[27px] md:text-[15px] sm:text-[17px] lg:leading-7 md:leading-4 sm:leading-4 '>Tooth Restoration</h2>
                </div>
                <div className='flex flex-row'>
                  <p className='pl-4 lg:pb-8 md:pb-8 sm:pb-7 lg:text-[18px] md:text-[12px] sm:text-[14px] lg:leading-6 md:leading-4 sm:leading-4 lg:mt-2 md:mt-2 sm:mt-1'>Repairing of damaged or decayed teeth to restore their function, strength, and appearance.</p>
                  <div className=' place-content-end lg:pb-6 md:pb-6  sm:pb-4 pr-3'>
                    <MdKeyboardArrowRight className='lg:h-7 md:h-6 sm:h-6' />

                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* 4th row */}

          <div className='flex md:flex-row sm:flex-col lg:h-[400px] md:h-[300px] sm:h-[650px] lg:flex-row lg:gap-10 md:gap-6 sm:gap-8'>
            {/* Closure */}
            <a href='https://www.dentaly.org/us/malocclusion-crooked-teeth/diastema-gaps-teeth/'>
              <div className='hover:bg-[#a4a7fe] hover:-translate-y-1 hover:scale-105 duration-300 bg-[#8D91FF] lg:w-[270px] md:w-[200px] lg:h-[350px] md:h-[260px] sm:w-[240px] sm:h-[320px] opacity-[70%] hover:opacity-100 place-content-end rounded-[30px] shadow-xl'>
                <div className='font-bold px-4'>
                  <h2 className='lg:text-[27px] md:text-[15px] sm:text-[17px] lg:leading-7 md:leading-4 sm:leading-4 '>Diastema Closure</h2>
                </div>
                <div className='flex flex-row'>
                  <p className='pl-4 lg:pb-8 md:pb-8 sm:pb-7 lg:text-[18px] md:text-[12px] sm:text-[14px] lg:leading-6 md:leading-4 sm:leading-4 lg:mt-2 md:mt-2 sm:mt-1'>Closing of gaps or spaces between teeth, particularly in the front teeth (incisors).</p>
                  <div className=' place-content-end lg:pb-6 md:pb-6 sm:pb-6 pr-3'>
                    <MdKeyboardArrowRight className='lg:h-7 md:h-6 sm:h-6' />
                  </div>
                </div>
              </div>
            </a>

            {/* Otrhodontic */}
            <a href='https://hellodoctor.com.ph/oral-health/cosmetic-dentistry/orthodontic-braces/' className='place-content-end'>
              <div className='hover:bg-[#33e5c4] hover:-translate-y-1 hover:scale-105 duration-300 bg-[#52CCB6] lg:w-[270px] md:w-[200px] lg:h-[350px] md:h-[260px] sm:w-[240px] sm:h-[320px] opacity-[70%] hover:opacity-100 place-content-end rounded-[30px] shadow-xl'>
                <div className='font-bold px-4'>
                  <h2 className='lg:text-[27px] md:text-[15px] sm:text-[17px] lg:leading-7 md:leading-4 sm:leading-4 '>Otrhodontic Treatment</h2>
                </div>
                <div className='flex flex-row'>
                  <p className='pl-4 lg:pb-8 md:pb-8 sm:pb-7 lg:text-[18px] md:text-[12px] sm:text-[14px] lg:leading-6 md:leading-4 sm:leading-4 lg:mt-2 md:mt-2 sm:mt-1'>Diagnosis, prevention, and correction of misaligned teeth and jaws.</p>
                  <div className='  place-content-end lg:pb-6 md:pb-6 sm:pb-6 pr-3'>
                    <MdKeyboardArrowRight className='lg:h-7 md:h-6 sm:h-6' />

                  </div>
                </div>
              </div>
            </a>
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