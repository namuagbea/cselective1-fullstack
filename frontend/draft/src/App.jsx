import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "../src/Pages/LandingPage/LandingPage.jsx";
import MyBooking from "../src/Pages/MyBookingPage/MyBooking.jsx";
import Home from "./Pages/LandingPage/Sections/Home.jsx";
import MyAppointmens from "./Pages/My appointments/MyAppointmens.jsx";
import ViewMyAppointments from './Pages/My appointments/ViewMyAppointments.jsx';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/MyBooking" element={<MyBooking />} />
          <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<LandingPage />} />
        <Route path="/Services" element={<LandingPage />} />
        <Route path="/Contacts" element={<LandingPage />} />
        <Route path="/MyAppointments" element={<MyAppointmens />} />
        <Route path="/ViewAppointment" element={<ViewMyAppointments />} />




        </Routes>
      </BrowserRouter>
  );
}