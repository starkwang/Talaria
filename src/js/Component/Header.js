import React from 'react';
import { AppBar, Avatar, IconMenu, MenuItem, IconButton, Divider } from 'material-ui';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Person from 'material-ui/svg-icons/action/perm-identity';
import Shop from 'material-ui/svg-icons/action/shopping-cart';
import Logout from 'material-ui/svg-icons/action/power-settings-new';
import { browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import componentStatus from '../Service/componentStatus';

import eventProxy from '../Service/event';
import user from '../Service/userService';
import api from '../Service/api';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        if(user.isLogin) {
            this.state = {
                image: <Avatar
                    src={user.userInfo.compressPicture}/>,
                menu: <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    style={{
                            position: "relative",
                            left: "18px",
                            top: "4px"
                        }}
                >
                    <MenuItem primaryText="个人中心" onTouchTap={_ => this.toRoute('/userCenter')} leftIcon={<Person />}/>
                        <Divider/>
                    <MenuItem primaryText="注销" style={{color:'red'}} onTouchTap={this.loggout.bind(this)}
                              leftIcon={<Logout />}/>
                </IconMenu>
            };
        }
        eventProxy.on('change header', config => {
            var { color, title } = config;
            this.setState({
                color: color || this.state.color,
                title: title || this.state.title
            });
        });
        eventProxy.on('show header', _ => {
            componentStatus.Header.show();
            this.setState({});
        })
        eventProxy.on('hide header', _ => {
            componentStatus.Header.hide();
            this.setState({});
        })
        eventProxy.on('reload', _ => {
            if(user.isLogin) {
                this.setState({
                    image: <Avatar  src={user.userInfo.compressPicture[0] == '/' ? user.userInfo.compressPicture : '/' + user.userInfo.compressPicture} />,
                    menu: <IconMenu
                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            style={{
                            position: "relative",
                            left: "18px",
                            top: "4px"
                        }}
                        >
                            <MenuItem primaryText="个人中心" onTouchTap={_ => this.toRoute('/userCenter')} leftIcon={<Person />}/>
                            <Divider />
                            <MenuItem primaryText="注销" style={{color:'red'}} onTouchTap={this.loggout.bind(this)} leftIcon={<Logout />} />
                        </IconMenu>
                });
            } else {
                this.setState({
                    image: null,
                    menu: null
                });
            }

        })
    }
    toRoute(path){
        browserHistory.push(path);
    }
    loggout(){
        api.user.logout()
            .then(res => {
                if(res.status == 1){
                    user.userInfo = null;
                    user.getUserInfo().then(res => {
                        if (res) {
                            user.userInfo = res;
                            user.isLogin = true;
                        } else {
                            user.userInfo = null;
                            user.isLogin = false;
                        }
                        eventProxy.emit("reload");
                        browserHistory.push('/');
                    });
                }
            })
            .catch(err => {

            });
    }
    componentDidMount(){
        componentStatus.Header.show();
        this.setState({});
    }
    showSideBar(){
        eventProxy.emit('show sidebar');
    }
    render() {
        var header = componentStatus.Header.isShow()?(
            <AppBar 
                title={this.state.title||'no Title'} 
                titleStyle={{
                    paddingLeft:'55px'
                }}
                key={1}
                className="header"
                style={{
                    transition: "all 1s",
                    backgroundColor: this.state.color?this.state.color:undefined
                }}
                onLeftIconButtonTouchTap={this.showSideBar}
                iconElementRight={this.state.image}
            >
                <Avatar className="logo" src="/img/logo.png"></Avatar>
                {this.state.menu}
            </AppBar>
        ):null;
        return (
            <ReactCSSTransitionGroup 
                    component="div"  
                    transitionName="header"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={800}
            >
                {header}
            </ReactCSSTransitionGroup>
            
        );
    }
}
