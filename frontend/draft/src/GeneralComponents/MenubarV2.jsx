import React from "react";
import { Link } from "react-scroll";
import DentalLogo from "../Pages/LandingPage/Components/DentalLogo";

const MenuBar = () => {
    const content = (
        <>
            <div>
                <ul>
                    <Link to="Home">
                        <li>Home</li>
                    </Link>
                    <Link to="About">
                        <li>About</li>
                    </Link>
                    <Link to="Services">
                        <li>Services</li>
                    </Link>
                    <Link to=" Contact">
                        <li>Contacts</li>
                    </Link>
                </ul>
            </div>
        </>
    );
    return (
     <nav>
      <div className="h-10vh z-20 flex justify-between px-6 py-5">
       <div className="flex after:items-center flex-1 m-3">
        <DentalLogo />
        <span className="text-3xl font-bold ml-3 mt-5">Smile Prime</span>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end">
         <div className="flex-10 ">
          <ul className="text-lg font-normal flex gap-8 text-[18px]">
           <Link to="/Home">
            <li>Home</li>
           </Link>
           <Link to="About">
            <li>About</li>
           </Link>
           <Link to="Services">
            <li>Services</li>
           </Link>
           <Link to=" Contact">
            <li>Contacts</li>
           </Link>
          </ul>
         </div>
         <Link>
          <button className="bg-[#1E456A] text-[#F1F9FC] px-9 py-2 ml-8 text-[18px] rounded-2xl">
           Login
          </button>
         </Link>
        </div>
       </div>
      </div>
     </nav>
    );
};

export default MenuBar;
