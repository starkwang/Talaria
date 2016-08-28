/**
 * Created by natumsol on 16/7/23.
 */
import React from 'react';
import { RefreshIndicator } from 'material-ui';
import componentStatus from '../Service/componentStatus';
import eventProxy from '../Service/event';

export default class Loading extends React.Component {
    constructor(props){
        super(props);
        eventProxy.on('change loading', status => {
            this.setState({
                status: status || this.state.status
            });
        });
        eventProxy.on('show loading', _ => {
            componentStatus.Loading.show();
            this.setState({});
        })
        eventProxy.on('hide loading', _ => {
            componentStatus.Loading.hide();
            this.setState({});
        })
    }

    render(){
        return (
            <div className="loading-container">
                <RefreshIndicator
                    size={40}
                    left={10}
                    top={70}
                    status={componentStatus.Loading.status}
                    style={{
                        display: 'inline-block',
                        position: 'relative',
                        margin:'0 auto'
                    }}
                />
            </div>
        );
    }

}