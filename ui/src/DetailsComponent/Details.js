import React, { Component } from 'react';
import { observer } from 'mobx-react';
import State from '../State';
import { Container } from 'reactstrap';
import Fields from './Fields';
import BookStub from './BookStub';

let BookDetails = observer(class BookDetails extends Component {
    render() {
        return (
            <Container>
                { State.CurrentBook ? <Fields/> : <BookStub/> }
            </Container>
        );
    }
 });

export default BookDetails;