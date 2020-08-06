import * as React from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Button, Alert } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

export default function Login() {
  const [enteredGoal, setEnteredGoal] = React.useState('');
  const [courseGoals, setCourseGoals] = React.useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHanlder = () => {
    //use with <ScrollView>
    // setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);

    //used with <FlatList>
    setCourseGoals(currentGoals => [...courseGoals, {key: Math.random().toString(), value: enteredGoal}]);

  }

  /**
   const addGoalHanlder = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
  }
   */
 
  return (
    <View style={styles.container}>
      <View>
        <TextInput 
          style={styles.input}
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />

        <Button title="Add" onPress={addGoalHanlder} />
      </View>
      
      <FlatList
        /*
          1. keyExtractor: tell the list to use the id for the react keys
          intead of the default key property.
          2. data: 
          */ 
        
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => (
        <View style={styles.listItem}>
          <Text>{itemData.item.value}</Text>
        </View>
      )} />
    </View>
    );
};

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
  container: {
    flex: 1,
    backgroundColor : '#00ced1',
    justifyContent :  'space-between'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }

  
});
/**
 * END : Plash Screen
 */
