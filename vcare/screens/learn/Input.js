import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
    return <TextInput {...props} style={{...layout.input, ...props.layout}} />
};

const layout = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;