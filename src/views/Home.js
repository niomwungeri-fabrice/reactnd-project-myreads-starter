import React from 'react'
import '../App.css'
import BookList from "../components/BookList";
import {withRouter} from "react-router-dom";

class Home extends React.Component {
    render() {
        const {handleUpdateBook, books} = this.props;
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
                                <BookList handleSelectChange={handleUpdateBook}
                                          books={books}
                                          status="currentlyReading"/>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <BookList handleSelectChange={handleUpdateBook}
                                          books={books}
                                          status="wantToRead"/>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <BookList handleSelectChange={handleUpdateBook}
                                          books={books}
                                          status="read"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={() => this.props.history.push('/search')}>Add a book</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);
