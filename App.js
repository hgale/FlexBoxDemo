import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1} />      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
  },
});
