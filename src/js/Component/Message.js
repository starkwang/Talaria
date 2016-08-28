import React from 'react';
import {Snackbar} from 'material-ui';
import eventProxy from '../Service/event';
export default class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            message: ''
        };
        eventProxy.on('show message', text => {
            this.setState({
                open: true,
                message: text
            });
        })
    }
    handleRequestClose(){
        this.setState({
            open: false
        });
    }
    render() {
        return (
            <Snackbar
                open={this.state.open}
                message={this.state.message}
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose.bind(this)}
            />
        );
    }
}
