import React from 'react';

import './EventItem.css';

const eventItem = props => (
  <>
    {props.userId !== props.creatorId && (
      <li key={props.eventId} className="events__list-item">
      <div>
        <h1>{props.title}</h1>
        <h2>
          Price : Rs.{props.price} 
        </h2>
        <h2>Join us on {new Date(props.date).toLocaleDateString()}</h2>
      </div>
      <div>
        {/* onclick will go to  onDetails of eventlist.js */}
        <button className="btn" onClick={props.onDetail.bind(this, props.eventId)}>
          View Details
        </button>
    </div>
    </li>
    )}
  </>
);

export default eventItem;