import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createNativeStackNavigator();

import Login from "./screens/Login";
import Tabs from "./Tabs";
import Exercise from "./screens/Exercise";
import Signup from "./screens/Signup";

export default function Routes(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Login" component={Login as React.FC} options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Tabs" component={Tabs as React.FC} options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Exercise" component={Exercise as React.FC} options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Signup" component={Signup as React.FC} options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}