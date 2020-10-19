import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookListComponent from './booksList';
import WishlistComponent from './wishlist';
import SearchBarComponent from './searchBar';

export default function App() {
  return (
    <div id="wrapper">
      <section>
        <div className="container">
          <div className="box_content">
            <div className="left">
              <div className="upper_title">
                <div className="searchSection">
                  <SearchBarComponent />
                </div>
              </div>
              <div className="bottom_content booksListSection">
              <BookListComponent/>
              </div>
            </div>
            <div className="right">
              <div className="upper_title">
                <p>My Reading Wishlist</p>
              </div>
              <div className="bottom_content2">
                  <WishlistComponent />
              </div>    
            </div>  
          </div>
        </div>
      </section>
    </div>
  )}
