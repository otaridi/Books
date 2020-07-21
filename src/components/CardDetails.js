import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const CardDetails = (props) => {
  // hook for favorite button
  const [fav, setFav] = useState(true);
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorites);
  const addFavBtn = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD', payload: props.id });
    setFav(!fav);
  };
  const removeBtn = (e) => {
    dispatch({ type: 'REMOVE', payload: props.id });
    setFav(!fav);
  };

  return (
    <div>
      {!favorite.includes(props.id) ? (
        <button onClick={addFavBtn}>
          <i class='fas fa-plus'></i> ADD
        </button>
      ) : (
        <button onClick={removeBtn}>
          <i class='fas fa-trash-alt'></i>
        </button>
      )}
      <NavLink
        to={{ pathname: '/details', state: { id: props.id } }}
        exact={true}
      >
        <button>show more</button>
      </NavLink>
      {/* <i class='fas fa-heart' style={{ fontSize: 30, color: "orange" }}></i> */}
    </div>
  );
};
export default CardDetails;
