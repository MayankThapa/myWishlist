import { combineReducers } from 'redux';
import {
  UPDATE_BOOKS,
  UPDATE_WISHLIST,
} from './actions';

import {
  books,
} from './data';

function getBooks(state = books, action) {
  switch (action.type) {
    case UPDATE_BOOKS:
      return [...action.data];
    default:
      return state;
  }
}
function selectedBooks(state = [], action) {
  switch (action.type) {
    case UPDATE_WISHLIST:
      return [...action.data];
    default:
      return state;
  }
}

const reducers = combineReducers({
    getBooks,
    selectedBooks,
});

export default reducers;
