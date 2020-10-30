import React, {useState} from 'react';
import {Alert} from 'react-native';

class VAlert{
    info(message) {
        alert(message);
    }

    confirm(message) {
        Alert.alert(
            "Confirm",
            message,
            [
              {
                text: "Cancel",
                onPress: () => {return false},
                style: "cancel"
              },
              { text: "OK", onPress: () => {return true} }
            ],
            { cancelable: false }
          );
    }
}

const CustAlert = new VAlert();
export default CustAlert;