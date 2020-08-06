import React from "react";
import { View, StyleSheet, Text, Button, Card} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import CardScreen from './CardScreen';
import Color  from './constant/Color';
import Input  from './Input';

const StartGameScreen = (props) => {
  return (
    <View style={layout.screen}>
      <Text style={layout.title}>The Screen Game</Text>
      <CardScreen style={layout.inputContainer}>
        <Text>Select a Number</Text>
        <Input
        />

        <View style={layout.buttonContainer}>
            <View style={layout.button}>
                <Button title="Reset" onPress={() => {}} color={Color.accent} />
            </View>
            <View style={layout.button}>
                <Button title="Confirm" onPress={() => {}} color={Color.primary} />
            </View>
        </View>
      </CardScreen>
    </View>
  );
}

const layout = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    /*
    this move to Card Screen
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    borderRadius: 10*/
  },
  buttonContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
      width: 80,
  }
});

export default StartGameScreen;
