import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  createNavigator,
  createNavigationContainer,
  TabRouter,
} from 'react-navigation';

import FirstScreen from '../routes/FirstScreen';
import SecondScreen from '../routes/SecondScreen';
import ThirdScreen from '../routes/ThirdScreen';

const MainRoutes = {
  FirstScreen: {
    screen: FirstScreen,
  },
  SecondScreen: {
    screen: SecondScreen,
  },
  ThirdScreen: {
    screen: ThirdScreen,
  },
};

const SideBar = ({navigation}) => {
  const {routes} = navigation.state;
  return (
    <View style={styles.sideBarContainer}>
      <View style={styles.sideBarContent}>
        {routes.map(route => (
          <TouchableOpacity
            onPress={() => navigation.navigate(route.routeName)}
            style={styles.sideBarTab}
            key={route.routeName}
          >
            <Text>{route.routeName}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const SideBarView = ({descriptors, navigation}) => {
  const {routes, index} = navigation.state;
  const descriptor = descriptors[routes[index].key];
  const ActiveScreen = descriptor.getComponent();
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <SideBar navigation={navigation}/>
      <ActiveScreen navigation={descriptor.navigation}/>
    </View>
  );
};

const CustomTabRouter = TabRouter(MainRoutes, {});

const MainTabs = createNavigationContainer(createNavigator(SideBarView, CustomTabRouter, {}));

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MainTabs/>
      </View>
    )
  }
}

const styles = {
  sideBarContainer: {
    width: 200,
    height: '100%',
  },
  sideBarContent: {
    flex: 1,
    backgroundColor: 'white',
    borderRightWidth: 0.5,
    borderColor: '#e0e0e0',
  },
  sideBarTab: {
    padding: 16,
  },
};