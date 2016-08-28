/**
 * Created by natumsol on 16/7/24.
 */
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import api from '../Service/api';

import { IconButton, Avatar, RefreshIndicator, List, ListItem, Divider,} from 'material-ui';
export default class WaterfallList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tilesData: [],
            type: this.props.type,
            api: this.props.api,
            active: this.props.active,
            target: this.props.target,
            start:0,
            limit:10,
            data: this.props.data,
            params: this.props.params,
            isShow: false
        }
    }
    componentDidMount(){
        if(this.props.active){
            this.fetchData();
        }
        window.onscroll = _ => {
            var height = $(this.state.target).height()+$(this.state.target).offset().top-$(window).height()-$(document).scrollTop();
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
        api[this.state.type][this.state.api](Object.assign({
            begin: this.state.start,
            limit: this.state.limit
        },this.props.params)).then(res => {
            this.fetching = false;
            var tilesData = this.state.tilesData.concat(res.data[this.state.data]);
            this.setState(Object.assign(this.state, {
                tilesData: tilesData,
                progress: false,
                begin: tilesData.length + 1,
                isShow: true
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
        var SubComponent = this.props.subComponent;
        var mainInfo = this.state.isShow && this.state.tilesData.length  ? this.state.tilesData.map((tile, index) => (
             <SubComponent tile={tile} key={index} />
            )) : null;
        return (
            <div>
                <List >
                    <ReactCSSTransitionGroup
                        component="div"
                        transitionName="main-info"
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}
                    >
                        {mainInfo}
                    </ReactCSSTransitionGroup>
                </List>
                {this.state.progress ? <div className="loading-container">
                    <RefreshIndicator
                        size={40}
                        left={10}
                        top={10}
                        status="loading"
                        style={{
                        display: 'inline-block',
                        position: 'relative',
                        margin:'0 auto'
                    }}
                    />
                    </div>:null}
            </div>
        );
    }

}