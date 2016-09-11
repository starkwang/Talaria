import React from 'react';
import componentStatus from '../Service/componentStatus';
import eventProxy from '../Service/event';
import path from '../Service/path';
import { Drawer, MenuItem, Divider, Subheader } from 'material-ui';
import IndexIcon from 'material-ui/svg-icons/action/home';
import LoginIcon from 'material-ui/svg-icons/action/perm-identity';
import SignupIcon from 'material-ui/svg-icons/communication/contacts';
import PublishIcon from 'material-ui/svg-icons/action/offline-pin';
import CategoryIcon0 from 'material-ui/svg-icons/action/important-devices';
import CategoryIcon1 from 'material-ui/svg-icons/hardware/headset';
import CategoryIcon2 from 'material-ui/svg-icons/action/account-balance';
import CategoryIcon3 from 'material-ui/svg-icons/action/receipt';
import CategoryIcon4 from 'material-ui/svg-icons/content/weekend';
import CategoryIcon5 from 'material-ui/svg-icons/action/chrome-reader-mode';
import CategoryIcon6 from 'material-ui/svg-icons/action/card-giftcard';
import CategoryIcon7 from 'material-ui/svg-icons/action/motorcycle';
import CategoryIcon8 from 'material-ui/svg-icons/notification/wc';
import CategoryIcon9 from 'material-ui/svg-icons/action/tab-unselected';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    componentDidMount(){
        eventProxy.on('show sidebar', _ => {
            this.setState({
                open: true
            });
        });
        eventProxy.on('hide sidebar', _ => {
            this.setState({
                open: false
            });
        })
    }
    toRoute(route){
        this.setState({
            open: false
        });
        path.to(route);
    }
    render() {
        return (
            <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
            >
                <Subheader>Section</Subheader>
                <MenuItem onTouchTap={_ => this.toRoute('/')} leftIcon={<IndexIcon/>}>Index</MenuItem>
                <MenuItem onTouchTap={_ => this.toRoute('/login')} leftIcon={<LoginIcon/>}>Login</MenuItem>
                <MenuItem onTouchTap={_ => this.toRoute('/signup')} leftIcon={<SignupIcon/>}>Signup</MenuItem>
                <Divider/>
                <Subheader>Section</Subheader>
                <MenuItem leftIcon={<CategoryIcon0/>}>Item</MenuItem>
                <MenuItem leftIcon={<CategoryIcon1/>}>Item</MenuItem>
                <MenuItem leftIcon={<CategoryIcon2/>}>Item</MenuItem>
                <MenuItem leftIcon={<CategoryIcon3/>}>Item</MenuItem>
                <MenuItem leftIcon={<CategoryIcon4/>}>Item</MenuItem>
                <MenuItem leftIcon={<CategoryIcon5/>}>Item</MenuItem>
                <MenuItem leftIcon={<CategoryIcon6/>}>Item</MenuItem>
                <MenuItem onTouchTap={_ => this.toRoute('/category/7')} leftIcon={<CategoryIcon7/>}>Item</MenuItem>
                <Divider/>
            </Drawer>
        )
    }
}
