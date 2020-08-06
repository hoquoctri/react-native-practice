import React from "react";
import { Modal, View, StyleSheet, TextInput, Button} from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = React.useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={true} animationType="slide" transparent={true} >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    /*flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",*/

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
