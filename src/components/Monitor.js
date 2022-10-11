import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";

import location from '../assets/icons/location.png'
import logoTravel from '../assets/icons/img_pet_icon.png'
import calor from '../assets/icons/calor.png'

export default function Monitor() {
    return(
        <SafeAreaView>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttom}>
                    <Image style={{width:150, height:150}} source={location}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttom}>
                    <Image style={{width:150, height:150}} source={logoTravel}/>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttom}>
                    <Image style={{width:150, height:150}} source={calor}/>
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
        alignItems: 'stretch',
        paddingTop: 80,
        margin: 20
    }, 
    buttom: {
        backgroundColor: '#F5FAF7',
        borderRadius: 10,
        marginHorizontal: 10,
        padding: 10
        
    }
})
