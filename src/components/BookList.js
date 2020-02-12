import React, {Component} from 'react';
import Book from "./Book";

class BookList extends Component {
    render() {
        const {books, status} = this.props;
        const filteredBooks = books.filter((c) => (c.shelf === status));
        return (
            <ol className="books-grid">
                {filteredBooks.map((book, index) => (
                    <li key={index}>
                        <Book
                            bookUrl={book.imageLinks.smallThumbnail}
                            bookTitle={book.title}
                            bookAuthor={book.authors[0]}/>
                    </li>
                ))}
            </ol>
        );
    }
}

export default BookList;