import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import Sass from "../css/main.scss";// Needed for webpack to know where to grab the Sass file so it can compile it. Not sure if there is a better way?
import {createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../store/reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from '../fbConfig'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
)

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
});
