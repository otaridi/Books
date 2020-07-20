import React from 'react';
import Card from './Card';
import CardDetails from '../CardDetails';

const CardList = ({ bookData }) => {
  return (
    <div className='cardlist'>
      {bookData.map((el) => {
        return (
          <div key={el.id}>
            <Card
              id={el.id}
              bookImage={el.volumeInfo.imageLinks.smallThumbnail}
              el={el}
            />
            {/* <CardDetails id={el.id} /> */}
          </div>
        );
      })}
    </div>
  );
};
export default CardList;
