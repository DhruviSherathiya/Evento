import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthPage from './pages/Auth';
import BookingsPage from './pages/Booking';
import EventsPage from './pages/Events';
import ProfilePage from './pages/Profile';
import HomePage from './pages/Home';
import NotFound from './pages/NotFound';
import MainNavigation from './components/Navigation/MainNavigation';
import AuthContext from './context/auth-context';
import './App.css';


class App extends Component {
  state = {
    token: null,
    userId: null
  };

  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };

  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
          <AuthContext.Provider
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
          <MainNavigation />
          <main className="main-content">
            <Routes>
                { !this.state.token && <Route path="/" exact element={<AuthPage />}/>}
                { this.state.token && <Route path="/" exact element={<HomePage />}/>}

                {!this.state.token && (
                  <Route path="/" exact element={<AuthPage />} />
                )}
                <Route path="/events" exact element={<EventsPage />} />
                {this.state.token && (
                  <Route path="/bookings" exact element={<BookingsPage />} />
                )}
                {this.state.token && (
                  <Route path="/profile" exact element={<ProfilePage />} />
                )}
                <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          </AuthContext.Provider>
          </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;