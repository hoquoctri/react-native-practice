import React from "react"
import { StyleSheet, Text, View, Image, Button } from "react-native"

import Header from './screens/learn/Header'
import SendEmail from './screens/learn/SendEmail'

import AppTabbar from './stacks/app.tabs';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import appReducers from './redux/reducers';

export const store = createStore(
  appReducers
)


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
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppTabbar />
        </View>
      </Provider>
    )
  }
}

const layout = StyleSheet.create({
  screen: {
    flex: 1
  }

})