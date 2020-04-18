import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from './redux/reducers';
//import Todo from "./redux/containers/todoContainer";
import Routes from './routes';

const logger = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById("app"),
);

module.hot.accept();
