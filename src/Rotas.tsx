import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createNativeStackNavigator();

import Login from "./Login";
import Tabs from "./Tabs";

export default function Rotas(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Login" component={Login as React.FC} options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Tabs" component={Tabs as React.FC} options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}