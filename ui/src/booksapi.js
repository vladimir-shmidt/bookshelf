import State from './State';

class BooksAPI {
    constructor(baseUrl) {
        this.url = baseUrl;
    }

    catchError(e) {
        State.Request.Error = JSON.stringify(e);
        State.Request.InProgress = false;
    }

    getBook(id) {
        State.Request.InProgress = true;
        return fetch(`${this.url}/books/${id}`)
                .then(response => {
                    State.Request.InProgress = false;
                    return response.json();
                })
                .catch(this.catchError);
    }

    getBooks(page, count) {
        State.Request.InProgress = true;
        return fetch(`${this.url}/books/find?page=${page}&count=${count}`)
                .then(response => {
                    State.Request.InProgress = false;
                    return response.json();
                })
                .catch(this.catchError);
    }

    updateBook(book) {
        State.Request.InProgress = true;
        return fetch(`${this.url}/books/${book.id}/update`, { method: 'PUT', body: book })
            .then(response => {
                State.Request.InProgress = false;
                return response.json();
            })
            .catch(this.catchError);
    }

    addBook(book) {
        State.Request.InProgress = true;
        return fetch(`${this.url}/books/create`, { method: 'POST', body: book })
            .then(response => {
                State.Request.InProgress = false;
                return response.json();
            })
            .catch(this.catchError);
    }

    removeBook(id) {
        State.Request.InProgress = true;
        return fetch(`${this.url}/books/${id}/remove`, { method: 'DELETE' })
            .then(response => {
                State.Request.InProgress = false;
                return response.json();
            })
            .catch(this.catchError);
    }

    updateCover(id, image) {
        State.Request.InProgress = true;
        return fetch(`${this.url}/books/${id}/cover`, { method: 'PUT', body: image })
                .then(response => {
                    State.Request.InProgress = false;
                    return response.json();
                })
                .catch(this.catchError);
    }
}

export default BooksAPI;