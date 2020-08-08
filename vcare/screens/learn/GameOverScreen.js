import React from 'react';
import {View, Text, StyleSheet, LayoutAnimation} from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={layout.screen}>
            <Text>The Game is Over!</Text>        
        </View>
    );
};

const layout = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;