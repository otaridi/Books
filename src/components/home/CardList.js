import React from 'react';
import Card from './Card';

const CardList = ({ bookData }) => {
  return (
    <div className='cardlist'>
      {bookData.map((el) => {
        return (
          <Card
            key={el.id}
            bookImage={el.volumeInfo.imageLinks.smallThumbnail}
            el={el}
          />
        );
      })}
    </div>
  );
};
export default CardList;
