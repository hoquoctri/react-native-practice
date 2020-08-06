import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Button, Alert } from 'react-native';
import Axios from 'axios';
import userinforService from '../services/UserInforService'

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    /* fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ data: json.movies });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
      */

      /* Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setTimeout(()=> {
          this.setState({ data: response.data, isLoading: false});
          console.log("Response: " + response.data);
        }, 2000);
      })
      .catch (error => {
          alert("Cannot connect with server. ");
          console.log(error);
      }) */
  }

  await_onPressFacebook = () => {
     /* Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setTimeout(()=> {
          this.setState({ data: response.data, isLoading: false});
          console.log("Response: " + response.data);
          let userList = response.data;
          alert("User ID : " + userList[0].id + ", User name: " +  userList[0].username);
        }, 2000);
      })
      .catch (error => {
          alert("Cannot connect with server. ");
          console.log(error);
      }) */

    let userInforList = userinforService.getUserInfo();
    console.log("User list"  + userInforList);
    //alert("User ID : " + userInforList[0].id + ", User name: " +  userInforList[0].username);
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={splash.container}>
        <ul>
          {this.state.personal}
        </ul>
        <View style={splash.box1}>
          <Text style= {splash.text}>VCARE</Text>
        </View>
        <View style={splash.box2}>
          <Button
              onPress={this.await_onPressFacebook}
              title="Sign with Google"
              color="#ff3300"
              accessibilityLabel="Learn more about this purple button"
          />

          <Button
            //onPress={onPressLearnMore}
            title="Sign with Facebook"
            color="#1c7ed6"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>

     /* <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.id}, {item.name}</Text>
            )}
          />
        )}
      </View> */

      

      
    );
  }
};

/**
 * START : Splash Screen
 */
const splash = StyleSheet.create({
  container: {
    flex: 1,
    //width: 500,
    //height: 500,
    backgroundColor : '#00ced1',
    justifyContent :  'center',
    //alignItems : 'center'
  },

  // header
  box1: {
    alignItems : 'center'
    
  },

  //content
  box2: {
    alignItems : 'stretch'
  },

  //footer
  box3: {
    flex: 1,
    width: 100,
    height: 100,
    alignSelf: 'center'
  },

  text: {
    fontSize: 30,
    color: '#000',
    justifyContent : 'center'
  },

  facebookBtn : {
    width : 50,
    height: 50
  },

  googleBtn : {
    width : 50,
    height: 50
  }
});
/**
 * END : Plash Screen
 */
