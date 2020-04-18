import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from './rootreducer';

const title = "A Sample React Application";

const logger = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={store}>
        {title}
    </Provider>,
    document.getElementById("app"),
);

module.hot.accept();
