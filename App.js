import React, { Component } from 'react';
import { View } from 'react-native';
import {  Bars } from 'react-native-loader';

class App extends Component {

  render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Bars size={30} color="#340068" />
        </View>
      );
  }
}

export default App;
