import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, Link, IndexRoute, Redirect } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Base from './Page/Base';
import IndexPage from './Page/IndexPage';
import TestPage from './Page/TestPage';
import LoginPage from './Page/LoginPage';
import SignupPage from './Page/SignupPage';
import DetailPage from './Page/DetailPage';
import PublishPage from './Page/PublishPage';
import userCenter from './Page/userCenter';
import CategoryPage from './Page/CategoryPage';


import {MuiThemeProvider} from 'material-ui';

injectTapEventPlugin();

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var base = window.location.host == 'blog.starkwang.com' ? 'Talaria/' : '';
        return (
            <MuiThemeProvider>
                <Router history={browserHistory}>
                    <Route path={`/${base}`} component={Base}>
                        <IndexRoute component={IndexPage} />
                        <Route path='test' component={TestPage}/>
                        <Route path='login' component={LoginPage}/>
                        <Route path='signup' component={SignupPage}/>
                        <Route path='detail/:id' component={DetailPage}/>
                        <Route path='publish' component={PublishPage}/>
                        <Route path='category/:id' component={CategoryPage}/>
                    </Route>
                </Router>
            </MuiThemeProvider>
        );
    }
}

render(<App/>, document.getElementById('app'));

