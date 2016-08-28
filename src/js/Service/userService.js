/**
 * Created by natumsol on 16/7/23.
 */

import api from './api';
import eventProxy from '../Service/event';
var user = {
        isLogin: false,
        userInfo: null,
        getUserInfo: function() {
            if (this.userInfo) {
                return Promise.resolve(this.userInfo);
            } else {
                return api.user.initialize().then(result => result.status == 1 ? api.user.getUserInfo().then(res => {
                    user.userInfo = res.data;
                    return res.data;
                }) : Promise.resolve(null))
            }
        }
    } //  需要放在export前面,否则对外接口为空.
export default user;
