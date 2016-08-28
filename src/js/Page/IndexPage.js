import React from 'react';

import Header from '../Component/Header';
import { Link } from 'react-router';
import eventProxy from '../Service/event';
import PageContent from '../Component/PageContent';
import WaterFall from '../Component/WaterFall';
import WaterFallItem from '../Component/WaterFallItem';
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
        this.state = {
            tilesData: [[]]
        };
        this.titles = ['手机电脑','数码家电','房屋租售','票券卡务','家居日用','图书音像','纪念品','交通工具','服饰配饰','其它'];
    }
    componentWillMount(){
        eventProxy.emit("show loading");
        api.item.fetchIndexItems().then(res => {
            var tiles = [];
            for(var i = 0; i < 9; i++){
                res[i] && tiles.push(res[i])
            }
            this.setState({
                isShow: true,
                tilesData: tiles
            })
            $('.flexslider').flexslider({
                animation: "slide"
            });
            eventProxy.emit("hide loading");
        })
    }
    componentDidMount(){
        eventProxy.emit('change header',{
            title: '闲鹅',
            color: '#17AFC6'
        });
        eventProxy.emit('show header');
    }
    render() {
        var mainInfo = this.state.isShow?(<div className="main-info">
            <div className="flexslider">
                <ul className="slides">
                    <li>
                        <img src="/img/slide0.PNG" />
                    </li>
                    <li>
                        <img src="/img/slide1.PNG" />
                    </li>
                    <li>
                        <img src="/img/slide2.PNG" />
                    </li>
                    <li>
                        <img src="/img/slide3.PNG" />
                    </li>
                </ul>
            </div>
            {this.state.tilesData.map((category, index) => (
                <div key={index} className="waterfall">
                    <p className="title">{this.titles[index]}</p>
                    <Divider className="hr"/>
                    <GridList
                        cellHeight={400}
                        padding={20}
                        cols={3}
                        style={styles.gridList}
                    >
                        {category.map((tile, index) => (
                            <GridTile
                                key={index}
                                containerElement={<WaterFallItem url={`/detail/${tile.goodID}`} img={tile.compressImage} name={tile.goodName} price={tile.price}/>}
                            >
                                <img src={tile.img} />
                            </GridTile>
                        ))}
                    </GridList>
                </div>
            ))}
        </div>):null;

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
