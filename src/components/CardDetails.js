import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const CardDetails = (props) => {
  const dispatch = useDispatch();
  const favorite = useSelector((state) => state.favorites);
  // add to favorite
  const addFavBtn = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD', payload: props.id });
  };
  // remove from favorite
  const removeBtn = (e) => {
    e.preventDefault();
    dispatch({ type: 'REMOVE', payload: props.id });
  };

  return (
    <div className='card-details'>
      {!favorite.includes(props.id) ? (
        <button onClick={addFavBtn} className='addBtn' title='add to favorites'>
          <i className='far fa-star'></i>
        </button>
      ) : (
        <button
          onClick={removeBtn}
          className='removeBtn'
          title='remove from favorites'
        >
          <i className='fas fa-star'></i>
        </button>
      )}
      <NavLink
        to={{ pathname: '/details', state: { id: props.id } }}
        exact={true}
      >
        <button className='showBtn' title='show more'>
          more
        </button>
      </NavLink>
    </div>
  );
};
export default CardDetails;
