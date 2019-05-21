import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import firebase from 'firebase';
import reducers from "./reducers" 
import ReduxThunk from 'redux-thunk';
import Router from './Router';  

firebase.initializeApp({
  apiKey: "AIzaSyDKl7Q4pRsmoN_BI90PTYDCeUIjtCeekao",
  authDomain: "rn-appauth.firebaseapp.com",
  databaseURL: "https://rn-appauth.firebaseio.com",
  projectId: "rn-appauth",
  storageBucket: "rn-appauth.appspot.com",
  messagingSenderId: "1004109186473",
  appId: "1:1004109186473:web:3e354e2308044bc2"
})

export default class App extends Component{
  render() {
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}


