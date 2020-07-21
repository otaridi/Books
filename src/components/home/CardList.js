import React from 'react';
import Card from './Card';

const CardList = ({ bookData }) => {
  console.log(bookData);
  return (
    <div className='cardlist'>
      {bookData.map((el) => {
        return (
          <div key={el.id}>
            <Card
              id={el.id}
              bookImage={el.volumeInfo.imageLinks.smallThumbnail}
              author={el.volumeInfo.authors[0]}
              title={el.volumeInfo.title}
            />
            {/* <CardDetails id={el.id} /> */}
          </div>
        );
      })}
    </div>
  );
};
export default CardList;
