import * as React from "react";
import { View, StyleSheet } from "react-native";
import Header from './Header'

export default function MessageScreen() {
    return (
        <View>
            <Header />
            <View>
                <Text>Contents</Text>
            </View>
        </View>
    );
}
const layout = StyleSheet.create({

});
