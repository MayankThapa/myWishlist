export const UPDATE_BOOKS = 'UPDATE_BOOKS';
export const UPDATE_WISHLIST_BOOK = 'UPDATE_WISHLIST_BOOK';
export const UPDATE_WISHLIST = 'UPDATE_WISHLIST';

export const updateBooks = (data) => {
    return { type: UPDATE_BOOKS, data };
};
export const updateWishlistBook = (data) => {
    return { type: UPDATE_WISHLIST, data };
};


export const selectWishlistBook = (value) => {
    return (dispatch) => {
      dispatch(updateWishlistBook(value));
    };
  }
export const updateBookArr = (value) => {
    return (dispatch) => {
      dispatch(updateBooks(value));
    };
  }