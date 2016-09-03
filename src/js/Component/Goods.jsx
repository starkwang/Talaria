/**
 * Created by natumsol on 16/7/24.
 */
import React from 'react';
import { Avatar, ListItem, Divider} from 'material-ui';
import {browserHistory } from 'react-router';

export default class Goods extends React.Component {
    constructor(props){
        super(props);
    }
    handleClick(){
        browserHistory.push("/detail/" + this.props.tile.goodID);
    }
    render(){
        return(
            <div>
                <ListItem
                    leftAvatar={<Avatar src={this.props.tile.compressImage} />}
                    primaryText={this.props.tile.goodName}
                    secondaryText={this.props.tile.description.length > 100 ? this.props.tile.description.substr(0, 100) + "..." : this.props.tile.description}
                    secondaryTextLines={2}
                    onClick = {this.handleClick.bind(this)}
                />
                <Divider inset={true} /> 
            </div>
        )
    }
}
