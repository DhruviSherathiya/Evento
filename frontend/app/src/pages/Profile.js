import React, { Component } from 'react';
import '../pages/Profile.css';

class HomePage extends Component {
  render() {
    return (
    <div className='main-div'>
        <div className='div1' >
            <div className='profile'>
                <h3>dhruvi@test.com</h3>
            </div>
            <div className='calender'>

            </div>
        </div>
        <div className='div2'>
            <h3>Create Event</h3>
        </div>
    </div>
    )
  }
}

export default HomePage;