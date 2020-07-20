import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import Details from '../details/Details';

const Card = (props) => {
  const [fav, setFav] = useState(true);
  const [addFav, setAddFav] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.items);
  // console.log('fav', favorites);
  const addFavBtn = (e) => {
    e.persist();
    dispatch({ type: 'ADD', payload: props.el });
    setFav(!fav);
    console.log(favorites);
    // setAddFav()
  };

  return (
    <div className='card-container'>
      <img src={props.bookImage} alt='book' className='book-image' />
      {fav ? <button onClick={addFavBtn}>add</button> : <h3>added</h3>}

      <NavLink to='/details' exact={true}>
        <button>show more</button>
      </NavLink>
      {/* <CardDetails /> */}
    </div>
  );
};
export default Card;
