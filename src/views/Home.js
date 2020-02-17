import React from 'react'
import '../App.css'
import {withRouter, Link} from "react-router-dom";
import BookShelf from "../components/BookShelf";

const SHELVES = [
    {
        title: 'Currently Reading',
        id: 'currentlyReading'
    },
    {
        title: 'Want To Read',
        id: 'wantToRead'
    },
    {
        title: 'Read',
        id: 'read'
    }
];
const Home = (props) => {
    const {handleUpdateBook, books} = props;
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {SHELVES.map(((shelf, i) => (
                        <div key={i} className="bookshelf">
                            <BookShelf books={books}
                                       name={shelf.title}
                                       shelfCode={shelf.id}
                                       handleUpdateBook={handleUpdateBook}/>
                        </div>
                    )))}
                </div>
            </div>
            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
        </div>
    )
};

export default withRouter(Home);
