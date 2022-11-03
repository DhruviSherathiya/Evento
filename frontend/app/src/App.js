import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from './pages/Auth';
import BookingsPage from './pages/Booking';
import EventsPage from './pages/Events';
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
                {/* <Route path="/" element={<AuthPage />} /> */}
                {/* {!this.state.token && <Route path="/" element={<Navigate replace to="/auth" />} />}
                {this.state.token && <Route path="/" element={<Navigate replace to="/events" />} />}
                {this.state.token && <Route path="/auth" element={<Navigate replace to="/events" />} />} */}

                {/* {!this.state.token && <Navigate from="/" to="/auth" exact />}
                {this.state.token && <Navigate from="/" to="/events" exact />}
                {this.state.token && <Navigate from="/auth" to="/events" exact />} */}
                 
                { !this.state.token && <Route path="/" exact element={<AuthPage />}/>}
                { this.state.token && <Route path="/" exact element={<EventsPage />}/>}
  
                {/* <Route path="/" element={!this.state.token ? <Navigate to="/auth" /> : AuthPage} />
                <Route path="/" element={this.state.token ? <Navigate to="/events" /> : AuthPage} />
                <Route path="/auth" element={this.state.token ? <Navigate to="/events" /> : AuthPage} /> */}

                {!this.state.token && (
                  <Route path="/auth" element={AuthPage} />
                )}
                <Route path="/events" component={EventsPage} />
                {this.state.token && (
                  <Route path="/bookings" component={BookingsPage} />
                )}
                {/* <Route path="auth" element={<AuthPage />} />
                <Route path="bookings" element={<BookingsPage />} />
                <Route path="events" element={<EventsPage />} /> */}
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