import React from 'react';
import { View, Text } from 'react-native';

export default class FirstScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C62828' }}>
        <Text style={{color: 'white'}}>First Screen</Text>
      </View>
    );
  }
}