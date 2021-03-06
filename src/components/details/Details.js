import React from 'react';
import { useSelector } from 'react-redux';

const Details = (props) => {
  // book id from redux store
  const bookId = props.location.state.id;
  const bookData = useSelector((state) => state.items);
  //   find  book from booklist with Navlink props,   navlink from cardDetails component
  const book = bookData.find((el) => el.id === bookId);

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
    </div>
  );
};
export default Details;
