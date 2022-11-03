import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthPage from './pages/Auth';
import BookingsPage from './pages/Booking';
import EventsPage from './pages/Events';
import HomePage from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<AuthPage />} />
          <Route path="bookings" element={<BookingsPage />} />
          <Route path="event" element={<EventsPage />} />
          <Route path="*" element={<null />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
