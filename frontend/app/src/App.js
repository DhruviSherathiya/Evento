import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthPage from './pages/Auth';
import BookingsPage from './pages/Booking';
import EventsPage from './pages/Events';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import MainNavigation from './components/Navigation/MainNavigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MainNavigation />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<HomePage />}>
        <Route path="auth" element={<AuthPage />} />
        <Route path="bookings" element={<BookingsPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      </main>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
