import React from 'react';
import Card from '../home/Card';
import { useSelector } from 'react-redux';

const Details = (props) => {
  // book id from redux store
  const bookId = props.location.state.id;
  const bookData = useSelector((state) => state.items);
  const book = bookData.find((el) => el.id === bookId);
  return (
    <div className='detail-container'>
      {book ? <img src={book.volumeInfo.imageLinks.smallThumbnail} /> : <p></p>}
    </div>
  );
};
export default Details;
