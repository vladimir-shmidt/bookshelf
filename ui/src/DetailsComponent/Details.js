import React, { Component } from 'react';
import { observer } from 'mobx-react';
import State from '../State';
import { Container, FormGroup, Input, Label, Media, Row, Col, Button } from 'reactstrap';
import { FaTrash } from 'react-icons/fa';

let BookDetails = observer(class BookDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                { State.CurrentBook ? (
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
                            <Row form>
                                <Col md={5}>
                                    <FormGroup row>
                                        <Label for="name" sm={4}>Name</Label>
                                        <Col sm={8}>
                                            <Input maxLength={20} type="text" name="name" id="name" placeholder="Author name" value={ State.CurrentBook.Authors[0].Name || '' } onChange={ e => State.CurrentBook.Authors[0].Name = e.target.value } />
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup row>
                                        <Label for="surname" sm={4}>Surname</Label>
                                        <Col sm={8}>
                                            <Input maxLength={20} type="text" name="surname" id="surname" placeholder="Author surname" value={ State.CurrentBook.Authors[0].Surname || '' } onChange={ e => State.CurrentBook.Authors[0].Surname = e.target.value } />
                                        </Col>
                                    </FormGroup>
                                </Col>
                                <Col md={1}>
                                    { State.CurrentBook.Authorss ? (<Button remove outline color="secondary"><FaTrash/></Button>) : '' }
                                </Col>
                            </Row>
                        </Media>
                        <Media left href="#">
                            <Media object data-src={"State.CurrentBook.Image"} alt={State.CurrentBook.Title} />
                        </Media>
                    </Media>
                ) : (
                    <Media>
                        <Media body>
                            <Media heading>
                                { 'no book selected' }
                            </Media>
                        </Media>
                    </Media>
                )}
            </Container>
        );
    }
 });

export default BookDetails;