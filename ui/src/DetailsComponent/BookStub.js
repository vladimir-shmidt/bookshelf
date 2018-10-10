import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Media } from 'reactstrap';

let BookStub = observer(class BookStub extends Component {
    render() {
        return (
            <Media>
                <Media body>
                    <Media heading>
                        { 'no book selected' }
                    </Media>
                </Media>
            </Media>
        );
    }
 });

export default BookStub;