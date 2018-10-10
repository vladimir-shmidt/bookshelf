import React, { Component } from 'react';
import { observer } from 'mobx-react';
import State from '../State';
import { Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import { FaTrash, FaPlusCircle } from 'react-icons/fa';

let Authors = observer(class Authors extends Component {
    render() {
        return <Row>
            <Col> 
                { State.CurrentBook.Authors.slice().map((author, index) => (
                    <Row key={index} form>
                        <Col md={5}>
                            <FormGroup row>
                                <Label for="name" sm={4}>Name</Label>
                                <Col sm={8}>
                                    <Input maxLength={20} type="text" name="name" id="name" placeholder="Author name" value={ author.Name || '' } onChange={ e => author.Name = e.target.value } />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup row>
                                <Label for="surname" sm={4}>Surname</Label>
                                <Col sm={8}>
                                    <Input maxLength={20} type="text" name="surname" id="surname" placeholder="Author surname" value={ author.Surname || '' } onChange={ e => author.Surname = e.target.value } />
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col md={1}>
                            { State.CurrentBook.Authors.length > 1 ? (<Button outline color="secondary" onClick={e => State.CurrentBook.Authors.remove(author)}><FaTrash/></Button>) : '' }
                        </Col>
                    </Row>
                ))}
                <Row>
                    <Col md={12}>
                        <Button block outline color="secondary" onClick={e => State.CurrentBook.Authors.push({Name:'', Surname:''})}><FaPlusCircle/></Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    }
});

export default Authors;