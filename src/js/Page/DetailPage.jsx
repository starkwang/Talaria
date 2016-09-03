import React from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { TextField, FloatingActionButton, Slider, RaisedButton, Paper, Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle, List, ListItem, Avatar } from 'material-ui';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Phone from 'material-ui/svg-icons/communication/phone'
import DoneAll from 'material-ui/svg-icons/action/done-all'

import Header from '../Component/Header';
import PageContent from '../Component/PageContent';

import eventProxy from '../Service/event';
import api from '../Service/api';
import userService from '../Service/userService';

export default class DetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow:false,
            itemData:{},
            commentData:[],
            commentText:'',
            Slider:1,
            isMyItem: true
        }
    }
    
    componentDidMount(){
        var _this = this;
        eventProxy.emit('change header',{
            title: '闲鹅 - 商品详情',
            color: '#4caf50'
        });
        eventProxy.emit('show header');

        eventProxy.emit("show loading");
        api.item.get({
            good_id: this.props.params.id
        }).then(result => {
            eventProxy.emit("hide loading");
            var date = new Date(result.createDate);
            result.createDate = date.toLocaleString();
            this.setState(Object.assign(this.state,{
                isShow:true,
                itemData: result
            }))
            userService.getUserInfo().then(data => {
                if(data){
                    if(this.state.itemData.sellerID == data.id){
                        this.setState(Object.assign(this.state,{
                            isMyItem:true
                        }))
                    }else{
                        this.setState(Object.assign(this.state,{
                            isMyItem:false
                        }))
                    }
                }
            })
        })
        api.comment.get({
            goodsID: this.props.params.id
        }).then(result => {
            if(result.status == 1){
                this.setState(Object.assign(this.state, {
                    commentData: result.data.comments
                }))
            }
        });
    }
    commentChange(e){
        this.setState(Object.assign(this.state, {
            commentText:e.target.value
        }))
    }
    publishComment(){
        var commentText = this.state.commentText;
        if(!commentText){
            eventProxy.emit('show message', '评论不能为空哦~');
            return;
        }
        api.comment.publish({
            context: commentText,
            goodsID: this.props.params.id
        }).then(result => {
            if(result.status == 1){
                userService.getUserInfo().then(data => {
                    this.setState(Object.assign(this.state, {
                        commentText:'',
                        commentData: this.state.commentData.concat([{
                            "context": commentText,
                            "commitTime": new Date().toString(),
                            "goodsID": this.props.params.id,
                            "userInfo":{
                                nickName: data.nickname,
                                compressPicture: data.compressPicture
                            }
                        }])
                    }))
                })
            }else{
                eventProxy.emit("show alert", '评论发送失败 > <');
            }
        })
    }
    newOrder(){
        var sellerID = parseInt(this.state.itemData.sellerID);
        var count = parseInt(this.state.Slider)||1;
        var good_id = parseInt(this.props.params.id);
        api.order.newOrder({sellerID, count, good_id}).then(res => {
            if(res.status == 1){
                eventProxy.emit("show message", '生成订单成功0v0');
            }
        });
    }
    handleFirstSlider(e, value){
        this.setState(Object.assign(this.state,{
            Slider: value
        }))
    }

    render() {
        var main = this.state.isShow?(
                <div>
                    <Paper className="item-info-box" zDepth={1}>
                        {
                            this.state.isMyItem?null:(
                                <FloatingActionButton className="new-order" mini={true} onClick={this.newOrder.bind(this)}>
                                    <DoneAll style={{width:"50px",height:"50px"}}/>
                                </FloatingActionButton>)
                        }
                        <div className="divider">
                            <div className="item-img" style={{
                                background: `url("${this.state.itemData.image}")`
                            }}></div>
                        </div>
                        <div className="divider-right">
                            <p className="name">{this.state.itemData.goodName}</p>
                            <p className="price">￥{this.state.itemData.price}</p>
                            <div className="hr">
                                <span>卖家信息</span>
                                <hr/>
                            </div>
                            <div className="contact">
                                <Paper className="icon" zDepth={1} circle={true} style={{backgroundColor:"#4caf50"}}>
                                    <AccountCircle style={{color:"#fff"}}/>
                                </Paper>
                                <p>{this.state.itemData.sellerName}</p>
                            </div>
                            <div className="contact">
                                <Paper className="icon" zDepth={1} circle={true} style={{backgroundColor:"#4caf50"}}>
                                    <Phone style={{color:"#fff"}}/>
                                </Paper>
                                <p>{this.state.itemData['contact_tel']}</p>
                            </div>
                            <div className="contact">
                                <Paper className="icon" zDepth={1} circle={true} style={{padding:"0 5px",backgroundColor:"#4caf50"}}>
                                    <i className="iconfont" style={{fontSize:"18px",lineHeight:"28px",color:"#fff"}}>&#xe600;</i>
                                </Paper>
                                <p>{this.state.itemData['contact_qq']}</p>
                            </div>
                            <div className="contact">
                                <Paper className="icon" zDepth={1} circle={true} style={{padding:"0 5px",backgroundColor:"#4caf50"}}>
                                    <i className="iconfont" style={{fontSize:"18px",lineHeight:"28px",color:"#fff"}}>&#xe601;</i>
                                </Paper>
                                <p>{this.state.itemData['contact_wechat']}</p>
                            </div>
                            <p className="contact">{this.state.itemData.contact}</p>
                            <p className="date">发布于 {this.state.itemData.createDate}</p>
                            <p className="freecount">可购买数量：{this.state.itemData.freeCount}</p>

                            {
                                this.state.isMyItem?null:(
                                    <p className="freecount">
                                        已购买：{this.state.Slider}
                                    </p>)
                            }
                            {
                                this.state.isMyItem?null:(
                                    <Slider
                                        defaultValue={1}
                                        step={1}
                                        min={0}
                                        className={"slider"}
                                        max={this.state.itemData.freeCount}
                                        value={this.state.Slider}
                                        onChange={this.handleFirstSlider.bind(this)}
                                    />)
                            }
                            

                        </div>
                    </Paper>
                    <Paper className="item-info-box">
                        <Toolbar style={{backgroundColor:"#4caf50",color:'#fff'}}>
                            <ToolbarTitle text="商品详情"/>
                        </Toolbar>
                        <div className="item-desc">
                            {this.state.itemData.description}
                        </div>
                    </Paper>

                    <Paper className="item-info-box">
                        <Toolbar style={{backgroundColor:"#4caf50",color:'#fff'}}>
                            <ToolbarTitle text="留言板" />
                        </Toolbar>
                        <List>
                            <ReactCSSTransitionGroup 
                                component="div"  
                                transitionName="list-info"
                                transitionEnterTimeout={800}
                                transitionLeaveTimeout={800}
                            >
                                {this.state.commentData.map((comment, key) => (
                                    <ListItem
                                        key={key}
                                        primaryText={comment.context}
                                        secondaryText={`${comment.userInfo.nickName} 发表于 ${new Date(comment.commitTime).toLocaleString()}`}
                                        leftAvatar={<Avatar src={`/${comment.userInfo.compressPicture}`} />}
                                    />
                                ))}
                            </ReactCSSTransitionGroup>
                            <div className="text-field">
                                <TextField
                                    fullWidth={true}
                                    floatingLabelText="写下你的留言吧"
                                    onChange={this.commentChange.bind(this)}
                                    value={this.state.commentText}
                                />
                                <RaisedButton label="发送" primary={true} onClick={this.publishComment.bind(this)}/>
                            </div>
                        </List>
                    </Paper>
                </div>):null;
        return ( 
            <PageContent className="detail-page">
                <div className="page-body">
                    <ReactCSSTransitionGroup 
                        component="div"  
                        transitionName="main-info"
                        transitionEnterTimeout={800}
                        transitionLeaveTimeout={800}
                    >
                        {main}
                    </ReactCSSTransitionGroup>
                </div>
            </PageContent>
        );
    }
}
