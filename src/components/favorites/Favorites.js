import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../home/Card';
import CardDetails from '../CardDetails';

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
                {/* <CardDetails id={el.id} /> */}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Favorites;
