import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Initial from '../screens/Initial'
import Menu from '../screens/Menu'
import FirstAccess from "../components/Auth/FirstAccess";
import FirstAccessConcluded from '../components/Auth/FirstAccessConcluded'
import Welcome from "../components/Auth/Welcome";
import PetList from '../components/Listing/PetList'
import PetRegister from '../components/Registers/PetRegister'
import BoxRegister from '../components/Registers/BoxRegister'
import TripRegister from '../components/Registers/TripRegister'
import LocationPet from "../components/Monitors/LocationPet";
import BoxType from "../components/Registers/BoxTypeRegister";
import PetState from '../components/Monitors/PetState'
import Footer from "../components/Parts/Footer";
import Pet from "../components/Listing/Pet";

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Initial"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Initial" component={Initial}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="FirstAccess" component={FirstAccess}/>
        <Stack.Screen name="FirstAccessConcluded" component={FirstAccessConcluded}/>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="PetList" component={PetList} />
        <Stack.Screen name="PetRegister" component={PetRegister} />
        <Stack.Screen name="BoxRegister" component={BoxRegister}/>
        <Stack.Screen name="TripRegister" component={TripRegister}/>
        <Stack.Screen name="LocationPet" component={LocationPet}/>
        <Stack.Screen name="BoxType" component={BoxType} />
        <Stack.Screen name="PetState" component={PetState}/>
        <Stack.Screen name="Pet" component={Pet}/>
        <Stack.Screen name="Footer" component={Footer} />
    </Stack.Navigator>
)