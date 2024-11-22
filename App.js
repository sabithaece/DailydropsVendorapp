import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./Screen/SignUpScreen";
import RegisterScreen from "./Screen/RegisterScreen";
import OtpScreen from "./Screen/OtpScreen";
import SelectVendorScreen from "./Screen/SelectVendorScreen";


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Select" component={SelectVendorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
