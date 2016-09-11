/**
 * Created by natumsol on 16/7/24.
 */
import React from 'react';
import { Avatar, ListItem, Divider, Badge} from 'material-ui';
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-box">
                    <section>
                        <h1>title</h1>
                        <p>ppp</p>
                        <p>ppp</p>
                        <p>ppp</p>
                    </section>
                    <section>
                        <h1>title</h1>
                        <p>ppp</p>
                        <p>ppp</p>
                        <p>ppp</p>
                        <p>ppp</p>
                    </section>
                    <section>
                        <h1>title</h1>
                        <p>ppp</p>
                        <p>ppp</p>
                        <p>ppp</p>
                    </section>
                </div>
            </div>
        );
    }
}
