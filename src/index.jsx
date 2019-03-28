import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, } from 'react-router-dom';

import Main from './components/Main.jsx';
import { pagingRoutes, routes } from "./routes";

// To powinno wylądować w oddzielnym pliku /klasie
class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <>
                    <Route exact path='/' component={Main}/>
                    {
                        routes.map((route, i) => <Route key={i} path={'/' + route.route} component={Main}/>)
                    }
                    {
                        pagingRoutes.map((route, i) => <Route key={i} path={'/' + route.route}
                                                              component={route.component}/>)
                    }
                </>
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
