import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import "client/scss/base.scss";
import store from 'common/store'
import routes from 'common/routes'
import {BrowserRouter as Router} from 'react-router-dom'
import { renderRoutes } from 'react-router-config' 

ReactDOM.render(
    <Provider store={store}>
        <Router store={store}>{renderRoutes(routes)}</Router>
    </Provider>,
document.getElementById("root"))