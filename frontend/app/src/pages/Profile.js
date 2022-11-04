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
        <div className="events-control">
          <p>Share your own Events!</p>
          <button className="btn">
            Create Event
          </button>
        </div>
        </div>
    </div>
    )
  }
}

export default HomePage;