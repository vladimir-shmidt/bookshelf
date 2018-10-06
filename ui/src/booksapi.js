import State from './State';

class BooksAPI {
    constructor(baseUrl) {
        this.url = baseUrl;
    }

    catchError(e) {
        State.Request.Error = e;
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
        return fetch(`${this.url}/books/find?page=${page}&count=${count}`)
                .then(response => response.json())
                .catch(this.catchError);
    }

    updateBook(book) {
        return fetch(`${this.url}/books/${book.id}`, { method: 'PUT', body: book })
            .then(response => response.json())
            .catch(this.catchError);
    }

    updateCover(id, image) {
        return fetch(`${this.url}/books/${id}/cover`, { method: 'PUT', body: image })
                .then(response => response.json())
                .catch(this.catchError);
    }
}