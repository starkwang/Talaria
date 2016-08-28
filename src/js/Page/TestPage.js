import React from 'react';
import {RaisedButton} from 'material-ui';
import Header from '../Component/Header';
import { Link } from 'react-router';
import eventProxy from '../Service/event';
import PageContent from '../Component/PageContent';
import user from '../Service/userService';
export default class TestPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        eventProxy.emit('change header',{
            title: 'Test Page',
            color: '#FF5252'
        });
        eventProxy.emit('show header');
    }
    render() {
        return ( 
            <PageContent>
                <div>test</div>
            </PageContent>
        );
    }
}
