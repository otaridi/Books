import React from 'react';
import CardDetails from '../CardDetails';
import { useSelector } from 'react-redux';

const Card = (props) => {
  return (
    <div className='card-container'>
      <img src={props.bookImage} alt='book' className='book-image' />
      <div className='card-description'>
        <h5>{props.author}</h5>
        <p>{props.title}</p>
      </div>

      <div className='card-details'>
        <CardDetails id={props.id} />
      </div>
    </div>
  );
};
export default Card;
