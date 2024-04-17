import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "../src/Pages/LandingPage/LandingPage.jsx";
import MyBooking from "../src/Pages/MyBookingPage/MyBooking.jsx";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/MyBooking" element={<MyBooking />} />
        </Switch>
      </Router>
    </div>
  );
}
