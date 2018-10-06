import React, { Component } from 'react';
import { observer } from 'mobx-react';

let Books = observer(class Books extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    it works
                </div>
            </div>
        );
    }
});

export default Books;