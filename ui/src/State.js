import { observable } from 'mobx';

let State = observable({
    Request: {
        InProgress: false,
        Error: null
    },
    BooksStore: {
        Books: [],
        Count: 5,
        Total: 0,
        Page: 1
    },
    CurrentBook: null
});

export default State;