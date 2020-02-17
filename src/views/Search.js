import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import Book from "../components/Book";
import * as BooksAPI from "../BooksAPI";
import {DebounceInput} from "react-debounce-input";

class Search extends Component {
    state = {
        querySearch: '',
        searchResults: []
    };

    onInputChange = (value) => {
        this.setState(() => ({
            querySearch: value.trim()
        }));

        const {querySearch} = this.state;

        if (querySearch) {
            BooksAPI.search(querySearch.trim(), 20).then((results) => {
                if (results && results.length) {
                    const searchResults = results.map((book) => this.updateShel(book));
                    this.setState({searchResults})
                } else {
                    this.setState({searchResults: []})
                }
            });
        } else {
            this.setState({searchResults: []})
        }
    };

    updateShel = (book) => {
        book.shelf = 'none';
        const {books} = this.props;
        if (books && books.length) {
            const getBookShelves = this.props.books.filter((b) => b.id === book.id);
            if (getBookShelves.length) {
                book.shelf = getBookShelves[0].shelf;
            }
        }
        return book;
    };

    render() {
        const {searchResults, querySearch} = this.state;
        const {handleUpdateBook} = this.props;
        return (
            <div className="app">
                <div className="search-books">
                    <div className="search-books-bar">
                        <button className="close-search"
                                onClick={() => {
                                    this.props.history.push('/')
                                }}>Close
                        </button>
                        <div className="search-books-input-wrapper">
                            <DebounceInput
                                minLength={2}
                                debounceTimeout={500}
                                type="text"
                                placeholder="Search by title or author"
                                value={querySearch}
                                onChange={(event) => this.onInputChange(event.target.value)}/>
                        </div>
                    </div>
                    <div className="search-books-results">
                        {searchResults.length > 0 && (
                            <ol className="books-grid">
                                {searchResults.map(book => (
                                    <li key={book.id}>
                                        <Book shelf={book.shelf} book={book} handleUpdateBook={handleUpdateBook}/>
                                    </li>
                                ))}
                            </ol>
                        )}
                        {(querySearch !== '' && searchResults.length === 0) && (
                            <h1>No results. Please try again!</h1>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Search);