import React from 'react'
import Services from '../Components/Services.jsx';
import About from '../Components/About.jsx';
import Contact from '../Components/Contact.jsx';
import Home from '../Components/Home.jsx';

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
