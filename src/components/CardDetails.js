import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const CardDetails = (props) => {
  // hook for favorite button
  const [fav, setFav] = useState(true);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const addFavBtn = (e) => {
    e.preventDefault();

    dispatch({ type: 'ADD', payload: props.id });
    setFav(!fav);
  };

  return (
    <div>
      {fav ? <button onClick={addFavBtn}>add</button> : <button>remove</button>}
      <NavLink to='/details' exact={true}>
        <button>show more</button>
      </NavLink>
    </div>
  );
};
export default CardDetails;
