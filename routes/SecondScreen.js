import React from 'react';
import { View, Text } from 'react-native';

export default class SecondScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2E7D32' }}>
        <Text style={{color: 'white'}}>Second Screen</Text>
      </View>
    );
  }
}