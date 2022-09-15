import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Initial from '../screens/Initial'
import Menu from '../screens/Menu'
import FirstAccessConcluded from '../components/FirstAccessConcluded'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Initial"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Initial" component={Initial}/>
        <Stack.Screen name="FirstAccessConcluded" component={FirstAccessConcluded}/>
        <Stack.Screen name="Menu" component={Menu}/>
    </Stack.Navigator>
)