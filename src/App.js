import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import { View } from 'react-native';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyAYxEwQVjfTOgjoBWPVmKv4R13W5jZSgjI',
      authDomain: 'manager-88b21.firebaseapp.com',
      databaseURL: 'https://manager-88b21.firebaseio.com',
      projectId: 'manager-88b21',
      storageBucket: 'manager-88b21.appspot.com',
      messagingSenderId: '525408431234'
    };
    if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
}
    render() {
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
      return (
    <Provider store={store}>
      <View style={{ justifyContent: 'center', flex: 1, backgroundColor: '#b6b8c3' }}>
        <Router />
      </View>
    </Provider>
    );
  }
}
export default App;
