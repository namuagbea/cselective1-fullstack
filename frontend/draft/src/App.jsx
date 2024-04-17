import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "../src/Pages/LandingPage/LandingPage.jsx";
import MyBooking from "../src/Pages/MyBookingPage/MyBooking.jsx";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/MyBooking" element={<MyBooking />} />
        </Routes>
      </BrowserRouter>
  );
}