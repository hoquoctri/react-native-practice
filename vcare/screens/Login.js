import * as React from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";

export default function Login() {
  // const [enteredGoal, setEnteredGoal] = React.useState('');
  const [courseGoals, setCourseGoals] = React.useState([]);
  
  const [isAddMode, setIsAddMode] = React.useState(false);
  
  const addGoalHanlder = (goalTitle) => {
    //use with <ScrollView>
    // setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);

    //used with <FlatList>
    if (goalTitle == "") {
      alert("Không được để trống. ");
      return;
    } else if (checkDuplicateData(goalTitle) == true) {
      alert("Không được trùng phần tử. ");
      return;
    } else {
      setCourseGoals((currentGoals) => [
        ...courseGoals,
        { id: Math.random().toString(), value: goalTitle },
      ]);
    };

   ;
  };

  //remove item in list
  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

 function checkDuplicateData (items) {
   let result = false;
    for (let item of courseGoals) {
      if (item.value == items) {
        result = true;
        break;
      }
    }

    return result;
  }

  /**
   const addGoalHanlder = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
  }
   */

  return (
    <View style={styles.screen}>
     
      <GoalInput visible={isAddMode} onAddGoal={addGoalHanlder} />
      
      <FlatList
        /*
          1. keyExtractor: tell the list to use the id for the react keys
          intead of the default key property.
          2. data: 
          */

        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
        /**
         *  <Button visible={!isAddMode} title="Add new Goal"  onPress={() => setIsAddMode(true)}/>
         * Note:
         * <GoalItem title={itemData.item.value} />
         * 
        renderItem={itemData => (
        <View style={styles.listItem}>
          <Text>{itemData.item.value}</Text>
        </View>
         */
      />
    </View>
  );
}

/*
      <ScrollView>
        <View>
          {courseGoals.map((goal) => <Text style={splash.listItem}>{goal}</Text>)}
        </View> 
      </ScrollView>
*/

/**
 * START : Splash Screen
 */
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
/**
 * END : Plash Screen
 */
