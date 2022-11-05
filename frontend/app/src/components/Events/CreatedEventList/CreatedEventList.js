import React from 'react';
import CreatedEventItem from './CreatedEventItem/CreatedEventItem';
import './CreatedEventList.css';

const createdEventList = props => {
  const events = props.events.map(event => {
    return (
      <CreatedEventItem
        key={event._id}
        eventId={event._id}
        title={event.title}
        price={event.price}
        date={event.date}
        userId={props.authUserId}
        creatorId={event.creator._id}
        // below will coming from eventitem and go to events.js
        onDetail={props.onViewDetail}
      />
    );
  });

  return <ul className="event__list">{events}</ul>;
};

export default createdEventList;