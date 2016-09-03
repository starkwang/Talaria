import React from 'react';

import Header from '../Component/Header';
import { Link } from 'react-router';
import eventProxy from '../Service/event';
import PageContent from '../Component/PageContent';
import WaterFall from '../Component/WaterFall';
import WaterFallItem from '../Component/WaterFallItem';
import ImageGallery from 'react-image-gallery';
import api from '../Service/api';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {GridList, GridTile, IconButton, RaisedButton, Divider} from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 960,
        height: 'auto',
        overflowY: 'auto',
        marginBottom: 24,
    },
};

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        eventProxy.emit("show loading");
        api.item.fetchIndexItems().then(res => {
            this.setState({
                isShow: true
            })
            eventProxy.emit("hide loading");
        })
    }
    componentDidMount() {
        eventProxy.emit('change header', {
            title: '闲鹅',
            color: '#17AFC6'
        });
        eventProxy.emit('show header');
    }
    render() {
        var galleryImage = [
            {
                original: 'http://lorempixel.com/1000/600/nature/1/'
            }, {
                original: 'http://lorempixel.com/1000/600/nature/2/'
            }, {
                original: 'http://lorempixel.com/1000/600/nature/3/'
            }
        ];
        var mainInfo = this.state.isShow ? (
            <div className="main-info">
                <ImageGallery
                    items={galleryImage}
                    showThumbnails={false}
                    />
            </div>

        ) : null;

        return (
            <PageContent className="index-page">
                <div className="page-body">
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="main-info"
                        transitionEnterTimeout={800}
                        transitionLeaveTimeout={800}
                        >
                        {mainInfo}
                    </ReactCSSTransitionGroup>
                </div>
            </PageContent>
        );
    }
}
