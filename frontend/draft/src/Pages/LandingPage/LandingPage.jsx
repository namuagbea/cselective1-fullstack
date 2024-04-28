import React, { useState, useEffect } from "react";
import Services from "./Sections/Services.jsx";
import About from "./Sections/About.jsx";
import Contacts from "./Sections/Contacts.jsx";
import Home from "./Sections/Home.jsx";

export default function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

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
            console.log("user is logged in");
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
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <Home isLoggedIn={isLoggedIn}/>

      <About />

      <Services />
      <Contacts />
    </div>
  );
}
