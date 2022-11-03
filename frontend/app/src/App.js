import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthPage from './pages/Auth';
import BookingsPage from './pages/Booking';
import EventsPage from './pages/Events';
import NotFound from './pages/NotFound';
import MainNavigation from './components/Navigation/MainNavigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <MainNavigation />
          <main className="main-content">
            <Routes>
              
                <Route path="auth" element={<AuthPage />} />
                <Route path="bookings" element={<BookingsPage />} />
                <Route path="events" element={<EventsPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
      </BrowserRouter>
    );
  }
}

export default App;