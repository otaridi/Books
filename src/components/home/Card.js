import React from 'react';
import CardDetails from '../CardDetails';

const Card = (props) => {
  return (
    <div className='card-container'>
      <img src={props.bookImage} alt='book' className='book-image' />
      <div className='card-description'>
        <h3>{props.author}</h3>
        <p>{props.title}</p>
      </div>
      <CardDetails id={props.id} />
    </div>
  );
};
export default Card;
