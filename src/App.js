import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from "./reducers"
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
          apiKey: "AIzaSyDKl7Q4pRsmoN_BI90PTYDCeUIjtCeekao",
          authDomain: "rn-appauth.firebaseapp.com",
          databaseURL: "https://rn-appauth.firebaseio.com",
          projectId: "rn-appauth",
          storageBucket: "rn-appauth.appspot.com",
          messagingSenderId: "1004109186473",
          appId: "1:1004109186473:web:3e354e2308044bc2"
        })
    }

  render() {
    return (
      <Provider store = {createStore(reducers)}>
      <View>
        <Text style = {{fontSize: 35 , textAlign : "center" , fontWeight : 'bold'}}>My Redux App</Text>
        <LoginForm/>
      </View>
      </Provider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
