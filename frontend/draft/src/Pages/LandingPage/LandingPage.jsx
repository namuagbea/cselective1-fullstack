import React, { useState, useEffect } from "react";
import Services from "./Sections/Services.jsx";
import About from "./Sections/About.jsx";
import Contacts from "./Sections/Contacts.jsx";
import Home from "./Sections/Home.jsx";
import { Hourglass } from 'react-loader-spinner';

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
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            setIsLoggedIn(true);
            const userResponse = await fetch("http://127.0.0.1:8000/user/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            });
            const userData = await userResponse.json();
            setUsername(userData);
          } else if (response.status === 401) {
            console.log("Token expired, trying to refresh it...");
            setLoading(true);
            const refreshToken = sessionStorage.getItem("refreshToken");
            if (refreshToken) {
              const refreshResponse = await fetch("http://127.0.0.1:8000/refresh_token/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ refresh_token: refreshToken }),
              });
              console.log("Token fetched: " + refreshResponse);
              if (refreshResponse.ok) {
                const newTokenData = await refreshResponse.json();
                sessionStorage.setItem("authToken", newTokenData.access_token);
                console.log("Token refreshed " + newTokenData);
                setLoading(false);
                checkToken();
              } else {
                console.log("Token refresh failed");
                setIsLoggedIn(false);
              }
            } else {
              setIsLoggedIn(false);
            }
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
        setLoading(false); 
      }
    };
  
    checkToken();
  }, []);

  if (loading) {
    // Render a loading indicator while fetching the token
    return (
      <div className="flex justify-center items-center h-screen">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
        />
      </div>
    );
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
