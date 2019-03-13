import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Login from './components/Login';
import Form from './components/Form.General';
import Rej from './components/Rejestracja';

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <HashRouter>
                    <div>
                    <Route exact path='/' component={Main} />
                    <Route path='/rej' component={Rej} />
                    <Route path='/login' component={Login} />
                    <Route path='/form' component={Form} />
                    </div>
            </HashRouter>                  
        )
    }
}

document.addEventListener('DOMContentLoaded', function() {

    ReactDOM.render(
        <App />, 
        document.querySelector('#root')
    )

});  