import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  CheckBox
} from "react-native";

import Header from "./Header";

const LoginScreen = () => {
  const [isSelected, setSelection] = React.useState(false);
  return (
    <View style={layout.mainContainer}>
      <View style={layout.inputContent}>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
          style={layout.image}
        />
        <Text> User ID</Text>
        <TextInput
          style={layout.input}
          placeholder="email or mobile phone number"
          onChangeText={(val) => val.trim()}
        />
        <Text>Password</Text>
        <TextInput
          style={layout.input}
          placeholder="your password"
          secureTextEntry={true}
        />
        
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={layout.btnItem}
        underlayColor="#fff"
      >
        <Text style={layout.btnLogin}>Login</Text>
      </TouchableOpacity>

      <View style={layout.checkboxContainer} >
        <CheckBox 
          value={isSelected}
          onValueChange={setSelection}
        />
        <Text style={layout.lable} >Remember login </Text>
      </View>


      <View style={layout.inputContent}>
        <Text>Or </Text>
      </View>
      
      <TouchableOpacity
        activeOpacity={0.8}
        style={layout.btnLoginGoogle}
        underlayColor="#fff"
      >
        <Text style={layout.btnLogin}>Google</Text>
        
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={layout.btnLoginFacebook}
        underlayColor="#fff"
      >
        <Text style={layout.btnLogin}>Facebook</Text>
      </TouchableOpacity>


    </View>
  );
};

/*
Note:
 <Button style={layout.btnItem} title="Login" />
  <Button style={layout.btnItem} title="Exit" />


  <View style={layout.inputContent}>
        <Text> User ID</Text>
        <TextInput
          style={layout.input}
          placeholder="email or mobile phone number"
          onChangeText={(val) => val.trim()}
        />
        <Text>Password</Text>
        <TextInput style={layout.input} placeholder="your password" secureTextEntry={true}/>
      </View>

      <TouchableHighlight style={layout.btnItem} underlayColor="#fff">
        <Text style={layout.btnLogin}>Login</Text>
      </TouchableHighlight>

      // text button
      <Text style={layout.btnLogin}>Google</Text>
      <Text style={layout.btnLogin}>Facebook</Text>

      <Image style={layout.icon} source={require('../../screens/img/icon/icons8-google-512.png') } />
      <Image style={layout.icon} source={require('../../screens/img/icon/icons8-facebook-240.png') } />

*/

const layout = StyleSheet.create({
  mainContainer: {
    paddingTop: "10%",
    flexDirection: "column",
  },
  inputContent: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    margin: 10,
    borderRadius: 30,
    textAlign: 'center'
  },
  btnGroup: {
    //width: "60%",
    //flexDirection: "column",
    //justifyContent: "center"
  },
  btnItem: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  btnLogin: {
    color: "#fff",
    textAlign: "center",
  },

  btnLoginGoogle: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#c92a2a",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  btnLoginFacebook: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#339af0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"

  },
  image: {
    width: 100,
    height: 100,
  },

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginLeft: 30
  },
  lable: {
    margin: 8
  },
  icon: {
    width: 50,
    height: 50,
  }

});

export default LoginScreen;
