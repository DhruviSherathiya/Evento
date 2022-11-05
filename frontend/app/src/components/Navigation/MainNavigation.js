import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import './MainNavigation.css';

const mainNavigation = props => (
  <AuthContext.Consumer>
    {context => {
      return (
  <header className="main-navigation">
    <div className="main-navigation__logo">
      <h1><NavLink to="/">Evento</NavLink></h1>
    </div>
    <nav className="main-navigation__items">
      <ul>
        {!context.token && (
          <li>
            <NavLink to="/">Authenticate</NavLink>
          </li>
        )}
        <li> <NavLink to="/events">Events</NavLink> </li>
        {context.token && (
          <>
            <li>
              <NavLink to="/bookings">Bookings</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <button onClick={context.logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  </header>
);
}}
</AuthContext.Consumer>
);

export default mainNavigation;