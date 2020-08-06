import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'; 
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import BadgeIcon from "../components/BadgeIcon";
import HomeMenuItem from "../screens/layout_practice/HomeMenuItem";
import LinksScreen from "../screens/LinksScreen";
import MessageScreen from "../screens/layout_practice/MessageScreen";
import ActivityScreen from "../screens/layout_practice/ActivityScreen";
import AccountScreen from "../screens/layout_practice/AccountScreen";


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeMenuItem}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          title: "Activity",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="clockcircleo" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          title: "Message",
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon focused={focused} name="mail" badget={10} />
          ),
        }}
      />

        <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: "Account",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons focused={!focused} name="ios-person" size={24} color="black" />
            
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
/* 
<TabBarIcon focused={focused} name="mail" />
*/

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "Home";
    case "Activity":
      return "Your Activity";
    case "Message":
      return "Message";
  }
}
