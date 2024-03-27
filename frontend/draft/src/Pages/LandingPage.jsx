import React from 'react'
import MenuBar from '../Components/MenuBar.jsx';
import Services from '../Components/Services.jsx';
import About from '../Components/About.jsx';
import Contact from '../Components/Contact.jsx';
import Home from '../Components/Home.jsx';
import Login from '../Components/Login.jsx';
import { useState  } from 'react';

export default function LandingPage() {
        const [isLoginOpen, setIsLoginOpen] = useState(false);
    
        const handleOpenLogin = () => {
        setIsLoginOpen(true);
        };
    
        const handleCloseLogin = () => {
        setIsLoginOpen(false);
        };

        return (
            <>
            <div className="bg-[#F1F9FC]">
            <div className="h-[108vh] ">
                <MenuBar onLoginClick={handleOpenLogin}/>
                {isLoginOpen && <Login onClose={handleCloseLogin} />}
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
//     const LandingPage = () => {
        
// }