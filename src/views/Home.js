import React from 'react'
import '../App.css'
import {withRouter} from "react-router-dom";
import Book from "../components/Book";


const Home = (props) => {
    const {handleUpdateBook, books, history} = props;
    const bookByShelves = (shelf)=>((shelf && books) ? books.filter((c) => (c.shelf === shelf)) : books);
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {bookByShelves('currentlyReading').map((book, index) => (
                                    <li key={index}>
                                        <Book book={book} shelf="currentlyReading" handleUpdateBook={handleUpdateBook}/>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {bookByShelves('wantToRead').map((book, index) => (
                                    <li key={index}>
                                        <Book book={book} shelf="wantToRead" handleUpdateBook={handleUpdateBook}/>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {bookByShelves('read').map((book, index) => (
                                    <li key={index}>
                                        <Book book={book} shelf="read" handleUpdateBook={handleUpdateBook}/>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <button onClick={() => history.push('/search')}>Add a book</button>
            </div>
        </div>
    )
};

export default withRouter(Home);
