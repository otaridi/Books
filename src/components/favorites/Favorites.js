import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../home/Card';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const bookData = useSelector((state) => state.items);

  //   filter from booklist with favorite books id
  const book = bookData.filter((el) => favorites.includes(el.id));

  return (
    <div>
      <div className='cardlist'>
        {book.length !== 0 ? (
          book.map((el) => {
            return (
              <div key={el.id}>
                <Card
                  id={el.id}
                  bookImage={el.volumeInfo.imageLinks.smallThumbnail}
                  el={el}
                  author={el.volumeInfo.authors[0]}
                  title={el.volumeInfo.title}
                />
              </div>
            );
          })
        ) : (
          <h4>Your favorites list is empty</h4>
        )}
      </div>
    </div>
  );
};
export default Favorites;
