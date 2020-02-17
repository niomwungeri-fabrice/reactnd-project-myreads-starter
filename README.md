# Project Description

MyReads project, is a bookshelf app that allows you to select and categorize books you have read, 
are `currently reading`, or `want` to `read`. 

# FrontEnd

### Local setup instructions
```sh
$ git clone https://github.com/niomwungeri-fabrice/reactnd-project-myreads-starter.git
$ cd reactnd-project-myreads-starter
$ yarn
$ yarn start
```

## How it works
- Visit `http://localhost:3000/` to see the book shelves and move them to different categories
- Visit `http://localhost:3000/search` or click to the green button on the right button of the page to search for books
and place them to different categories

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

