import React, {Component} from 'react';
import {users} from "../1react/react1";

class UserComponent extends Component {
    render() {
    let {item} = this.props;
        return (
            <div>{item.name} - {item.age} - {item.status.toString()}</div>
        );
    }
}

export default UserComponent;