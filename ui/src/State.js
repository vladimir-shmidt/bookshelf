import { observable } from 'mobx';

let State = observable({
    Request: {
        InProgress: false,
        Error: null
    }
});

export default State;