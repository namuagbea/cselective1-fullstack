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
                        {isLoginOpen && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center">
                                <div className="absolute inset-0 bg-white opacity-50"></div>
                                <div className="bg-white z-50 p-4 rounded shadow-lg">
                                    <Login onClose={handleCloseLogin} />
                                </div>
                            </div>
                        ) }
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