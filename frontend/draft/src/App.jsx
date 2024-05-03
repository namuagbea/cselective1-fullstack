import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "../src/Pages/LandingPage/LandingPage.jsx";
import Home from "./Pages/LandingPage/Sections/Home.jsx";
import MakeAppointment from "./Pages/MyBookingPage/MakeAppointment.jsx";
import MyAppointments from "./Pages/My appointments/MyAppointments.jsx";
import ViewMyAppointments from './Pages/My appointments/ViewMyAppointments.jsx';
import AppointmentConfirmation from "./Pages/MyBookingPage/AppointmentConfirmation.jsx";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<LandingPage />} />
        <Route path="/Services" element={<LandingPage />} />
        <Route path="/Contacts" element={<LandingPage />} />
        <Route path="/MakeApppointment" element={<MakeAppointment />} />
        <Route path="/MyAppointments" element={<MyAppointments />} />
        <Route path="/MyAppointments/ViewAppointment" element={<ViewMyAppointments />} />
        <Route path="/AppointmentConfirmation" element={<AppointmentConfirmation />} />





        </Routes>
      </BrowserRouter>
  );
}