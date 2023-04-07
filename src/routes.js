import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

import Home from '../src/pages/Home'
import SignUp from '../src/pages/SignUp'
import SignIn from '../src/pages/SignIn'
import Feed from '../src/pages/Feed'


const Stack = createStackNavigator();



const Routes = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
      options={{
        headerShown: false
      }}
      name="Home" component={Home} />

  <Stack.Screen
      options={{
        headerShown: false
      }}
      name="SignUp" component={SignUp} />

    <Stack.Screen
      options={{
        headerShown: false
      }}
      name="SignIn" component={SignIn} />

    <Stack.Screen
      options={{
        headerShown: false
      }}
      name="Feed" component={Feed} />
    </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Routes