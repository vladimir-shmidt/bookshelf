import React, { Component } from 'react';
import { observer } from 'mobx-react';
import State from '../State';
import { FormGroup, Input, Label, Media } from 'reactstrap';
import Authors from './Authors';

let Fields = observer(class Fields extends Component {
    render() {
        return (
            <Media>
                <Media body>
                    <Media heading>
                        { State.CurrentBook.Title || '---' }
                    </Media>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input maxLength={30} type="text" name="title" id="title" placeholder="Title" value={ State.CurrentBook.Title || '' } onChange={ e => State.CurrentBook.Title = e.target.value } />
                    </FormGroup>
                    <FormGroup>
                        <Label for="pageCount">Page Count</Label>
                        <Input type="number" min={0} max={10000} name="pageCount" id="pageCount" placeholder="Page count" value={ State.CurrentBook.PageCount || '' } onChange={ e => State.CurrentBook.PageCount = e.target.value } />
                    </FormGroup>
                    <FormGroup>
                        <Label for="publisher">Publisher</Label>
                        <Input maxLength={30} type="text" name="publisher" id="publisher" placeholder="Publisher" value={ State.CurrentBook.Publisher || '' } onChange={ e => State.CurrentBook.Publisher = e.target.value } />
                    </FormGroup>
                    <FormGroup>
                        <Label for="year">Year</Label>
                        <Input type="number" min={1800} max={new Date().getFullYear()} name="year" id="year" placeholder="year" value={ State.CurrentBook.Year || '' } onChange={ e => State.CurrentBook.Year = e.target.value } />
                    </FormGroup>
                    <FormGroup>
                        <Label for="isbn">ISBN</Label>
                        <Input type="text" name="isbn" id="isbn" placeholder="ISBN" value={ State.CurrentBook.ISBN || '' } onChange={ e => State.CurrentBook.ISBN = e.target.value } />
                    </FormGroup>
                    <Authors/>
                </Media>
                <Media left href="#">
                    <Media object data-src={State.CurrentBook.Image} alt={State.CurrentBook.Title} />
                </Media>
            </Media>
        );
    }
 });

export default Fields;