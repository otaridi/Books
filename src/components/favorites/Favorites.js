import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../home/Card';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  console.log(favorites);
  return (
    <div>
      <div className='cardlist'>
        {favorites.map((el) => {
          return (
            <Card
              key={el.id}
              bookImage={el.volumeInfo.imageLinks.smallThumbnail}
              el={el}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Favorites;
