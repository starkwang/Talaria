import React from 'react';
import eventProxy from '../Service/event';
import PageContent from '../Component/PageContent';
import api from '../Service/api';
import {Paper, Toolbar, ToolbarTitle, TextField, FloatingActionButton, SelectField, MenuItem} from 'material-ui';
import DoneAll from 'material-ui/svg-icons/action/done-all';
import { Link, browserHistory } from 'react-router';
import DropzoneComponent from 'react-dropzone-component';
export default class PublishPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 0,
            address: "深圳"
        };
    }
    componentDidMount(){
        eventProxy.emit('change header',{
            title: '闲鹅 - 发布商品',
            color: '#3f51b5'
        });
        eventProxy.emit('show header');
    }

    handleChange(e, type, value){
        this.state[type] = e.target.value || value;
        this.setState(Object.assign({},this.state));
    }

    publish(){
        var { goodName, freeCount, description, contact_tel, type, price, contact_qq, contact_wechat, image_url, compress_url, address, poster } = this.state;

        if(!(goodName&&freeCount&&description&&contact_tel&&type!=undefined&&price&&contact_qq&&contact_wechat&&address&&poster)){
            eventProxy.emit('show message', '发布失败，有重要信息为空哦=。=');
            return;
        }
        if(!(image_url&&compress_url)){
            eventProxy.emit('show message', '发布失败，忘记上传商品图片了？=。=');
            return;
        }
        api.item.publish({ goodName, freeCount, description, contact_tel, type, price, contact_qq, contact_wechat, image_url, compress_url, address, poster }).then(res => {
            if(res){
                eventProxy.emit('show message', '发布成功');
                browserHistory.push(`/detail/${res.goodID||0}`);
            }else{
                eventProxy.emit('show message', '发布失败 x_x');
            }
        })
    }

    onUpload(e){
        var result = JSON.parse(e.xhr.response);
        var imageURL = result.data['image'].split('/');
        var compressURL = result.data['compress_image'].split('/');
        this.state['image_url'] = '/img/' + imageURL[imageURL.length - 1];
        this.state['compress_url'] = '/img/' + compressURL[compressURL.length - 1];
    }

    render() {
        var uploadConfig = {
            iconFiletypes: ['.jpg', '.png', '.gif'],
            showFiletypeIcon: true,
            postUrl: '/api/new_photo',
            maxFiles: 1
        };
        return ( 
            <PageContent className="publish-page">
                <div className="page-body">
                    <Paper className="publish-box" zDepth={2}>
                        <Toolbar style={{backgroundColor:"#3f51b5",color:'#fff'}}>
                            <ToolbarTitle text="发布商品" />
                        </Toolbar>
                        <div className="body">
                            <div className="divide">
                                <TextField
                                    floatingLabelText="商品名"
                                    fullWidth={true}
                                    value={this.state["goodName"]}
                                    onChange={e => this.handleChange(e, 'goodName')}
                                />
                                <TextField
                                    floatingLabelText="商品简介"
                                    multiLine={true}
                                    fullWidth={true}
                                    rows={4}
                                    value={this.state["description"]}
                                    onChange={e => this.handleChange(e, 'description')}
                                />
                                <TextField
                                    floatingLabelText="剩余数量"
                                    fullWidth={true}
                                    value={this.state["contact_wechat"]}
                                    value={this.state["freeCount"]}
                                    onChange={e => this.handleChange(e, 'freeCount')}
                                />
                                <TextField
                                    floatingLabelText="价格"
                                    fullWidth={true}
                                    value={this.state["price"]}
                                    onChange={e => this.handleChange(e, 'price')}
                                />
                                <TextField
                                    floatingLabelText="广告语"
                                    fullWidth={true}
                                    value={this.state["poster"]}
                                    onChange={e => this.handleChange(e, 'poster')}
                                />
                            </div>
                            <div className="divide">
                                <DropzoneComponent 
                                    eventHandlers={{
                                        success: this.onUpload.bind(this)
                                    }}
                                    config={uploadConfig}
                                />
                                <div className="select-field">
                                    <SelectField className="select" value={this.state['address']} onChange={(e, index, value) => this.handleChange(e, 'address', value)}>
                                        <MenuItem value={"深圳"} primaryText="深圳" />
                                        <MenuItem value={"北京"} primaryText="北京" />
                                        <MenuItem value={"上海"} primaryText="上海" />
                                        <MenuItem value={"广州"} primaryText="广州" />
                                        <MenuItem value={"成都"} primaryText="成都" />
                                    </SelectField>
                                    <SelectField className="select" value={this.state['type']} onChange={(e, index, value) => this.handleChange(e, 'type', value)}>
                                        <MenuItem value={0} primaryText="手机电脑" />
                                        <MenuItem value={1} primaryText="数码家电" />
                                        <MenuItem value={2} primaryText="房屋租售" />
                                        <MenuItem value={3} primaryText="票务卡券" />
                                        <MenuItem value={4} primaryText="家居日用" />
                                        <MenuItem value={5} primaryText="图书音像" />
                                        <MenuItem value={6} primaryText="纪念品" />
                                        <MenuItem value={7} primaryText="交通工具" />
                                        <MenuItem value={8} primaryText="服饰配饰" />
                                        <MenuItem value={9} primaryText="其它" />
                                    </SelectField>
                                </div>
                                
                                <TextField
                                    floatingLabelText="电话"
                                    fullWidth={true}
                                    value={this.state["contact_tel"]}
                                    onChange={e => this.handleChange(e, 'contact_tel')}
                                />
                                <TextField
                                    floatingLabelText="QQ"
                                    fullWidth={true}
                                    value={this.state["contact_qq"]}
                                    onChange={e => this.handleChange(e, 'contact_qq')}
                                />
                                <TextField
                                    floatingLabelText="微信"
                                    fullWidth={true}
                                    value={this.state["contact_wechat"]}
                                    onChange={e => this.handleChange(e, 'contact_wechat')}
                                />
                            </div>
                            <FloatingActionButton className="publish-btn" onClick={this.publish.bind(this)}>
                                <DoneAll />
                            </FloatingActionButton>
                        </div>
                    </Paper>
                </div>
            </PageContent>
        );
    }
}
