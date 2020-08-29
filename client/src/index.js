import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './18next';
import {BrowserRouter} from "react-router-dom";
import rootReducer from "./store/reducers/rootReducer";
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import HomePageLoading from "./components/HomePageLoading/HomePageLoading";


const store = createStore(rootReducer,compose(
     applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
const app =
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={HomePageLoading}>
                <App />
            </Suspense>
        </BrowserRouter>
    </Provider>


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
