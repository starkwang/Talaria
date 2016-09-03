/**
 * Created by natumsol on 16/7/24.
 */
import React from 'react';
import { Avatar, ListItem, Divider, Badge} from 'material-ui';
export default class Orders extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        var List = !!this.props.tile.count ?
            <div>
                <ListItem
                leftAvatar={<Badge badgeContent={this.props.tile.count + "个"} primary={true}  className="badge-custom" ></Badge>}
                primaryText={this.props.tile.goodName}
                secondaryText={""}
                secondaryTextLines={2}
            />
                <Divider inset={true} />
            </div> : null;
        return (
            <div>{List}</div> 
        );
    }
}
