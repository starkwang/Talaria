import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class PageContent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.isShow = true;
        this.setState({});
    }
    render() {
        var content = this.isShow?this.props.children:null;
        return (
            <ReactCSSTransitionGroup 
                    component="div"
                    className={this.props.className}
                    transitionName="page-content"
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={800}
            >
            <div className="page-content">
                {content}
            </div>
            </ReactCSSTransitionGroup>
            
        );
    }
}
