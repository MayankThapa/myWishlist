import React from 'react';
import { connect } from 'react-redux';
import { selectWishlistBook, updateBookArr } from './store/actions';

function searchBar(props) {
  let books = props.books;  
  const onTyping = (e) => {
    console.log("value",e.target.value, props.books);
    let searchItem = e.target.value.toLowerCase();

  }
    return (<input className="input_search" placeholder="Start typing . . ." 
        // onChange={(e) => onTyping(e)}
        />); 
}

const mapStateToProps = (state) => {
  return {
    books: state.getBooks,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateBookArr: (bookArr) => {
      dispatch(updateBookArr(bookArr))
    },
  }
}

const SearchBarComponent = connect(mapStateToProps, mapDispatchToProps)(searchBar);

export default SearchBarComponent;

