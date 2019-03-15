import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import FormGeneral from './components/From/FormGeneral';
import RegisterUser from './components/RegisterUser/RegisterUser';
import LoginUser from './components/LoginUser/LoginUser';

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
                    <Route path='/register' component={RegisterUser} />
                    <Route path='/login' component={LoginUser} />
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