import ajax from "superagent";

function POST(url, data) {
    return new Promise((resolve, reject) => {
        ajax.post(url)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(JSON.stringify(data))
            .end(function(err, res) {
                if (err || !res.ok) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
    }).then(res => res.body);
}

function GET(url, params) {
    return new Promise((resolve, reject) => {
        ajax.get(url)
            .query(params)
            .end(function(err, res) {
                if (err || !res.ok) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
    }).then(res => res.body);
}


function fakeRequest(data, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            resolve(data);
        }, timeout);
    })
}

var user = {
    //用户登录,params: 
    //username[string]
    //password[string]
    login: params => POST('/api/login', params),
    logout: () => POST('/api/logout'),
    signup: params => POST('/api/register', params),
    getUserInfo: () => GET('/api/getuser'),
    initialize: () => GET('/api/active'),
    updateUserInfo: (params) => POST('/api/updateuser', params),
    getMyGoods: (params) => POST('api/goods', params),
    getMyOrder: (params) => POST('api/list_buyer_orders', params)
}

var item = {
    //获取商品信息,params:
    //good_id[string]
    get: params => {
        var data = {
            good_id: parseInt(params.good_id)
        }
        return POST('/api/good', params).then(result => result.status ? result.data : null);
    },
    getCollection: params => {
        var userID = params.userID || 0;
        var type = params.type || 0;
        var begin = params.begin || 0;
        var limit = params.limit || 0;
        return POST('/api/goods', { userID, type, begin, limit }).then(result => result.status ? result.data : null);;
    },
    //拉取主页显示的商品,no params
    fetchIndexItems: params => {
        return POST('/api/homepage_goods', {
            limit: 6
        }).then(result => {
            return result.status ? result.data : null
        })
    },
    publish: params => POST('/api/new_good', params).then(res => res.status == 1 ? res.data : undefined)
}

var comment = {
    get: params => POST('/api/comment/get', params),
    publish: params => POST('/api/comment/insert', params)

}

var order = {
    newOrder: params => POST('/api/create_order', params)
}


export default {
    user: user,
    item: item,
    comment: comment,
    order: order
}