import { browserHistory } from 'react-router';

var path = {
    to: function(route){
        var base = window.location.host == 'blog.starkwang.com' ? '/Talaria' : '';
        browserHistory.push(base + route);
    },
    parse: function(route){
        var base = window.location.host == 'blog.starkwang.com' ? '/Talaria' : '';
        return base + route;
    }
}

export default path;