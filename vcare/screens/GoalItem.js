import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const GoalItem = props => {
    return (
        <View style={styles.ListItemBox}>
            <TouchableOpacity  activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)} >
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
        </View>
        
    );
};

/* Note: Làm mờ
<TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
</TouchableOpacity>

Note: Hightlight
<TouchableHighlight onPress={props.onDelete}>
</TouchableHighlight>

Note: touch with hightlight
<TouchableNativeFeedback>

Note: touch without nothing
<TouchableWithoutFeedback>


*/


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        // marginVertical: 10,
        backgroundColor: '#e5f4fb',
        borderColor: 'black',
        borderWidth: 1
      },
      ListItemBox : {
        paddingTop: 50,
      }
});

export default GoalItem;