import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import EventDetails from './components/EventDetails/EventDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/event-details" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;




