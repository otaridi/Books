import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../home/Card';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const bookData = useSelector((state) => state.items);
  return (
    <div>
      <div className='cardlist'>
        {bookData.map((el) => {
          if (favorites.includes(el.id)) {
            return (
              <div key={el.id}>
                <Card
                  id={el.id}
                  bookImage={el.volumeInfo.imageLinks.smallThumbnail}
                  el={el}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Favorites;
