/**
 * Created by natumsol on 16/7/23.
 */
import React from 'react';
import { Dialog, FlatButton } from 'material-ui';
import componentStatus from '../Service/componentStatus';
import eventProxy from '../Service/event';
export default class Alert extends React.Component {
    constructor(props){
        super(props);
        eventProxy.on('show alert', text => {
            componentStatus.Alert.show();
            componentStatus.Alert.setText(text);
            this.setState({});
        })
        eventProxy.on('hide alert', _ => {
            componentStatus.Alert.hide();
            this.setState({});
        })
    }

    handleOpen(){
        componentStatus.Alert.show();
        this.setState({});
    };

    handleClose(){
        componentStatus.Alert.hide();
        this.setState({});
    };
    render(){
        const actions = [
            <FlatButton
                label="确认"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
        ];
        return(
            <Dialog
                actions={actions}
                modal={false}
                open={componentStatus.Alert.dialogOpen}
                onRequestClose={this.handleClose.bind(this)}
            >
                {componentStatus.Alert.text}
            </Dialog>
        )
    }
}
