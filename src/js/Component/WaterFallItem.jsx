import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui';
import { Link } from 'react-router';
export default class WaterFallItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card className="waterfall-item">
                <Link to={this.props.url}>
                    <CardMedia>
                        <img src={this.props.img}/>
                    </CardMedia>
                    <CardTitle title={this.props.name} subtitle={'￥' + this.props.price} subtitleStyle={{color:"#EF5350"}}/>
                </Link>
            </Card>
        );
    }
}
