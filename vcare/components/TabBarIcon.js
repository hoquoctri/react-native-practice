import { Ionicons, AntDesign, IconWithBadge , Fontisto } from '@expo/vector-icons';
import { Badge, Text, View, SafeAreaView } from "react-native";

import * as React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <AntDesign 
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    >
      
      {props.badget > 0  && (
        <Text style={{ color: 'red', fontSize: 10, fontWeight: 'bold' }}>
           10
        </Text>

        
      )}
    </AntDesign>
  );
}


