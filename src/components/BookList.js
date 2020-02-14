import React, {Component} from 'react';

class BookList extends Component {
    render() {
        const {books, status, handleSelectChange} = this.props;
        const filteredBooks = (status && books) ? books.filter((c) => (c.shelf === status)): books;
        return (
            <ol className="books-grid">
                {filteredBooks.map((book, index) => (
                    <li key={index}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover"
                                     style={{
                                         width: 128,
                                         height: 193,
                                         backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                     }}></div>
                                <div className="book-shelf-changer">
                                    <select value={status||""} onChange={event => handleSelectChange(event, book)}>
                                        <option value="move" disabled>Move to...</option>
                                        <option
                                            value="currentlyReading">Currently Reading
                                        </option>
                                        <option value="wantToRead">Want to Read
                                        </option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div
                                className="book-authors">{book.authors}</div>
                        </div>
                    </li>
                ))}
            </ol>
        );
    }
}

export default BookList;