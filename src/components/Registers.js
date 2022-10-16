import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";

import petRegistery from '../assets/icons/petRegistery.png.png'
import travelCreatePet from '../assets/icons/travelCreatePet.png'

export default function Register() {
    return(
        <SafeAreaView>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttom}>
                    <Image style={{width:150, height:150}} source={petRegistery}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttom}>
                    <Image style={{width:120, height:120}} source={travelCreatePet}/>
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