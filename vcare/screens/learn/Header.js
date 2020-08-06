import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
    return (
        <View style={layout.header}>
            <Text style={layout.headerTitle}>{props.title}</Text>
        </View>
    );
}

const layout = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center'
   },
   headerTitle: {
       color: 'black',
       fontSize: 18
   }
});

export default Header;