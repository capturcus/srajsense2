import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './app/store.js';
import MainContainer from './app/containers/Main.js';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <MainContainer />
        </View>
      </Provider>
    );
  }
}