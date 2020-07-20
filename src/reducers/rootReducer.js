const initialState = {
  items: [],
  favorites: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return {
        items: action.payload.items,
        favorites: state.favorites,
      };
    case 'ADD':
      return {
        items: state.items,
        favorites: state.favorites
          .concat(action.payload)
          .filter((item, pos, arr) => arr.indexOf(item) === pos),
      };
    case 'REMOVE':
      return {
        items: state.items,
        favorites: state.favorites
          .concat(action.payload)
          .filter((el) => el !== action.payload),
      };
    default:
      return state;
  }
}

export default rootReducer;
