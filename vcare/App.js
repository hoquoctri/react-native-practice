import React from "react"
import { StyleSheet, Text, View, Image, Button } from "react-native"

import Header from './screens/learn/Header'
import SendEmail from './screens/learn/SendEmail'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }
  
  render() {
    return (
      <View style={layout.screen}>
        <Header title="User Register"/>
        <SendEmail />
      </View>
    )
  }
}

const layout = StyleSheet.create({
  screen: {
    flex: 1
  }

})