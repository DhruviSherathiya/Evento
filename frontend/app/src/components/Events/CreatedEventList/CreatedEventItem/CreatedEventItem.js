import React from 'react';
import './CreatedEventItem.css';

const createdEventItem = props => (
  <>
    {props.userId === props.creatorId && (
      <li key={props.eventId} className="events__list-item">
      <div>
        <h1>{props.title}</h1>
        <h2>
          Price : Rs.{props.price} 
        </h2>
        <h2>{new Date(props.date).toLocaleDateString()}</h2>
      </div>
      <div className="bookings__item-actions">
            <button className="btn" onClick={props.onDelete.bind(this, props.eventId)}>Cancel</button>
      </div>
    </li>
    )}
  </>
  
);

export default createdEventItem;