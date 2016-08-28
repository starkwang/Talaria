/**
 * Created by natumsol on 16/7/23.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Card, Avatar, CardHeader, List, ListItem, Divider, Tabs, Tab, RadioButton, RadioButtonGroup} from 'material-ui';

import WaterfallList from '../Component/WaterfallList';
import Goods from "../Component/Goods"
import Order from "../Component/Order"
import UserInfo from "../Component/UserInfo"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

import eventProxy from '../Service/event';
import PageContent from '../Component/PageContent';
import user from '../Service/userService';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    tab: {
        background:"#fff",
        color:"#000"
    },
    checkbox: {
        marginBottom: 16,
        width: "150px",
        display: "inline-block"
    },
    checkboxContainer: {
        width: "450px",
        margin: "5px auto 0"
    }
};

export default class UserCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsList: false,
            orderList: false,
            orderType: 4,
            hack: true
        };
    }
    componentDidMount(){
        eventProxy.emit('change header',{
            title: '闲鹅 - 个人中心',
            color: '#cddc39'
        });
        eventProxy.emit('show header');
    }

    activeGoodsList(){
        this.setState(Object.assign(this.state, {
            goodsList: true
        }))

        this.forceUpdate();
    }
    activeOrderList(){
        this.setState(Object.assign(this.state, {
            orderList: true
        }))

        this.forceUpdate();
    }

    switchOrderType(event, value){
        this.setState(Object.assign(this.state, {
            hack: false
        }))
        this.setState(Object.assign(this.state, {
            orderType: value
        }))
        setTimeout(_ => {
            this.setState(Object.assign(this.state, {
                hack: true
            }))
        },0)
    }
    render() {
        var OrderWaterFall = this.state.hack?(<WaterfallList
            type="user"
            api="getMyOrder"s
            active={true}
            target=".ordersList"
            params={{
                status:parseInt(this.state.orderType),
            }}
            subComponent={Order}
            data="orders"
            ref="orderList"
        />):null;
        return (
            <PageContent >
                    <div style={{ position: 'relative', top: '-40px'}}>
                        <Tabs>
                            <Tab label="个人信息"  style={styles.tab} >
                                <div>
                                    <UserInfo />
                                </div>
                            </Tab>
                            <Tab label="我的发布" style={styles.tab} onActive={this.activeGoodsList.bind(this)}>
                                <div className="goodsList">
                                    <Card
                                        style={{
                                        backgroundColor: "rgba(255,255,255,0.8)",
                                        width:"100%",
                                        margin:"0 auto",
                                        position: "relative",
                                        paddingBottom: "40px"
                                    }}>
                                        {this.state.goodsList ? <WaterfallList
                                            type="user"
                                            api="getMyGoods"
                                            active={true}
                                            target=".goodsList"
                                            params={{
                                                userID:(user.userInfo && user.userInfo.id) || "",
                                                type:""
                                            }}
                                            subComponent={Goods}
                                            data="goods"
                                        />: null}
                                        </Card>
                                </div>
                            </Tab>
                            <Tab label="我的订单" style={styles.tab}  onActive={this.activeOrderList.bind(this)}>
                                <div>
                                    <Card
                                        style={{
                                        backgroundColor: "rgba(255,255,255,0.8)",
                                        width:"100%",
                                        margin:"0 auto",
                                        position: "relative",
                                        paddingBottom: "40px"
                                    }}>
                                        <List>
                                            <div style={styles.checkboxContainer} className="ordersList">
                                                <RadioButtonGroup name="orderType" defaultSelected="4" onChange={this.switchOrderType.bind(this)}>
                                                <RadioButton
                                                    label="所有订单"
                                                    style={styles.checkbox}
                                                    value="4"
                                                />
                                                <RadioButton
                                                    label="已完成"
                                                    style={styles.checkbox}
                                                    value="3"
                                                />
                                                <RadioButton
                                                    label="未完成"
                                                    style={styles.checkbox}
                                                    value="0"
                                                />
                                                </RadioButtonGroup>
                                            </div>
                                            <Divider />
                                            { this.state.orderList ? OrderWaterFall : null}
                                        </List>
                                        </Card>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
            </PageContent>
        );
    }
}
