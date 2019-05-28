import React, { Component } from "react";
// import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk"; //Wiring up the middle ware :)

import reducers from "./reducers";
// import LoginForm from "./components/LoginForm";
import Router from "./Router";

class App extends Component {
  componentWillMount() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCoMNaVyDwUmTdYtiKNBicYXuBku-ITq7o",
      authDomain: "redux-crud-app.firebaseapp.com",
      databaseURL: "https://redux-crud-app.firebaseio.com",
      projectId: "redux-crud-app",
      storageBucket: "redux-crud-app.appspot.com",
      messagingSenderId: "670219992306",
      appId: "1:670219992306:web:46ac81d43667da05"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
        {/* <LoginForm /> */}
        {/* <View>
          <Text>Bismillah Redux Manager Project</Text>
        </View> */}
      </Provider>
    );
  }
}

export default App;
