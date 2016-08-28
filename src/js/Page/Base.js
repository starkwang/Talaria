import React from 'react';
import Header from '../Component/Header';
import Loading from "../Component/Loading";
import SideBar from '../Component/SideBar';
import Message from '../Component/Message';
export default class Base extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <Loading status="hide"/>
                <SideBar/>
                <Message/>
                {this.props.children}
            </div>
        );
    }
}
