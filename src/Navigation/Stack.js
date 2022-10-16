import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Initial from '../screens/Initial'
import Menu from '../screens/Menu'
import FirstAccess from "../components/FirstAccess";
import FirstAccessConcluded from '../components/FirstAccessConcluded'
import Welcome from "../components/Welcome";

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Menu"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Initial" component={Initial}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="FirstAccess" component={FirstAccess}/>
        <Stack.Screen name="FirstAccessConcluded" component={FirstAccessConcluded}/>
        <Stack.Screen name="Menu" component={Menu}/>
    </Stack.Navigator>
)