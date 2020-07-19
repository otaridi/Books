import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Card = (props) => {
  const [fav, setFav] = useState(true);
  const dispatch = useDispatch();
  // const favorites = useSelector((state) => state.favorites);
  // console.log(favorites);
  const cklickFavBtn = (e) => {
    e.persist();
    dispatch({ type: 'ADD', payload: props.el });
    setFav(!fav);
  };
  return (
    <div className='card-container'>
      <img src={props.bookImage} alt='book' className='book-image' />
      {fav ? <button onClick={cklickFavBtn}>add</button> : <h1>???</h1>}
    </div>
  );
};
export default Card;
