import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI'
import BookList from "../components/BookList";
import {withRouter} from "react-router-dom";

class Search extends Component {
    state = {
        querySearch: '',
        searchResults: [],
        searchMonitor: false
    };

    onInputChange = ({target: {value}}) => {
        const {querySearch} = this.state;

        this.setState(() => ({
            querySearch: value
        }));

        if (querySearch) {
            BooksAPI.search(querySearch.trim()).then((results) => {
                results.length > 0
                    ? this.setState({searchResults: results, searchMonitor: false})
                    : this.setState({searchResults: [], searchMonitor: true})
            })
        } else this.setState({searchResults: [], searchMonitor: false})
    };

    render() {
        const {searchResults, querySearch, searchMonitor} = this.state;
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
                            <input value={querySearch}
                                   onChange={this.onInputChange} type="text"
                                   placeholder="Search by title or author"/>
                        </div>
                    </div>
                    <div className="search-books-results">
                        {searchResults.length > 0 && (
                            <BookList
                                books={searchResults}
                                handleSelectChange={handleUpdateBook}
                            />
                        )}
                        {searchMonitor && (
                            <h1>No results. Please try again!</h1>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Search);