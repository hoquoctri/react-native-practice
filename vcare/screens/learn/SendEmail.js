import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import axios from 'axios';

const SendEmail = () => {
    

    const [enteredFirstName, setEnteredFirstName] = useState("");
    const [enteredLastName, setEnteredLastName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");

    const inputFirstNameHandler = (enteredFirstName) => {
        setEnteredFirstName(enteredFirstName);
    }

    const inputLastNameHandler = (enteredLastName) => {
        setEnteredLastName(enteredLastName);
    }

    const inputEmailHandler = (enteredEmail) => {
        setEnteredEmail(enteredEmail);
    }

    const instance = axios.create({
        baseURL: 'http://192.168.40.1:8080/',
        timeout: 1000,
        auth: {
            username: 'admin',
            password: 'admin'
        }
    });
    
    const registerUser = async () => {
        if(enteredFirstName == "" || enteredLastName == "" || enteredEmail == "") {
            alert("First name, last name, email must be entered. ");
            return;
        }
        await instance.post('/user/create-user', {
            "createdDate": 1590637804201,
                "createdUser": "system",
                "updatedDate": null,
                "updatedUser": null,
                "id": null,
                "userName": "hoquoctri",
                "roleName": "Normal",
                "firstName": enteredFirstName,
                "lastName": enteredLastName,
                "gender": 1,
                "birthday": "1993-12-10",
                "email": enteredEmail,
                "phone": "0982702348",
                "address": "3/1B, ấp 4, xã Phú Xuân, Huyện Nhà Bè, Tp. Hồ Chí Minh",
                "coordinate": null
        }).then(function(response) {
            console.log(response);
            alert(response.data.responseMessage);
        }).catch(function(error) {
            console.log(error);
        });
    
    };

    return (
        <View style={layout.container}>
            <Text>First Name</Text>
            <TextInput placeholder="First Name" onChangeText={inputFirstNameHandler} value={enteredFirstName} />

            <Text>Last Name</Text>
            <TextInput placeholder="Last Name" onChangeText={inputLastNameHandler} value={enteredLastName}/>
            
            <Text>Email</Text>
            <TextInput placeholder="Email" onChangeText={inputEmailHandler} value={enteredEmail}/>
            <Button title="Register" onPress={registerUser} />
        </View>
    );
};



const layout = StyleSheet.create({
    container: {
        padding: 10
    }
    
});

export default SendEmail;

