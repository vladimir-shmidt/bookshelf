import { Alert } from 'reactstrap';
import React, { Component } from 'react';
import { observe } from 'mobx';
import { observer } from 'mobx-react';
import State from '../State';

let Popup = observer(class Popup extends Component {
    constructor(props) {
        super(props);

        this.requestUpdated.bind(this.requestUpdated);

        observe(State.Request, "Error", this.requestUpdated);
    }

    requestUpdated(change) {
        if(!change.newValue) return;
        setTimeout(() => State.Request.Error = null, 5000);
    }

    render () {
        return (
            <Alert color="danger" isOpen={State.Request.Error !== null} toggle={() => State.Request.Error = null}>
                { State.Request.Error }
            </Alert>
        );
    }
});

export default Popup;