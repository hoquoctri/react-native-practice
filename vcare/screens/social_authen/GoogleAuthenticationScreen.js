import React, { useState, useEffect } from "react";
import { View, Text, StatusBar, LayoutAnimation } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "react-native-google-signin";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

export default function GoogleAuthenticationScreen() {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { accessToken, idToken } = await GoogleSignin.signIn;
      setloggedIn(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert("Cancel");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert("Signin in progress");
        //operation (f.e sign in in progress already)
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert("PLAY_SERVICES_NOT_AVAILABLE");
        //play services not available or outdated
      } else {
        // some other error happened.
      }
    }
  };

  signOut = async () => {
    try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        setloggedIn(false);
        setuserInfo([]);
    } catch (error) {
        console.error(error);
    }
  };

  useEffect(()=> {
      GoogleSignin.configure({
          scopes: ['email'],
          webClientId: '',
          offlineAccess: true // if you want to access Google API on behalf of the user from Your servers.
      });
  }, []);
  return (<>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={layout.scrollView}
        >
            <Header />

            <View style={layout.body}>
                <View style={layout.sectionContainer}>
                    <GoogleSigninButton 
                        style={{width: 192, height: 48}}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={this._signIn}
                    />

                </View>
                <View style={layout.buttonContainer}>
                    {!loggedIn && <Text>You are currently logged out</Text>}
                    {loggedIn && (
                        <Button 
                            onPress={this.signOut}
                            title="Log out"
                            color="red"
                            ></Button>

                    )}
                </View>
            </View>

        </ScrollView>
    </SafeAreaView>
  </>);
}
