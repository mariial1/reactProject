import React, {Component} from 'react';
import {users} from "./1react/react1";
import UserComponent from "./123/UserComponent";


class App extends Component {
  render() {

    return (
        <div>
            {
                users.map(user => (<UserComponent item={user}/>))
            }
        <div/>
        );
  }
}

export default App;
