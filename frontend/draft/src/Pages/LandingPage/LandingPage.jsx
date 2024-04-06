import React from 'react'
import Services from './Sections/Services/Services.jsx';
import About from './Sections/About.jsx';
import Contact from './Sections/Contact.jsx';
import Home from './Sections/Home.jsx';

export default function LandingPage() {


        return (
            <div className='h-screen md:h-svh'>
                

               
       
               <div>
                    <Home />

               </div>
               <div>
                    <About />

               </div>
               <div>
                    <Services />

               </div>
               <div>
                    <Contact />

               </div>
                    
                    
                    
                    

     

            </div>
        );

    }
