import React, { Component } from 'react';
import imgHome from '../images/home.png';
import './Home.css';

class HomePage extends Component {
  render() {
    return <img src={imgHome} alt="img" className='homepage'></img>;
  }
}

export default HomePage;