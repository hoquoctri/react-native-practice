import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button, Picker, Platform} from 'react-native';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustAlert from '../../screens/learn/pop-up/valert'

const SendEmail = () => {
    const [enteredUserName, setEnteredUSerName] = useState("");
    const [enteredFirstName, setEnteredFirstName] = useState("");
    const [enteredLastName, setEnteredLastName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [selectedValue, setSelectedValue] = useState("Male");
    const [enteredMobilePhone, setEnteredMobilePhone] = useState("");
    const [enteredAddess, setEnteredAddress] = useState("");
    const [enteredBirthday, setEnteredBirthday] = useState("");
    
    //datatime
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimePicker = () => {
        showMode('time');
    };
    
    const inputFirstNameHandler = (enteredFirstName) => {
        setEnteredFirstName(enteredFirstName);
    }

    const inputLastNameHandler = (enteredLastName) => {
        setEnteredLastName(enteredLastName);
    }

    const inputEmailHandler = (enteredEmail) => {
        setEnteredEmail(enteredEmail);
    }

    const inputMobilePhoneHandler = (mobilePhone) => {
       setEnteredMobilePhone(mobilePhone);
    }

    const inputAddressHandler = (address) => {
        setEnteredAddress(address);
     }

    const instance = axios.create({
        baseURL: 'http://172.29.77.5:8080/',
        timeout: 1000,
        auth: {
            username: 'admin',
            password: 'admin'
        }
    });
    
    const registerUser = async () => {
        if(enteredFirstName == "" || enteredLastName == "" || enteredEmail == "") {
            //CustAlert.info("First name, last name, email must be entered. ");
            let a = CustAlert.confirm("First name, last name, email must be entered. ");
            console.log(a);
            return;
        }
        await instance.post('/user/create-user', {
                "userName": enteredFirstName + enteredLastName,
                "roleName": "Normal",
                "firstName": enteredFirstName,
                "lastName": enteredLastName,
                "gender": 1,
                "birthday": "1993-12-10",
                "email": enteredEmail,
                "phone": enteredMobilePhone,
                "address": enteredAddess,
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
            <Text>User name</Text>
            <TextInput placeholder="User name" value={enteredUserName}/>

            <Text>First Name</Text>
            <TextInput placeholder="First Name" onChangeText={inputFirstNameHandler} value={enteredFirstName} />

            <Text>Last Name</Text>
            <TextInput placeholder="Last Name" onChangeText={inputLastNameHandler} value={enteredLastName}/>
            
            <Text>Email</Text>
            <TextInput placeholder="Email" onChangeText={inputEmailHandler} value={enteredEmail}/>

            <Text>Gender</Text>
            <Picker selectedValue={selectedValue} 
                onValueChange={(itemValue, itemIndex)=>setSelectedValue(itemValue)}
            >
                <Picker.Item label="Male" value="1" />
                <Picker.Item label="Female" value="0" />
            </Picker>

            <Text>Birthday</Text>
            <TextInput placeholder="choose birthday"  onTouchEnd={showDatepicker} value={date.toDateString()}/>
            
            {show && (
                <DateTimePicker 
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
                )}

            <Text>Mobile phone</Text>
            <TextInput placeholder="xxx-xxxx-xxxx" onChangeText={inputMobilePhoneHandler}/>

            <Text>Address</Text>
            <TextInput placeholder="address, street, ward, district, city/province,..."
            multiline={true}
            numberOfLines={4}
            onChangeText={inputAddressHandler}
            />

            <Button title="Register" onPress={registerUser} />
        </View>
    );

    
};

/*
    <Button onPress={showDatepicker} title="Show date picker!" />
    <Button onPress={showTimePicker} title="Show time picker!" />
*/

const layout = StyleSheet.create({
    container: {
        padding: 10
    }
    
});

export default SendEmail;

