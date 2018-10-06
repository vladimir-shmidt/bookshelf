import React, { Component } from 'react';
import { observer } from 'mobx-react';
import BooksAPI from '../booksapi'
import State from '../State';

let Books = observer(class Books extends Component {
    constructor(props){
        super(props);

        this.api = new BooksAPI('http://localhost:5000');
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <button onClick={() => this.api.getBook(1).then(json => State.Book = json)}>get book 1</button>
                    <p>{JSON.stringify(State.Book)}</p>
                </div>
            </div>
        );
    }
});

export default Books;