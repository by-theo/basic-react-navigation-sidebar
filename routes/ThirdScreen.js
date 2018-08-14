import React from 'react';
import { View, Text } from 'react-native';

export default class ThirdScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1565C0' }}>
        <Text>Third Screen</Text>
      </View>
    );
  }
}