import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CardDetails = (props) => {
  const [fav, setFav] = useState(true);
  const dispatch = useDispatch();
  const addFavBtn = (e) => {
    e.persist();
    dispatch({ type: 'ADD', payload: props.data });
    setFav(!fav);
  };
  return (
    <div>{fav ? <button onClick={addFavBtn}>add</button> : <h1>???</h1>}</div>
  );
};
export default CardDetails;
