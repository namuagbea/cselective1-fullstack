import React from 'react'

const AboutCard = () => {
    return (
     <div>
      <div className="flex w-[763px] md:flex-row bg-[#03ADE0] flex-wrap text-gray-200">
       <div className=" md:w-1/4 p-4 text-right text-[4vh] mt-7 font-bold">
        <span>About us</span>
       </div>
       <div className=" md:w-3/4 p-4 text-left">
        <p>
         At Smile Prime Dental Clinic, we believe in creating more than just
         beautiful smiles; we strive to foster lasting relationships built on
         trust, compassion, and exceptional dental care. Our state-of-the-art
         facility, conveniently located in the heart of the community, is
         designed to provide a welcoming and comfortable environment for
         patients of all ages.
        </p>
       </div>
      </div>
     </div>
    );
}

export default AboutCard