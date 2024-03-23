import React from 'react'
import ClinicIMG from './ClinicIMG';
import AboutCard from './AboutCard';

const About = () => {
    return (
        <div className="bg-[#224F79] h-[1050px]">
            <div className="pt-20 ml-20 font-bold text-[40px]">
                <span className="text-[#F1F9FC]">Welcome to</span>
                <span className="text-[#52CCB6]"> Smile Prime</span>
                <h2 className="text-[40px] text-[#F1F9FC] font-bold">Dental Clinic</h2>
            </div>
            <div className='mx-20 mt-5 pb-8'>
                <ClinicIMG />

            </div>
            <div className=' right-0'>
                <AboutCard/>
                
            </div>
        </div>
    );
}

export default About