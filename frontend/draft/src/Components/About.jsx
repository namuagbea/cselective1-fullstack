import React from 'react'
import ClinicIMG from './ClinicIMG';
import AboutCard from './AboutCard';

const About = () => {
    return (
        <div className="bg-[#224F79] h-[1050px]">
            <div className="pt-20 ml-20 font-bold text-[40px] ">
                <div className="">
                    <span className="text-[#F1F9FC]">Welcome to</span>
                    <span className="text-[#52CCB6]"> Smile Prime</span>
                </div>
                <div className='mt-[-2vh]'>
                    <span className="text-[40px] text-[#F1F9FC] font-bold">
                        Dental Clinic
                    </span>
                </div>
            </div>
            <div className="mx-20 mt-8 object-fill">
                <ClinicIMG />
            </div>
            <div className="mt-[-12vh] float-right relative">
                <AboutCard />
            </div>
        </div>
    );
}

export default About