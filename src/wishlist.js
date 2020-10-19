import React from 'react';
import { connect } from 'react-redux';
import { selectWishlistBook, updateBookArr } from './store/actions';

function SingleWish(props) {
  const listItem = props.books.map((book) => {
    return (
          <li className='wishlist' key={book.id}>
          <img className="books_img" src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
          <a className="book_title">{book.volumeInfo.title}</a>
          <button 
            onClick={() => props.updateWishlistBook(book)}
          >Remove</button>
        </li>   
    );
  })
  
  return (
    <ul className="wish-list">
      { listItem }
    </ul>
    );
}

function WishList(props) {
  let selectedBooks = props.wishlist;
  const updateWishlistBook = (wish) => { 
    const newBooksArr = props.books.map((book) => {      
      if(book.id == wish.id) {
          console.log(wish.id, selectedBooks.indexOf(wish.id),"else", selectedBooks)
          book.have = false;
          selectedBooks = selectedBooks.filter((item) => item.id !== wish.id);
      }
      return book;
    })
    props.updateWishlistBook(selectedBooks);
    props.updateBookArr(newBooksArr)
  }
  
    return ( selectedBooks.length ? <SingleWish books={selectedBooks} updateWishlistBook={(book)=>updateWishlistBook(book)} /> : <p className="alternateText"><strong>Start adding your wishlist & All selected books should be unique.</strong></p>); 
}

const mapStateToProps = (state) => {
  return {
    books: state.getBooks,
    wishlist: state.selectedBooks
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateBookArr: (bookArr) => {
      dispatch(updateBookArr(bookArr))
    },
    updateWishlistBook: (book) => {
      dispatch(selectWishlistBook(book))
    }
  }
}

const WishListComponent = connect(mapStateToProps, mapDispatchToProps)(WishList);

export default WishListComponent;

