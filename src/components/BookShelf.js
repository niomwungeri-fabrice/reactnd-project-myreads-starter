import React from 'react';
import Book from "./Book";

const BookShelf = (props) => {
    const {books, name, shelfCode, handleUpdateBook} = props;
    const bookByShelves = (shelf) => ((shelf && books) ? books.filter((c) => (c.shelf === shelf)) : books);
    return (
        <div>
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookByShelves(shelfCode).map((book, index) => (
                        <li key={index}>
                            <Book book={book} shelf={shelfCode} handleUpdateBook={handleUpdateBook}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default BookShelf;