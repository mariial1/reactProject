import React, {Component} from 'react';
import {users} from "../1react/react1";
import './User.css'

class UserComponent extends Component {
    render() {
    let {item, cls} = this.props;
        return (
            <div className={cls}>{item.name} - {item.age} - {item.status.toString()}</div>
        );
    }
}

export default UserComponent;