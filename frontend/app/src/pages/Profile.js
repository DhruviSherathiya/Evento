import React, { Component } from 'react';
import '../pages/Profile.css';
import Modal from '../components/Modal/Modal';

class HomePage extends Component {

  state = {
    creating: false
  };

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

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
        {this.state.creating && (
          <Modal
            title="Add Event"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
          >
            <p>Modal Content</p>
          </Modal>
        )}
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