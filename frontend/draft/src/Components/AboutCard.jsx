import React from 'react'

const AboutCard = () => {
    return (
        <div>
            <div className="flex w-[90vh] md:flex-row bg-[#03ADE0] flex-auto float-right mr-16 text-[#FDFEFF] bg-opacity-80">
                <div className="min-w-44 p-4 text-right text-[4vh] mt-12 font-bold">
                    <span>About us</span>
                </div>
                <div className="min-w-48 py-5 pl-3 pr-1 text-left text-[2.1vh] font-medium">
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