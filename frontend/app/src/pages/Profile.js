import React, { Component } from 'react';
import CreatedEventList from '../components/Events/CreatedEventList/CreatedEventList';
import Spinner from '../components/Spinner/Spinner';
import AuthContext from '../context/auth-context';
import './Events.css';

class EventsPage extends Component {
  state = {
    events: [],
    isLoading: false,
    selectedEvent: null
  };
  
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.descriptionElRef = React.createRef();
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents() {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            events {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `
    };

    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => {
        const events = resData.data.events;
        this.setState({ events: events, isLoading: false });
        // if (this.isActive) {
          
        // }
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
        // if (this.isActive) {
          
        // }
      });
  }

  showDetailHandler = eventId => {
    this.setState(prevState => {
      const selectedEvent = prevState.events.find(e => e._id === eventId);
      return { selectedEvent: selectedEvent };
    });
  };

  componentWillUnmount() {
    this.isActive = false;
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <CreatedEventList
            events={this.state.events}
            authUserId={this.context.userId}
            onViewDetail={this.showDetailHandler}
          />
        )} 
      </React.Fragment>
    );
  }
}

export default EventsPage;