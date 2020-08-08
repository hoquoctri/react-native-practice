import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import CardScreen from "./CardScreen";
import Color from "./constant/Color";
import Input from "./Input";
import NumberContainer from "./NumberContainer"

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chooseNumber = parseInt(enteredValue);

    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okey", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(chooseNumber);
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <CardScreen style={layout.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/>
      </CardScreen>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={layout.screen}>
        <Text style={layout.title}>Start the Screen Game</Text>
        <CardScreen style={layout.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={layout.input}
            blurOnSumit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />

          <View style={layout.buttonContainer}>
            <View style={layout.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Color.accent}
              />
            </View>
            <View style={layout.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Color.primary}
              />
            </View>
          </View>
        </CardScreen>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

/*
keyboardType='numeric' , 'numberpad'
*/

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
  },
  input: {
    width: 50,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  },
});

export default StartGameScreen;
