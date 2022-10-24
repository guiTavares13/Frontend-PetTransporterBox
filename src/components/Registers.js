import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";

import petRegistery from '../assets/icons/petRegistery.png'
import travelCreatePet from '../assets/icons/travelCreatePet.png'
import petboxIcon from '../assets/icons/petbox-icon.png'

export default props => {
    return(
        <SafeAreaView>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttom} onPress={() => props.navigation.navigate('PetRegister', {...props})}>
                    <Image style={{width:150, height:150}} source={petRegistery}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttom} onPress={() => props.navigation.navigate('TripRegister', {...props})}>
                    <Image style={{width:120, height:120}} source={travelCreatePet}/>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttom} onPress={() => props.navigation.navigate('BoxRegister', {...props})}>
                        <Image style={{width:130, height:130}} source={petboxIcon}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 15
    }, 
    buttom: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#F5FAF7',
        borderRadius: 10,
        width: 160,
        height: 160,
    }
})