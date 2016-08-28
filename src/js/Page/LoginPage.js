import React from 'react';
import { Link, browserHistory } from 'react-router';

import eventProxy from '../Service/event';
import api from '../Service/api';
import user from '../Service/userService'
import PageContent from '../Component/PageContent';

import {RaisedButton, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, FlatButton, TextField, IconButton} from 'material-ui';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';

import Alert from '../Component/Alert';
export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            passwordErrText: null,
            usernameErrText: null
        };
    }
    componentDidMount(){
        eventProxy.emit('hide header');
        user.getUserInfo()
            .then(function(userInfo){
                if(!! userInfo) {
                    browserHistory.push("/");
                }
            })
            .catch(function(err){

            })
    }
    back(){
        browserHistory.push('/');
    }
    //  处理表单
    handleUserNameChange(e){
        if(!e.target.value) {
            this.setState({
                usernameErrText: "此项为必填项"
            });
        } else {
            this.setState({
                usernameErrText: null
            });
        }
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordChange(e) {
        if(!e.target.value) {
            this.setState({
                passwordErrText: "此项为必填项"
            });
        } else {
            this.setState({
                passwordErrText: null
            });
        }
        this.setState({
            password: e.target.value
        })
    }
    //登陆逻辑
    doLogin() {
        var self = this;
        if(!this.state.password || !this.state.username) {
            if(!this.state.username) {
                this.setState({
                    usernameErrText: "此项为必填项"
                });
            }
            if(!this.state.password) {
                this.setState({
                    passwordErrText: "此项为必填项"
                });
            }

           return;
        }

        eventProxy.emit("show loading");

        api.user.login({
            username: this.state.username,
            password: this.state.password
        }).then(res=> {
            setTimeout(function(){
                eventProxy.emit("hide loading");
            }, 1000);
            switch(res.status){
                case 1:{ // 登陆成功
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
                    break;
                }
                default:{
                    eventProxy.emit("show alert", res.message);
                }
            }
        }).catch(err => {
            eventProxy.emit("show alert", "网络错误!");
            setTimeout(function(){
                eventProxy.emit("hide loading");
            }, 1000);
        });
    }
    toSignup(){
        browserHistory.push('/signup');
    }
    render() {
        
        return ( 
            <PageContent>
            <div className="login-page">
                <IconButton onClick={this.back}>
                    <HighlightOff />
                </IconButton>
                <Card style={{
                    width:"300px",
                    height:'300px',
                    marginLeft:"-150px",
                    position:"absolute",
                    top:"200px",
                    left:"50%",
                    backgroundColor: "rgba(255,255,255,0.8)"
                }}>
                    <CardTitle title="登陆" titleStyle={{
                        textAlign: 'center'
                    }}/>

                    <TextField
                        hintText="请输入账号"
                        floatingLabelText="账号"
                        type="text"
                        style={{
                            position: 'absolute',
                            marginLeft: '-128px',
                            left: '50%',
                            top: '60px'
                        }}
                        onChange={this.handleUserNameChange.bind(this)}
                        errorText={this.state.usernameErrText}
                    /><br />
                    <TextField
                        hintText="请输入密码"
                        floatingLabelText="密码"
                        type="password"
                        style={{
                            position: 'absolute',
                            marginLeft: '-128px',
                            left: '50%',
                            top: '125px'
                        }}
                        onChange={this.handlePasswordChange.bind(this)}
                        errorText={this.state.passwordErrText}
                    /><br />
                    <CardActions style={{
                        position: 'absolute',
                        bottom: '20px',
                        width: '220px',
                        left:'50%',
                        marginLeft:'-110px'
                    }}>
                        <RaisedButton style={{float:'left'}} label="登陆" primary={true} onClick={this.doLogin.bind(this)}/>
                        <FlatButton style={{float:'right'}} onClick={this.toSignup} label="注册" />
                    </CardActions>
                    <Alert/>
                  </Card>
            </div>
            </PageContent>
        );
    }
}
