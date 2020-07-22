import React from 'react';
import { useSelector } from 'react-redux';
import CardDetails from '../CardDetails';

const Details = (props) => {
  // book id from redux store
  const bookId = props.location.state.id;
  const bookData = useSelector((state) => state.items);
  const book = bookData.find((el) => el.id === bookId);

  const favorite = useSelector((state) => state.favorites);
  return (
    <div className='detail-container'>
      {book ? (
        <div className='details-page-card'>
          <img src={book.volumeInfo.imageLinks.smallThumbnail} alt='book' />
          <div className='book-details'>
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors[0]}</p>
            <p>Category: {book.volumeInfo.categories[0]}</p>
            <div>
              <h3>Description</h3>
              <p>{book.volumeInfo.description}</p>
              <h4>Publisher</h4>
              <p>{book.volumeInfo.publisher}</p>
              <h5>Publish Date</h5>
              <p>{book.volumeInfo.publishedDate}</p>
            </div>
          </div>
        </div>
      ) : (
        <p></p>
      )}
      {/* {!favorite.includes(props.id) ? (
        <button onClick={addFavBtn} className='addBtn' title='add to favorites'>
          <i className='far fa-star'></i>
        </button>
      ) : (
        <button
          onClick={removeBtn}
          className='removeBtn'
          title='remove from favorites'
        >
          <i className='far fa-trash-alt'></i>
        </button>
      )} */}
    </div>
  );
};
export default Details;
