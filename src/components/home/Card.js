import React from 'react';
import CardDetails from '../CardDetails';

const Card = (props) => {
  return (
    <div className='card-container'>
      <img src={props.bookImage} alt='book' className='book-image' />
      <div className='card-details'>
        <CardDetails id={props.id} />
      </div>
    </div>
  );
};
export default Card;
