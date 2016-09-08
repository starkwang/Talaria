import React from 'react';
import { FlatButton, TextField, FontIcon, RaisedButton, AppBar, Avatar, IconMenu, MenuItem, IconButton, Divider } from 'material-ui';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Person from 'material-ui/svg-icons/action/perm-identity';
import Shop from 'material-ui/svg-icons/action/shopping-cart';
import Logout from 'material-ui/svg-icons/action/power-settings-new';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Mail from 'material-ui/svg-icons/maps/local-post-office';

import { browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import componentStatus from '../Service/componentStatus';

import eventProxy from '../Service/event';
import user from '../Service/userService';
import api from '../Service/api';
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        if (user.isLogin) {
            this.state = {};
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

        })
    }
    toRoute(path) {
        browserHistory.push(path);
    }
    componentDidMount() {
        componentStatus.Header.show();
        this.setState({});
    }
    showSideBar() {
        eventProxy.emit('show sidebar');
    }
    render() {
        var header = componentStatus.Header.isShow() ? (
            <AppBar
                key={1}
                className="header"
                style={{
                    transition: "all 1s",
                    backgroundColor: this.state.color ? this.state.color : undefined
                }}
                onLeftIconButtonTouchTap={this.showSideBar}
                >
                <div className='header-left'>
                    <FlatButton
                        label="Login"
                        primary={true}
                        icon={<AccountCircle/>}
                        style={{ color: '#fff' }}
                        rippleColor='#000'
                        />
                    <FlatButton
                        primary={true}
                        icon={<Favorite/>}
                        style={{ color: '#fff', width: '50px', minWidth: 'none' }}
                        rippleColor='#000'
                        />
                    <FlatButton
                        primary={true}
                        icon={<Mail/>}
                        style={{ color: '#fff', width: '50px', minWidth: 'none' }}
                        rippleColor='#000'
                        />
                </div>
                <div className='header-right'>
                    <TextField
                        hintText="search"
                        underlineFocusStyle={{ color: '#fff' }}
                        />
                </div>
            </AppBar>
        ) : null;
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
