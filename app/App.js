import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigation/appNavigation';

import { Provider } from "react-redux";

import store from "./store";
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
   </Provider>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
