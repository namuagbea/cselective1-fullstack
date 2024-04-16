import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import MyBooking from './Pages/MyBookingPage/MyBooking.jsx';

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
