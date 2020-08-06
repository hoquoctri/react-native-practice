import React from 'react';
import {StyleSheet, View} from 'react-native';

import Header from './screens/learn/Header';
import StartGameScreen from './screens/learn/StartGameScreen'

export default function App() {
  return (
    <View style={layout.screen}>
      <Header title = "Guess a number" />
      <StartGameScreen />
    </View>
  );
}

const layout = StyleSheet.create({
  screen: {
    flex: 1
  }
});