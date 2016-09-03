import React from 'react';

import api from '../Service/api';
import eventProxy from '../Service/event'
import WaterFallItem from './WaterFallItem';

import { IconButton, RefreshIndicator, GridList, GridTile } from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
        marginTop: 50,
        marginBottom: 24,
    },
};

export default class WaterFall extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tilesData: [],
            begin: 0
        }        
        eventProxy.on('waterfall update', id => {
            this.fetchData();
        })
    }

    componentDidMount(){
        if(this.props.active){
            this.fetchData();
        }
        window.onscroll = _ => {
            var height = $(".waterfall").height()+$(".waterfall").offset().top-$(window).height()-$(document).scrollTop();
            if(height < 10 && !this.fetching){
                this.fetchData();
            }
        }
    }

    componentWillUnmount(){
        window.onscroll = null;
    }

    fetchData(){
        this.fetching = true;
        this.showProgress();
        api.item.getCollection({
            type: parseInt(this.props.category),
            begin: this.state.begin,
            limit: 6
        }).then(result => {
            this.fetching = false;
            this.state.begin += 6;
            this.setState(Object.assign(this.state, {
                tilesData: this.state.tilesData.concat(result.goods),
                progress: false
            }))
        })
    }

    showProgress(){
        this.setState(Object.assign(this.state, {
            progress: true
        }));
    }

    hideProgress(){
        this.setState(Object.assign(this.state, {
            progress: false
        }));
    }

    render(){
        return (
            <div>
                <GridList
                    cellHeight={400}
                    padding={20}
                    cols={3}
                    style={styles.gridList}
                >
                        {this.state.tilesData.map((tile, index) => (
                            <GridTile
                                key={index}
                                containerElement={<WaterFallItem url={`/detail/${tile.goodID}`} img={tile.compressImage} name={tile.goodName} price={tile.price}/>}
                            >
                                <img src={tile.img} />
                            </GridTile>
                        ))}
                </GridList>
                {this.state.progress?<RefreshIndicator
                    size={40}
                    left={460}
                    top={0}
                    status="loading"
                    style={{
                        display: 'inline-block',
                        position: 'relative'
                    }}
                />:null}
            </div>
        );
    }

}