import React from 'react';
import {Text, View, NativeModules, StyleSheet} from 'react-native';

const Header = () => {
    return (
        <View style={header.bgHeader}>
            <Text style={header.headerStyles}>App Header</Text>
        </View>
    )
};

const header = StyleSheet.create({
    bgHeader: {
        backgroundColor: '#0288D1',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        height: 45,
        shadowColor: '#ffffff',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        position: 'relative'
    },
    headerStyles: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        color: '#fff'
    }
});

export default Header;