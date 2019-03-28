import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
  } from 'react-router-dom';

import Main from './components/Main';
import { pagingRoutes, routes } from "./routes";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Route exact path='/' component={Main}/>
                    {
                        routes.map((route, i) => <Route index={i} path={'/' + route.route} component={Main}/>)
                    }
                    {
                        pagingRoutes.map((route, i) => <Route index={i} path={'/' + route.route}
                                                              component={route.component}/>)
                    }
                </div>
            </HashRouter>
        )
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App/>,
        document.querySelector('#root')
    )

});
