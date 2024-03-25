import React from 'react'
import MenuBar from '../Components/MenuBar.jsx';
import Services from '../Components/Services.jsx';
import About from '../Components/About.jsx';
import Contact from '../Components/Contact.jsx';
import Home from '../Components/Home.jsx';

const LandingPage = () => {
    return (
     <>
      <div className="bg-[#F1F9FC]">
       <div className="h-[108vh] ">
        <MenuBar />
        <Home />
       </div>
       <div></div>

       <div className="">
        <About />
       </div>

       <div>
        <Services />
       </div>

       <div>
        <Contact />
       </div>
      </div>
     </>
    );
}

export default LandingPage