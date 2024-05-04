import React, { useState, useEffect } from "react";
import Services from "./Sections/Services.jsx";
import About from "./Sections/About.jsx";
import Contacts from "./Sections/Contacts.jsx";
import Home from "./Sections/Home.jsx";
import { Hourglass } from 'react-loader-spinner'

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = sessionStorage.getItem("authToken");
        if (token) {
          const response = await fetch("http://127.0.0.1:8000/test_token", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          });
          if (response.ok) {
            setIsLoggedIn(true);
            const response = await fetch("http://127.0.0.1:8000/user/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${sessionStorage.getItem("authToken")}`,
              },
            });
            const data = await response.json();
            setUsername(data);
            console.log(data + " this is the username");
          } else {
            setIsLoggedIn(false);
          }
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking token:", error);
        setIsLoggedIn(false);
      } finally {
        setLoading(false); // Set loading to false regardless of the outcome
      }
    };

    checkToken();
  }, []);

  if (loading) {
    // Render a loading indicator while fetching the token
    return <div className="flex justify-center items-center h-screen"><Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={['#306cce', '#72a1ed']}
    /></div>;
  }

  return (
    <div className="">
      <Home isLoggedIn={isLoggedIn} username={username} />

      <About />

      <Services />
      <Contacts />
    </div>
  );
}
