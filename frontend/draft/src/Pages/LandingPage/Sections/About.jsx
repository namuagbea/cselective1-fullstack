import React from 'react'
import ClinicIMG from '../Components/ClinicIMG';
import AboutCard from '../Components/AboutCard';

const About = () => {
    return (
        <div className="bg-[#224F79] h-full w-full flex flex-col" id='about'>
            <div className="pt-20 ml-20 font-bold lg:text-[40px] md:text-[30px] sm:text-[20px] flex-col ">
                <div className="">
                    <span className="text-[#F1F9FC]">Welcome to</span>
                    <span className="text-[#52CCB6]"> Smile Prime</span>
                </div>
                <div className='lg:mt-[-2vh] md:mt-[-1vh] sm:mt-[-1vh]'>
                    <span className="lg:text-[40px] md:text-[30px] sm:text-[20px] text-[#F1F9FC] font-bold">
                        Dental Clinic
                    </span>
                </div>
            </div>
            <div className="mx-20 mt-8 sm:mt-4 ">
                <ClinicIMG />
            </div>
            <div className="lg:mt-[-13vh] md:mt-[-10vh] sm:mt-[-8vh]">
                <AboutCard />
            </div>
        </div>
    );
}

export default About