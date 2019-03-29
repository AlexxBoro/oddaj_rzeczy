import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import FormGeneral from "./components/Form/FormGeneral";
import RegisterUser from "./components/RegisterUser/RegisterUser";
import LoginUser from "./components/LoginUser/LoginUser";

import { HashRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <>
          <Route exact path="/" component={Main} />
          <Route path="/register" component={RegisterUser} />
          <Route path="/login" component={LoginUser} />
          <Route path="/form" component={FormGeneral} />
        </>
      </HashRouter>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.querySelector("#root"));
});
