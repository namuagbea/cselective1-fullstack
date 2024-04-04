import React from 'react'
import Services from './Sections/Services.jsx';
import About from './Sections/About.jsx';
import Contact from './Sections/Contact.jsx';
import Home from './Sections/Home.jsx';

export default function LandingPage() {


        return (
            <div className='min-w-full'>
               
       
               
                    <Home />
                    <About />
                    <Services />
                    <Contact />

     

            </div>
        );

    }
