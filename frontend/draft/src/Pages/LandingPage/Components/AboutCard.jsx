import React from 'react'

const AboutCard = () => {
    return ( 

            <div className="flex  bg-[#03ADE0] mb-24 sm:mb-16 justify-content-end float-end flex-row lg:mr-16 md:mr-12 sm:mr-10 text-[#FDFEFF] bg-opacity-80">
                <div className="lg:min-w-44 pr-2 place-content-center text-right lg:text-[4vh] md:text-[3vh] md:min-w-28 sm:text-[2vh] sm:min-w-20 font-bold">
                    <span>About us</span>
                </div>
                <div className="py-5 pl-3 pr-1 text-left lg:text-[2.1vh] lg:w-[35vw] md:text-[12px] md:w-80 sm:text-[8px] sm:w-72 font-medium">
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

    );
}

export default AboutCard