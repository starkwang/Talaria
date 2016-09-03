import React from 'react';
import eventProxy from '../Service/event';
import user from '../Service/userService';

import { Divider } from 'material-ui';

import PageContent from '../Component/PageContent';
import WaterFall from '../Component/WaterFall';

export default class CategoryPage extends React.Component {
    constructor(props) {
        super(props);
        this.titles = ['手机电脑','数码家电','房屋租售','票券卡务','家居日用','图书音像','纪念品','交通工具','服饰配饰','其它'];
        this.colors = ['#4caf50', '#17AFC6', '#3f51b5', '#cddc39'];
    }
    componentDidMount(){
        eventProxy.emit('change header',{
            title: '闲鹅 - 分类商品：' + this.titles[this.props.params.id],
            color: this.colors[parseInt(this.props.params.id)%this.colors.length]
        });
    }
    componentDidUpdate(){
        eventProxy.emit('change header',{
            title: '闲鹅 - 分类商品' + this.titles[this.props.params.id],
            color: this.colors[parseInt(this.props.params.id)%this.colors.length]
        });
        eventProxy.emit('waterfall update');
    }
    render() {
        return ( 
            <PageContent className="category-page">
                <div className="page-body">
                    <p className="title">{this.titles[this.props.params.id]}</p>
                    <Divider className="hr"/>
                </div>
                <div className="waterfall">
                    <WaterFall category={this.props.params.id} active={true}/>
                </div>
            </PageContent>
        );
    }
}
