import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import MyBooking from './Pages/MyBooking/MyBooking.jsx';



export default function App() {
  return (
    <div>
      <Router>
          <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/MyBooking" component={MyBooking} />
          </Switch>
      </Router>
    </div>
  );
}
