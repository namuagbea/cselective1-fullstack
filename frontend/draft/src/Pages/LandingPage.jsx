import React from 'react'
import MenuBar from '../Components/MenuBar.jsx';

const LandingPage = () => {
    return (
        <>
        <div>
            <MenuBar />
            <div className="mx-20 mt-20">
                <h2 className="text-3xl font-bold"> Your
                    <span className="text-sky-500"> SMILE </span>
                    <span className="text-gray-800">is your</span>
                </h2>
                <h2 className="text-3xl font-bold">
                    <span className="text-gray-800"> most valuable asset.</span>
                </h2>
                <h3 className="text-lg mt-4">
                    Experience top-notch quality and personalized care to
                </h3>
                <h3 className="text-lg mb-4">
                    achieve a crown-worthy smile of your dreams!
                </h3>
                <button className="text-white bg-sky-900 hover:bg-white hover:text-sky-900 px-6 py-2 rounded-full text-lg font-semibold mb-5">Make Appointment</button>
                </div>
                </div>
            <div>
        </div>
        </>
    );
}

export default LandingPage