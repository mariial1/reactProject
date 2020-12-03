import React, {Component} from 'react';
import {users} from "./1react/react1";
import UserComponent from "./123/UserComponent";


class App extends Component {
  render () {

    return (
        <div>
            {
                users.map((user, index) => {
                    let clsx = index % 2 ? 'event' : 'odd';

                    return (
                        <UserComponent
                            item={user}
                            cls={clsx}
                            key={index}/>);
                })
            }
        </div>
        );
  }
}

export default App;
