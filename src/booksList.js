import React from 'react';
import { connect } from 'react-redux';
import { selectWishlistBook, updateBookArr } from './store/actions';

function SingleBook(props) {
  const listItem = props.books.map((book) => {
    return (
      <li className={book.have ? 'active' : 'notactive'} key={book.id}>
        <img className="books_img" src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
        <a className="book_title">{book.volumeInfo.title}</a>
        <button 
          onClick={() => props.selectWishlistBook(book)}
        >{book.have ? 'Remove wishlist' : 'Add to Wishlist'}</button>
      </li>
    );
  })  
  return (
    <ul className="wish-list">
      { listItem }
    </ul>
    );
}

function BookList(props) {
  let selectedBooks = props.wishlist;
  const selectWishlistBook = (wish) => { 
    const newBooksArr = props.books.map((book) => {      
      if(book.id == wish.id) {
        if(!book.have) {
          book.have = true;
          selectedBooks.push(wish)
        } else {
          book.have = false;
          selectedBooks = selectedBooks.filter((item) => item.id !== wish.id);
        }
      }
      return book;
    })
    props.selectWishlistBook(selectedBooks);
    props.updateBookArr(newBooksArr)

  }
  
    return (
      <SingleBook books={props.books} selectWishlistBook={(book)=>selectWishlistBook(book)}/>
      ); 
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
    selectWishlistBook: (book) => {
      dispatch(selectWishlistBook(book))
    }
  }
}

const BookListComponent = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default BookListComponent;