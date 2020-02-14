import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./views/Home";
import Search from "./views/Search";
import * as BooksAPI from "./BooksAPI";


class App extends Component {

    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books
            })
        })
    }

    updateBookStatus = (event, book) => {
        const {value} = event.target;
        if (value !== 'none') {
            BooksAPI.update(book, event.target.value).then(() => {
                BooksAPI.getAll().then((books) => {
                    this.setState({
                        books
                    })
                })
            })
        }
    };
    render() {
        return (
            <Switch>
                <Route exact path="/" render={()=>(
                    <Home
                        books={this.state.books}
                        handleUpdateBook={this.updateBookStatus}
                    />
                )}/>
                <Route path="/search" render={()=>(
                    <Search
                        books={this.state.books}
                        handleUpdateBook={this.updateBookStatus}
                    />
                )}/>
            </Switch>
        );
    }
}

export default App;