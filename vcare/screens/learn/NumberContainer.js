import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Color from './constant/Color'
const NumberContainer = props => {
    return (
        <View style={layout.container}>
            <Text style={layout.number}>{props.children}</Text>
        </View>
    );
};

const layout = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Color.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    number: {
        color: Color.accent,
        fontSize: 22
    }
});

export default NumberContainer;