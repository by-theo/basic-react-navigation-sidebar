import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';
import AppNavigator from './navigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
