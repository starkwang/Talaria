import React from 'react';

import Header from '../Component/Header';
import { Link } from 'react-router';
import eventProxy from '../Service/event';
import PageContent from '../Component/PageContent';
import WaterFall from '../Component/WaterFall';
import WaterFallItem from '../Component/WaterFallItem';
import Footer from '../Component/Footer';
import ImageGallery from 'react-image-gallery';
import api from '../Service/api';
import path from '../Service/path';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {GridList, GridTile, IconButton, RaisedButton, Divider, Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui';
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
            title: 'header',
            color: '#17AFC6'
        });
        eventProxy.emit('show header');
    }
    render() {
        var galleryImage = [
            {
                original: path.parse('/static/img/banner1.jpg')
            }, {
                original: path.parse('/static/img/banner2.jpg')
            }, {
                original: path.parse('/static/img/banner3.jpg')
            }
        ];
        var mainInfo = this.state.isShow ? (
            <div className="main-info">
                <ImageGallery
                    items={galleryImage}
                    showThumbnails={false}
                    showBullets={true}
                    autoPlay={true}
                    />
                <h1 className="choose-title">Choose a Continent</h1>
                <img className="continent" src={path.parse("/static/img/index-main.jpeg") }/>

                <div className="card-collection">
                    <Card className="card">
                        <CardMedia>
                            <img src={path.parse("/static/img/index-main.jpeg") } />
                        </CardMedia>
                        <CardTitle title="Card title" subtitle="Card subtitle" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa.Aliquam erat volutpat.Nulla facilisi.
                            Donec vulputate interdum sollicitudin.Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                    </Card>

                    <Card className="card">
                        <CardMedia>
                            <img src={path.parse("/static/img/index-main.jpeg") } />
                        </CardMedia>
                        <CardTitle title="Card title" subtitle="Card subtitle" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa.Aliquam erat volutpat.Nulla facilisi.
                            Donec vulputate interdum sollicitudin.Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                    </Card>

                    <Card className="card">
                        <CardMedia>
                            <img src={path.parse("/static/img/index-main.jpeg") } />
                        </CardMedia>
                        <CardTitle title="Card title" subtitle="Card subtitle" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa.Aliquam erat volutpat.Nulla facilisi.
                            Donec vulputate interdum sollicitudin.Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                    </Card>
                </div>
                <Footer/>
            </div>

        ) : null;

        return (
            <PageContent className="index-page">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="main-info"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={800}
                    >
                    {mainInfo}
                </ReactCSSTransitionGroup>
            </PageContent>
        );
    }
}
