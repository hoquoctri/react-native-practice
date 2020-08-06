import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from '../../navigation/BottomTabNavigator';
import LinkingConfiguration from '../../navigation/LinkingConfiguration';

const Stack = createStackNavigator();

const HomeScreen = () => {
  let view = (
    <View style={layout.mainContainer}>
      

      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
    </View>
  );

  return view;
};

/*
URI: https://www.sapo.vn/blog/wp-content/uploads/2014/10/banner-quang-cao-du-khach-hang-hieu-qua-3.jpg

<View style={layout.greetingContainer}>
        <Image
          style={layout.greetingAdv}
          source={{
            uri:
              "https://www.sapo.vn/blog/wp-content/uploads/2014/10/banner-quang-cao-du-khach-hang-hieu-qua-3.jpg",
          }}
          onPress
        />
</View>
*/

const layout = StyleSheet.create({
  mainContainer: {
    /*width: "100%",
    paddingTop: "5%", */
    flex: 1,
    backgroundColor: '#fff'
  },
  greetingContainer: {
    padding: 10,
    backgroundColor: "#d8dee9",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  greetingAdv: {
    width: 450,
    height: 100,
    paddingLeft: 10,
    fontSize: 20,
  },
});

export default HomeScreen;
