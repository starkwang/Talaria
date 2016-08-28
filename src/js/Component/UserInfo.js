/**
 * Created by natumsol on 16/7/24.
 */
import React from 'react';
import {Card, List, ListItem, Divider,CardHeader, Badge} from 'material-ui';
import api from '../Service/api';
import Person from 'material-ui/svg-icons/action/perm-identity';
import Phone from 'material-ui/svg-icons/action/perm-phone-msg';
import Email from 'material-ui/svg-icons/action/stars';
import QQ from 'material-ui/svg-icons/action/account-circle';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class UserInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isShow: false
        }
    }

    componentWillMount(){
        api.user.getUserInfo().then(res => {
            this.setState({
                isShow: true,
                userInfo: res.data
            })
        })
            .catch(err => {
            })
    }

    render(){
        var userInfo = this.state.isShow ?
            <Card
            style={{
                backgroundColor: "rgba(255,255,255,0.8)",
                width:"100%",
                margin:"0 auto",
                position: "relative",
                paddingBottom: "40px"
             }}>
            <CardHeader
                title={this.state.userInfo.nickname}
                subtitle=""
                avatar={this.state.userInfo.compressPicture}
            />
            <Divider />
            <List>
                <ListItem primaryText="昵称" secondaryText={this.state.userInfo.nickname} leftIcon={<Person />} />
                <ListItem primaryText="电子邮箱" secondaryText={this.state.userInfo.email} leftIcon={<Email />} />
                <ListItem primaryText="电话" secondaryText={this.state.userInfo.username} leftIcon={<Phone />} />
                <ListItem primaryText="QQ" secondaryText={this.state.userInfo.qq}leftIcon={<QQ />} />
            </List>
        </Card> : null
        return(
            <div>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="main-info"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}
                >
                    {userInfo}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}
