import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View , Text} from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import Login from './screens/Login';
import Greeting from './screens/ProsExample';
import LoginScreen from './screens/layout_practice/LoginScreen';
import HomeScreen from './screens/layout_practice/HomeScreen'

const Stack = createStackNavigator();

export default function App(props) {
  // const isLoadingComplete = useCachedResources();
  //let isComplete = new VCareBasic().h;
  //console.debug("isComplete" + isComplete);
  
  if (true) {
    return <HomeScreen />;

    /*
      Test with props.
    */
    return (
      <View style={{alignItems:'center', top: 50}} >
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          <Greeting name='Valeera' />
      </View>
  );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
