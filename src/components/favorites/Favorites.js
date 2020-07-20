import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../home/Card';
import CardDetails from '../CardDetails';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites.id);
  const bookData = useSelector((state) => state.items);
  return (
    <div>
      <div className='cardlist'>
        {bookData.map((el) => {
          if (favorites.includes(el.id)) {
            return (
              <div>
                <Card
                  key={el.id}
                  bookImage={el.volumeInfo.imageLinks.smallThumbnail}
                  el={el}
                />
                <CardDetails />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Favorites;
