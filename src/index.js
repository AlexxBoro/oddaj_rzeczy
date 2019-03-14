import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Login from './components/Login';
import FormGeneral from './components/FormGeneral/FormGeneral';
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
                    <Route path='/form' component={FormGeneral} />
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
